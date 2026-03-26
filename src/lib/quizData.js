import { ancien_testament } from './data/ancien_testament';
import { nouveau_testament } from './data/nouveau_testament';
import { personnages } from './data/personnages';
import { versets } from './data/versets';

export const categories = [
  {
    id: "ancien_testament",
    name: "Ancien Testament",
    description: "Genèse, Exode, Psaumes et plus encore",
    icon: "ScrollText",
    color: "from-amber-500 to-orange-600",
    questionsCount: 240
  },
  {
    id: "nouveau_testament",
    name: "Nouveau Testament",
    description: "Évangiles, Actes et Épîtres",
    icon: "BookOpen",
    color: "from-blue-500 to-indigo-600",
    questionsCount: 240
  },
  {
    id: "personnages",
    name: "Personnages Bibliques",
    description: "Prophètes, rois et apôtres",
    icon: "Users",
    color: "from-emerald-500 to-teal-600",
    questionsCount: 240
  },
  {
    id: "versets",
    name: "Versets Célèbres",
    description: "Les passages les plus connus",
    icon: "Quote",
    color: "from-purple-500 to-violet-600",
    questionsCount: 240
  }
];

export const difficulties = [
  { id: "debutant", label: "Débutant", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", icon: "🌱", description: "Questions fondamentales" },
  { id: "intermediaire", label: "Intermédiaire", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", icon: "📖", description: "Bonne connaissance requise" },
  { id: "expert", label: "Expert", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: "🔥", description: "Pour les érudits bibliques" }
];

export const questions = {
  ancien_testament,
  nouveau_testament,
  personnages,
  versets
};