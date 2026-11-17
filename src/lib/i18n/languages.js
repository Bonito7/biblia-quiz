// Langues supportées par la plateforme.
// `code` correspond au code ISO 639-1 utilisé pour les URL, le stockage local
// et les dictionnaires de traduction (src/lib/i18n/dictionaries/<code>.js).
export const LANGUAGES = [
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr", locale: "fr-FR" },
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr", locale: "en-GB" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr", locale: "es-ES" },
  { code: "pt", name: "Português", flag: "🇵🇹", dir: "ltr", locale: "pt-PT" },
  { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr", locale: "ru-RU" },
  { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr", locale: "zh-CN" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", dir: "ltr", locale: "hi-IN" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪", dir: "ltr", locale: "sw-KE" },
];

export const DEFAULT_LANG = "fr";

// Clé de persistance (conservée pour ne pas perdre le choix des
// utilisateurs existants).
export const STORAGE_KEY = "bibliaQuizLang";

export function findLanguage(code) {
  return LANGUAGES.find((l) => l.code === code) || null;
}

export function getDir(lang) {
  return findLanguage(lang)?.dir || "ltr";
}

export function getLocale(lang) {
  return findLanguage(lang)?.locale || "fr-FR";
}
