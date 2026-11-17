// Vérifie la parité des structures de dictionnaires (développement uniquement).
import fr from "../src/lib/i18n/dictionaries/fr.js";

const langs = ["en", "es", "pt", "ru", "zh", "hi", "sw"];
const flat = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === "object" ? flat(v, p ? p + "." + k : k) : [[p ? p + "." + k : k, v]],
  );

const frMap = new Map(flat(fr));

for (const l of langs) {
  const mod = await import(`../src/lib/i18n/dictionaries/${l}.js`);
  const entries = flat(mod.default);
  const map = new Map(entries);
  const missing = [...frMap.keys()].filter((k) => !map.has(k));
  const extra = entries.map(([k]) => k).filter((k) => !frMap.has(k));
  const same = entries
    .filter(([k, v]) => frMap.has(k) && frMap.get(k) === v && typeof v === "string" && v.length > 3)
    .map(([k]) => k);
  console.log(
    l.padEnd(3),
    "missing:", String(missing.length).padEnd(3),
    JSON.stringify(missing.slice(0, 4)),
    "extra:", String(extra.length).padEnd(3),
    JSON.stringify(extra.slice(0, 4)),
    "identique-au-fr:", same.length,
  );
}
