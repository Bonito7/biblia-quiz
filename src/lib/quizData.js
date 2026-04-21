import { ancien_testament } from './data/ancien_testament';
import { nouveau_testament } from './data/nouveau_testament';
import { personnages } from './data/personnages';
import { versets } from './data/versets';
import { propheties } from './data/propheties';
import { geographie } from './data/geographie';
import { chronologie } from './data/chronologie';

export const categories = [
  { id: "ancien_testament", icon: "ScrollText", color: "from-amber-500 to-orange-600", questionsCount: 240 },
  { id: "nouveau_testament", icon: "BookOpen", color: "from-blue-500 to-indigo-600", questionsCount: 240 },
  { id: "personnages", icon: "Users", color: "from-emerald-500 to-teal-600", questionsCount: 240 },
  { id: "versets", icon: "Quote", color: "from-purple-500 to-violet-600", questionsCount: 240 },
  { id: "propheties", icon: "Eye", color: "from-rose-500 to-pink-600", questionsCount: 135 },
  { id: "geographie", icon: "MapPin", color: "from-cyan-500 to-sky-600", questionsCount: 135 },
  { id: "chronologie", icon: "Clock", color: "from-indigo-500 to-purple-600", questionsCount: 135 }
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