// Dicionário mestre (português) da interface.
// Cada outro idioma (src/lib/i18n/dictionaries/<code>.js) deve ter
// exatamente a mesma estrutura de chaves. A chave de tradução é o caminho
// pontuado, ex. "nav.home".
export default {
  common: {
    back: "Voltar",
    cancel: "Cancelar",
    close: "Fechar",
    loading: "Carregando...",
    retry: "Tentar novamente",
    delete: "Excluir",
    confirm: "Confirmar",
    search: "Pesquisar...",
    language: "Idioma",
  },

  nav: {
    home: "Início",
    maps: "Mapas",
    divineName: "Nomes",
    jewishLife: "Vida Judaica",
    scores: "Pontuações",
    settings: "Definições",
    tagline: "Teste seus conhecimentos",
    privacy: "Política de Privacidade",
    about: "Sobre",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Herança Wesley",
  },

  home: {
    badge: "Teste seus conhecimentos bíblicos",
    title: "Biblia-Quiz",
    subtitle: "Explore a Bible através de quizzes interativos sobre o Antigo e o Novo Testamento",
    statCategories: "Categorias",
    statQuestions: "Perguntas",
    statWisdom: "Sabedoria",
    questionsCount: "{count} perguntas",
    chooseLevel: "Escolher nível →",
  },

  categories: {
    ancien_testament: {
      name: "Antigo Testamento",
      description: "Os relatos fundadores da fé hebraica",
    },
    nouveau_testament: {
      name: "Novo Testamento",
      description: "A vida de Jesus e os escritos apostólicos",
    },
    personnages: {
      name: "Personagens Bíblicos",
      description: "Os grandes heróis e figuras da Bible",
    },
    versets: {
      name: "Versículos & Citações",
      description: "Encontre passagens e citações famosas",
    },
    propheties: {
      name: "Profecias",
      description: "Os anúncios e cumprimentos proféticos",
    },
    geographie: {
      name: "Geografia Bíblica",
      description: "Os lugares santos e as terras da Bíblia",
    },
    chronologie: {
      name: "Cronologia",
      description: "A história bíblica na ordem dos tempos",
    },
  },

  difficulty: {
    debutant: "🌱 Iniciante",
    debutantDesc: "Perguntas simples para começar",
    intermediaire: "📖 Intermediário",
    intermediaireDesc: "Para quem conhece bem a Bíblia",
    expert: "🔥 Expert",
    expertDesc: "Perguntas difíceis para os entusiastas",
    chooseLevel: "Escolha o seu nível de dificuldade",
  },

  quiz: {
    nextQuestion: "Próxima pergunta",
    seeResults: "Ver resultados",
    progress: "Pergunta {n} de {total}",
    correctTitle: "✨ Excelente!",
    goodToKnow: "📖 Bom saber:",
    categoryNotFound: "Categoria não encontrada",
  },

  results: {
    exceptional: "Excepcional!",
    exceptionalSub: "Pontuação perfeita",
    veryGood: "Muito bem!",
    veryGoodSub: "Excelente trabalho",
    notBad: "Nada mal!",
    notBadSub: "Continue se esforçando",
    keepGoing: "Até breve!",
    keepGoingSub: "Tente novamente",
    resultsNotFound: "Resultados não encontrados",
    restart: "Recomeçar",
    otherCategories: "Outras categorias",
    correctAnswers: "Corretas",
    wrongAnswers: "Incorretas",
    total: "Total",
  },

  scores: {
    yourScores: "Suas pontuações",
    trackProgress: "Acompanhe seu progresso",
    noScores: "Nenhuma pontuação registrada",
    playQuiz: "Comece um quiz para ver seus resultados",
    bestScores: "Melhores resultados",
    goodAnswers: "boas respostas",
    history: "Histórico",
  },

  settings: {
    title: "Definições",
    appearance: "Aparência",
    darkMode: "Modo escuro",
    enabled: "Ativado",
    disabled: "Desativado",
    languageSection: "Idioma",
    languageDesc: "Escolha o idioma do aplicativo e do seu conteúdo",
    aboutApp: "Sobre o aplicativo",
    account: "Conta",
    logout: "Sair",
    deleteAccount: "Excluir minha conta",
    deleteDialogTitle: "Excluir a conta?",
    deleteDialogDesc: "Esta ação é irreversível. Todos os seus dados e pontuações serão excluídos definitivamente.",
  },

  maps: {
    badge: "Atlas Bíblico Ilustrado",
    title: "Geografia Bíblica",
    subtitle: "Explore os lugares santos ao longo das grandes etapas da história bíblica",
  },

  divineNames: {
    badge: "Os Nomes de Deus",
    title: "Nomes de Deus",
    subtitle: "Explore os nomes divinos da Bíblia e o seu significado",
    searchPlaceholder: "Pesquisar um nome...",
    meaning: "Significado",
    usage: "Uso bíblico",
    references: "Referências",
    occurrences: "Ocorrências",
    pronunciationNoteTitle: "Nota sobre a pronúncia:",
    noResult: "Nenhum nome encontrado",
  },

  jewishLife: {
    badge: "Cultura & Tradição",
    title: "Vida Social & Cultural dos Judeus",
    subtitle: "Festas, calendário, moeda, medidas e vestuário — o cotidiano e o ritual do povo hebreu na Bíblia",
    translating: "Tradução em andamento",
    sections: {
      fetes: "Festas & Shabat",
      mois: "Calendário & Meses",
      monnaie: "Moeda & Comércio",
      mesures: "Pesos, Comprimentos & Volumes",
      symbolique: "Significado dos Números",
      quantites: "Medidas de Quantidade",
      vetements: "Roupas & Vestes",
    },
  },

  wesley: {
    tagline: "Herança Metodista · Século 18",
    subtitle: "Conheça a vida, a obra e os hinos de John & Charles Wesley — fundadores do Despertar Metodista",
    quote: "Faça todo o bem que puder, por todos os meios que puder, de todas as maneiras que puder, em todos os lugares que puder, a todas as horas que puder, a todas as pessoas que puder, pelo tempo que puder.",
    quoteAuthor: "— John Wesley",
    statSermons: "Sermões pregados",
    statHymns: "Hinos compuestos",
    statKm: "km percorridos",
    statMethodists: "Metodistas no mundo",
    nav: {
      home: "Início",
      john: "John",
      charles: "Charles",
      parents: "Pais",
      hymns: "Hinos",
      sermons: "Sermões",
      travels: "Viagens",
    },
    home: {
      john: {
        title: "John Wesley",
        subtitle: "Pregador, teólogo, fundador",
        fact: "40 000 sermões pregados, 400 000 km percorridos",
      },
      charles: {
        title: "Charles Wesley",
        subtitle: "Poeta, hineiro, evangelista",
        fact: "6 500 hinos compuestos",
      },
      parents: {
        title: "Samuel & Susanna",
        subtitle: "Os pais extraordinários",
        fact: "19 filhos, uma educação revolucionária",
      },
      hymns: {
        title: "Hinos",
        subtitle: "A herança musical de Charles",
        fact: "Entre os maiores cantos da Igreja",
      },
      sermons: {
        title: "Sermões",
        subtitle: "Os 44 sermões padrão",
        fact: "A base teológica do Metodismo",
      },
      travels: {
        title: "Viagens",
        subtitle: "O mapa dos 400 000 km",
        fact: "Principalmente a cavalo pela Grã-Bretanha",
      },
    },
  },

  auth: {
    welcome: "Bem-vindo ao Biblia-Quiz",
    tagline: "Explore e aprofunde seus conhecimentos da Bíblia.",
    phoneLabel: "Número de telefone",
    phonePlaceholder: "Ex: +225 07 00 00 00 00",
    phoneHelp: "Digite seu número com o indicativo do país (ex: +225 para a Costa do Marfim). Este número serve de identificador único para o aplicativo e seus pagamentos.",
    errorEmpty: "Por favor, insira seu número de telefone.",
    errorInvalid: "Formato de número de telefone inválido (ex: +2250700000000).",
    errorGeneric: "Ocorreu um erro durante o login. Tente novamente.",
    login: "Entrar",
    loggingIn: "Entrando...",
  },

  payment: {
    badge: "Acesso Premium Biblia-Quiz",
    title: "Desbloqueie a Sabedoria",
    subtitle: "Junte-se aos apaixonados pela Bible e aprofunde seus conhecimentos com a nossa experiência completa.",
    oneTime: "Pagamento único",
    currency: "XOF",
    securePayment: "Pagamento seguro via {provider} (Wave, Orange, MTN, Moov, Djamo, etc.)",
    unlockNow: "Desbloquear agora",
    redirecting: "Redirecionando...",
    checkPayment: "Verificar meu pagamento",
    checking: "Verificando...",
    errorServer: "Ocorreu um erro ao conectar ao servidor de pagamento. Tente novamente.",
    errorStatus: "Não foi possível verificar o status. Tente novamente.",
    connectedAs: "Conectado como:",
    logout: "Sair",
    checkingPaymentStatus: "Verificando o status do seu pagamento...",
    features: {
      categories: {
        title: "Todas as categorias desbloqueadas",
        desc: "Acesse mais de 1000 perguntas (Antigo/Novo Testamento, Wesley, Vida Judaica).",
      },
      maps: {
        title: "Mapas bíblicos interativos",
        desc: "Visualize as viagens de Paulo, o Êxodo e os lugares santos em alta resolução.",
      },
      scores: {
        title: "Acompanhamento de pontuações & progresso",
        desc: "Registre suas pontuações, compare seu desempenho e meça seu progresso.",
      },
      noAds: {
        title: "Acesso vitalício sem anúncios",
        desc: "Pague uma única vez e aproveite gratuitamente de todas as atualizações futuras.",
      },
    },
  },

  privacy: {
    title: "Política de Privacidade",
    lastUpdate: "Última atualização: {date}",
    lastUpdateDate: "julho de 2026",
    s1Title: "1. Coleta de informações",
    s1Body: "Coletamos apenas as informações necessárias ao funcionamento do aplicativo: seu número de telefone (para autenticação), seu nome de usuário e seus resultados nos quizzes (pontuações, progresso). Nenhum dado sensível é coletado sem o seu consentimento explícito.",
    s2Title: "2. Uso dos dados",
    s2Intro: "Suas informações são usadas para:",
    s2Item1: "Identificá-lo e proteger sua conta",
    s2Item2: "Salvar seu progresso e suas pontuações",
    s2Item3: "Melhorar a experiência do usuário",
    s2Item4: "Permitir que você participe do ranking",
    s3Title: "3. Compartilhamento de dados",
    s3Body: "Não compartilhamos nenhum dos seus dados pessoais com terceiros. Suas informações permanecem estritamente confidenciais e são usadas somente no âmbito do aplicativo Biblia-Quiz.",
    s4Title: "4. Segurança",
    s4Body: "Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra qualquer acesso não autorizado, alteração, divulgação ou destruição.",
    s5Title: "5. Conservação dos dados",
    s5Body: "Seus dados são mantidos enquanto sua conta estiver ativa. Você pode solicitar a exclusão da sua conta e de todos os seus dados a qualquer momento na página Definições.",
    s6Title: "6. Seus direitos",
    s6Body: "Em conformidade com a regulamentação aplicável, você tem o direito de acesso, retificação e exclusão dos seus dados. Para exercer esses direitos, entre em contato conosco pelo endereço indicado abaixo.",
    s7Title: "7. Contato",
    s7Body: "Para qualquer dúvida sobre esta política de privacidade, você pode entrar em contato conosco pela página Definições do aplicativo.",
  },

  about: {
    title: "Sobre o aplicativo",
    tagline: "A sabedoria da Bíblia, a um clique de distância",
    intro: "Bem-vindo ao Biblia-Quiz, um aplicativo dedicado à Palavra de Deus. Ele convida você a explorar a Bíblia através de quizzes interativos sobre o Antigo e o Novo Testamento, a praticar sobre personagens, versículos e lugares bíblicos, e a progredir no conhecimento das Escrituras no seu próprio ritmo.",
    featuresTitle: "O que você encontrará no aplicativo",
    featuresIntro: "Um conteúdo rico e estruturado para aprofundar seu conhecimento da Bíblia:",
    designersTitle: "Os Criadores",
    designersIntro: "Atrás deste aplicativo está uma visão guiada pela fé e pela excelência, levada adiante por uma equipe Apaixonada:",
    closing: "Esperamos que o Biblia-Quiz o acompanhe na descoberta e no aprofundamento da Palavra de Deus, sozinho ou em família.",
    copyright: "© {year} Biblia-Quiz. Todos os direitos reservados.",
    features: {
      quiz: {
        title: "Quizzes bíblicos variados",
        desc: "7 categorias e mais de 1 300 perguntas cobrindo o Antigo e o Novo Testamento: personagens bíblicos, versículos e citações, profecias, geografia e cronologia.",
      },
      scores: {
        title: "Pontuações & Progresso",
        desc: "Três níveis de dificuldade (iniciante, intermediário, expert) e acompanhamento dos seus resultados para medir seus avanços a cada partida.",
      },
      maps: {
        title: "Mapas bíblicos",
        desc: "Um espaço de descoberta dos lugares santos e das terras da Bíblia para visualizar melhor os relatos bíblicos.",
      },
      names: {
        title: "Nomes de Deus & Vida social judaica",
        desc: "Seções dedicadas a aprofundar os nomes de Deus e as tradições da vida social judaica, o mais perto possível do texto bíblico.",
      },
    },
    designers: {
      amos: {
        role: "Criador & Designer",
        desc: "Ele idealiza e molda a identidade visual e a experiência do usuário, garantindo que cada interface ofereça um ambiente limpo, intuitivo e favorável à aprendizagem.",
      },
      jean: {
        role: "Desenvolvedor & Designer",
        desc: "Ele dá vida a essa visão, desenhand a arquitetura técnica e desenvolvendo os funcionalidades do aplicativo, garantindo uma navegação fluida, estável e segura.",
      },
    },
  },

  notFound: {
    title: "Página não encontrada",
    body: "A página « {page} » não foi encontrada neste aplicativo.",
    home: "Voltar para o início",
  },
};
