// Dictionnaire maître (espagnol) de l'interface.
// Chaque autre langue (src/lib/i18n/dictionaries/<code>.js) doit reprendre
// exactement la même structure de clés. La clé de traduction est le chemin
// pointé, ex. "nav.home".
export default {
  common: {
    back: "Volver",
    cancel: "Cancelar",
    close: "Cerrar",
    loading: "Cargando...",
    retry: "Reintentar",
    delete: "Eliminar",
    confirm: "Confirmar",
    search: "Buscar...",
    language: "Idioma",
  },

  nav: {
    home: "Inicio",
    maps: "Mapas",
    divineName: "Nombres",
    jewishLife: "Vida Judía",
    scores: "Puntuaciones",
    settings: "Ajustes",
    tagline: "Pon a prueba tus conocimientos",
    privacy: "Política de privacidad",
    about: "Acerca de",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Legado Wesley",
  },

  home: {
    badge: "Pon a prueba tus conocimientos bíblicos",
    title: "Biblia-Quiz",
    subtitle: "Explora la Biblia con quizzes interactivos sobre el Antiguo y el Nuevo Testamento",
    statCategories: "Categorías",
    statQuestions: "Preguntas",
    statWisdom: "Sabiduría",
    questionsCount: "{count} preguntas",
    chooseLevel: "Elegir nivel →",
  },

  categories: {
    ancien_testament: {
      name: "Antiguo Testamento",
      description: "Los relatos fundacionales de la fe hebrea",
    },
    nouveau_testament: {
      name: "Nuevo Testamento",
      description: "La vida de Jesús y los escritos apostólicos",
    },
    personnages: {
      name: "Personajes Bíblicos",
      description: "Los grandes héroes y figuras de la Biblia",
    },
    versets: {
      name: "Versículos y Citas",
      description: "Encuentra los pasajes y las citas famosas",
    },
    propheties: {
      name: "Profecías",
      description: "Los anuncios y cumplimientos proféticos",
    },
    geographie: {
      name: "Geografía Bíblica",
      description: "Los lugares sagrados y las tierras de la Biblia",
    },
    chronologie: {
      name: "Cronología",
      description: "La historia bíblica en el orden del tiempo",
    },
  },

  difficulty: {
    beginner: "🌱 Principiante",
    beginnerDesc: "Preguntas sencillas para empezar",
    intermediate: "📖 Intermedio",
    intermediateDesc: "Para quienes conocen bien la Biblia",
    expert: "🔥 Experto",
    expertDesc: "Preguntas difíciles para los aficionados",
    chooseLevel: "Elige tu nivel de dificultad",
  },

  quiz: {
    nextQuestion: "Siguiente pregunta",
    seeResults: "Ver resultados",
    progress: "Pregunta {n} de {total}",
    correctTitle: "✨ ¡Excelente!",
    goodToKnow: "📖 Dato importante:",
    categoryNotFound: "Categoría no encontrada",
  },

  results: {
    exceptional: "¡Excepcional!",
    exceptionalSub: "Puntuación perfecta",
    veryGood: "¡Muy bien!",
    veryGoodSub: "Excelente trabajo",
    notBad: "¡No está mal!",
    notBadSub: "Continúa tu esfuerzo",
    keepGoing: "¡Hasta pronto!",
    keepGoingSub: "Inténtalo de nuevo",
    resultsNotFound: "Resultados no encontrados",
    restart: "Reiniciar",
    otherCategories: "Otras categorías",
    correctAnswers: "Correctas",
    wrongAnswers: "Incorrectas",
    total: "Total",
  },

  scores: {
    yourScores: "Tus puntuaciones",
    trackProgress: "Seguimiento de tu progreso",
    noScores: "No hay puntuaciones guardadas",
    playQuiz: "Comienza un quiz para ver tus resultados",
    bestScores: "Mejores resultados",
    goodAnswers: "respuestas correctas",
    history: "Historial",
  },

  settings: {
    title: "Ajustes",
    appearance: "Apariencia",
    darkMode: "Modo oscuro",
    enabled: "Activado",
    disabled: "Desactivado",
    languageSection: "Idioma",
    languageDesc: "Elige el idioma de la aplicación y de sus contenidos",
    aboutApp: "Acerca de la aplicación",
    account: "Cuenta",
    logout: "Cerrar sesión",
    deleteAccount: "Eliminar mi cuenta",
    deleteDialogTitle: "¿Eliminar la cuenta?",
    deleteDialogDesc: "Esta acción es irreversible. Todos tus datos y puntuaciones se eliminarán definitivamente.",
  },

  maps: {
    badge: "Atlas Bíblico Ilustrado",
    title: "Geografía Bíblica",
    subtitle: "Explora los lugares sagrados a lo largo de las grandes etapas de la historia bíblica",
  },

  divineNames: {
    badge: "Los Nombres de Dios",
    title: "Nombres de Dios",
    subtitle: "Explora los nombres divinos de la Biblia y su significado",
    searchPlaceholder: "Buscar un nombre...",
    meaning: "Significado",
    usage: "Uso bíblico",
    references: "Referencias",
    occurrences: "Apariciones",
    pronunciationNoteTitle: "Nota sobre la pronunciación:",
    noResult: "No se encontró ningún nombre",
  },

  jewishLife: {
    badge: "Cultura y Tradición",
    title: "Vida Social y Cultural de los Judíos",
    subtitle: "Fiestas, calendario, moneda, medidas y vestimenta — la vida cotidiana y ritual del pueblo hebreo en la Biblia",
    translating: "Traducción en curso",
    sections: {
      fetes: "Fiestas y Shabat",
      mois: "Calendario y Meses",
      monnaie: "Moneda y Comercio",
      mesures: "Pesos, Longitudes y Volúmenes",
      symbolique: "Simbolismo de los Números",
      quantites: "Medidas de Cantidad",
      vetements: "Vestimenta y Trajes",
    },
  },

  wesley: {
    tagline: "Legado Metodista · Siglo XVIII",
    subtitle: "Descubre la vida, la obra y los himnos de John y Charles Wesley — fundadores del Despertar metodista",
    quote: "Haz todo el bien que puedas, por todos los medios que puedas, de todas las maneras que puedas, en todos los lugares que puedas, a todas las horas que puedas, a todas las personas que puedas, mientras puedas.",
    quoteAuthor: "— John Wesley",
    statSermons: "Sermones predicados",
    statHymns: "Himnos compuestos",
    statKm: "km recorridos",
    statMethodists: "Metodistas en el mundo",
    nav: {
      home: "Inicio",
      john: "Juan",
      charles: "Carlos",
      parents: "Padres",
      hymns: "Himnos",
      sermons: "Sermones",
      travels: "Viajes",
    },
    home: {
      john: {
        title: "John Wesley",
        subtitle: "Predicador, teólogo, fundador",
        fact: "40 000 sermones predicados, 400 000 km recorridos",
      },
      charles: {
        title: "Charles Wesley",
        subtitle: "Poeta, himnógrafo, evangelista",
        fact: "6 500 himnos compuestos",
      },
      parents: {
        title: "Samuel y Susanna",
        subtitle: "Los padres extraordinarios",
        fact: "19 hijos, una educación revolucionaria",
      },
      hymns: {
        title: "Himnos",
        subtitle: "El legado musical de Charles",
        fact: "Entre los mayores cantos de la Iglesia",
      },
      sermons: {
        title: "Sermones",
        subtitle: "Los 44 sermones estándar",
        fact: "La base teológica del Metodismo",
      },
      travels: {
        title: "Viajes",
        subtitle: "El mapa de los 400 000 km",
        fact: "Principalmente a caballo por Gran Bretaña",
      },
    },
  },

  auth: {
    welcome: "Bienvenido a Biblia-Quiz",
    tagline: "Explore y profundice en sus conocimientos de la Biblia.",
    phoneLabel: "Número de teléfono",
    phonePlaceholder: "Ej: +225 07 00 00 00 00",
    phoneHelp: "Introduzca su número con el prefijo del país (ej: +225 para Costa de Marfil). Este número sirve de identificador único para la aplicación y sus pagos.",
    errorEmpty: "Por favor, introduzca su número de teléfono.",
    errorInvalid: "Formato de número de teléfono no válido (ej: +2250700000000).",
    errorGeneric: "Se ha producido un error al iniciar sesión. Por favor, inténtelo de nuevo.",
    login: "Iniciar sesión",
    loggingIn: "Iniciando sesión...",
  },

  payment: {
    badge: "Acceso Premium Biblia-Quiz",
    title: "Desbloquee la Sabiduría",
    subtitle: "Únase a los aficionados de la Biblia y profundice en sus conocimientos con nuestra experiencia completa.",
    oneTime: "Pago único",
    currency: "XOF",
    securePayment: "Pago seguro a través de {provider} (Wave, Orange, MTN, Moov, Djamo, etc.)",
    unlockNow: "Desbloquear ahora",
    redirecting: "Redirigiendo...",
    checkPayment: "Verificar mi pago",
    checking: "Verificando...",
    errorServer: "Se ha producido un error al conectar con el servidor de pagos. Por favor, inténtelo de nuevo.",
    errorStatus: "No se ha podido verificar el estado. Por favor, inténtelo de nuevo.",
    connectedAs: "Conectado como:",
    logout: "Cerrar sesión",
    checkingPaymentStatus: "Verificando el estado de su pago...",
    features: {
      categories: {
        title: "Todas las categorías desbloqueadas",
        desc: "Acceda a más de 1000 preguntas (Antiguo/Nuevo Testamento, Wesley, Vida Social Judía).",
      },
      maps: {
        title: "Mapas bíblicos interactivos",
        desc: "Visualice los viajes de Pablo, el Éxodo y los lugares sagrados en alta resolución.",
      },
      scores: {
        title: "Seguimiento de puntuaciones y progreso",
        desc: "Guarde sus puntuaciones, compare su rendimiento y mida su progreso.",
      },
      noAds: {
        title: "Acceso de por vida sin publicidad",
        desc: "Pague una sola vez y disfrute gratis de todas las actualizaciones futuras.",
      },
    },
  },

  privacy: {
    title: "Política de privacidad",
    lastUpdate: "Última actualización: {date}",
    lastUpdateDate: "julio de 2026",
    s1Title: "1. Recopilación de información",
    s1Body: "Recopilamos únicamente la información necesaria para el funcionamiento de la aplicación: su número de teléfono (para la autenticación), su nombre de usuario y sus resultados de los quizzes (puntuaciones, progreso). No se recopilan datos sensibles sin su consentimiento explícito.",
    s2Title: "2. Uso de los datos",
    s2Intro: "Su información se utiliza para:",
    s2Item1: "Identificarle y proteger su cuenta",
    s2Item2: "Guardar su progreso y sus puntuaciones",
    s2Item3: "Mejorar la experiencia del usuario",
    s2Item4: "Permitirle participar en la clasificación",
    s3Title: "3. Compartir datos",
    s3Body: "No compartimos ninguno de sus datos personales con terceros. Su información es estrictamente confidencial y solo se utiliza dentro de la aplicación Biblia-Quiz.",
    s4Title: "4. Seguridad",
    s4Body: "Aplicamos medidas de seguridad técnicas y organizativas para proteger sus datos frente a cualquier acceso no autorizado, alteración, divulgación o destrucción.",
    s5Title: "5. Conservación de los datos",
    s5Body: "Sus datos se conservan mientras su cuenta esté activa. Puede solicitar la eliminación de su cuenta y de todos sus datos en cualquier momento desde la página Ajustes.",
    s6Title: "6. Sus derechos",
    s6Body: "De conformidad con la normativa aplicable, usted dispone de derechos de acceso, rectificación y supresión de sus datos. Para ejercer estos derechos, contacte con nosotros en la dirección indicada a continuación.",
    s7Title: "7. Contacto",
    s7Body: "Para cualquier duda sobre esta política de privacidad, puede ponerse en contacto con nosotros a través de la página Ajustes de la aplicación.",
  },

  about: {
    title: "Acerca de la aplicación",
    tagline: "La sabiduría de la Biblia, al alcance de una pregunta",
    intro: "Bienvenido a Biblia-Quiz, una aplicación dedicada a la Palabra de Dios. Le invita a explorar la Biblia a través de quizzes interactivos sobre el Antiguo y el Nuevo Testamento, a practicar con los personajes, los versículos y los lugares bíblicos, y a progresar en el conocimiento de las Escrituras a su propio ritmo.",
    featuresTitle: "Lo que encontrará en la aplicación",
    featuresIntro: "Un contenido rico y estructurado para profundizar en su conocimiento de la Biblia:",
    designersTitle: "Los Diseñadores",
    designersIntro: "Detrás de esta aplicación hay una visión guiada por la fe y la excelencia, sostenida por un equipo apasionado:",
    closing: "Esperamos que Biblia-Quiz le acompañe en el descubrimiento y la profundización de la Palabra de Dios, en solitario o en familia.",
    copyright: "© {year} Biblia-Quiz. Todos los derechos reservados.",
    features: {
      quiz: {
        title: "Quizzes bíblicos variados",
        desc: "7 categorías y más de 1 300 preguntas que cubren el Antiguo y el Nuevo Testamento: personajes bíblicos, versículos y citas, profecías, geografía y cronología.",
      },
      scores: {
        title: "Puntuaciones y Progreso",
        desc: "Tres niveles de dificultad (principiante, intermedio, experto) y un seguimiento de sus resultados para medir su progreso en cada partida.",
      },
      maps: {
        title: "Mapas bíblicos",
        desc: "Un espacio para descubrir los lugares sagrados y las tierras de la Biblia y visualizar mejor los relatos bíblicos.",
      },
      names: {
        title: "Nombres de Dios y Vida social judía",
        desc: "Secciones dedicadas a profundizar en los nombres de Dios y en las tradiciones de la vida social judía, lo más cerca posible del texto bíblico.",
      },
    },
    designers: {
      amos: {
        role: "Diseñador y Conceptualizador",
        desc: "Imagina y da forma la identidad visual así como la experiencia de usuario, velando por que cada interfaz ofrezca un marco limpio, intuitivo y propicio para el aprendizaje.",
      },
      jean: {
        role: "Desarrollador y Diseñador",
        desc: "Inyecta vida a esta visión diseñando la arquitectura técnica y desarrollando las funcionalidades de la aplicación, garantizando una navegación fluida, estable y segura.",
      },
    },
  },

  notFound: {
    title: "Página no encontrada",
    body: "La página « {page} » no se encuentra en esta aplicación.",
    home: "Volver al inicio",
  },
};
