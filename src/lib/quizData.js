import { ancien_testament } from './data/ancien_testament';
import { nouveau_testament } from './data/nouveau_testament';
import { personnages } from './data/personnages';
import { versets } from './data/versets';
import { propheties } from './data/propheties';
import { geographie } from './data/geographie';
import { chronologie } from './data/chronologie';

export const categories = [
  { id: "ancien_testament", name: "Ancien Testament", description: "Les récits fondateurs de la foi hébraïque", icon: "ScrollText", color: "from-amber-500 to-orange-600", questionsCount: 240 },
  { id: "nouveau_testament", name: "Nouveau Testament", description: "La vie de Jésus et les écrits apostoliques", icon: "BookOpen", color: "from-blue-500 to-indigo-600", questionsCount: 240 },
  { id: "personnages", name: "Personnages Bibliques", description: "Les grands héros et figures de la Bible", icon: "Users", color: "from-emerald-500 to-teal-600", questionsCount: 240 },
  { id: "versets", name: "Versets & Citations", description: "Retrouvez les passages et citations célèbres", icon: "Quote", color: "from-purple-500 to-violet-600", questionsCount: 240 },
  { id: "propheties", name: "Prophéties", description: "Les annonces et accomplissements prophétiques", icon: "Eye", color: "from-rose-500 to-pink-600", questionsCount: 135 },
  { id: "geographie", name: "Géographie Biblique", description: "Les lieux saints et terres de la Bible", icon: "MapPin", color: "from-cyan-500 to-sky-600", questionsCount: 135 },
  { id: "chronologie", name: "Chronologie", description: "L'histoire biblique dans l'ordre des temps", icon: "Clock", color: "from-indigo-500 to-purple-600", questionsCount: 135 }
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