import { DEFAULT_LANG } from "./languages";
import { dictionaries } from "./dictionaries";

function resolve(dictionary, path) {
  if (!dictionary) return undefined;
  return path.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), dictionary);
}

/**
 * Traduit une clé "module.sousModule.cle" pour la langue demandée.
 * Repli automatique sur le français, puis sur la clé brute si absente.
 */
export function translate(lang, key, vars) {
  const primary = dictionaries[lang];
  const fallback = dictionaries[DEFAULT_LANG];

  let value = resolve(primary, key);
  if (value === undefined) value = resolve(fallback, key);
  if (value === undefined) return key;
  if (typeof value !== "string") return value;

  if (!vars) return value;
  return value.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match,
  );
}
