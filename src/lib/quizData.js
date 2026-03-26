export const categories = [
  {
    id: "ancien_testament",
    name: "Ancien Testament",
    description: "Genèse, Exode, Psaumes et plus encore",
    icon: "ScrollText",
    color: "from-amber-500 to-orange-600",
    questionsCount: 10
  },
  {
    id: "nouveau_testament",
    name: "Nouveau Testament",
    description: "Évangiles, Actes et Épîtres",
    icon: "BookOpen",
    color: "from-blue-500 to-indigo-600",
    questionsCount: 10
  },
  {
    id: "personnages",
    name: "Personnages Bibliques",
    description: "Prophètes, rois et apôtres",
    icon: "Users",
    color: "from-emerald-500 to-teal-600",
    questionsCount: 10
  },
  {
    id: "versets",
    name: "Versets Célèbres",
    description: "Les passages les plus connus",
    icon: "Quote",
    color: "from-purple-500 to-violet-600",
    questionsCount: 10
  }
];

export const questions = {
  ancien_testament: [
    {
      question: "Quel est le premier livre de la Bible ?",
      options: ["Exode", "Genèse", "Lévitique", "Nombres"],
      correct: 1,
      explanation: "La Genèse est le premier livre de la Bible, signifiant 'commencement'."
    },
    {
      question: "Combien de jours Dieu a-t-il pris pour créer le monde ?",
      options: ["5 jours", "6 jours", "7 jours", "10 jours"],
      correct: 1,
      explanation: "Dieu a créé le monde en 6 jours et s'est reposé le 7ème jour."
    },
    {
      question: "Qui a construit l'arche selon l'ordre de Dieu ?",
      options: ["Abraham", "Moïse", "Noé", "David"],
      correct: 2,
      explanation: "Noé a construit l'arche pour survivre au déluge (Genèse 6-9)."
    },
    {
      question: "Quel fleuve Moïse a-t-il traversé avec le peuple d'Israël ?",
      options: ["Le Nil", "Le Jourdain", "La Mer Rouge", "L'Euphrate"],
      correct: 2,
      explanation: "Moïse a ouvert la Mer Rouge pour permettre au peuple d'Israël de fuir l'Égypte."
    },
    {
      question: "Combien de plaies Dieu a-t-il envoyées sur l'Égypte ?",
      options: ["7", "8", "10", "12"],
      correct: 2,
      explanation: "Dieu a envoyé 10 plaies sur l'Égypte (Exode 7-12)."
    },
    {
      question: "Qui a reçu les Dix Commandements sur le Mont Sinaï ?",
      options: ["Abraham", "Moïse", "Aaron", "Josué"],
      correct: 1,
      explanation: "Moïse a reçu les Dix Commandements de Dieu sur le Mont Sinaï."
    },
    {
      question: "Quel roi d'Israël a écrit la plupart des Psaumes ?",
      options: ["Salomon", "Saül", "David", "Ézéchias"],
      correct: 2,
      explanation: "Le roi David est l'auteur principal des Psaumes."
    },
    {
      question: "Qui a été avalé par un grand poisson ?",
      options: ["Jonas", "Élie", "Élisée", "Amos"],
      correct: 0,
      explanation: "Jonas a été avalé par un grand poisson après avoir fui la mission de Dieu."
    },
    {
      question: "Quel arbre portait le fruit défendu dans le Jardin d'Éden ?",
      options: ["L'arbre de vie", "L'arbre de la connaissance du bien et du mal", "Le figuier", "L'olivier"],
      correct: 1,
      explanation: "L'arbre de la connaissance du bien et du mal portait le fruit défendu (Genèse 2:17)."
    },
    {
      question: "Qui était la femme d'Abraham ?",
      options: ["Rachel", "Sara", "Rébecca", "Léa"],
      correct: 1,
      explanation: "Sara (Saraï) était la femme d'Abraham (Genèse 17:15)."
    }
  ],
  nouveau_testament: [
    {
      question: "Dans quelle ville Jésus est-il né ?",
      options: ["Nazareth", "Jérusalem", "Bethléem", "Capharnaüm"],
      correct: 2,
      explanation: "Jésus est né à Bethléem de Judée (Matthieu 2:1)."
    },
    {
      question: "Combien d'apôtres Jésus a-t-il choisis ?",
      options: ["7", "10", "12", "14"],
      correct: 2,
      explanation: "Jésus a choisi 12 apôtres (Matthieu 10:1-4)."
    },
    {
      question: "Quel apôtre a renié Jésus trois fois ?",
      options: ["Jean", "Pierre", "Jacques", "Thomas"],
      correct: 1,
      explanation: "Pierre a renié Jésus trois fois avant le chant du coq (Matthieu 26:34)."
    },
    {
      question: "Quel est le premier miracle de Jésus ?",
      options: ["Guérir un aveugle", "Marcher sur l'eau", "Changer l'eau en vin", "Multiplier les pains"],
      correct: 2,
      explanation: "Le premier miracle de Jésus fut de changer l'eau en vin aux noces de Cana (Jean 2:1-11)."
    },
    {
      question: "Qui a baptisé Jésus ?",
      options: ["Pierre", "Jean-Baptiste", "André", "Paul"],
      correct: 1,
      explanation: "Jean-Baptiste a baptisé Jésus dans le Jourdain (Matthieu 3:13-17)."
    },
    {
      question: "Combien de jours Jésus a-t-il passé dans le désert ?",
      options: ["7 jours", "30 jours", "40 jours", "50 jours"],
      correct: 2,
      explanation: "Jésus a passé 40 jours et 40 nuits dans le désert (Matthieu 4:2)."
    },
    {
      question: "Quel apôtre était un collecteur d'impôts ?",
      options: ["Pierre", "Matthieu", "Jean", "Philippe"],
      correct: 1,
      explanation: "Matthieu (Lévi) était collecteur d'impôts avant de suivre Jésus (Matthieu 9:9)."
    },
    {
      question: "Sur quelle montagne Jésus a-t-il été transfiguré ?",
      options: ["Mont des Oliviers", "Mont Sinaï", "Mont Thabor", "Mont Hermon"],
      correct: 2,
      explanation: "La tradition situe la Transfiguration sur le Mont Thabor."
    },
    {
      question: "Qui a écrit le plus d'épîtres du Nouveau Testament ?",
      options: ["Pierre", "Jean", "Paul", "Jacques"],
      correct: 2,
      explanation: "L'apôtre Paul a écrit 13 épîtres du Nouveau Testament."
    },
    {
      question: "Quel est le dernier livre du Nouveau Testament ?",
      options: ["Jude", "Hébreux", "Apocalypse", "3 Jean"],
      correct: 2,
      explanation: "L'Apocalypse (Révélation) est le dernier livre du Nouveau Testament."
    }
  ],
  personnages: [
    {
      question: "Qui a tué le géant Goliath ?",
      options: ["Saül", "Jonathan", "David", "Samson"],
      correct: 2,
      explanation: "Le jeune David a tué Goliath avec une fronde et une pierre (1 Samuel 17)."
    },
    {
      question: "Quel prophète a été enlevé au ciel dans un char de feu ?",
      options: ["Élie", "Élisée", "Isaïe", "Ézéchiel"],
      correct: 0,
      explanation: "Élie a été enlevé au ciel dans un char de feu (2 Rois 2:11)."
    },
    {
      question: "Qui a été jeté dans la fosse aux lions ?",
      options: ["Jérémie", "Daniel", "Ézéchiel", "Osée"],
      correct: 1,
      explanation: "Daniel a été jeté dans la fosse aux lions mais Dieu l'a protégé (Daniel 6)."
    },
    {
      question: "Quel roi était connu pour sa grande sagesse ?",
      options: ["David", "Salomon", "Ézéchias", "Josias"],
      correct: 1,
      explanation: "Le roi Salomon était réputé pour sa sagesse extraordinaire (1 Rois 3:12)."
    },
    {
      question: "Qui a trahi Jésus pour 30 pièces d'argent ?",
      options: ["Pierre", "Thomas", "Judas Iscariot", "Matthieu"],
      correct: 2,
      explanation: "Judas Iscariot a trahi Jésus pour 30 pièces d'argent (Matthieu 26:15)."
    },
    {
      question: "Quelle femme a trouvé le tombeau de Jésus vide ?",
      options: ["Marie, mère de Jésus", "Marie-Madeleine", "Marthe", "Salomé"],
      correct: 1,
      explanation: "Marie-Madeleine fut la première à découvrir le tombeau vide (Jean 20:1)."
    },
    {
      question: "Qui était le frère de Moïse ?",
      options: ["Aaron", "Josué", "Caleb", "Éléazar"],
      correct: 0,
      explanation: "Aaron était le frère aîné de Moïse (Exode 7:7)."
    },
    {
      question: "Quel personnage biblique a vécu le plus longtemps ?",
      options: ["Adam", "Noé", "Mathusalem", "Hénoc"],
      correct: 2,
      explanation: "Mathusalem a vécu 969 ans, le plus longtemps dans la Bible (Genèse 5:27)."
    },
    {
      question: "Qui a interprété les rêves du Pharaon ?",
      options: ["Moïse", "Joseph", "Daniel", "Abraham"],
      correct: 1,
      explanation: "Joseph a interprété les rêves du Pharaon sur les 7 années d'abondance et de famine (Genèse 41)."
    },
    {
      question: "Quel apôtre est surnommé 'l'incrédule' ?",
      options: ["Pierre", "Jean", "Thomas", "André"],
      correct: 2,
      explanation: "Thomas a douté de la résurrection de Jésus jusqu'à le voir (Jean 20:24-29)."
    }
  ],
  versets: [
    {
      question: "'Au commencement, Dieu créa les cieux et la terre.' — Quel livre ?",
      options: ["Exode", "Genèse", "Jean", "Psaumes"],
      correct: 1,
      explanation: "Ce verset ouvre le livre de la Genèse (Genèse 1:1)."
    },
    {
      question: "'Car Dieu a tant aimé le monde...' — Quel chapitre et verset ?",
      options: ["Jean 1:1", "Jean 3:16", "Romains 8:28", "Psaume 23:1"],
      correct: 1,
      explanation: "Jean 3:16 est l'un des versets les plus connus de la Bible."
    },
    {
      question: "'L'Éternel est mon berger, je ne manquerai de rien.' — Quel Psaume ?",
      options: ["Psaume 1", "Psaume 19", "Psaume 23", "Psaume 91"],
      correct: 2,
      explanation: "Le Psaume 23, écrit par David, commence par ces mots célèbres."
    },
    {
      question: "'Je suis le chemin, la vérité et la vie.' — Qui a dit cela ?",
      options: ["Moïse", "Paul", "Pierre", "Jésus"],
      correct: 3,
      explanation: "Jésus a prononcé ces paroles dans Jean 14:6."
    },
    {
      question: "'Aime ton prochain comme toi-même.' — Où trouve-t-on ce commandement d'abord ?",
      options: ["Matthieu 22", "Lévitique 19", "Deutéronome 6", "Romains 13"],
      correct: 1,
      explanation: "Ce commandement apparaît d'abord dans Lévitique 19:18."
    },
    {
      question: "'En toutes choses, Dieu travaille pour le bien...' — Quelle référence ?",
      options: ["Philippiens 4:13", "Romains 8:28", "Jérémie 29:11", "Proverbes 3:5"],
      correct: 1,
      explanation: "Romains 8:28 : 'Toutes choses concourent au bien de ceux qui aiment Dieu.'"
    },
    {
      question: "'Car je connais les projets que j'ai formés sur vous...' — Quel prophète ?",
      options: ["Isaïe", "Ézéchiel", "Jérémie", "Osée"],
      correct: 2,
      explanation: "Jérémie 29:11 contient cette promesse de Dieu."
    },
    {
      question: "'Au commencement était la Parole...' — Quel Évangile ?",
      options: ["Matthieu", "Marc", "Luc", "Jean"],
      correct: 3,
      explanation: "L'Évangile de Jean s'ouvre avec 'Au commencement était la Parole' (Jean 1:1)."
    },
    {
      question: "'Je puis tout par celui qui me fortifie.' — Quelle épître ?",
      options: ["Romains", "Galates", "Philippiens", "Éphésiens"],
      correct: 2,
      explanation: "L'apôtre Paul écrit cela dans Philippiens 4:13."
    },
    {
      question: "'Confie-toi en l'Éternel de tout ton cœur.' — Quel livre ?",
      options: ["Psaumes", "Proverbes", "Ecclésiaste", "Cantique des Cantiques"],
      correct: 1,
      explanation: "Proverbes 3:5 : 'Confie-toi en l'Éternel de tout ton cœur.'"
    }
  ]
};