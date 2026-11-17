export { LANGUAGES, DEFAULT_LANG, STORAGE_KEY, findLanguage, getDir, getLocale } from "./languages";
export { LanguageProvider, useTranslation } from "./LanguageContext";
export { translate } from "./translate";
export { dictionaries } from "./dictionaries";

// Rétrocompatibilité : ancien appel `t(lang, key)` utilisé par les modules
// existants avant la refonte.
import { translate } from "./translate";
export function t(lang, key, vars) {
  return translate(lang, key, vars);
}
