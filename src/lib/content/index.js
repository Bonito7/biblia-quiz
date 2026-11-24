import { useEffect, useState } from "react";
import { DEFAULT_LANG } from "@/lib/i18n";

// Les fichiers de contenu traduit sont générés par `scripts/translate-content.mjs`
// et stockés dans src/lib/content/. Le français reste la source embarquée.
//
// Contrat : chaque JSON reprend la forme du module de données français,
// c'est-à-dire un objet `{ nomExport: valeur }`.
//   questions/<langue>/<catégorie>.json → { ancien_testament: { debutant: [...] } }
//   pages/<langue>/<page>.json          → { periods: [...] }
const questionFiles = import.meta.glob("./questions/*/*.json");
const pageFiles = import.meta.glob("./pages/*/*.json");

// Les clés de import.meta.glob reprennent le sous-dossier écrit dans le glob
// (ex. `./questions/en/geographie.json`) : le préfixe doit être fourni.
async function loadFrom(registry, prefix, lang, name) {
  if (!lang || lang === DEFAULT_LANG) return null;
  const loader = registry[`./${prefix}/${lang}/${name}.json`];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default ?? mod;
  } catch {
    return null;
  }
}

/** Traductions des questions d'une catégorie (null si indisponible → repli français). */
export function loadQuestions(lang, categoryId) {
  return loadFrom(questionFiles, "questions", lang, categoryId);
}

/** Traductions d'un contenu de page (noms de Dieu, cartes, vie sociale, Wesley…). */
export function loadPageContent(lang, page) {
  return loadFrom(pageFiles, "pages", lang, page);
}

/**
 * Hook : charge le contenu traduit d'une catégorie de questions.
 * Retourne `null` tant que le chargement est en cours ou si la traduction
 * n'existe pas — l'appelant utilise alors la version française.
 */
export function useTranslatedQuestions(lang, categoryId) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!lang || lang === DEFAULT_LANG || !categoryId) {
      setContent(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    loadQuestions(lang, categoryId).then((data) => {
      if (cancelled) return;
      setContent(data);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [lang, categoryId]);

  return { content, loading };
}

/**
 * Hook : charge le contenu traduit d'une page.
 */
export function useTranslatedPage(lang, page) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!lang || lang === DEFAULT_LANG || !page) {
      setContent(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    loadPageContent(lang, page).then((data) => {
      if (cancelled) return;
      setContent(data);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [lang, page]);

  return { content, loading };
}
