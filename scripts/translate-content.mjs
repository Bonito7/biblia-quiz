#!/usr/bin/env node
/**
 * Traduit le contenu de l'application (questions de quiz + fiches de pages)
 * depuis le français vers les langues cibles, et écrit des fichiers JSON
 * dans src/lib/content/.
 *
 *   node scripts/translate-content.mjs --lang en
 *   node scripts/translate-content.mjs --lang all --only questions
 *
 * Options :
 *   --lang <code|all>   langue cible (défaut : all)
 *   --only <unit>       "questions" | "pages" | "all" (défaut : all)
 *   --limit <n>         nombre max de fichiers à traiter par langue
 *   --concurrency <n>   requêtes simultanées (défaut : 6)
 *
 * Le script est REPRENABLE : chaque traduction est mise en cache dans
 * scripts/.translation-cache.json, un appel déjà effectué n'est pas refait.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "src/lib/data");
const OUT_DIR = path.join(ROOT, "src/lib/content");
const CACHE_FILE = path.join(__dirname, ".translation-cache.json");

const TARGETS = ["en", "es", "pt", "ru", "zh", "hi", "sw"];

// Codes cibles attendus par les services de traduction.
const TL = {
  en: "en",
  es: "es",
  pt: "pt",
  ru: "ru",
  zh: "zh-CN",
  hi: "hi",
  sw: "sw",
};

// Clés dont la valeur ne doit JAMAIS être traduite (noms propres, code, etc.)
const SKIP_KEYS = new Set([
  "hebrew",
  "image",
  "url",
  "lat",
  "lon",
  "emoji",
  "color",
  "id",
  "correct",
  "icon",
  "provider",
]);

// ---------------------------------------------------------------- arguments
const args = process.argv.slice(2);
const argValue = (name, fallback = null) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const requestedLangs = argValue("lang", "all");
const langs = requestedLangs === "all" ? TARGETS : requestedLangs.split(",");
const only = argValue("only", "all");
const limit = Number(argValue("limit", "0")) || 0;
const concurrency = Number(argValue("concurrency", "6")) || 6;

// ------------------------------------------------------------------- cache
const cache = fs.existsSync(CACHE_FILE)
  ? JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))
  : {};

let cacheDirty = false;
function saveCache() {
  if (!cacheDirty) return;
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache));
  cacheDirty = false;
}

const cacheKey = (lang, text) => `${lang}::${text}`;

// ------------------------------------------------------------- service MT
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let quotaExhausted = false;
let consecutiveFailures = 0;
const MAX_CONSECUTIVE_FAILURES = 20;

/** Découpe un texte long en fragments traduisibles (<= MAX_CHUNK caractères). */
const MAX_CHUNK = 450;

function splitForTranslation(text) {
  if (text.length <= MAX_CHUNK) return [text];
  const sentences = text.split(/(?<=[.!?…:])\s+/);
  const chunks = [];
  let current = "";
  for (const sentence of sentences) {
    if ((current + " " + sentence).trim().length > MAX_CHUNK && current) {
      chunks.push(current);
      current = sentence;
    } else {
      current = current ? `${current} ${sentence}` : sentence;
    }
    // Phrase unique plus longue que la limite : coupe brutale
    while (current.length > MAX_CHUNK) {
      chunks.push(current.slice(0, MAX_CHUNK));
      current = current.slice(MAX_CHUNK);
    }
  }
  if (current.trim()) chunks.push(current);
  return chunks;
}

/** Détecte les réponses MT corrompues (entités, avertissements, texte vide). */
function isValidTranslation(translated, source) {
  if (!translated || !translated.trim()) return false;
  if (/<ex\s|<\/ex|MYMEMORY WARNING/i.test(translated)) return false;
  // Une traduction qui ne contient aucun caractère alphabétique est suspecte
  // (symboles seuls) — sauf si la source n'en contient pas non plus.
  const hasLetters = /[\p{L}]/u.test(translated);
  const sourceHasLetters = /[\p{L}]/u.test(source);
  if (sourceHasLetters && !hasLetters) return false;
  return true;
}

async function translateWithGoogle(text, lang) {
  const tl = TL[lang] || lang;
  const errors = [];

  // Endpoint "dict-chrome-ex" : plus tolérant que translate_a/single.
  const urls = [
    `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=fr&tl=${encodeURIComponent(tl)}&q=${encodeURIComponent(text)}`,
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${encodeURIComponent(tl)}&dt=t&q=${encodeURIComponent(text)}`,
  ];

  for (const raw of urls) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(raw, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        errors.push(`HTTP ${res.status}`);
        continue;
      }
      const json = await res.json();
      // Format plat ["texte"] (dict-chrome-ex) ou imbriqué [[["texte", ...]]].
      const flat = Array.isArray(json) && typeof json[0] === "string";
      const nested = Array.isArray(json?.[0]) && Array.isArray(json[0][0]);
      const translated = flat
        ? json.join("")
        : nested
          ? json[0].map((part) => part?.[0]).join("")
          : null;
      if (!translated) {
        errors.push("réponse vide");
        continue;
      }
      return translated;
    } catch (err) {
      clearTimeout(timer);
      errors.push(err.name === "AbortError" ? "timeout" : err.message);
    }
  }
  throw new Error(errors.join(" / "));
}

async function translateWithMyMemory(text, lang) {
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", text.slice(0, 480));
  url.searchParams.set("langpair", `fr|${TL[lang] || lang}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" }, signal: controller.signal });
    const json = await res.json();
    if (json.quotaFinished || json.responseStatus === 429) {
      quotaExhausted = true;
      return null;
    }
    const translated = json?.responseData?.translatedText;
    if (!translated || /MYMEMORY WARNING/i.test(translated)) return null;
    return translated;
  } finally {
    clearTimeout(timer);
  }
}

async function translateText(text, lang) {
  const key = cacheKey(lang, text);
  if (cache[key]) return cache[key];
  if (quotaExhausted) return null;

  const chunks = splitForTranslation(text);
  const parts = [];

  for (const chunk of chunks) {
    let translated = null;
    for (let attempt = 1; attempt <= 3 && translated === null; attempt++) {
      try {
        const candidate = await translateWithGoogle(chunk, lang);
        if (isValidTranslation(candidate, chunk)) translated = candidate;
      } catch {
        // 429 / blocage temporaire : on patiente avant de réessayer
        await sleep(700 * attempt * attempt);
      }
    }

    if (translated === null) {
      // Repli sur MyMemory si Google échoue
      try {
        const candidate = await translateWithMyMemory(chunk, lang);
        if (candidate && isValidTranslation(candidate, chunk)) translated = candidate;
      } catch {
        /* ignoré */
      }
    }

    if (translated === null) {
      // On conserve le texte source : quelques chaînes restent en français
      // plutôt que de perdre toute la traduction du fichier.
      consecutiveFailures++;
      parts.push(chunk);
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        console.warn("\n  ! trop d'échecs consécutifs — arrêt du fichier (repris au prochain lancement)");
        return null;
      }
      continue;
    }
    consecutiveFailures = 0;
    parts.push(translated);
  }

  const result = parts.join(" ");
  cache[key] = result;
  cacheDirty = true;
  return result;
}

// --------------------------------------------------------------- parcours
function collectStrings(node, pathParts = [], out = []) {
  if (typeof node === "string") {
    const lastKey = pathParts[pathParts.length - 1];
    if (lastKey && SKIP_KEYS.has(lastKey)) return out;
    if (!node.trim()) return out;
    out.push({ path: pathParts, text: node });
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => collectStrings(item, [...pathParts, i], out));
    return out;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) collectStrings(v, [...pathParts, k], out);
  }
  return out;
}

function setAtPath(target, pathParts, value) {
  let cursor = target;
  for (let i = 0; i < pathParts.length - 1; i++) cursor = cursor[pathParts[i]];
  cursor[pathParts[pathParts.length - 1]] = value;
}

function clone(node) {
  return JSON.parse(JSON.stringify(node));
}

/** Traduit toutes les chaînes d'un objet, en parallèle. */
async function translateTree(node, lang) {
  const entries = collectStrings(node);
  const result = clone(node);
  const queue = [];

  // Les traductions déjà en cache sont appliquées immédiatement.
  for (const entry of entries) {
    const cached = cache[cacheKey(lang, entry.text)];
    if (cached) {
      setAtPath(result, entry.path, cached);
    } else {
      queue.push(entry);
    }
  }

  let done = 0;
  let failed = false;

  const worker = async () => {
    while (queue.length && !failed) {
      const entry = queue.shift();
      const translated = await translateText(entry.text, lang);
      if (translated === null) {
        failed = true;
        return;
      }
      setAtPath(result, entry.path, translated);
      done++;
    }
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, Math.max(queue.length, 1)) }, worker));
  saveCache();
  return { ok: !failed, done, total: entries.length, result: failed ? null : result };
}

// --------------------------------------------------------------- sources
const QUESTION_FILES = [
  "ancien_testament",
  "nouveau_testament",
  "personnages",
  "versets",
  "propheties",
  "geographie",
  "chronologie",
];

const PAGE_FILES = [
  "bibleMaps",
  "nomsDeDieu",
  "vieSociale",
  "wesleyJohn",
  "wesleyCharles",
  "wesleyParents",
  "wesleySermons",
  "wesleyTravels",
];

async function loadSources(names) {
  const out = [];
  for (const name of names) {
    const file = path.join(DATA_DIR, `${name}.js`);
    if (!fs.existsSync(file)) {
      console.warn(`  ! ${name}.js introuvable — ignoré`);
      continue;
    }
    const mod = await import(`file://${file}`);
    // Un module peut exposer plusieurs exports : tous sont traduits, et le
    // JSON généré reprend la même forme ({ nomExport: valeur }).
    const data = {};
    for (const [key, value] of Object.entries(mod)) {
      if (key === "default") continue;
      data[key] = value;
    }
    out.push({ name, data });
  }
  return out;
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

// ------------------------------------------------------------------ main
async function main() {
  const jobs = [];
  if (only === "all" || only === "questions") {
    jobs.push({ unit: "questions", dir: "questions", sources: await loadSources(QUESTION_FILES) });
  }
  if (only === "all" || only === "pages") {
    jobs.push({ unit: "pages", dir: "pages", sources: await loadSources(PAGE_FILES) });
  }

  const started = Date.now();

  for (const lang of langs) {
    console.log(`\n=== ${lang} ===`);
    for (const job of jobs) {
      let processed = 0;
      for (const source of job.sources) {
        if (limit && processed >= limit) break;
        const outFile = path.join(OUT_DIR, job.dir, lang, `${source.name}.json`);
        if (fs.existsSync(outFile)) {
          console.log(`  · ${source.name} — déjà traduit`);
          processed++;
          continue;
        }
        const t0 = Date.now();
        const { ok, done, total, result } = await translateTree(source.data, lang);
        if (!ok) {
          console.warn(`  ! ${source.name} interrompu (${done}/${total}) — repris au prochain lancement`);
          processed++;
          continue;
        }
        writeJson(outFile, result);
        console.log(`  ✓ ${source.name} — ${total} chaînes en ${((Date.now() - t0) / 1000).toFixed(1)}s`);
        processed++;
        if (quotaExhausted) break;
      }
      if (quotaExhausted) break;
    }
    if (quotaExhausted) break;
  }

  saveCache();
  console.log(`\nTerminé en ${((Date.now() - started) / 1000).toFixed(0)}s.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
