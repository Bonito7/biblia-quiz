// Test de rendu : vérifie que chaque langue s'affiche correctement dans
// l'application. Exécution : `npx vite-node scripts/smoke-test.jsx`
import { renderToString } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Simule le DOM minimal avant l'import de l'application.
const store = new Map();
const localStorageMock = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  get key() { return 0; },
};
globalThis.localStorage = localStorageMock;
globalThis.window = {
  localStorage: localStorageMock,
  addEventListener() {},
  removeEventListener() {},
  matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  location: { search: "?category=ancien_testament&score=8&total=10&difficulty=debutant" },
};
globalThis.SVGElement = class SVGElement {};
globalThis.HTMLElement = class HTMLElement {};
globalThis.Element = class Element {};
globalThis.Node = class Node {};
globalThis.document = {
  documentElement: {
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  },
  createElement: () => ({ style: {}, setAttribute() {}, appendChild() {}, remove() {} }),
  createTextNode: () => ({ textContent: "" }),
  body: { appendChild() {} },
  head: { appendChild() {} },
  getElementsByTagName: () => [{ appendChild() {} }],
  addEventListener() {},
  removeEventListener() {},
};

const { LanguageProvider } = await import("../src/lib/i18n");
const { translate } = await import("../src/lib/i18n/translate");
const { AuthProvider } = await import("../src/lib/AuthContext");
const Layout = (await import("../src/components/Layout.jsx")).default;
const Home = (await import("../src/pages/Home.jsx")).default;
const Settings = (await import("../src/pages/Settings.jsx")).default;
const Results = (await import("../src/pages/Results.jsx")).default;

// Clés qui doivent être visibles dans les pages rendues ci-dessous.
const CHECKED_KEYS = [
  "nav.home",            // barre de navigation (Layout)
  "nav.tagline",         // en-tête (Layout)
  "home.badge",          // bandeau d'accueil
  "home.subtitle",       // accroche
  "home.statCategories", // statistiques
  "categories.ancien_testament.name",
  "settings.title",
  "settings.darkMode",
  "settings.languageSection",
  "results.correctAnswers",
  "results.total",
];

const LANGUAGES = ["fr", "en", "es", "pt", "ru", "zh", "hi", "sw"];
let failures = 0;

// React échappe certains caractères dans le HTML rendu.
const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

for (const lang of LANGUAGES) {
  store.set("bibliaQuizLang", lang);
  const html = renderToString(
    <LanguageProvider>
      <AuthProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
          <Settings />
          <Results />
        </MemoryRouter>
      </AuthProvider>
    </LanguageProvider>,
  );

  const missing = CHECKED_KEYS.filter((key) => !html.includes(escapeHtml(translate(lang, key))));
  if (missing.length) {
    failures++;
    console.log(`✗ ${lang} — absents du rendu : ${missing.join(", ")}`);
  } else {
    console.log(`✓ ${lang} — ${CHECKED_KEYS.length} chaînes vérifiées`);
  }
}

if (failures) {
  console.log(`\n${failures} langue(s) en échec`);
  process.exit(1);
}
console.log("\nToutes les langues rendent correctement.");
