// Dictionnaire maître (français) de l'interface.
// Chaque autre langue (src/lib/i18n/dictionaries/<code>.js) doit reprendre
// exactement la même structure de clés. La clé de traduction est le chemin
// pointé, ex. "nav.home".
export default {
  common: {
    back: "Retour",
    cancel: "Annuler",
    close: "Fermer",
    loading: "Chargement...",
    retry: "Réessayer",
    delete: "Supprimer",
    confirm: "Confirmer",
    search: "Rechercher...",
    language: "Langue",
  },

  nav: {
    home: "Accueil",
    maps: "Cartes",
    divineName: "Noms",
    jewishLife: "Vie Juive",
    scores: "Scores",
    settings: "Réglages",
    tagline: "Testez vos connaissances",
    privacy: "Règles de confidentialité",
    about: "À propos",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Héritage Wesley",
  },

  home: {
    badge: "Testez vos connaissances bibliques",
    title: "Biblia-Quiz",
    subtitle: "Explorez la Bible à travers des quiz interactifs sur l'Ancien et le Nouveau Testament",
    statCategories: "Catégories",
    statQuestions: "Questions",
    statWisdom: "Sagesse",
    questionsCount: "{count} questions",
    chooseLevel: "Choisir niveau →",
  },

  categories: {
    ancien_testament: {
      name: "Ancien Testament",
      description: "Les récits fondateurs de la foi hébraïque",
    },
    nouveau_testament: {
      name: "Nouveau Testament",
      description: "La vie de Jésus et les écrits apostoliques",
    },
    personnages: {
      name: "Personnages Bibliques",
      description: "Les grands héros et figures de la Bible",
    },
    versets: {
      name: "Versets & Citations",
      description: "Retrouvez les passages et citations célèbres",
    },
    propheties: {
      name: "Prophéties",
      description: "Les annonces et accomplissements prophétiques",
    },
    geographie: {
      name: "Géographie Biblique",
      description: "Les lieux saints et terres de la Bible",
    },
    chronologie: {
      name: "Chronologie",
      description: "L'histoire biblique dans l'ordre des temps",
    },
  },

  difficulty: {
    beginner: "🌱 Débutant",
    beginnerDesc: "Questions simples pour commencer",
    intermediate: "📖 Intermédiaire",
    intermediateDesc: "Pour ceux qui connaissent bien la Bible",
    expert: "🔥 Expert",
    expertDesc: "Questions difficiles pour les passionnés",
    chooseLevel: "Choisissez votre niveau de difficulté",
  },

  quiz: {
    nextQuestion: "Question suivante",
    seeResults: "Voir les résultats",
    progress: "Question {n} sur {total}",
    correctTitle: "✨ Excellent !",
    goodToKnow: "📖 Bonne à savoir :",
    categoryNotFound: "Catégorie introuvable",
  },

  results: {
    exceptional: "Exceptionnel !",
    exceptionalSub: "Score parfait",
    veryGood: "Très bien !",
    veryGoodSub: "Excellent travail",
    notBad: "Pas mal !",
    notBadSub: "Continue tes efforts",
    keepGoing: "À bientôt !",
    keepGoingSub: "Essaie à nouveau",
    resultsNotFound: "Résultats introuvables",
    restart: "Recommencer",
    otherCategories: "Autres catégories",
    correctAnswers: "Correctes",
    wrongAnswers: "Incorrectes",
    total: "Total",
  },

  scores: {
    yourScores: "Vos scores",
    trackProgress: "Suivi de vos progrès",
    noScores: "Aucun score enregistré",
    playQuiz: "Commencez un quiz pour voir vos résultats",
    bestScores: "Meilleurs résultats",
    goodAnswers: "bonnes réponses",
    history: "Historique",
  },

  settings: {
    title: "Réglages",
    appearance: "Apparence",
    darkMode: "Mode sombre",
    enabled: "Activé",
    disabled: "Désactivé",
    languageSection: "Langue",
    languageDesc: "Choisissez la langue de l'application et de ses contenus",
    aboutApp: "À propos de l'application",
    account: "Compte",
    logout: "Se déconnecter",
    deleteAccount: "Supprimer mon compte",
    deleteDialogTitle: "Supprimer le compte ?",
    deleteDialogDesc: "Cette action est irréversible. Toutes vos données et scores seront définitivement supprimés.",
  },

  maps: {
    badge: "Atlas Biblique Illustré",
    title: "Géographie Biblique",
    subtitle: "Explorez les lieux saints à travers les grandes périodes de l'histoire biblique",
  },

  divineNames: {
    badge: "Les Noms de Dieu",
    title: "Noms de Dieu",
    subtitle: "Explorez les noms divins de la Bible et leur signification",
    searchPlaceholder: "Rechercher un nom...",
    meaning: "Signification",
    usage: "Usage biblique",
    references: "Références",
    occurrences: "Occurrences",
    pronunciationNoteTitle: "Note sur la prononciation :",
    noResult: "Aucun nom trouvé",
  },

  jewishLife: {
    badge: "Culture & Tradition",
    title: "Vie Sociale & Culturelle des Juifs",
    subtitle: "Fêtes, calendrier, monnaie, mesures et vêtements — la vie quotidienne et rituelle du peuple hébreu dans la Bible",
    translating: "Traduction en cours",
    sections: {
      fetes: "Fêtes & Sabbat",
      mois: "Calendrier & Mois",
      monnaie: "Monnaie & Commerce",
      mesures: "Poids, Longueurs & Volumes",
      symbolique: "Symbolique des Nombres",
      quantites: "Mesures de Quantité",
      vetements: "Vêtements & Habits",
    },
  },

  wesley: {
    tagline: "Héritage Méthodiste · 18e siècle",
    subtitle: "Découvrez la vie, l'œuvre et les cantiques de John & Charles Wesley — fondateurs du Réveil méthodiste",
    quote: "Faites tout le bien que vous pouvez, par tous les moyens que vous pouvez, de toutes les façons que vous pouvez, en tous lieux que vous pouvez, à toutes les heures que vous pouvez, à toutes les personnes que vous pouvez, aussi longtemps que vous le pouvez.",
    quoteAuthor: "— John Wesley",
    statSermons: "Sermons prêchés",
    statHymns: "Cantiques composés",
    statKm: "km parcourus",
    statMethodists: "Méthodistes dans le monde",
    nav: {
      home: "Accueil",
      john: "Jean",
      charles: "Charles",
      parents: "Parents",
      hymns: "Cantiques",
      sermons: "Sermons",
      travels: "Voyages",
    },
    home: {
      john: {
        title: "John Wesley",
        subtitle: "Prédicateur, théologien, fondateur",
        fact: "40 000 sermons prêchés, 400 000 km parcourus",
      },
      charles: {
        title: "Charles Wesley",
        subtitle: "Poète, hymnographe, évangéliste",
        fact: "6 500 cantiques composés",
      },
      parents: {
        title: "Samuel & Susanna",
        subtitle: "Les parents extraordinaires",
        fact: "19 enfants, une éducation révolutionnaire",
      },
      hymns: {
        title: "Cantiques",
        subtitle: "L'héritage musical de Charles",
        fact: "Parmi les plus grands chants de l'Église",
      },
      sermons: {
        title: "Sermons",
        subtitle: "Les 44 sermons standards",
        fact: "La base théologique du Méthodisme",
      },
      travels: {
        title: "Voyages",
        subtitle: "La carte des 400 000 km",
        fact: "Principalement à cheval à travers la Grande-Bretagne",
      },
    },
  },

  auth: {
    welcome: "Bienvenue sur Biblia-Quiz",
    tagline: "Explorez et approfondissez vos connaissances de la Bible.",
    phoneLabel: "Numéro de téléphone",
    phonePlaceholder: "Ex: +225 07 00 00 00 00",
    phoneHelp: "Saisissez votre numéro avec l'indicatif pays (ex: +225 pour la Côte d'Ivoire). Ce numéro sert d'identifiant unique pour l'application et vos paiements.",
    errorEmpty: "Veuillez entrer votre numéro de téléphone.",
    errorInvalid: "Format de numéro de téléphone invalide (ex: +2250700000000).",
    errorGeneric: "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
    login: "Se connecter",
    loggingIn: "Connexion...",
  },

  payment: {
    badge: "Accès Premium Biblia-Quiz",
    title: "Débloquez la Sagesse",
    subtitle: "Rejoignez les passionnés de la Bible et approfondissez vos connaissances avec notre expérience complète.",
    oneTime: "Paiement unique",
    currency: "F CFA",
    securePayment: "Paiement sécurisé via {provider} (Wave, Orange, MTN, Moov, Djamo, etc.)",
    unlockNow: "Débloquer maintenant",
    redirecting: "Redirection...",
    checkPayment: "Vérifier mon paiement",
    checking: "Vérification...",
    errorServer: "Une erreur s'est produite lors de la connexion au serveur de paiement. Veuillez réessayer.",
    errorStatus: "Impossible de vérifier le statut. Veuillez réessayer.",
    connectedAs: "Connecté en tant que :",
    logout: "Se déconnecter",
    checkingPaymentStatus: "Vérification de votre statut de paiement...",
    features: {
      categories: {
        title: "Toutes les catégories débloquées",
        desc: "Accédez à plus de 1000 questions (Ancien/Nouveau Testament, Wesley, Vie Sociale Juive).",
      },
      maps: {
        title: "Cartes bibliques interactives",
        desc: "Visualisez les voyages de Paul, l'Exode et les lieux saints en haute résolution.",
      },
      scores: {
        title: "Suivi des scores & progression",
        desc: "Enregistrez vos scores, comparez vos performances et mesurez votre progression.",
      },
      noAds: {
        title: "Accès à vie sans publicité",
        desc: "Payez une seule fois, profitez de toutes les futures mises à jour gratuitement.",
      },
    },
  },

  privacy: {
    title: "Règles de confidentialité",
    lastUpdate: "Dernière mise à jour : {date}",
    lastUpdateDate: "juillet 2026",
    s1Title: "1. Collecte des informations",
    s1Body: "Nous collectons uniquement les informations nécessaires au fonctionnement de l'application : votre numéro de téléphone (pour l'authentification), votre nom d'utilisateur, et vos résultats de quiz (scores, progression). Aucune donnée sensible n'est collectée sans votre consentement explicite.",
    s2Title: "2. Utilisation des données",
    s2Intro: "Vos informations sont utilisées pour :",
    s2Item1: "Vous identifier et sécuriser votre compte",
    s2Item2: "Sauvegarder votre progression et vos scores",
    s2Item3: "Améliorer l'expérience utilisateur",
    s2Item4: "Vous permettre de participer au classement",
    s3Title: "3. Partage des données",
    s3Body: "Nous ne partageons aucune de vos données personnelles avec des tiers. Vos informations restent strictement confidentielles et ne sont utilisées que dans le cadre de l'application Biblia-Quiz.",
    s4Title: "4. Sécurité",
    s4Body: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, alteration, divulgation ou destruction.",
    s5Title: "5. Conservation des données",
    s5Body: "Vos données sont conservées tant que votre compte est actif. Vous pouvez demander la suppression de votre compte et de toutes vos données à tout moment depuis la page Réglages.",
    s6Title: "6. Vos droits",
    s6Body: "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous.",
    s7Title: "7. Contact",
    s7Body: "Pour toute question concernant ces règles de confidentialité, vous pouvez nous contacter via la page Réglages de l'application.",
  },

  about: {
    title: "À propos de l'application",
    tagline: "La sagesse de la Bible, à portée de question",
    intro: "Bienvenue dans Biblia-Quiz, une application dédiée à la Parole de Dieu. Elle vous invite à explorer la Bible à travers des quiz interactifs sur l'Ancien et le Nouveau Testament, à vous exercer sur les personnages, les versets et les lieux bibliques, et à progresser dans la connaissance des Écritures à votre rythme.",
    featuresTitle: "Ce que vous trouverez dans l'application",
    featuresIntro: "Un contenu riche et structuré pour approfondir votre connaissance de la Bible :",
    designersTitle: "Les Concepteurs",
    designersIntro: "Derrière cette application se trouve une vision guidée par la foi et l'excellence, portée par une équipe passionnée :",
    closing: "Nous espérons que Biblia-Quiz vous accompagne dans la découverte et l'approfondissement de la Parole de Dieu, seul ou en famille.",
    copyright: "© {year} Biblia-Quiz. Tous droits réservés.",
    features: {
      quiz: {
        title: "Quiz bibliques variés",
        desc: "7 catégories et plus de 1 300 questions couvrant l'Ancien et le Nouveau Testament : personnages bibliques, versets et citations, prophéties, géographie et chronologie.",
      },
      scores: {
        title: "Scores & Progression",
        desc: "Trois niveaux de difficulté (débutant, intermédiaire, expert) et un suivi de vos résultats pour mesurer vos progrès à chaque partie.",
      },
      maps: {
        title: "Cartes bibliques",
        desc: "Un espace de découverte des lieux saints et des terres de la Bible pour mieux visualiser les récits bibliques.",
      },
      names: {
        title: "Noms de Dieu & Vie sociale juive",
        desc: "Des sections dédiées pour approfondir les noms de Dieu et les traditions de la vie sociale juive, au plus près du texte biblique.",
      },
    },
    designers: {
      amos: {
        role: "Concepteur & Designer",
        desc: "Il imagine et façonne l'identité visuelle ainsi que l'expérience utilisateur, veillant à ce que chaque interface offre un cadre épuré, intuitif et propice à l'apprentissage.",
      },
      jean: {
        role: "Développeur & Designer",
        desc: "Il insuffle la vie à cette vision en concevant l'architecture technique et en développant les fonctionnalités de l'application, garantissant une navigation fluide, stable et sécurisée.",
      },
    },
  },

  notFound: {
    title: "Page introuvable",
    body: "La page « {page} » est introuvable dans cette application.",
    home: "Retour à l'accueil",
  },
};
