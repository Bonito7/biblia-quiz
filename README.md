# Biblia-Quiz — Multilingue

Application de quiz bibliques disponible en **8 langues** : Français, English, Español,
Português, Русский, 中文, हिन्दी, Kiswahili.

---

## Architecture i18n

L'i18n repose sur 3 couches indépendantes :

### 1. Les chaînes d'interface — `src/lib/i18n/`

```
src/lib/i18n/
├── index.js             # API publique (LANGUAGES, t, useTranslation…)
├── languages.js         # métadonnées des langues (code, nom, drapeau, dir, locale)
├── LanguageContext.jsx  # provider React + hook useTranslation()
├── translate.js         # résolution des clés + interpolation {placeholders}
└── dictionaries/
    ├── index.js
    ├── fr.js            # dictionnaire maître (source de vérité)
    ├── en.js  es.js  pt.js  ru.js  zh.js  hi.js  sw.js
```

- Une clé de traduction est un chemin pointé : `nav.home`, `quiz.nextQuestion`,
  `results.veryGoodSub`…
- Le dictionnaire **français est la référence**. Toute autre langue doit avoir
  exactement la même structure.
- Résolution : langue courante → repli français → clé brute.
- Interpolation : `t("home.questionsCount", { count: 132 })` → `"132 questions"`.

**Utilisation dans un composant :**

```jsx
import { useTranslation } from "@/lib/i18n";

export default function MyPage() {
  const { t, lang, setLang, locale } = useTranslation();
  return <h1>{t("myPage.title")}</h1>;
}
```

La langue est persistée dans `localStorage` (`bibliaQuizLang`), synchronisée entre
onglets (événement `storage`), et appliquée au document via
`document.documentElement.lang` / `.dir` (support RTL anticipé).

**Sélecteur de langue :** `src/components/LanguageSwitcher.jsx`
- `variant="icon"` (compact, dans les headers)
- `variant="full"` (grille de choix, dans les Réglages)

### 2. Le contenu — `src/lib/data/` + `src/lib/content/`

Le contenu long (questions de quiz, fiches bibliques, prose de la section Wesley)
vit dans des modules de données **français** :

```
src/lib/data/
├── ancien_testament.js  nouveau_testament.js  personnages.js  versets.js
├── propheties.js  geographie.js  chronologie.js     ← questions de quiz (691)
├── bibleMaps.js  nomsDeDieu.js  vieSociale.js        ← contenu des pages
└── wesleyJohn.js  wesleyCharles.js  wesleyParents.js
    wesleySermons.js  wesleyTravels.js
```

Les versions traduites sont des fichiers JSON chargés à la demande :

```
src/lib/content/
├── questions/<langue>/<catégorie>.json
└── pages/<langue>/<page>.json
```

Le chargement passe par `src/lib/content/index.js` :

```jsx
import { useTranslatedPage, useTranslatedQuestions } from "@/lib/content";

const { lang } = useTranslation();
const { content } = useTranslatedPage(lang, "bibleMaps");
const periods = content || periodsFr;   // repli français si la traduction manque
```

Le français reste toujours la source embarquée : **une traduction manquante ou
incomplète n'empêche jamais l'application de fonctionner**.

### 3. Génération des traductions

```bash
npm run i18n:translate -- --lang all          # tout traduire
npm run i18n:translate -- --lang en           # une seule langue
npm run i18n:translate -- --lang sw --only pages
npm run i18n:check                           # vérifie la parité des dictionnaires
```

Le script `scripts/translate-content.mjs` :
- lit les modules français de `src/lib/data/`;
- traduit chaque chaîne (découpage automatique des textes longs) ;
- met en cache chaque traduction dans `scripts/.translation-cache.json` ;
- n'écrit un fichier JSON que si **toutes** ses chaînes sont traduites ;
- est **reprenable** : relancer la commande reprend où il s'était arrêté.

Options : `--lang <code|all>`, `--only <questions|pages|all>`, `--limit <n>`,
`--concurrency <n>`.

---

## Ajouter une langue

1. Ajouter l'entrée dans `src/lib/i18n/languages.js` (code, nom, drapeau, `dir`, `locale`).
2. Copier `src/lib/i18n/dictionaries/fr.js` vers `src/lib/i18n/dictionaries/<code>.js`
   et traduire les valeurs.
3. Importer le dictionnaire dans `src/lib/i18n/dictionaries/index.js`.
4. Lancer `npm run i18n:translate -- --lang <code>` pour le contenu.
5. Vérifier avec `npm run i18n:check`.

---

## Notes

- La clé de stockage `bibliaQuizLang` est conservée : le choix de langue des
  utilisateurs existants est conservé.
- Les scores enregistrés en localStorage conservent l'identifiant de catégorie et
  la langue, ce qui permet d'afficher les intitulés dans la langue courante.
- `src/lib/data/` fait désormais référence au contenu **français** : c'est la source
  de vérité des traductions automatiques.
