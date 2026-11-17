export const wesleyTravels = {
  title: "Les Voyages de John Wesley",
  subtitle: "400 000 km parcourus principalement à cheval — l'équivalent de 10 fois le tour de la Terre. Wesley n'avait pas de cathédrale : la Grande-Bretagne entière était sa paroisse.",
  statistics: [
    { value: "400 000", unit: "km", label: "Parcourus en 50 ans", icon: "🐎" },
    { value: "8 000", unit: "km/an", label: "En moyenne par an", icon: "📅" },
    { value: "40 000+", unit: "sermons", label: "Prêchés en plein air", icon: "🗣️" },
    { value: "88", unit: "ans", label: "Âge à la mort — actif jusqu'au bout", icon: "✝️" }
  ],
  regions: [
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
      region: "Amérique (Géorgia)",
      emoji: "🇺🇸",
      color: "from-red-600 to-rose-800",
      visits: "Mission 1735–1738 — échec pastoral, révélation spirituelle",
      places: [
        { name: "Savannah (Géorgie)", lat: "32.08", lon: "-81.1", note: "Base de la mission américaine de Wesley (1736-1737). Pasteur d'une paroisse coloniale. Mission difficile, relations compliquées." },
        { name: "Frederica (Géorgie)", lat: "31.23", lon: "-81.39", note: "Lieu d'un violent conflit pastoral qui précipita le départ de Wesley. Il rentre en Angleterre convaincu qu'il n'a pas encore trouvé la vraie foi." }
      ]
    }
  ],
  journal: {
    label: "📔 Journal de John Wesley",
    quote: "\"À 4h du matin, me suis mis en route pour Epworth. À 6h, j'ai prêché dans un champ à environ 200 personnes malgré le vent et la pluie. À 10h, arrivé à Newcastle où j'ai prêché à nouveau. À 3h de l'après-midi, à cheval vers Durham...\"",
    attribution: "— Extrait typique du journal de Wesley, juillet 1757"
  }
};
