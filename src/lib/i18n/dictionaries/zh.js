// Dictionnaire maître (français) de l'interface.
// Chaque autre langue (src/lib/i18n/dictionaries/<code>.js) doit reprendre
// exactement la même structure de clés. La clé de traduction est le chemin
// pointé, ex. "nav.home".
export default {
  common: {
    back: "返回",
    cancel: "取消",
    close: "关闭",
    loading: "加载中...",
    retry: "重试",
    delete: "删除",
    confirm: "确认",
    search: "搜索...",
    language: "语言",
  },

  nav: {
    home: "首页",
    maps: "地图",
    divineName: "圣名",
    jewishLife: "犹太生活",
    scores: "分数",
    settings: "设置",
    tagline: "测试你的知识",
    privacy: "隐私政策",
    about: "关于",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Wesley 传承",
  },

  home: {
    badge: "测试你的圣经知识",
    title: "Biblia-Quiz",
    subtitle: "通过旧约与新约的互动问答探索圣经",
    statCategories: "分类",
    statQuestions: "题目",
    statWisdom: "智慧",
    questionsCount: "{count} 道题",
    chooseLevel: "选择难度 →",
  },

  categories: {
    ancien_testament: {
      name: "旧约",
      description: "犹太信仰的奠基性故事",
    },
    nouveau_testament: {
      name: "新约",
      description: "耶稣的生平与使徒文献",
    },
    personnages: {
      name: "圣经人物",
      description: "圣经中的伟大英雄与人物",
    },
    versets: {
      name: "经文与名句",
      description: "重温经典段落与名言",
    },
    propheties: {
      name: "预言",
      description: "先知的宣告与应验",
    },
    geographie: {
      name: "圣经地理",
      description: "圣经中的圣地与土地",
    },
    chronologie: {
      name: "年代顺序",
      description: "按时间先后展开的圣经历史",
    },
  },

  difficulty: {
    debutant: "🌱 入门",
    debutantDesc: "适合起步的简单题目",
    intermediaire: "📖 进阶",
    intermediaireDesc: "适合熟悉圣经的读者",
    expert: "🔥 专家",
    expertDesc: "为爱好者准备的挑战题",
    chooseLevel: "选择你的难度等级",
  },

  quiz: {
    nextQuestion: "下一题",
    seeResults: "查看结果",
    progress: "第 {n} 题，共 {total} 题",
    correctTitle: "✨ 太棒了！",
    goodToKnow: "📖 小知识：",
    categoryNotFound: "未找到该分类",
  },

  results: {
    exceptional: "表现出色！",
    exceptionalSub: "满分",
    veryGood: "非常棒！",
    veryGoodSub: "表现优异",
    notBad: "还不错！",
    notBadSub: "继续加油",
    keepGoing: "下次再来！",
    keepGoingSub: "再挑战一次吧",
    resultsNotFound: "未找到结果",
    restart: "重新开始",
    otherCategories: "其他分类",
    correctAnswers: "正确",
    wrongAnswers: "错误",
    total: "总计",
  },

  scores: {
    yourScores: "你的分数",
    trackProgress: "追踪你的进步",
    noScores: "暂无记录",
    playQuiz: "开始一场问答，看看你的成绩",
    bestScores: "最佳成绩",
    goodAnswers: "答对",
    history: "历史记录",
  },

  settings: {
    title: "设置",
    appearance: "外观",
    darkMode: "深色模式",
    enabled: "已开启",
    disabled: "已关闭",
    languageSection: "语言",
    languageDesc: "选择应用及其内容的显示语言",
    aboutApp: "关于应用",
    account: "账户",
    logout: "退出登录",
    deleteAccount: "注销我的账户",
    deleteDialogTitle: "注销账户？",
    deleteDialogDesc: "此操作不可撤销。你的全部数据和分数将被永久删除。",
  },

  maps: {
    badge: "圣经图解地图集",
    title: "圣经地理",
    subtitle: "沿着圣经历史的各个时期探索圣地",
  },

  divineNames: {
    badge: "上帝的名字",
    title: "上帝的名字",
    subtitle: "探索圣经中的各个神名及其含义",
    searchPlaceholder: "搜索名字...",
    meaning: "含义",
    usage: "圣经中的用法",
    references: "出处",
    occurrences: "出现次数",
    pronunciationNoteTitle: "发音说明：",
    noResult: "未找到相关名字",
  },

  jewishLife: {
    badge: "文化与传统",
    title: "犹太人的社会与文化生活",
    subtitle: "节期、历法、货币、度量衡与服饰——圣经中希伯来民族的日常生活与礼仪",
    translating: "翻译中",
    sections: {
      fetes: "节期与安息日",
      mois: "历法与月份",
      monnaie: "货币与商业",
      mesures: "重量、长度与容量",
      symbolique: "数字的象征",
      quantites: "数量度量",
      vetements: "服饰与装束",
    },
  },

  wesley: {
    tagline: "卫理公会传承 · 18世纪",
    subtitle: "了解约翰·卫斯理与查尔斯·卫斯理的生活、著作与圣歌——卫理复兴运动的奠基人",
    quote: "在一切可能的时候，用一切可能的方式，在一切可能的地方，向一切可能的人，尽可能长久地行一切善事。",
    quoteAuthor: "— 约翰·卫斯理",
    statSermons: "讲道次数",
    statHymns: "创作圣歌",
    statKm: "行走公里",
    statMethodists: "全球卫理公会信徒",
    nav: {
      home: "首页",
      john: "约翰",
      charles: "查尔斯",
      parents: "父母",
      hymns: "圣歌",
      sermons: "讲道",
      travels: "旅行",
    },
    home: {
      john: {
        title: "约翰·卫斯理",
        subtitle: "传道者、神学家、创始人",
        fact: "讲道 40,000 篇，行走 400,000 公里",
      },
      charles: {
        title: "查尔斯·卫斯理",
        subtitle: "诗人、圣诗作者、传道者",
        fact: "创作 6,500 首圣歌",
      },
      parents: {
        title: "塞缪尔与苏珊娜",
        subtitle: "了不起的父母",
        fact: "19 个孩子，颠覆性的教育方式",
      },
      hymns: {
        title: "圣歌",
        subtitle: "查尔斯的音乐遗产",
        fact: "教会最伟大的诗歌之一",
      },
      sermons: {
        title: "讲道",
        subtitle: "44 篇标准讲道",
        fact: "卫理教义的根基",
      },
      travels: {
        title: "旅行",
        subtitle: "400,000 公里的足迹",
        fact: "主要骑马穿越大不列颠",
      },
    },
  },

  auth: {
    welcome: "欢迎来到 Biblia-Quiz",
    tagline: "探索并深化你对圣经的认识。",
    phoneLabel: "手机号码",
    phonePlaceholder: "例：+225 07 00 00 00 00",
    phoneHelp: "请输入带国家区号的号码（例：+225 代表科特迪瓦）。该号码将作为你在应用中的唯一标识，也用于支付。",
    errorEmpty: "请输入你的手机号码。",
    errorInvalid: "手机号码格式无效（例：+2250700000000）。",
    errorGeneric: "登录时发生错误，请重试。",
    login: "登录",
    loggingIn: "登录中...",
  },

  payment: {
    badge: "Biblia-Quiz 高级版",
    title: "解锁智慧",
    subtitle: "加入圣经爱好者的行列，用我们完整的内容体系深化你的知识。",
    oneTime: "一次性付费",
    currency: "XOF",
    securePayment: "通过 {provider} 安全支付（Wave、Orange、MTN、Moov、Djamo 等）",
    unlockNow: "立即解锁",
    redirecting: "跳转中...",
    checkPayment: "核对我的支付",
    checking: "核对中...",
    errorServer: "连接支付服务器时发生错误，请重试。",
    errorStatus: "无法核实状态，请重试。",
    connectedAs: "当前登录为：",
    logout: "退出登录",
    checkingPaymentStatus: "正在核实你的支付状态...",
    features: {
      categories: {
        title: "解锁全部分类",
        desc: "畅享 1000 多道题目（旧约/新约、卫理、犹太社会生活）。",
      },
      maps: {
        title: "互动圣经地图",
        desc: "以高清画质浏览保罗的旅程、出埃及之路与各处圣地。",
      },
      scores: {
        title: "分数与进度追踪",
        desc: "记录你的分数，比较表现，衡量你的进步。",
      },
      noAds: {
        title: "永久去广告",
        desc: "一次付费，免费享受今后的所有更新。",
      },
    },
  },

  privacy: {
    title: "隐私政策",
    lastUpdate: "最后更新：{date}",
    lastUpdateDate: "2026年7月",
    s1Title: "1. 信息收集",
    s1Body: "我们仅收集应用运行所必需的信息：你的手机号码（用于身份验证）、用户名，以及问答成绩（分数、进度）。未经你明确同意，我们不会收集任何敏感数据。",
    s2Title: "2. 数据使用",
    s2Intro: "你的信息用于：",
    s2Item1: "识别你的身份并保障账户安全",
    s2Item2: "保存你的进度和分数",
    s2Item3: "优化用户体验",
    s2Item4: "让你参与排行榜",
    s3Title: "3. 数据共享",
    s3Body: "我们不会与第三方共享你的任何个人数据。你的信息严格保密，仅在 Biblia-Quiz 应用范围内使用。",
    s4Title: "4. 安全性",
    s4Body: "我们采取技术与管理双重安全措施，防止你的数据被未授权访问、篡改、泄露或销毁。",
    s5Title: "5. 数据保留",
    s5Body: "在账户有效期间，我们会保留你的数据。你可以随时在设置页面申请删除账户及全部数据。",
    s6Title: "6. 你的权利",
    s6Body: "根据适用法规，你有权访问、更正和删除自己的数据。如需行使这些权利，请通过下方地址联系我们。",
    s7Title: "7. 联系我们",
    s7Body: "如对本隐私政策有任何疑问，可通过应用的设置页面联系我们。",
  },

  about: {
    title: "关于应用",
    tagline: "圣经的智慧，一问即得",
    intro: "欢迎来到 Biblia-Quiz，这是一款专注于神的话语的应用。它邀请你通过旧约与新约的互动问答探索圣经，练习圣经人物、经文与地点，并按自己的节奏加深对圣经的了解。",
    featuresTitle: "你将在应用中看到",
    featuresIntro: "内容丰富、条理清晰，助你深入认识圣经：",
    designersTitle: "设计团队",
    designersIntro: "这款应用背后是一份以信仰与卓越为指引的愿景，由一支充满热情的团队全力实现：",
    closing: "我们希望 Biblia-Quiz 陪你独自或与家人一起发现并领受神的话语。",
    copyright: "© {year} Biblia-Quiz. 版权所有。",
    features: {
      quiz: {
        title: "丰富多样的圣经问答",
        desc: "7 大分类、1300 多道题目，涵盖旧约与新约：圣经人物、经文与名句、预言、地理与年代顺序。",
      },
      scores: {
        title: "分数与进度",
        desc: "三种难度（入门、进阶、专家），并追踪每局成绩，衡量你的进步。",
      },
      maps: {
        title: "圣经地图",
        desc: "探索圣地与圣经土地的专区，帮助你更直观地理解圣经故事。",
      },
      names: {
        title: "上帝的名字与犹太社会生活",
        desc: "专门的章节，深入了解上帝的名字和犹太社会生活的传统，紧贴圣经文本。",
      },
    },
    designers: {
      amos: {
        role: "产品构思与设计",
        desc: "他构想并塑造应用的视觉识别与用户体验，确保每个界面都简洁直观、有助于学习。",
      },
      jean: {
        role: "开发与设计",
        desc: "他通过设计技术架构、开发应用功能，让这份愿景落地，保证导航流畅、稳定且安全。",
      },
    },
  },

  notFound: {
    title: "页面未找到",
    body: "在此应用中找不到页面「{page}」。",
    home: "返回首页",
  },
};
