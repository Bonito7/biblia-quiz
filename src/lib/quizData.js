export const categories = [
  {
    id: "ancien_testament",
    name: "Ancien Testament",
    description: "Genèse, Exode, Psaumes et plus encore",
    icon: "ScrollText",
    color: "from-amber-500 to-orange-600",
    questionsCount: 45
  },
  {
    id: "nouveau_testament",
    name: "Nouveau Testament",
    description: "Évangiles, Actes et Épîtres",
    icon: "BookOpen",
    color: "from-blue-500 to-indigo-600",
    questionsCount: 45
  },
  {
    id: "personnages",
    name: "Personnages Bibliques",
    description: "Prophètes, rois et apôtres",
    icon: "Users",
    color: "from-emerald-500 to-teal-600",
    questionsCount: 45
  },
  {
    id: "versets",
    name: "Versets Célèbres",
    description: "Les passages les plus connus",
    icon: "Quote",
    color: "from-purple-500 to-violet-600",
    questionsCount: 45
  }
];

export const difficulties = [
  { id: "debutant", label: "Débutant", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", icon: "🌱", description: "Questions fondamentales" },
  { id: "intermediaire", label: "Intermédiaire", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", icon: "📖", description: "Bonne connaissance requise" },
  { id: "expert", label: "Expert", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: "🔥", description: "Pour les érudits bibliques" }
];

export const questions = {
  ancien_testament: {
    debutant: [
      {
        question: "Quel est le premier livre de la Bible ?",
        options: ["Exode", "Genèse", "Lévitique", "Nombres"],
        correct: 1,
        explanation: "La Genèse est le premier livre de la Bible, signifiant 'commencement'."
      },
      {
        question: "Qui a construit l'arche pour survivre au déluge ?",
        options: ["Abraham", "Moïse", "Noé", "David"],
        correct: 2,
        explanation: "Noé a construit l'arche selon l'ordre de Dieu (Genèse 6-9)."
      },
      {
        question: "Combien de jours Dieu a-t-il pris pour créer le monde ?",
        options: ["5 jours", "6 jours", "7 jours", "10 jours"],
        correct: 1,
        explanation: "Dieu a créé le monde en 6 jours et s'est reposé le 7ème jour."
      },
      {
        question: "Qui a reçu les Dix Commandements sur le Mont Sinaï ?",
        options: ["Abraham", "Moïse", "Aaron", "Josué"],
        correct: 1,
        explanation: "Moïse a reçu les Dix Commandements de Dieu sur le Mont Sinaï (Exode 20)."
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
        explanation: "Jonas a été avalé par un grand poisson après avoir fui la mission de Dieu (Jonas 1:17)."
      },
      {
        question: "Qui était la femme d'Abraham ?",
        options: ["Rachel", "Sara", "Rébecca", "Léa"],
        correct: 1,
        explanation: "Sara était la femme d'Abraham (Genèse 17:15)."
      },
      {
        question: "Combien de plaies Dieu a-t-il envoyées sur l'Égypte ?",
        options: ["7", "8", "10", "12"],
        correct: 2,
        explanation: "Dieu a envoyé 10 plaies sur l'Égypte (Exode 7-12)."
      },
      {
        question: "Dans quel jardin Adam et Ève vivaient-ils ?",
        options: ["Jardin de Gethsémani", "Jardin d'Éden", "Jardin d'Abraham", "Jardin du Sinaï"],
        correct: 1,
        explanation: "Adam et Ève vivaient dans le Jardin d'Éden (Genèse 2)."
      },
      {
        question: "Quelle mer Moïse a-t-il traversée avec le peuple d'Israël ?",
        options: ["La mer Méditerranée", "La mer Morte", "La Mer Rouge", "La mer de Galilée"],
        correct: 2,
        explanation: "Moïse a ouvert la Mer Rouge pour permettre au peuple d'Israël de fuir l'Égypte (Exode 14)."
      },
      {
        question: "Quel est le nom du premier homme créé par Dieu ?",
        options: ["Noé", "Abel", "Adam", "Seth"],
        correct: 2,
        explanation: "Adam est le premier homme créé par Dieu (Genèse 2:7)."
      },
      {
        question: "Combien de fils Jacob avait-il ?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "Jacob avait 12 fils qui donnèrent naissance aux 12 tribus d'Israël (Genèse 35:22)."
      },
      {
        question: "Quel est le premier commandement des Dix Commandements ?",
        options: ["Tu ne tueras point", "Tu n'auras pas d'autres dieux devant moi", "Tu ne voleras point", "Honore ton père et ta mère"],
        correct: 1,
        explanation: "Le premier commandement interdit d'avoir d'autres dieux (Exode 20:3)."
      },
      {
        question: "Quel animal a parlé à Ève dans le jardin d'Éden ?",
        options: ["Un aigle", "Un lion", "Un serpent", "Un âne"],
        correct: 2,
        explanation: "Le serpent a tenté Ève en lui proposant de manger le fruit défendu (Genèse 3:1)."
      },
      {
        question: "Qui était le fils d'Abraham et de Sara ?",
        options: ["Ismaël", "Isaac", "Jacob", "Ésaü"],
        correct: 1,
        explanation: "Isaac était le fils miraculeux d'Abraham et Sara dans leur vieillesse (Genèse 21:3)."
      }
    ],
    intermediaire: [
      {
        question: "Quel livre de la Bible décrit la construction du Temple de Salomon ?",
        options: ["1 Samuel", "1 Rois", "1 Chroniques", "Esdras"],
        correct: 1,
        explanation: "La construction du Temple de Salomon est décrite dans 1 Rois 6-8."
      },
      {
        question: "Combien d'années les Israélites ont-ils erré dans le désert ?",
        options: ["20 ans", "30 ans", "40 ans", "50 ans"],
        correct: 2,
        explanation: "Les Israélites ont erré 40 ans dans le désert à cause de leur incrédulité (Nombres 14:33)."
      },
      {
        question: "Quel juge d'Israël avait une force surhumaine liée à ses cheveux ?",
        options: ["Gédéon", "Jephté", "Samson", "Déborah"],
        correct: 2,
        explanation: "Samson tirait sa force de ses cheveux non coupés (Juges 13-16)."
      },
      {
        question: "Quel prophète a affronté 450 prophètes de Baal sur le Mont Carmel ?",
        options: ["Élisée", "Élie", "Isaïe", "Jérémie"],
        correct: 1,
        explanation: "Élie a affronté les prophètes de Baal sur le Mont Carmel (1 Rois 18)."
      },
      {
        question: "Quelle est la signification du nom 'Bethel' donné par Jacob ?",
        options: ["Maison de paix", "Maison de Dieu", "Maison de prière", "Maison de gloire"],
        correct: 1,
        explanation: "Bethel signifie 'Maison de Dieu', nom donné par Jacob après sa vision de l'échelle (Genèse 28:19)."
      },
      {
        question: "Quel livre de la Bible contient la prophétie des 'ossements desséchés' qui revivent ?",
        options: ["Isaïe", "Jérémie", "Ézéchiel", "Daniel"],
        correct: 2,
        explanation: "La vision de la vallée des ossements desséchés se trouve dans Ézéchiel 37."
      },
      {
        question: "Contre quelle ville les Israélites ont-ils fait le tour 7 fois avant qu'elle s'effondre ?",
        options: ["Aï", "Jéricho", "Gabaon", "Hébron"],
        correct: 1,
        explanation: "Les murs de Jéricho s'effondrèrent après que les Israélites en firent le tour 7 fois (Josué 6)."
      },
      {
        question: "Quelle femme non-israélite dit à sa belle-mère 'Où tu iras, j'irai' ?",
        options: ["Orpa", "Ruth", "Tamar", "Rahab"],
        correct: 1,
        explanation: "Ruth a prononcé ces paroles à Naomi (Ruth 1:16)."
      },
      {
        question: "Quel roi de Babylone a interprété l'écriture sur le mur ?",
        options: ["Nabuchodonosor", "Belshatsar", "Cyrus", "Darius"],
        correct: 1,
        explanation: "Daniel a interprété l'écriture mystérieuse pendant le festin de Belshatsar (Daniel 5)."
      },
      {
        question: "Quel livre de la Bible est entièrement une lettre d'amour ou un poème de mariage ?",
        options: ["Psaumes", "Proverbes", "Ecclésiaste", "Cantique des Cantiques"],
        correct: 3,
        explanation: "Le Cantique des Cantiques est un poème d'amour attribué à Salomon."
      },
      {
        question: "Combien de chapitres contient le livre des Psaumes ?",
        options: ["100", "120", "150", "175"],
        correct: 2,
        explanation: "Le livre des Psaumes contient 150 psaumes."
      },
      {
        question: "Quel personnage a interprété les rêves du Pharaon d'Égypte ?",
        options: ["Moïse", "Joseph", "Daniel", "Abraham"],
        correct: 1,
        explanation: "Joseph a interprété les rêves du Pharaon sur 7 années d'abondance et de famine (Genèse 41)."
      },
      {
        question: "Dans quel pays Moïse est-il né ?",
        options: ["Canaan", "Israël", "Égypte", "Madian"],
        correct: 2,
        explanation: "Moïse est né en Égypte, où les Hébreux étaient en esclavage (Exode 2:1-2)."
      },
      {
        question: "Quelle était la profession d'Amos avant d'être prophète ?",
        options: ["Prêtre", "Berger et cultivateur de sycomores", "Scribe", "Soldat"],
        correct: 1,
        explanation: "Amos était berger et cultivateur de sycomores de Tekoa (Amos 1:1, 7:14)."
      },
      {
        question: "Quel est le dernier livre de l'Ancien Testament ?",
        options: ["Zacharie", "Aggée", "Malachie", "Joël"],
        correct: 2,
        explanation: "Le livre de Malachie est le dernier livre de l'Ancien Testament."
      }
    ],
    expert: [
      {
        question: "Quelle est la signification hébraïque du nom 'Yahvé' ?",
        options: ["Dieu puissant", "Je suis celui qui suis", "Seigneur des armées", "Dieu éternel"],
        correct: 1,
        explanation: "Yahvé vient du verbe hébreu 'être' et signifie 'Je suis celui qui suis' (Exode 3:14)."
      },
      {
        question: "Quel roi d'Israël a épousé Jézabel, entraînant Israël dans l'idolâtrie ?",
        options: ["Jéroboam", "Achab", "Omri", "Zimri"],
        correct: 1,
        explanation: "Le roi Achab a épousé Jézabel, fille du roi de Sidon, ce qui a entraîné Israël dans le culte de Baal (1 Rois 16:31)."
      },
      {
        question: "Selon Ézéchiel, combien de faces avaient les créatures vivantes dans sa vision ?",
        options: ["2", "3", "4", "6"],
        correct: 2,
        explanation: "Les créatures vivantes dans la vision d'Ézéchiel avaient 4 faces : homme, lion, bœuf et aigle (Ézéchiel 1:10)."
      },
      {
        question: "Dans quel livre trouve-t-on la prophétie des '70 semaines' ?",
        options: ["Isaïe", "Jérémie", "Daniel", "Zacharie"],
        correct: 2,
        explanation: "La prophétie des 70 semaines se trouve dans Daniel 9:24-27."
      },
      {
        question: "Combien de livres compose le Pentateuque ?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Le Pentateuque comprend 5 livres : Genèse, Exode, Lévitique, Nombres et Deutéronome."
      },
      {
        question: "Quel est le nom hébreu du livre de l'Exode ?",
        options: ["Bereshit", "Shemot", "Vayikra", "Bamidbar"],
        correct: 1,
        explanation: "Le livre de l'Exode est appelé 'Shemot' (noms) en hébreu, d'après ses premiers mots."
      },
      {
        question: "Quel prêtre a oint David comme roi d'Israël en secret ?",
        options: ["Eli", "Achimélec", "Abiatar", "Samuel"],
        correct: 3,
        explanation: "Le prophète Samuel a oint David en secret parmi ses frères à Bethléem (1 Samuel 16:13)."
      },
      {
        question: "Quelle tribu d'Israël n'a pas reçu de territoire lors de la division de Canaan ?",
        options: ["Ruben", "Siméon", "Lévi", "Dan"],
        correct: 2,
        explanation: "La tribu de Lévi n'a pas reçu de territoire car elle était consacrée au service du Temple (Nombres 18:20)."
      },
      {
        question: "Quel prophète a été commandé par Dieu d'épouser une prostituée comme signe prophétique ?",
        options: ["Amos", "Osée", "Joël", "Michée"],
        correct: 1,
        explanation: "Osée a épousé Gomer sur ordre divin comme symbole de l'infidélité d'Israël envers Dieu (Osée 1:2)."
      },
      {
        question: "Combien d'années Salomon a-t-il mis pour construire le Temple de Jérusalem ?",
        options: ["5 ans", "7 ans", "10 ans", "14 ans"],
        correct: 1,
        explanation: "Salomon a mis 7 ans pour construire le Temple (1 Rois 6:38)."
      },
      {
        question: "Quel prophète a prédit la naissance d'un enfant appelé 'Emmanuel' ?",
        options: ["Michée", "Isaïe", "Jérémie", "Zacharie"],
        correct: 1,
        explanation: "Isaïe a prédit la naissance de l'Emmanuel dans Isaïe 7:14."
      },
      {
        question: "Dans le livre de Job, combien de fils et filles Job avait-il au début du livre ?",
        options: ["7 fils et 3 filles", "3 fils et 7 filles", "7 fils et 7 filles", "10 fils et 3 filles"],
        correct: 0,
        explanation: "Job avait 7 fils et 3 filles au début du livre (Job 1:2)."
      },
      {
        question: "Quelle est la signification du nom 'Israël' donné à Jacob après sa lutte ?",
        options: ["Serviteur de Dieu", "Celui qui a lutté avec Dieu", "Élu de Dieu", "Prince de paix"],
        correct: 1,
        explanation: "Israel signifie 'celui qui a lutté avec Dieu', nom donné après la lutte de Jacob (Genèse 32:28)."
      },
      {
        question: "Quel roi a introduit l'adoration du veau d'or à Bethel et à Dan pour empêcher le peuple d'aller à Jérusalem ?",
        options: ["Salomon", "Roboam", "Jéroboam I", "Achab"],
        correct: 2,
        explanation: "Jéroboam I a érigé deux veaux d'or à Bethel et à Dan (1 Rois 12:28-29)."
      },
      {
        question: "Quel livre de la Bible contient le fameux passage sur la 'nouvelle alliance' promise par Dieu ?",
        options: ["Isaïe 54", "Jérémie 31", "Ézéchiel 36", "Zacharie 9"],
        correct: 1,
        explanation: "La promesse d'une nouvelle alliance se trouve dans Jérémie 31:31-34."
      }
    ]
  },

  nouveau_testament: {
    debutant: [
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
        question: "Quel est le dernier livre du Nouveau Testament ?",
        options: ["Jude", "Hébreux", "Apocalypse", "3 Jean"],
        correct: 2,
        explanation: "L'Apocalypse (Révélation) est le dernier livre du Nouveau Testament."
      },
      {
        question: "Combien de jours Jésus a-t-il passés dans le désert ?",
        options: ["7 jours", "30 jours", "40 jours", "50 jours"],
        correct: 2,
        explanation: "Jésus a passé 40 jours et 40 nuits dans le désert (Matthieu 4:2)."
      },
      {
        question: "Combien de pains Jésus a-t-il utilisés pour nourrir 5000 personnes ?",
        options: ["2", "5", "7", "12"],
        correct: 1,
        explanation: "Jésus a utilisé 5 pains et 2 poissons pour nourrir la foule (Jean 6:9)."
      },
      {
        question: "Dans quel évangile trouve-t-on la parabole du fils prodigue ?",
        options: ["Matthieu", "Marc", "Luc", "Jean"],
        correct: 2,
        explanation: "La parabole du fils prodigue se trouve uniquement dans l'Évangile de Luc (Luc 15:11-32)."
      },
      {
        question: "Quel est le nom de la mère de Jésus ?",
        options: ["Élisabeth", "Anne", "Marie", "Marthe"],
        correct: 2,
        explanation: "Marie est la mère de Jésus (Luc 1:27)."
      },
      {
        question: "Où Jésus a-t-il été crucifié ?",
        options: ["Le Mont des Oliviers", "Le Golgotha", "Le Mont Sinaï", "Bethléem"],
        correct: 1,
        explanation: "Jésus a été crucifié au Golgotha, 'lieu du crâne' (Jean 19:17)."
      },
      {
        question: "Combien de jours après sa mort Jésus est-il ressuscité ?",
        options: ["1 jour", "2 jours", "3 jours", "7 jours"],
        correct: 2,
        explanation: "Jésus est ressuscité le troisième jour (1 Corinthiens 15:4)."
      },
      {
        question: "Quel apôtre était un collecteur d'impôts ?",
        options: ["Pierre", "Matthieu", "Jean", "Philippe"],
        correct: 1,
        explanation: "Matthieu (Lévi) était collecteur d'impôts avant de suivre Jésus (Matthieu 9:9)."
      },
      {
        question: "Combien d'évangiles y a-t-il dans le Nouveau Testament ?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "Il y a 4 évangiles : Matthieu, Marc, Luc et Jean."
      },
      {
        question: "Qui a écrit le plus d'épîtres du Nouveau Testament ?",
        options: ["Pierre", "Jean", "Paul", "Jacques"],
        correct: 2,
        explanation: "L'apôtre Paul a écrit 13 épîtres du Nouveau Testament."
      }
    ],
    intermediaire: [
      {
        question: "Sur quelle montagne Jésus a-t-il été transfiguré ?",
        options: ["Mont des Oliviers", "Mont Sinaï", "Mont Thabor", "Mont Hermon"],
        correct: 2,
        explanation: "La tradition situe la Transfiguration sur le Mont Thabor (Matthieu 17:1-9)."
      },
      {
        question: "Quel personnage du Nouveau Testament a demandé la tête de Jean-Baptiste ?",
        options: ["Hérodias", "Salomé", "Pilate", "Hérode Antipas"],
        correct: 0,
        explanation: "Hérodias a demandé la tête de Jean-Baptiste par l'intermédiaire de sa fille (Marc 6:24-25)."
      },
      {
        question: "Dans quel livre trouve-t-on le discours de Pierre à la Pentecôte ?",
        options: ["Jean", "Actes des Apôtres", "Romains", "1 Pierre"],
        correct: 1,
        explanation: "Le discours de Pierre à la Pentecôte se trouve dans Actes 2."
      },
      {
        question: "Quel était le nom hébreu de Paul avant sa conversion ?",
        options: ["Étienne", "Saul", "Barnabas", "Silas"],
        correct: 1,
        explanation: "Paul s'appelait Saul avant sa rencontre avec Jésus sur le chemin de Damas (Actes 9)."
      },
      {
        question: "Combien de livres contient le Nouveau Testament ?",
        options: ["24", "27", "30", "39"],
        correct: 1,
        explanation: "Le Nouveau Testament contient 27 livres."
      },
      {
        question: "Quelle femme a versé du parfum sur les pieds de Jésus et les a essuyés avec ses cheveux ?",
        options: ["Marie de Béthanie", "Marie-Madeleine", "Marthe", "Suzanne"],
        correct: 0,
        explanation: "Marie de Béthanie (ou une femme pécheresse selon Luc) a oint les pieds de Jésus (Jean 12:3)."
      },
      {
        question: "Quel était le métier de Pierre avant de suivre Jésus ?",
        options: ["Charpentier", "Pêcheur", "Berger", "Agriculteur"],
        correct: 1,
        explanation: "Pierre était pêcheur sur le lac de Galilée (Matthieu 4:18)."
      },
      {
        question: "Dans quelle ville Paul a-t-il été converti ?",
        options: ["Antioche", "Jérusalem", "Sur le chemin de Damas", "Corinthe"],
        correct: 2,
        explanation: "Paul a été converti sur le chemin de Damas, frappé d'une lumière aveuglante (Actes 9:3)."
      },
      {
        question: "Quel apôtre a marché sur l'eau en direction de Jésus ?",
        options: ["Jean", "André", "Pierre", "Jacques"],
        correct: 2,
        explanation: "Pierre a marché sur l'eau pour rejoindre Jésus (Matthieu 14:29)."
      },
      {
        question: "Quelle est la première épître de Paul dans le Nouveau Testament ?",
        options: ["Galates", "1 Thessaloniciens", "Romains", "1 Corinthiens"],
        correct: 1,
        explanation: "1 Thessaloniciens est considérée comme la plus ancienne épître de Paul (vers 50 ap. J.-C.)."
      },
      {
        question: "Quel livre décrit la vision de la nouvelle Jérusalem descendant du ciel ?",
        options: ["Ézéchiel", "Daniel", "Apocalypse", "Zacharie"],
        correct: 2,
        explanation: "La nouvelle Jérusalem est décrite dans Apocalypse 21."
      },
      {
        question: "Qui a dit 'Ce n'est pas moi qui ai la vie en moi-même, mais Christ vit en moi' ?",
        options: ["Pierre", "Jean", "Paul", "Jacques"],
        correct: 2,
        explanation: "Paul écrit 'ce n'est plus moi qui vis, c'est Christ qui vit en moi' dans Galates 2:20."
      },
      {
        question: "Combien d'hommes Cornelius a-t-il envoyé chez Pierre selon Actes 10 ?",
        options: ["2", "3", "5", "7"],
        correct: 1,
        explanation: "Cornelius a envoyé 3 hommes chez Pierre (Actes 10:7-8)."
      },
      {
        question: "Quelle femme du Nouveau Testament était une marchande de pourpre ?",
        options: ["Priscille", "Lydie", "Phébé", "Tryphène"],
        correct: 1,
        explanation: "Lydie était une marchande de pourpre de la ville de Thyatire (Actes 16:14)."
      },
      {
        question: "Dans quel évangile Jésus dit-il 'Je suis la lumière du monde' ?",
        options: ["Matthieu", "Marc", "Luc", "Jean"],
        correct: 3,
        explanation: "C'est dans l'Évangile de Jean que Jésus fait les déclarations 'Je suis...' (Jean 8:12)."
      }
    ],
    expert: [
      {
        question: "Quel terme grec désigne la seconde venue du Christ dans les épîtres ?",
        options: ["Kérygme", "Parousie", "Épiphanie", "Théophanie"],
        correct: 1,
        explanation: "Le terme grec 'Parousie' (παρουσία) désigne la seconde venue du Christ (1 Thessaloniciens 4:15)."
      },
      {
        question: "Dans Apocalypse 2-3, combien d'Églises Jésus adresse-t-il ses messages ?",
        options: ["5", "6", "7", "12"],
        correct: 2,
        explanation: "Jésus adresse ses messages à 7 Églises d'Asie Mineure (Apocalypse 2-3)."
      },
      {
        question: "Quel terme théologique paulinien signifie 'la réconciliation par substitution' ?",
        options: ["Justification", "Propitiation", "Sanctification", "Rédemption"],
        correct: 1,
        explanation: "La 'propitiation' (ἱλαστήριον, hilastérion) désigne l'acte qui apaise la colère divine (Romains 3:25)."
      },
      {
        question: "Selon Paul dans Éphésiens, combien de fondements a l'Église ?",
        options: ["1 (Christ seul)", "Apôtres et prophètes, avec Christ comme pierre angulaire", "12 apôtres", "La foi et les œuvres"],
        correct: 1,
        explanation: "L'Église est fondée sur les apôtres et prophètes, Christ étant la pierre angulaire (Éphésiens 2:20)."
      },
      {
        question: "Quelle est la structure littéraire principale de l'Évangile de Marc ?",
        options: ["Discours thématiques", "Structure géographique en route vers Jérusalem", "Récit chronologique strict", "Structure chiasmatique"],
        correct: 1,
        explanation: "Marc structure son évangile autour du voyage de Galilée vers Jérusalem, avec la confession de Pierre comme pivot (Marc 8:27-30)."
      },
      {
        question: "Dans Jean 1, quel terme grec est traduit par 'Parole' dans 'Au commencement était la Parole' ?",
        options: ["Rhéma", "Logos", "Pneuma", "Sophia"],
        correct: 1,
        explanation: "Jean utilise 'Logos' (λόγος), concept à la fois hébreu et grec, pour désigner Christ (Jean 1:1)."
      },
      {
        question: "Quelle est la cité biblique désignée sous le nom cryptique de 'Babylone' dans 1 Pierre 5:13 ?",
        options: ["Antioche", "Alexandrie", "Rome", "Corinthe"],
        correct: 2,
        explanation: "Les historiens s'accordent à dire que 'Babylone' dans 1 Pierre 5:13 désigne Rome."
      },
      {
        question: "Selon le prologue de Luc (1:1-4), à qui Luc adresse-t-il son évangile ?",
        options: ["Aux Juifs dispersés", "À Théophile", "À l'Église d'Antioche", "Aux nations"],
        correct: 1,
        explanation: "Luc dédie son évangile à 'Théophile' (Luc 1:3), dont l'identité exacte reste débattue."
      },
      {
        question: "Dans Hébreux 7, à quel ordre sacerdotal le sacerdoce du Christ est-il comparé ?",
        options: ["Ordre d'Aaron", "Ordre de Melchisédek", "Ordre de Lévi", "Ordre de Sadoc"],
        correct: 1,
        explanation: "Le Christ est déclaré 'grand prêtre selon l'ordre de Melchisédek' (Hébreux 7:17, citant Psaume 110:4)."
      },
      {
        question: "Combien de fois le mot 'amour' (agapé) apparaît-il dans le célèbre hymne à l'amour de 1 Corinthiens 13 ?",
        options: ["5 fois", "7 fois", "9 fois", "12 fois"],
        correct: 2,
        explanation: "Le mot 'agapé' apparaît 9 fois dans 1 Corinthiens 13."
      },
      {
        question: "Quelle est la signification du terme 'Abba' utilisé par Paul dans Romains 8:15 ?",
        options: ["Seigneur", "Père (terme araméen intime)", "Dieu tout-puissant", "Saint"],
        correct: 1,
        explanation: "'Abba' est le terme araméen affectueux pour 'Père', équivalent à 'Papa', exprimant la relation filiale avec Dieu."
      },
      {
        question: "Dans l'Apocalypse, quel est le nombre de la 'Bête' ?",
        options: ["616", "666", "777", "888"],
        correct: 1,
        explanation: "Le nombre de la Bête est 666 (Apocalypse 13:18), bien que certains manuscrits portent 616."
      },
      {
        question: "Quelle doctrine affirme que les deux natures du Christ (divine et humaine) coexistent sans mélange ni confusion ?",
        options: ["Monophysisme", "Arianisme", "Chalcédonisme", "Nestorianisme"],
        correct: 2,
        explanation: "Le Concile de Chalcédoine (451) a défini que Christ a deux natures complètes, sans mélange, confusion, division ni séparation."
      },
      {
        question: "Dans Actes 17, sur quelle colline Paul a-t-il prononcé son discours aux Athéniens ?",
        options: ["L'Acropole", "L'Aréopage (Mars Hill)", "Le Pirée", "L'agora"],
        correct: 1,
        explanation: "Paul a prononcé son célèbre discours sur 'l'Dieu inconnu' sur l'Aréopage d'Athènes (Actes 17:22)."
      },
      {
        question: "Quel terme grec du Nouveau Testament décrit le rassemblement de l'Église chrétienne ?",
        options: ["Synagogue", "Ekklesia", "Koinonia", "Didaché"],
        correct: 1,
        explanation: "'Ekklesia' (ἐκκλησία) signifie 'assemblée des appelés' et est traduit par 'Église' dans le NT."
      }
    ]
  },

  personnages: {
    debutant: [
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
        question: "Quelle femme a trouvé le tombeau de Jésus vide en premier ?",
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
        question: "Quel apôtre est surnommé 'l'incrédule' ?",
        options: ["Pierre", "Jean", "Thomas", "André"],
        correct: 2,
        explanation: "Thomas a douté de la résurrection de Jésus jusqu'à le voir (Jean 20:24-29)."
      },
      {
        question: "Quelle femme de la Bible était connue pour sa grande beauté et est devenue reine de Perse ?",
        options: ["Déborah", "Ruth", "Esther", "Judith"],
        correct: 2,
        explanation: "Esther était une femme juive qui devint reine de Perse et sauva son peuple."
      },
      {
        question: "Qui était le père terrestre de Jésus ?",
        options: ["Joachim", "Joseph", "Zacharie", "Siméon"],
        correct: 1,
        explanation: "Joseph était le père adoptif (terrestre) de Jésus (Matthieu 1:16)."
      },
      {
        question: "Quel disciple aimé de Jésus a écrit l'Évangile qui porte son nom ?",
        options: ["Pierre", "Jean", "Matthieu", "Luc"],
        correct: 1,
        explanation: "L'apôtre Jean, le disciple bien-aimé, a écrit l'Évangile de Jean."
      },
      {
        question: "Qui était la belle-mère de Ruth ?",
        options: ["Orpa", "Deborah", "Naomi", "Hannah"],
        correct: 2,
        explanation: "Naomi était la belle-mère de Ruth (Ruth 1)."
      },
      {
        question: "Quel prophète a annoncé la venue de Jean-Baptiste en disant 'Une voix crie dans le désert' ?",
        options: ["Jérémie", "Ézéchiel", "Isaïe", "Michée"],
        correct: 2,
        explanation: "Isaïe a prophétisé 'Une voix crie dans le désert : préparez le chemin de l'Éternel' (Isaïe 40:3)."
      },
      {
        question: "Quel personnage a construit la Tour de Babel ?",
        options: ["Nemrod", "Caïn", "Laban", "Terah"],
        correct: 0,
        explanation: "Selon la tradition juive, Nemrod est associé à la construction de la Tour de Babel (Genèse 10:10)."
      }
    ],
    intermediaire: [
      {
        question: "Quel roi d'Israël est décrit comme 'un homme selon le cœur de Dieu' ?",
        options: ["Josué", "Saül", "David", "Salomon"],
        correct: 2,
        explanation: "David est décrit comme 'un homme selon le cœur de Dieu' (1 Samuel 13:14, Actes 13:22)."
      },
      {
        question: "Quelle femme juge d'Israël a conduit Barak à la victoire contre Sisera ?",
        options: ["Miriam", "Déborah", "Hannah", "Abigaïl"],
        correct: 1,
        explanation: "Déborah, prophétesse et juge, a dirigé Israël à la victoire (Juges 4-5)."
      },
      {
        question: "Quel personnage a interprété l'écriture mystérieuse 'Mené, mené, tekel, upharsin' ?",
        options: ["Esdras", "Daniel", "Ézéchiel", "Zacharie"],
        correct: 1,
        explanation: "Daniel a interprété l'écriture sur le mur lors du festin de Belshatsar (Daniel 5)."
      },
      {
        question: "Quelle était la nationalité de Ruth ?",
        options: ["Ammonite", "Moabite", "Édomite", "Philistine"],
        correct: 1,
        explanation: "Ruth était Moabite, venue de Moab avec sa belle-mère Naomi (Ruth 1:4)."
      },
      {
        question: "Qui était le père de Jean-Baptiste ?",
        options: ["Zébédée", "Zacharie", "Alphée", "Clopas"],
        correct: 1,
        explanation: "Jean-Baptiste était le fils du prêtre Zacharie et d'Élisabeth (Luc 1:5-13)."
      },
      {
        question: "Quel personnage du Nouveau Testament a ressuscité Dorcas (Tabitha) ?",
        options: ["Paul", "Barnabas", "Pierre", "Jean"],
        correct: 2,
        explanation: "Pierre a ressuscité Dorcas à Jaffa (Actes 9:40)."
      },
      {
        question: "Quel roi d'Israël a écrit le livre des Proverbes et de l'Ecclésiaste ?",
        options: ["David", "Salomon", "Ézéchias", "Josias"],
        correct: 1,
        explanation: "Salomon est l'auteur principal des Proverbes et de l'Ecclésiaste."
      },
      {
        question: "Qui a accompagné Paul dans son premier voyage missionnaire ?",
        options: ["Silas", "Timothée", "Barnabas", "Luc"],
        correct: 2,
        explanation: "Barnabas et Jean-Marc ont accompagné Paul lors du premier voyage missionnaire (Actes 13:2)."
      },
      {
        question: "Quel prophète a vécu dans le ventre d'un poisson pendant 3 jours ?",
        options: ["Élie", "Élisée", "Jonas", "Nahum"],
        correct: 2,
        explanation: "Jonas a passé 3 jours dans le ventre du grand poisson (Jonas 1:17)."
      },
      {
        question: "Quel apôtre a été le premier à être martyrisé parmi les Douze ?",
        options: ["Étienne", "Jacques fils de Zébédée", "Pierre", "André"],
        correct: 1,
        explanation: "Jacques, fils de Zébédée, fut le premier des apôtres à être martyrisé, tué par Hérode Agrippa (Actes 12:2)."
      },
      {
        question: "Quelle reine étrangère a rendu visite à Salomon pour tester sa sagesse ?",
        options: ["La reine d'Égypte", "La reine de Saba", "La reine de Tyr", "Jézabel"],
        correct: 1,
        explanation: "La reine de Saba a rendu visite à Salomon pour tester sa sagesse avec des énigmes (1 Rois 10)."
      },
      {
        question: "Qui a béni Abraham après la bataille des rois ?",
        options: ["Sem", "Melchisédek", "Abimélec", "Lot"],
        correct: 1,
        explanation: "Melchisédek, roi de Salem et prêtre du Dieu Très-Haut, a béni Abraham (Genèse 14:18-20)."
      },
      {
        question: "Quel disciple de Jésus était médecin et a écrit un évangile et les Actes ?",
        options: ["Marc", "Luc", "Jean", "Matthieu"],
        correct: 1,
        explanation: "Luc était médecin (Colossiens 4:14) et a écrit l'Évangile de Luc et les Actes des Apôtres."
      },
      {
        question: "Quelle femme a caché les espions envoyés par Josué à Jéricho ?",
        options: ["Déborah", "Abigaïl", "Rahab", "Tamar"],
        correct: 2,
        explanation: "Rahab, une prostituée de Jéricho, a caché les espions de Josué (Josué 2)."
      },
      {
        question: "Quel personnage est appelé 'le père des croyants' ou 'père dans la foi' ?",
        options: ["Noé", "Abraham", "Isaac", "Jacob"],
        correct: 1,
        explanation: "Abraham est appelé 'père de ceux qui croient' dans Romains 4:11."
      }
    ],
    expert: [
      {
        question: "Quel est le nom de la première femme de Saül, selon l'Écriture ?",
        options: ["Mikal", "Mérab", "Ahinoam", "Rizpa"],
        correct: 2,
        explanation: "Ahinoam de Jezreel était la première femme de Saül (1 Samuel 14:50)."
      },
      {
        question: "Qui était Théophile, à qui Luc adresse ses deux écrits ?",
        options: ["Un esclave affranchi", "Un fonctionnaire romain de haut rang", "Un prêtre juif converti", "Son identité est inconnue ou symbolique"],
        correct: 3,
        explanation: "L'identité exacte de Théophile reste débattue. Certains pensent que c'est un nom symbolique ('ami de Dieu') ou un personnage réel de rang élevé (Luc 1:3)."
      },
      {
        question: "Quel prophète a épousé une femme adultère par obéissance à Dieu comme signe prophétique ?",
        options: ["Amos", "Osée", "Joël", "Abdias"],
        correct: 1,
        explanation: "Osée a épousé Gomer, une femme infidèle, symbolisant l'infidélité d'Israël envers Dieu (Osée 1:2-3)."
      },
      {
        question: "Quel est le lien de parenté entre Jean-Baptiste et Jésus selon l'Évangile de Luc ?",
        options: ["Frères", "Cousins", "Oncle-neveu", "Sans lien de sang"],
        correct: 1,
        explanation: "Élisabeth, mère de Jean-Baptiste, était 'parente' de Marie (Luc 1:36), faisant de Jean et Jésus des cousins."
      },
      {
        question: "Selon Hébreux 11, quel patriarche a été enlevé sans mourir ?",
        options: ["Noé", "Abraham", "Hénoc", "Élie"],
        correct: 2,
        explanation: "Hénoc a été enlevé par Dieu sans passer par la mort (Genèse 5:24, Hébreux 11:5)."
      },
      {
        question: "Quel personnage de l'Ancien Testament est considéré comme un type du Christ en tant que 'sauveur souffrant' dans Isaïe 53 ?",
        options: ["Moïse", "Josué", "Le Serviteur Souffrant", "Cyrus de Perse"],
        correct: 2,
        explanation: "Isaïe 53 décrit le 'Serviteur Souffrant', interprété chrétiennement comme une prophétie messianique sur Jésus."
      },
      {
        question: "Qui était Apollos et quelle était sa formation ?",
        options: ["Un disciple de Jean-Baptiste venu d'Alexandrie, éloquent dans les Écritures", "Un prêtre converti de Jérusalem", "Un philosophe grec converti à Corinthe", "Le secrétaire de Paul"],
        correct: 0,
        explanation: "Apollos était un Juif d'Alexandrie, éloquent et versé dans les Écritures, disciple de Jean-Baptiste avant d'être instruit par Priscille et Aquilas (Actes 18:24-26)."
      },
      {
        question: "Quel roi d'Israël est associé à la réforme religieuse majeure qui a redécouvert le Livre de la Loi dans le Temple ?",
        options: ["Ézéchias", "Josias", "Josaphat", "Asa"],
        correct: 1,
        explanation: "Le roi Josias a réformé profondément Israël après la découverte du Livre de la Loi dans le Temple (2 Rois 22-23)."
      },
      {
        question: "Quel était le vrai nom de Barnabas ?",
        options: ["Joseph", "Siméon", "Judas", "Matthias"],
        correct: 0,
        explanation: "Barnabas s'appelait Joseph. Les apôtres lui ont donné le surnom Barnabas, signifiant 'fils de consolation' (Actes 4:36)."
      },
      {
        question: "Dans le récit de la Transfiguration, quels deux personnages de l'Ancien Testament apparaissent avec Jésus ?",
        options: ["Abraham et Élie", "Moïse et Élie", "Moïse et Ézéchiel", "Élie et Élisée"],
        correct: 1,
        explanation: "Moïse (représentant la Loi) et Élie (représentant les Prophètes) sont apparus avec Jésus (Matthieu 17:3)."
      },
      {
        question: "Quelle femme dans les Actes était prophétesse et avait quatre filles qui prophétisaient également ?",
        options: ["Priscille", "Lydie", "Les filles de Philippe l'évangéliste", "Phébé"],
        correct: 2,
        explanation: "Philippe l'évangéliste avait quatre filles vierges qui prophétisaient (Actes 21:9)."
      },
      {
        question: "Qui était Nicodème et dans quel évangile apparaît-il ?",
        options: ["Un centurion romain dans Luc", "Un chef pharisien dans Jean", "Un scribe dans Matthieu", "Un Samaritain dans Jean"],
        correct: 1,
        explanation: "Nicodème était un chef pharisien qui est venu voir Jésus de nuit, présent uniquement dans Jean (Jean 3:1-2)."
      },
      {
        question: "Quel juge d'Israël a vaincu les Madianites avec seulement 300 hommes ?",
        options: ["Samson", "Jephté", "Gédéon", "Déborah"],
        correct: 2,
        explanation: "Gédéon a vaincu les Madianites avec 300 hommes choisis par Dieu, réduisant son armée de 32 000 (Juges 7)."
      },
      {
        question: "Selon la généalogie de Matthieu 1, combien de générations y a-t-il entre Abraham et Jésus ?",
        options: ["28 générations", "42 générations", "36 générations", "40 générations"],
        correct: 1,
        explanation: "Matthieu organise la généalogie en 3 groupes de 14 générations, soit 42 générations au total (Matthieu 1:17)."
      },
      {
        question: "Quel est le nom de la servante égyptienne d'Abraham dont le fils Ismaël est l'ancêtre de peuples arabes ?",
        options: ["Zilpa", "Bilha", "Agar", "Ketura"],
        correct: 2,
        explanation: "Agar était la servante égyptienne de Sara, mère d'Ismaël (Genèse 16:1-16)."
      }
    ]
  },

  versets: {
    debutant: [
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
      },
      {
        question: "'Aime ton prochain comme toi-même.' — Où ce commandement apparaît-il d'abord ?",
        options: ["Matthieu 22", "Lévitique 19", "Deutéronome 6", "Romains 13"],
        correct: 1,
        explanation: "Ce commandement apparaît d'abord dans Lévitique 19:18."
      },
      {
        question: "Quel verset dit 'Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi' ?",
        options: ["Romains 3:23", "Éphésiens 2:8", "Jean 1:12", "Actes 4:12"],
        correct: 1,
        explanation: "Éphésiens 2:8 : 'Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi.'"
      },
      {
        question: "Complétez : 'Car je connais les projets que j'ai formés sur vous... des projets de ___' ?",
        options: ["Gloire", "Paix et non de malheur", "Bonheur et de prospérité", "Justice et de droiture"],
        correct: 1,
        explanation: "Jérémie 29:11 : '...des projets de paix et non de malheur, pour vous donner un avenir et de l'espérance.'"
      },
      {
        question: "Quel est le verset le plus court de la Bible ?",
        options: ["'Dieu est amour'", "'Jésus pleura'", "'Réjouissez-vous toujours'", "'Priez sans cesse'"],
        correct: 1,
        explanation: "'Jésus pleura' (Jean 11:35) est souvent cité comme le verset le plus court de la Bible en français et en anglais."
      },
      {
        question: "'La foi, c'est...' — Comment se termine le début d'Hébreux 11:1 ?",
        options: ["...aimer Dieu de tout son cœur", "...la certitude des choses qu'on espère, la démonstration de celles qu'on ne voit pas", "...croire en Christ Jésus", "...obéir à la Parole de Dieu"],
        correct: 1,
        explanation: "Hébreux 11:1 : 'Or la foi, c'est la certitude des choses qu'on espère, la démonstration de celles qu'on ne voit pas.'"
      },
      {
        question: "'L'amour ne fait point de mal au prochain. L'amour est donc l'accomplissement de la ___.' ?",
        options: ["Foi", "Loi", "Grâce", "Promesse"],
        correct: 1,
        explanation: "Romains 13:10 : 'L'amour est donc l'accomplissement de la loi.'"
      },
      {
        question: "Dans quel livre biblique trouve-t-on 'Il y a un temps pour tout, un temps pour chaque chose sous le ciel' ?",
        options: ["Proverbes", "Job", "Ecclésiaste", "Psaumes"],
        correct: 2,
        explanation: "Ecclésiaste 3:1 : 'Il y a un temps pour tout, un temps pour chaque chose sous le ciel.'"
      },
      {
        question: "Quel apôtre écrit 'Dieu est amour' ?",
        options: ["Paul", "Pierre", "Jean", "Jacques"],
        correct: 2,
        explanation: "Jean écrit 'Dieu est amour' dans 1 Jean 4:8 et 4:16."
      }
    ],
    intermediaire: [
      {
        question: "'En toutes choses, Dieu travaille pour le bien...' — Quelle référence exacte ?",
        options: ["Philippiens 4:13", "Romains 8:28", "Jérémie 29:11", "Proverbes 3:5"],
        correct: 1,
        explanation: "Romains 8:28 : 'Toutes choses concourent au bien de ceux qui aiment Dieu.'"
      },
      {
        question: "Qui a dit 'Ce n'est plus moi qui vis, c'est Christ qui vit en moi' ?",
        options: ["Pierre", "Jean", "Paul", "Jacques"],
        correct: 2,
        explanation: "Paul écrit cela dans Galates 2:20 pour exprimer l'union avec Christ."
      },
      {
        question: "Quel psaume commence par 'Les cieux racontent la gloire de Dieu' ?",
        options: ["Psaume 8", "Psaume 19", "Psaume 33", "Psaume 148"],
        correct: 1,
        explanation: "Le Psaume 19:2 : 'Les cieux racontent la gloire de Dieu, et l'étendue manifeste l'œuvre de ses mains.'"
      },
      {
        question: "Dans quel verset Paul demande-t-il aux croyants de 'revêtir l'armure de Dieu' ?",
        options: ["Romains 13:12", "Éphésiens 6:11", "2 Corinthiens 10:4", "1 Thessaloniciens 5:8"],
        correct: 1,
        explanation: "Éphésiens 6:11 : 'Revêtez-vous de toutes les armes de Dieu, afin de pouvoir tenir ferme contre les ruses du diable.'"
      },
      {
        question: "Quel verset dit 'Car le salaire du péché, c'est la mort ; mais le don gratuit de Dieu, c'est la vie éternelle' ?",
        options: ["Jean 3:16", "Romains 6:23", "Actes 2:38", "Hébreux 9:27"],
        correct: 1,
        explanation: "Romains 6:23 présente le contraste entre le salaire du péché et le don de Dieu."
      },
      {
        question: "'Prenez garde à vous-mêmes et à tout le troupeau sur lequel le Saint-Esprit vous a établis évêques, pour paître l'Église de Dieu.' — Dans quel discours ?",
        options: ["Discours de Jésus sur la montagne", "Discours d'adieu de Paul aux anciens d'Éphèse", "Lettre de Paul à Timothée", "Discours de Pierre à la Pentecôte"],
        correct: 1,
        explanation: "Paul dit cela aux anciens d'Éphèse lors de ses adieux à Milet (Actes 20:28)."
      },
      {
        question: "Quel verset de Jean dit 'Moi et le Père nous sommes un' ?",
        options: ["Jean 1:1", "Jean 8:58", "Jean 10:30", "Jean 17:21"],
        correct: 2,
        explanation: "Jean 10:30 : 'Moi et le Père nous sommes un', une déclaration sur l'unité divine de Jésus."
      },
      {
        question: "Complétez Proverbes 22:6 : 'Instruis l'enfant selon...' ?",
        options: ["...les préceptes de Dieu et il ne s'en écartera point", "...la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas", "...la sagesse du Seigneur afin qu'il marche droit", "...les commandements afin de lui assurer la vie"],
        correct: 1,
        explanation: "Proverbes 22:6 : 'Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.'"
      },
      {
        question: "Dans quel livre est écrit 'Cherchez d'abord le royaume et la justice de Dieu, et toutes ces choses vous seront données par-dessus' ?",
        options: ["Luc 12", "Matthieu 6", "Jean 15", "Romains 14"],
        correct: 1,
        explanation: "Cette parole de Jésus se trouve dans le Sermon sur la Montagne, Matthieu 6:33."
      },
      {
        question: "'L'Éternel te gardera de tout mal, il gardera ton âme.' — Quel psaume ?",
        options: ["Psaume 91", "Psaume 121", "Psaume 127", "Psaume 139"],
        correct: 1,
        explanation: "Psaume 121:7 : 'L'Éternel te gardera de tout mal, il gardera ton âme.'"
      },
      {
        question: "Quel verset dit 'Toute écriture est inspirée de Dieu, et utile pour enseigner...' ?",
        options: ["1 Pierre 1:23", "2 Timothée 3:16", "Hébreux 4:12", "Jean 17:17"],
        correct: 1,
        explanation: "2 Timothée 3:16 affirme l'inspiration divine des Écritures."
      },
      {
        question: "Dans Matthieu 5, que dit Jésus dans les Béatitudes sur les 'artisans de paix' ?",
        options: ["Ils hériteront la terre", "Ils seront consolés", "Ils seront appelés fils de Dieu", "Ils verront Dieu"],
        correct: 2,
        explanation: "Matthieu 5:9 : 'Heureux les artisans de paix, car ils seront appelés fils de Dieu!'"
      },
      {
        question: "Quel verset du livre de Michée résume la vocation du croyant en trois éléments ?",
        options: ["Michée 5:2", "Michée 6:8", "Michée 7:7", "Michée 4:3"],
        correct: 1,
        explanation: "Michée 6:8 : 'Il t'a fait connaître ce qui est bien... pratiquer la justice, aimer la miséricorde, et marcher humblement avec ton Dieu.'"
      },
      {
        question: "Quel verset dit 'Je suis la résurrection et la vie. Celui qui croit en moi vivra, même s'il meurt' ?",
        options: ["Jean 6:40", "Jean 11:25", "Jean 14:19", "Jean 20:31"],
        correct: 1,
        explanation: "Jean 11:25, dit à Marthe avant la résurrection de Lazare."
      },
      {
        question: "Complétez Romains 12:2 : 'Ne vous conformez pas au siècle présent, mais soyez transformés...' ?",
        options: ["...par la puissance de l'Esprit", "...par le renouvellement de l'intelligence", "...par la lecture de la Parole", "...par la prière et le jeûne"],
        correct: 1,
        explanation: "Romains 12:2 : '...mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu.'"
      }
    ],
    expert: [
      {
        question: "Dans quel verset de l'AT le terme hébreu 'chesed' (amour fidèle/grâce) apparaît-il dans la promesse aux pères ?",
        options: ["Genèse 32:10", "Exode 34:6-7", "Deutéronome 7:9", "Toutes ces références"],
        correct: 3,
        explanation: "'Chesed' (חֶסֶד) est un terme central de l'AT qui apparaît dans toutes ces références, décrivant la fidélité aimante de Dieu."
      },
      {
        question: "Quel terme hébreu, souvent traduit par 'vérité', signifie aussi 'fidélité' et 'solidité' ?",
        options: ["Shalom", "Emeth", "Kodesh", "Hesed"],
        correct: 1,
        explanation: "'Emeth' (אֱמֶת) signifie à la fois 'vérité', 'fidélité' et 'solidité', reflétant le caractère inébranlable de Dieu."
      },
      {
        question: "Quel est le contexte original de Jérémie 29:11 ('des projets de paix') souvent mal appliqué individuellement ?",
        options: ["Une promesse faite à Jérémie personnellement", "Une lettre aux exilés de Babylone pour une nation entière après 70 ans", "Un oracle pour les rois d'Israël", "Une promesse eschatologique pour la fin des temps"],
        correct: 1,
        explanation: "Jérémie 29:11 est adressé à la nation israélite en exil à Babylone, promettant un retour après 70 ans — pas une promesse individuelle immédiate."
      },
      {
        question: "Dans Ésaïe 53:5, quel terme hébreu traduit par 'blessé' ou 'transpercé' a une connotation sacrificielle profonde ?",
        options: ["Nakah", "Chalal", "Makat", "Pasha"],
        correct: 1,
        explanation: "'Chalal' (חָלַל) signifie 'transpercé mortellement', avec une connotation de mort violente et sacrificielle dans Ésaïe 53:5."
      },
      {
        question: "Quelle est la structure rhétorique du prologue de Jean (Jean 1:1-18) ?",
        options: ["Une introduction narrative simple", "Un hymne christologique en forme de chiasme", "Une argumentation philosophique grecque", "Un discours prophétique en strophes"],
        correct: 1,
        explanation: "Le prologue de Jean est structuré en chiasme avec le Logos comme centre, reflétant l'influence de la poésie hébraïque et de la sagesse hellénistique."
      },
      {
        question: "Dans Apocalypse 1:8, Dieu dit 'Je suis l'Alpha et l'Oméga.' Quel terme grec complète cette déclaration ?",
        options: ["Pantokrator (Tout-Puissant)", "Kyrios (Seigneur)", "Christos (Christ)", "Theos (Dieu)"],
        correct: 0,
        explanation: "Apocalypse 1:8 : 'Je suis l'Alpha et l'Oméga, dit le Seigneur Dieu, celui qui est, qui était et qui vient, le Tout-Puissant (Pantokrator).'"
      },
      {
        question: "Quel est le sens théologique du 'sang de l'aspersion' mentionné dans Hébreux 12:24 ?",
        options: ["Le baptême chrétien", "La purification des péchés par l'intercession du Christ ressuscité", "Le sacrifice de la Pâque", "Le rite de consécration des prêtres"],
        correct: 1,
        explanation: "Le 'sang de l'aspersion' en Hébreux 12:24 fait référence au sang du Christ qui 'parle mieux' que celui d'Abel, accomplissant et dépassant tous les sacrifices de l'AT."
      },
      {
        question: "Dans Colossiens 1:15-20, quel hymne christologique présente Christ comme 'l'image du Dieu invisible, le premier-né de toute création' ?",
        options: ["L'hymne kenosis de Philippiens 2", "L'hymne à la sagesse de Proverbes 8", "Le Christ-hymne de Colossiens 1", "Le prologue johannique"],
        correct: 2,
        explanation: "Colossiens 1:15-20 est un hymne christologique affirmant la préexistence, la souveraineté cosmique et la réconciliation accomplie en Christ."
      },
      {
        question: "Quelle est la citation d'Habacuc 2:4 reprise trois fois dans le NT (Romains, Galates, Hébreux) ?",
        options: ["'L'Éternel est dans son saint temple'", "'Le juste vivra par la foi'", "'Car encore un peu de temps, et celui qui doit venir viendra'", "'Malheur à celui qui dit au bois: éveille-toi!'"],
        correct: 1,
        explanation: "'Le juste vivra par la foi' (Habacuc 2:4) est cité dans Romains 1:17, Galates 3:11 et Hébreux 10:38 — pierre angulaire de la doctrine de la justification par la foi."
      },
      {
        question: "Quel terme grec du Nouveau Testament, souvent traduit par 'sainteté' ou 'séparation', est à la racine du mot 'Église' ?",
        options: ["Hagios (saint)", "Ekklesia (appelés hors de)", "Pneuma (esprit)", "Doxa (gloire)"],
        correct: 1,
        explanation: "'Ekklesia' signifie littéralement 'ceux qui sont appelés hors de', impliquant une séparation et une consécration au service de Dieu."
      },
      {
        question: "Dans Matthieu 5:17, Jésus dit : 'Je ne suis pas venu abolir...' Comment se termine cette déclaration ?",
        options: ["...les traditions des anciens, mais les renouveler", "...la Loi ni les Prophètes; je suis venu non pour abolir, mais pour accomplir", "...les commandements, mais les approfondir pour les cœurs", "...les sacrifices, mais les remplacer par la grâce"],
        correct: 1,
        explanation: "Matthieu 5:17 : '...je suis venu non pour abolir, mais pour accomplir.' Christ accomplit pleinement la Loi et les Prophètes."
      },
      {
        question: "Quel est le contexte liturgique original du 'Notre Père' dans l'Évangile de Matthieu (6:9-13) ?",
        options: ["Une prière pour les repas", "Une instruction sur comment prier par opposition à la prière ostentatoire des hypocrites", "Une liturgie pour le sabbat", "Un discours eschatologique sur la fin des temps"],
        correct: 1,
        explanation: "Le 'Notre Père' en Matthieu 6 s'inscrit dans l'enseignement de Jésus sur la prière authentique, par contraste avec la prière hypocrite (Matthieu 6:5-8)."
      },
      {
        question: "Dans le livre de l'Apocalypse, que signifient les '144 000' scellés de l'Apocalypse 7 dans leur contexte symbolique ?",
        options: ["Exactement 144 000 Juifs convertis", "La totalité du peuple de Dieu de toutes nations (12 tribus × 12 × 1000)", "Les martyrs chrétiens des premiers siècles", "Les anges gardiens de l'Israël physique"],
        correct: 1,
        explanation: "144 000 = 12 (tribus) × 12 (apôtres) × 1000 (multitude), un nombre symbolique représentant la plénitude du peuple de Dieu dans la tradition interprétative majoritaire."
      },
      {
        question: "Quel est le double commandement résumant toute la Loi selon Jésus en Matthieu 22:37-40 ?",
        options: ["Aimer Dieu et son prochain (citant Deut 6:5 et Lév 19:18)", "Croire en Dieu et obéir à ses commandements", "Honorer ses parents et ne pas tuer", "La foi et les œuvres"],
        correct: 0,
        explanation: "Jésus cite Deutéronome 6:5 (amour de Dieu) et Lévitique 19:18 (amour du prochain) comme résumé de toute la Loi et les Prophètes (Matthieu 22:37-40)."
      },
      {
        question: "Quel terme hébreu de l'AT, signifiant 'justice/droiture', est souvent associé à la fidélité dans l'alliance et distinct de notre notion légaliste ?",
        options: ["Mishpat", "Tsedaqah", "Torah", "Shalom"],
        correct: 1,
        explanation: "'Tsedaqah' (צְדָקָה) est la justice/droiture de Dieu dans l'alliance, plus relationnelle que légaliste — souvent rendue par 'justice' mais impliquant fidélité, loyauté et action juste envers les autres."
      }
    ]
  }
};