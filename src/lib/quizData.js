import { useMemo } from "react";
import { ancien_testament } from './data/ancien_testament';
import { nouveau_testament } from './data/nouveau_testament';
import { personnages } from './data/personnages';
import { versets } from './data/versets';
import { propheties } from './data/propheties';
import { geographie } from './data/geographie';
import { chronologie } from './data/chronologie';
import { useTranslation } from './i18n';

export const categories = [
  { id: "ancien_testament", name: "Ancien Testament", description: "Les récits fondateurs de la foi hébraïque", icon: "ScrollText", color: "from-amber-500 to-orange-600" },
  { id: "nouveau_testament", name: "Nouveau Testament", description: "La vie de Jésus et les écrits apostoliques", icon: "BookOpen", color: "from-blue-500 to-indigo-600" },
  { id: "personnages", name: "Personnages Bibliques", description: "Les grands héros et figures de la Bible", icon: "Users", color: "from-emerald-500 to-teal-600" },
  { id: "versets", name: "Versets & Citations", description: "Retrouvez les passages et citations célèbres", icon: "Quote", color: "from-purple-500 to-violet-600" },
  { id: "propheties", name: "Prophéties", description: "Les annonces et accomplissements prophétiques", icon: "Eye", color: "from-rose-500 to-pink-600" },
  { id: "geographie", name: "Géographie Biblique", description: "Les lieux saints et terres de la Bible", icon: "MapPin", color: "from-cyan-500 to-sky-600" },
  { id: "chronologie", name: "Chronologie", description: "L'histoire biblique dans l'ordre des temps", icon: "Clock", color: "from-indigo-500 to-purple-600" }
];

export const difficulties = [
  { id: "debutant", icon: "🌱", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  { id: "intermediaire", icon: "📖", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  { id: "expert", icon: "🔥", color: "text-red-600", bg: "bg-red-50 border-red-200" }
];

export const questions = {
  ancien_testament,
  nouveau_testament,
  personnages,
  versets,
  propheties,
  geographie,
  chronologie
};

/** Nombre de questions réelles par catégorie (les valeursWere statiques, on les recalcule). */
export function countQuestions(categoryId) {
  const levels = questions[categoryId] || {};
  return Object.values(levels).reduce((total, list) => total + (list?.length || 0), 0);
}

export const totalQuestions = categories.reduce((total, c) => total + countQuestions(c.id), 0);

/**
 * Catégories avec nom et description traduits.
 * Les clés de traduction sont `categories.<id>.name` / `.description`.
 */
export function useCategories() {
  const { t } = useTranslation();
  return useMemo(
    () =>
      categories.map((c) => ({
        ...c,
        name: t(`categories.${c.id}.name`),
        description: t(`categories.${c.id}.description`),
        questionsCount: countQuestions(c.id),
      })),
    [t],
  );
}
