// Dictionnaire maître (anglais) de l'interface.
// Chaque autre langue (src/lib/i18n/dictionaries/<code>.js) doit reprendre
// exactement la même structure de clés. La clé de traduction est le chemin
// pointé, ex. "nav.home".
export default {
  common: {
    back: "Back",
    cancel: "Cancel",
    close: "Close",
    loading: "Loading...",
    retry: "Try again",
    delete: "Delete",
    confirm: "Confirm",
    search: "Search...",
    language: "Language",
  },

  nav: {
    home: "Home",
    maps: "Maps",
    divineName: "Names",
    jewishLife: "Jewish Life",
    scores: "Scores",
    settings: "Settings",
    tagline: "Test your knowledge",
    privacy: "Privacy Policy",
    about: "About",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Wesley Heritage",
  },

  home: {
    badge: "Test your biblical knowledge",
    title: "Biblia-Quiz",
    subtitle: "Explore the Bible through interactive quizzes on the Old and New Testaments",
    statCategories: "Categories",
    statQuestions: "Questions",
    statWisdom: "Wisdom",
    questionsCount: "{count} questions",
    chooseLevel: "Choose level →",
  },

  categories: {
    ancien_testament: {
      name: "Old Testament",
      description: "The founding stories of the Hebrew faith",
    },
    nouveau_testament: {
      name: "New Testament",
      description: "The life of Jesus and the apostolic writings",
    },
    personnages: {
      name: "Biblical Characters",
      description: "The great heroes and figures of the Bible",
    },
    versets: {
      name: "Verses & Citations",
      description: "Find famous passages and quotations",
    },
    propheties: {
      name: "Prophecies",
      description: "The prophetic announcements and fulfillments",
    },
    geographie: {
      name: "Biblical Geography",
      description: "The holy places and lands of the Bible",
    },
    chronologie: {
      name: "Chronology",
      description: "Biblical history in chronological order",
    },
  },

  difficulty: {
    debutant: "🌱 Beginner",
    debutantDesc: "Simple questions to get started",
    intermediaire: "📖 Intermediate",
    intermediaireDesc: "For those who know the Bible well",
    expert: "🔥 Expert",
    expertDesc: "Difficult questions for enthusiasts",
    chooseLevel: "Choose your difficulty level",
  },

  quiz: {
    nextQuestion: "Next question",
    seeResults: "See results",
    progress: "Question {n} of {total}",
    correctTitle: "✨ Excellent!",
    goodToKnow: "📖 Good to know:",
    categoryNotFound: "Category not found",
  },

  results: {
    exceptional: "Exceptional!",
    exceptionalSub: "Perfect score",
    veryGood: "Very good!",
    veryGoodSub: "Excellent work",
    notBad: "Not bad!",
    notBadSub: "Keep it up",
    keepGoing: "See you soon!",
    keepGoingSub: "Try again",
    resultsNotFound: "Results not found",
    restart: "Restart",
    otherCategories: "Other categories",
    correctAnswers: "Correct",
    wrongAnswers: "Incorrect",
    total: "Total",
  },

  scores: {
    yourScores: "Your scores",
    trackProgress: "Track your progress",
    noScores: "No scores recorded",
    playQuiz: "Start a quiz to see your results",
    bestScores: "Best results",
    goodAnswers: "correct answers",
    history: "History",
  },

  settings: {
    title: "Settings",
    appearance: "Appearance",
    darkMode: "Dark mode",
    enabled: "Enabled",
    disabled: "Disabled",
    languageSection: "Language",
    languageDesc: "Choose the language of the app and its content",
    aboutApp: "About the app",
    account: "Account",
    logout: "Log out",
    deleteAccount: "Delete my account",
    deleteDialogTitle: "Delete the account?",
    deleteDialogDesc: "This action is irreversible. All your data and scores will be permanently deleted.",
  },

  maps: {
    badge: "Illustrated Biblical Atlas",
    title: "Biblical Geography",
    subtitle: "Explore the holy places through the major periods of biblical history",
  },

  divineNames: {
    badge: "The Names of God",
    title: "Names of God",
    subtitle: "Explore the divine names of the Bible and their meaning",
    searchPlaceholder: "Search for a name...",
    meaning: "Meaning",
    usage: "Biblical usage",
    references: "References",
    occurrences: "Occurrences",
    pronunciationNoteTitle: "Note on pronunciation:",
    noResult: "No name found",
  },

  jewishLife: {
    badge: "Culture & Tradition",
    title: "Social & Cultural Life of the Jews",
    subtitle: "Festivals, calendar, currency, measurements and clothing — the daily and ritual life of the Hebrew people in the Bible",
    translating: "Translation in progress",
    sections: {
      fetes: "Festivals & Sabbath",
      mois: "Calendar & Months",
      monnaie: "Currency & Trade",
      mesures: "Weights, Lengths & Volumes",
      symbolique: "Symbolism of Numbers",
      quantites: "Measures of Quantity",
      vetements: "Clothing & Attire",
    },
  },

  wesley: {
    tagline: "Methodist Heritage · 18th century",
    subtitle: "Discover the life, work and hymns of John & Charles Wesley — founders of the Methodist revival",
    quote: "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as you can.",
    quoteAuthor: "— John Wesley",
    statSermons: "Sermons preached",
    statHymns: "Hymns written",
    statKm: "km travelled",
    statMethodists: "Methodists worldwide",
    nav: {
      home: "Home",
      john: "John",
      charles: "Charles",
      parents: "Parents",
      hymns: "Hymns",
      sermons: "Sermons",
      travels: "Travels",
    },
    home: {
      john: {
        title: "John Wesley",
        subtitle: "Preacher, theologian, founder",
        fact: "40,000 sermons preached, 400,000 km travelled",
      },
      charles: {
        title: "Charles Wesley",
        subtitle: "Poet, hymn writer, evangelist",
        fact: "6,500 hymns written",
      },
      parents: {
        title: "Samuel & Susanna",
        subtitle: "The remarkable parents",
        fact: "19 children, a revolutionary upbringing",
      },
      hymns: {
        title: "Hymns",
        subtitle: "Charles's musical legacy",
        fact: "Among the greatest songs of the Church",
      },
      sermons: {
        title: "Sermons",
        subtitle: "The 44 standard sermons",
        fact: "The theological foundation of Methodism",
      },
      travels: {
        title: "Travels",
        subtitle: "The map of 400,000 km",
        fact: "Mostly on horseback across Great Britain",
      },
    },
  },

  auth: {
    welcome: "Welcome to Biblia-Quiz",
    tagline: "Explore and deepen your knowledge of the Bible.",
    phoneLabel: "Phone number",
    phonePlaceholder: "Ex: +225 07 00 00 00 00",
    phoneHelp: "Enter your number with the country code (ex: +225 for the Ivory Coast). This number serves as a unique identifier for the app and your payments.",
    errorEmpty: "Please enter your phone number.",
    errorInvalid: "Invalid phone number format (ex: +2250700000000).",
    errorGeneric: "An error occurred while signing in. Please try again.",
    login: "Sign in",
    loggingIn: "Signing in...",
  },

  payment: {
    badge: "Biblia-Quiz Premium Access",
    title: "Unlock the Wisdom",
    subtitle: "Join fellow Bible enthusiasts and deepen your knowledge with our complete experience.",
    oneTime: "One-time payment",
    currency: "XOF",
    securePayment: "Secure payment via {provider} (Wave, Orange, MTN, Moov, Djamo, etc.)",
    unlockNow: "Unlock now",
    redirecting: "Redirecting...",
    checkPayment: "Verify my payment",
    checking: "Verifying...",
    errorServer: "An error occurred while connecting to the payment server. Please try again.",
    errorStatus: "Unable to verify the status. Please try again.",
    connectedAs: "Signed in as:",
    logout: "Log out",
    checkingPaymentStatus: "Checking your payment status...",
    features: {
      categories: {
        title: "All categories unlocked",
        desc: "Access more than 1,000 questions (Old/New Testament, Wesley, Jewish Social Life).",
      },
      maps: {
        title: "Interactive biblical maps",
        desc: "Visualize Paul's travels, the Exodus and the holy places in high resolution.",
      },
      scores: {
        title: "Score tracking & progression",
        desc: "Save your scores, compare your performances and measure your progress.",
      },
      noAds: {
        title: "Lifetime access without ads",
        desc: "Pay once and enjoy all future updates for free.",
      },
    },
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdate: "Last update: {date}",
    lastUpdateDate: "July 2026",
    s1Title: "1. Information collection",
    s1Body: "We only collect the information necessary for the app to work: your phone number (for authentication), your username, and your quiz results (scores, progress). No sensitive data is collected without your explicit consent.",
    s2Title: "2. Use of data",
    s2Intro: "Your information is used to:",
    s2Item1: "Identify you and secure your account",
    s2Item2: "Save your progress and your scores",
    s2Item3: "Improve the user experience",
    s2Item4: "Allow you to take part in the leaderboard",
    s3Title: "3. Data sharing",
    s3Body: "We do not share any of your personal data with third parties. Your information remains strictly confidential and is used only within the scope of the Biblia-Quiz app.",
    s4Title: "4. Security",
    s4Body: "We implement technical and organizational security measures to protect your data against any unauthorized access, alteration, disclosure or destruction.",
    s5Title: "5. Data retention",
    s5Body: "Your data is kept as long as your account is active. You can request the deletion of your account and all your data at any time from the Settings page.",
    s6Title: "6. Your rights",
    s6Body: "In accordance with applicable regulations, you have the right to access, rectify and delete your data. To exercise these rights, contact us at the address indicated below.",
    s7Title: "7. Contact",
    s7Body: "For any question regarding this privacy policy, you can contact us via the Settings page of the app.",
  },

  about: {
    title: "About the app",
    tagline: "The wisdom of the Bible, one question away",
    intro: "Welcome to Biblia-Quiz, an app dedicated to the Word of God. It invites you to explore the Bible through interactive quizzes on the Old and New Testaments, to practice on characters, verses and biblical places, and to progress in your knowledge of the Scriptures at your own pace.",
    featuresTitle: "What you will find in the app",
    featuresIntro: "Rich, structured content to deepen your knowledge of the Bible:",
    designersTitle: "The Designers",
    designersIntro: "Behind this app is a vision guided by faith and excellence, carried by a passionate team:",
    closing: "We hope Biblia-Quiz accompanies you in discovering and deepening your understanding of the Word of God, alone or with your family.",
    copyright: "© {year} Biblia-Quiz. All rights reserved.",
    features: {
      quiz: {
        title: "Varied biblical quizzes",
        desc: "7 categories and more than 1,300 questions covering the Old and New Testaments: biblical characters, verses and citations, prophecies, geography and chronology.",
      },
      scores: {
        title: "Scores & Progression",
        desc: "Three difficulty levels (beginner, intermediate, expert) and tracking of your results to measure your progress in each game.",
      },
      maps: {
        title: "Biblical maps",
        desc: "A space to discover the holy places and lands of the Bible and better visualize the biblical narratives.",
      },
      names: {
        title: "Names of God & Jewish social life",
        desc: "Dedicated sections to deepen your understanding of the names of God and the traditions of Jewish social life, as closely as possible to the biblical text.",
      },
    },
    designers: {
      amos: {
        role: "Designer & Designer",
        desc: "He imagines and shapes the visual identity as well as the user experience, ensuring that every interface offers a clean, intuitive framework conducive to learning.",
      },
      jean: {
        role: "Developer & Designer",
        desc: "He brings this vision to life by designing the technical architecture and developing the app's features, guaranteeing smooth, stable and secure navigation.",
      },
    },
  },

  notFound: {
    title: "Page not found",
    body: "The page « {page} » could not be found in this app.",
    home: "Back to home",
  },
};
