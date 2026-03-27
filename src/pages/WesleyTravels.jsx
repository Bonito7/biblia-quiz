import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const travels = [
  {
    region: "Angleterre du Nord",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    color: "from-blue-600 to-blue-800",
    visits: "Visité 40+ fois entre 1742 et 1790",
    places: [
      { name: "Newcastle-upon-Tyne", lat: "54.97", lon: "-1.61", note: "Première grande percée dans le Nord (1742). Wesley y fonde Orphan House — sa première grande institution de bienfaisance." },
      { name: "Leeds", lat: "53.8", lon: "-1.55", note: "Centre du Méthodisme industriel. Wesley y tient plusieurs conférences annuelles." },
      { name: "Bristol", lat: "51.45", lon: "-2.59", note: "Berceau du Méthodisme (1739). Première prédication en plein air à Kingswood. The New Room — la première chapelle méthodiste." },
      { name: "Epworth (Lincolnshire)", lat: "53.53", lon: "-0.81", note: "Ville natale de John et Charles. Wesley y prêche sur la tombe de son père après avoir été refusé dans l'église." }
    ]
  },
  {
    region: "Écosse & Irlande",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    color: "from-emerald-600 to-emerald-800",
    visits: "22 voyages en Écosse, 43 voyages en Irlande",
    places: [
      { name: "Édimbourg", lat: "55.95", lon: "-3.19", note: "Premier voyage en 1751. Wesley y prêche devant des milliers de personnes malgré l'hostilité initiale des Presbytériens." },
      { name: "Dublin", lat: "53.33", lon: "-6.25", note: "Centre du Méthodisme irlandais. Wesley y effectue 43 voyages — traversant la mer d'Irlande à 80 ans passés." },
      { name: "Cork", lat: "51.9", lon: "-8.47", note: "Scène des violentes émeutes anti-méthodistes de 1749. Wesley y revient courageusement l'année suivante." }
    ]
  },
  {
    region: "Cornouailles & Pays de Galles",
    emoji: "🌊",
    color: "from-cyan-600 to-sky-800",
    visits: "32 voyages en Cornouailles, principal terrain d'évangélisation",
    places: [
      { name: "Redruth (Cornouailles)", lat: "50.23", lon: "-5.23", note: "Capitale du Méthodisme cornouaillais. Des dizaines de milliers de mineurs convertis. Les sociétés méthodistes de Cornouailles sont parmi les plus solides." },
      { name: "St Ives", lat: "50.21", lon: "-5.48", note: "Première percée en Cornouailles (1743). Wesley descend dans les mines pour prêcher aux mineurs à la sortie du travail." },
      { name: "Cardiff", lat: "51.48", lon: "-3.18", note: "Porte d'entrée du Méthodisme au Pays de Galles, terrain difficile mais fertile." }
    ]
  },
  {
    region: "Amérique (Géorgie)",
    emoji: "🇺🇸",
    color: "from-red-600 to-rose-800",
    visits: "Mission 1735–1738 — échec pastoral, révélation spirituelle",
    places: [
      { name: "Savannah (Géorgie)", lat: "32.08", lon: "-81.1", note: "Base de la mission américaine de Wesley (1736-1737). Pasteur d'une paroisse coloniale. Mission difficile, relations compliquées." },
      { name: "Frederica (Géorgie)", lat: "31.23", lon: "-81.39", note: "Lieu d'un violent conflit pastoral qui précipita le départ de Wesley. Il rentre en Angleterre convaincu qu'il n'a pas encore trouvé la vraie foi." }
    ]
  }
];

const statistics = [
  { value: "400 000", unit: "km", label: "Parcourus en 50 ans", icon: "🐎" },
  { value: "8 000", unit: "km/an", label: "En moyenne par an", icon: "📅" },
  { value: "40 000+", unit: "sermons", label: "Prêchés en plein air", icon: "🗣️" },
  { value: "88", unit: "ans", label: "Âge à la mort — actif jusqu'au bout", icon: "✝️" }
];

export default function WesleyTravels() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🗺️</div>
        <h1 className="font-heading text-3xl font-bold mb-2">Les Voyages de John Wesley</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          400 000 km parcourus principalement à cheval — l'équivalent de 10 fois le tour de la Terre. 
          Wesley n'avait pas de cathédrale : la Grande-Bretagne entière était sa paroisse.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {statistics.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border/60 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs font-medium text-muted-foreground">{stat.unit}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {travels.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveRegion(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeRegion === i
                ? `bg-gradient-to-r ${t.color} text-white shadow`
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {t.emoji} {t.region}
          </button>
        ))}
      </div>

      <motion.div
        key={activeRegion}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={`bg-gradient-to-r ${travels[activeRegion].color} text-white rounded-2xl p-4 mb-4`}>
          <p className="text-sm font-medium">{travels[activeRegion].visits}</p>
        </div>

        <div className="space-y-3">
          {travels[activeRegion].places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border/60 rounded-xl p-4 flex gap-3"
            >
              <div className="flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{place.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{place.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Journal Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-card border border-border/60 rounded-2xl p-5"
      >
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">📔 Journal de John Wesley</p>
        <blockquote className="italic text-sm leading-relaxed text-foreground/80">
          "À 4h du matin, me suis mis en route pour Epworth. À 6h, j'ai prêché dans un champ 
          à environ 200 personnes malgré le vent et la pluie. À 10h, arrivé à Newcastle où 
          j'ai prêché à nouveau. À 3h de l'après-midi, à cheval vers Durham..."
        </blockquote>
        <p className="text-xs text-muted-foreground mt-2">— Extrait typique du journal de Wesley, juillet 1757</p>
      </motion.div>
    </div>
  );
}