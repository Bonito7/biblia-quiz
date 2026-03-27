import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";

const sermons = [
  {
    number: 1,
    title: "Salvation by Faith",
    fr: "Le Salut par la Foi",
    date: "1738",
    text: "Éphésiens 2:8",
    summary: "Premier sermon des 44 standards. Wesley établit que le salut est uniquement par grâce, reçu par la foi — non par les mérites, les œuvres ou la bonté naturelle de l'homme. Il distingue la foi morte (intellectuelle) de la foi vive (confiance du cœur). Ce sermon fut prêché à Oxford peu après l'expérience d'Aldersgate.",
    key_quote: "\"La foi qui justifie n'est pas une simple croyance intellectuelle mais une confiance pleine et vivante en Christ, en son sang, en ses mérites.\""
  },
  {
    number: 2,
    title: "The Almost Christian",
    fr: "Le Presque Chrétien",
    date: "1741",
    text: "Actes 26:28",
    summary: "L'un des sermons les plus pénétrants de Wesley. Il décrit deux catégories : le 'presque chrétien' (pratiquant extérieur, honnête, religieux, mais sans transformation intérieure) et le 'tout à fait chrétien' (amour de Dieu et du prochain dominant le cœur). Wesley a prêché ce sermon à Oxford en 1741, défiant ses propres collègues universitaires.",
    key_quote: "\"Je crains que beaucoup parmi ceux qui se disent chrétiens ne soient que des presque chrétiens — et qu'eux-mêmes ne le sachent pas.\""
  },
  {
    number: 5,
    title: "Justification by Faith",
    fr: "La Justification par la Foi",
    date: "1746",
    text: "Romains 4:5",
    summary: "Wesley clarifie la doctrine de la justification contre deux erreurs : ceux qui la nient (confondant justification et sanctification) et ceux qui en font tout (négligeant la croissance en sainteté). La justification est le pardon des péchés passés et la restauration de la faveur de Dieu — distincte mais inséparable de la nouvelle naissance.",
    key_quote: "\"Être justifié, c'est être pardonné — c'est que Dieu nous accepte comme si nous n'avions jamais péché.\""
  },
  {
    number: 9,
    title: "The Spirit of Bondage and of Adoption",
    fr: "L'Esprit de Servitude et d'Adoption",
    date: "1746",
    text: "Romains 8:15",
    summary: "Wesley décrit trois états spirituels : l'homme naturel (inconscient de son péché), l'homme sous la loi (convaincu de péché mais sans force pour se relever), et l'homme sous la grâce (libéré et adopté comme enfant de Dieu). Ce sermon est essentiel pour comprendre la progression spirituelle dans la théologie wesleyenne.",
    key_quote: "\"L'Esprit d'adoption crie en nous : Abba, Père ! — et cette assurance est le privilège de tout croyant né de nouveau.\""
  },
  {
    number: 13,
    title: "On Sin in Believers",
    fr: "Du Péché chez les Croyants",
    date: "1763",
    text: "2 Corinthiens 5:17",
    summary: "Wesley reconnaît honnêtement que le péché subsiste dans les croyants régénérés — mais en tant que résidu vaincu, non comme une puissance régnante. Ce sermon nuance sa doctrine de la perfection chrétienne : être né de nouveau ne signifie pas ne plus jamais pécher, mais ne plus être dominé par le péché.",
    key_quote: "\"Il y a encore un résidu de péché dans les meilleurs des croyants — mais ce résidu n'a plus de domination sur eux.\""
  },
  {
    number: 43,
    title: "The More Excellent Way",
    fr: "La Voie Supérieure",
    date: "1787",
    text: "1 Corinthiens 12:31",
    summary: "L'un des derniers grands sermons de Wesley (il avait 84 ans). Il compare deux façons de vivre : la voie ordinaire du chrétien moyen (éviter les péchés grossiers, pratiquer les devoirs de base) et la voie supérieure de l'amour parfait. Il exhorte chaque croyant à viser le sommet — non la médiocrité spirituelle.",
    key_quote: "\"Ne te contente pas de la voie ordinaire. La voie de l'amour parfait est ouverte à tous — pourquoi s'arrêter à mi-chemin ?\""
  },
  {
    number: 44,
    title: "The Use of Money",
    fr: "L'Usage de l'Argent",
    date: "1760",
    text: "Luc 16:9",
    summary: "Le sermon social le plus célèbre de Wesley, résumé en 3 règles : (1) Gagne tout ce que tu peux (par un travail honnête) ; (2) Économise tout ce que tu peux (pas de dépenses superflues) ; (3) Donne tout ce que tu peux (redistribue aux nécessiteux). Wesley lui-même vécut selon ce principe — il donna 90% de ses revenus.",
    key_quote: "\"Gagne tout ce que tu peux. Économise tout ce que tu peux. Donne tout ce que tu peux.\""
  }
];

export default function WesleySermons() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = sermons.filter(s =>
    s.fr.toLowerCase().includes(search.toLowerCase()) ||
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📖</div>
        <h1 className="font-heading text-3xl font-bold mb-2">Les Sermons de John Wesley</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Les 44 sermons standards — la base théologique officielle du Méthodisme mondial. 
          Wesley les publia comme base doctrinale pour former ses prédicateurs.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Chercher un sermon..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((sermon, i) => (
          <motion.div
            key={sermon.number}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <button
              onClick={() => setSelected(selected === sermon.number ? null : sermon.number)}
              className="w-full text-left bg-card border border-border/60 rounded-xl p-4 hover:border-amber-400/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {sermon.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm">{sermon.fr}</p>
                      <p className="text-xs text-muted-foreground italic">{sermon.title} · {sermon.text} · {sermon.date}</p>
                    </div>
                    <span className="text-muted-foreground flex-shrink-0">{selected === sermon.number ? '▲' : '▼'}</span>
                  </div>

                  {selected === sermon.number && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-border/50 space-y-3"
                    >
                      <p className="text-sm text-foreground/80 leading-relaxed">{sermon.summary}</p>
                      <blockquote className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 pl-3 p-3 rounded-r-lg">
                        <p className="text-xs italic text-amber-800 dark:text-amber-300">{sermon.key_quote}</p>
                      </blockquote>
                    </motion.div>
                  )}
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}