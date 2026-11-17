import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, LANGUAGES, STORAGE_KEY, findLanguage } from "./languages";
import { translate } from "./translate";

const LanguageContext = createContext(null);

function readStoredLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.some((l) => l.code === stored) ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage);

  // Synchronise l'attribut lang/dir du document (accessibilité + rendu RTL).
  useEffect(() => {
    const meta = findLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = meta?.dir || "ltr";
  }, [lang]);

  // Synchronise les onglets ouverts sur la même origine.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      const next = event.newValue;
      if (next && LANGUAGES.some((l) => l.code === next)) {
        setLangState((prev) => (prev !== next ? next : prev));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLang = useCallback((code) => {
    if (!LANGUAGES.some((l) => l.code === code)) return;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* stockage indisponible (mode privé) : on garde la langue en mémoire */
    }
    setLangState((prev) => (prev !== code ? code : prev));
  }, []);

  const value = useMemo(() => {
    const meta = findLanguage(lang);
    return {
      lang,
      setLang,
      dir: meta?.dir || "ltr",
      locale: meta?.locale || "fr-FR",
      languages: LANGUAGES,
      t: (key, vars) => translate(lang, key, vars),
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation doit être utilisé à l'intérieur d'un <LanguageProvider>.");
  }
  return ctx;
}
