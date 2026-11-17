// Dictionnaire maître (kiswahili) de l'interface.
// Chaque autre langue (src/lib/i18n/dictionaries/<code>.js) doit reprendre
// exactement la même structure de clés. La clé de traduction est le chemin
// pointé, ex. "nav.home".
export default {
  common: {
    back: "Rudi",
    cancel: "Ghairi",
    close: "Funga",
    loading: "Inapakia...",
    retry: "Jaribu tena",
    delete: "Futa",
    confirm: "Thibitisha",
    search: "Tafuta...",
    language: "Lugha",
  },

  nav: {
    home: "Mwanzo",
    maps: "Mapa",
    divineName: "Majina",
    jewishLife: "Maisha ya Kiyahudi",
    scores: "Alama za Alifu",
    settings: "Mipangilio",
    tagline: "Jaribu maarifa yako",
    privacy: "Kanuni za Faragha",
    about: "Kuhusu",
    wesleyTitle: "Wesley Heritage",
    wesleyTagline: "Urithi wa Wesley",
  },

  home: {
    badge: "Jaribu maarifa yako ya Biblia",
    title: "Biblia-Quiz",
    subtitle: "Chunguza Biblia kupitia micquiz ya kuingiliano kuhusu<Testamento la Kale na Testamento Jipya",
    statCategories: "Makundi",
    statQuestions: "Maswali",
    statWisdom: "Hekima",
    questionsCount: "Maswali {count}",
    chooseLevel: "Chagua ngazi →",
  },

  categories: {
    ancien_testament: {
      name: "Testamento la Kale",
      description: "Simu za kuanzisha imani ya Kiyahudi",
    },
    nouveau_testament: {
      name: "Testamento Jipya",
      description: "Maisha ya Yesu na maandishi ya mitume",
    },
    personnages: {
      name: "Wahusika wa Biblia",
      description: "Washujaa wakuu na wahusika wa Biblia",
    },
    versets: {
      name: "Verses & Manukuu",
      description: "Tafuta mafungu na manukuu maarufu",
    },
    propheties: {
      name: "Mashauri",
      description: "Tangazo la unabii na ukamilifu wake",
    },
    geographie: {
      name: "Jiografia ya Biblia",
      description: "Mahali takatifu na ardhi za Biblia",
    },
    chronologie: {
      name: "Mtiririko wa Wakati",
      description: "Historia ya Biblia kwa mpangilio wa muda",
    },
  },

  difficulty: {
    beginner: "🌱 Mwanzo",
    beginnerDesc: "Maswali rahisi kuanza",
    intermediate: "📖 Wastani",
    intermediateDesc: "Kwa wanaojua Biblia vizuri",
    expert: "🔥 Mtaalamu",
    expertDesc: "Maswali magumu kwa wapenzi wa Biblia",
    chooseLevel: "Chagua ngazi yako ya ugumu",
  },

  quiz: {
    nextQuestion: "Swali linalofuata",
    seeResults: "Ona matokeo",
    progress: "Swali {n} kati ya {total}",
    correctTitle: "✨ Bora sana!",
    goodToKnow: "📖 Jua la kujua:",
    categoryNotFound: "Makundi hayakupatikana",
  },

  results: {
    exceptional: "Bora sana!",
    exceptionalSub: "Alifu kamili",
    veryGood: "Nzuri sana!",
    veryGoodSub: "Kazi nzuri sana",
    notBad: "Si mbaya!",
    notBadSub: "Endelea na juhudi",
    keepGoing: "Tutakutana tena!",
    keepGoingSub: "Jaribu tena",
    resultsNotFound: "Matokeo hayakupatikana",
    restart: "Anza upya",
    otherCategories: "Makundi mengine",
    correctAnswers: "Sahihi",
    wrongAnswers: "Si sahihi",
    total: "Jumla",
  },

  scores: {
    yourScores: "Alama zako za alifu",
    trackProgress: "Fuatilia maendeleo yako",
    noScores: "Hakuna alifu iliyohifadhiwa",
    playQuiz: "Anza micquiz ili kuona matokeo yako",
    bestScores: "Matokeo bora",
    goodAnswers: "majibu mazuri",
    history: "Historia",
  },

  settings: {
    title: "Mipangilio",
    appearance: "Mwonekano",
    darkMode: "Hali ya giza",
    enabled: "Imewashwa",
    disabled: "Imezimwa",
    languageSection: "Lugha",
    languageDesc: "Chagua lugha ya programu na maudhui yake",
    aboutApp: "Kuhusu programu",
    account: "Akaunti",
    logout: "Toka",
    deleteAccount: "Futa akaunti yangu",
    deleteDialogTitle: "Futa akaunti?",
    deleteDialogDesc: "Kitendo hiki hitekani kubatilishwa. Data zako zote na alifu zako zitafutwa kabisa.",
  },

  maps: {
    badge: "Atlasi ya Biblia kwa Mifano",
    title: "Jiografia ya Biblia",
    subtitle: "Chunguza mahali takatifu kupitia kipindi vituo vya historia ya Biblia",
  },

  divineNames: {
    badge: "Majina ya Mungu",
    title: "Majina ya Mungu",
    subtitle: "Chunguza majina ya Mungu katika Biblia na maana yake",
    searchPlaceholder: "Tafuta jina...",
    meaning: "Maana",
    usage: "Matumizi katika Biblia",
    references: "Marejeleo",
    occurrences: "Idadi",
    pronunciationNoteTitle: "Kumbukumbu ya matamshi:",
    noResult: "Hakuna jina lililopatikana",
  },

  jewishLife: {
    badge: "Utamaduni na Mapokeo",
    title: "Maisha ya Kiyahudi wa Kijamii na Kitamaduni",
    subtitle: "Sherehe, kalenda, fedha, vipimo na nguo — maisha ya kila siku na ya kidini ya watu wa Kiyahudi katika Biblia",
    translating: "Tafsiri inaendelea",
    sections: {
      fetes: "Sherehe & Sabato",
      mois: "Kalenda & Miezi",
      monnaie: "Fedha & Biashara",
      mesures: "Uzito, Urefu & Volumi",
      symbolique: "Alama za Nambari",
      quantites: "Vipimo vya Kiasi",
      vetements: "Nguo & Mavazi",
    },
  },

  wesley: {
    tagline: "Urithi wa Wamethodist · Karne ya 18",
    subtitle: "Gundua maisha, kazi na nyimbo za John na Charles Wesley — waanzilishi wa Mapinduzi ya Wamethodist",
    quote: "Fanya mema yote unayoweza, kwa njia zote unazoweza, kwa namna zote unazoweza, mahali popote unazoweza, wakati wowote unazoweza, kwa watu wote unazoweza, muda wote unaoweza.",
    quoteAuthor: "— John Wesley",
    statSermons: "Sermons zilizotolewa",
    statHymns: "Nyimbo zilizoandikwa",
    statKm: "km zilizotembuliwa",
    statMethodists: "Wamethodist duniani",
    nav: {
      home: "Mwanzo",
      john: "John",
      charles: "Charles",
      parents: "Wazazi",
      hymns: "Nyimbo",
      sermons: "Sermons",
      travels: "Safari",
    },
    home: {
      john: {
        title: "John Wesley",
        subtitle: "Mhubiri, mwanachama, mwanzili",
        fact: "Sermons 40,000, km 400,000 zilizotembuliwa",
      },
      charles: {
        title: "Charles Wesley",
        subtitle: "Mshairi, mwandishi wa nyimbo, mwingelizi",
        fact: "Nyimbo 6,500 zilizoandikwa",
      },
      parents: {
        title: "Samuel & Susanna",
        subtitle: "Wazazi wa ajabu",
        fact: "Watoto 19, elimu ya mapinduzi",
      },
      hymns: {
        title: "Nyimbo",
        subtitle: "Urithi wa sauti za Charles",
        fact: "Miongoni ya nyimbo bora za Kanisa",
      },
      sermons: {
        title: "Sermons",
        subtitle: "Sermons 44 za msingi",
        fact: "Msingi wa kiutomatiki wa Wamethodist",
      },
      travels: {
        title: "Safari",
        subtitle: "Ramani ya km 400,000",
        fact: "Kwa farasi hasa kote nchini Uingereza",
      },
    },
  },

  auth: {
    welcome: "Karibu Biblia-Quiz",
    tagline: "Chunguza na uangalie zaidi maarifa yako ya Biblia.",
    phoneLabel: "Namba ya simu",
    phonePlaceholder: "Mfano: +225 07 00 00 00 00",
    phoneHelp: "Weka namba yako pamoja na msimbo wa nchi (mfano: +225 kwa Kongo ya Kote ya Ivory). Namba hii hutumika kama kitambulisho cha kipekee cha programu na malipo yako.",
    errorEmpty: "Tafadhali weka namba yako ya simu.",
    errorInvalid: "Muundo wa namba ya simu si sahihi (mfano: +2250700000000).",
    errorGeneric: "Hitilafu imetokea wakati wa kuunganisha. Tafadhali jaribu tena.",
    login: "Ingia",
    loggingIn: "Inaunganisha...",
  },

  payment: {
    badge: "Ufikiaji wa Premium wa Biblia-Quiz",
    title: "Fungua Hekima",
    subtitle: "Jiunga na wapenzi wa Biblia na uangalie zaidi maarifa yako kwa uzoefu wetu kamili.",
    oneTime: "Malipo ya mara moja",
    currency: "XOF",
    securePayment: "Malipo salama kupitia {provider} (Wave, Orange, MTN, Moov, Djamo, n.k.)",
    unlockNow: "Fungua sasa",
    redirecting: "Inaelekeza...",
    checkPayment: "Angalia malipo yangu",
    checking: "Inaangalia...",
    errorServer: "Hitilafu imetokea wakati wa kuunganisha na seva ya malipo. Tafadhali jaribu tena.",
    errorStatus: "Haiwezi kuangalia hali. Tafadhali jaribu tena.",
    connectedAs: "Umeunganishwa kama:",
    logout: "Toka",
    checkingPaymentStatus: "Inaangalia hali yako ya malipo...",
    features: {
      categories: {
        title: "Makundi yote yamefunguliwa",
        desc: "Pata zaidi ya maswali 1000 (Testamento la Kale/Jipya, Wesley, Maisha ya Kiyahudi).",
      },
      maps: {
        title: "Mapa ya Biblia ya kuingiliano",
        desc: "Ona safari za Paulo, Uhuru wa Watu wa Misri na mahali takatifu katika ubora wa hali ya juu.",
      },
      scores: {
        title: "Ufuatiliaji wa alifu na maendeleo",
        desc: "Hifadhi alifu zako, linganisha matokeo yako na pima maendeleo yako.",
      },
      noAds: {
        title: "Ufikiaji wa maisha bila tangazo",
        desc: "Lipa mara moja, furahia vipengele vyote vya baadaye bila malipo.",
      },
    },
  },

  privacy: {
    title: "Kanuni za Faragha",
    lastUpdate: "Sasisho la mwisho: {date}",
    lastUpdateDate: "Julai 2026",
    s1Title: "1. Kukusanya taarifa",
    s1Body: "Tunakusanya tu taarifa zinazohitajika ili programu iendelee kufanya kazi: namba yako ya simu (kwa uthibitishaji), jina lako la mtumiaji, na matokeo yako ya micquiz (alifu, maendeleo). Hakuna data nyetihisi inakusanywa bila idhini yako wazi.",
    s2Title: "2. Matumizi ya data",
    s2Intro: "Taarifa zako zinatumika kwa:",
    s2Item1: "Kutambua na kulinda akaunti yako",
    s2Item2: "Kuhifadhi maendeleo na alifu zako",
    s2Item3: "Kuboresha uzoefu wa mtumiaji",
    s2Item4: "Kuruhusu ushiriki katika cheo",
    s3Title: "3. Kushiriki data",
    s3Body: "Hatushiriki data yako yoyote binafsi na watu wengine. Taarifa zako zinabaki siri kabisa na hutumika tu ndani ya programu Biblia-Quiz.",
    s4Title: "4. Usalama",
    s4Body: "Tunateua hatua za usalama za kiteknolojia na kiusirizi kulinda data yako dhidi ya ufikiaji bila idhini, ubadilishaji, ufunikishaji au uharibifu.",
    s5Title: "5. Uhifadhi wa data",
    s5Body: "Data zako zinahifadhiwa muda akaunti yako ikiwa hai. Unaweza kuomba kufutwa kwa akaunti yako na data zako zote wakati wowote kutoka ukurasa wa Mipangilio.",
    s6Title: "6. Haki zako",
    s6Body: "Kwa kufuata sheria zinazohusu, una haki ya kufikia, kurekebisha na kufuta data yako. Ili kutumia hizi haki, wasiliana nasi kupitia anwani iliyoonyeshwa hapa chini.",
    s7Title: "7. Mawasiliano",
    s7Body: "Kwa swali lolote kuhusu kanuni hizi za faragha, unaweza kutusiliana kupitia ukurasa wa Mipangilio wa programu.",
  },

  about: {
    title: "Kuhusu programu",
    tagline: "Hekima ya Biblia, karibu na swali lako",
    intro: "Karibu Biblia-Quiz, programu inayoitishwa kwa Neno la Mungu. Inakualika kuchunguza Biblia kupitia micquiz ya kuingiliano kuhusu<Testamento la Kale na Testamento Jipya, kujizoeza kuhusu wahusika, verses na mahali katika Biblia, na kuendelea kujifunza Maandishi kwa kasi yako.",
    featuresTitle: "Unachopata kwenye programu",
    featuresIntro: "Maudhui mafupi na yaliyopangwa ili kuimarisha maarifa yako ya Biblia:",
    designersTitle: "Wabunifu",
    designersIntro: "Nyuma ya programu hii kuna mwazo unaoongozwa na imani na ubora, unaobolewa na timu yenye passion:",
    closing: "Tunatumaini Biblia-Quiz itakusaidia kugundua na kuingia zaidi ndani ya Neno la Mungu, peke yako au pamoja na familia.",
    copyright: "© {year} Biblia-Quiz. Haki zote zimehifadhiwa.",
    features: {
      quiz: {
        title: "Micquiz ya Biblia mbalimbali",
        desc: "Makundi 7 na zaidi ya maswali 1,300 yanayohusu<Testamento la Kale na Testamento Jipya: wahusika wa Biblia, verses na manukuu, mashauri, jiografia na mtiririko wa muda.",
      },
      scores: {
        title: "Alifu & Maendeleo",
        desc: "Ngazi tatu za ugumu (mwanzo, wastani, mtaalamu) na ufuatiliaji wa matokeo yako ili kupima maendeleo yako kila mchezo.",
      },
      maps: {
        title: "Mapa ya Biblia",
        desc: "Nafasi ya kugundua mahali takatifu na ardhi za Biblia ili kuona vizuri hadithi za Biblia.",
      },
      names: {
        title: "Majina ya Mungu & maisha ya kijamii ya Kiyahudi",
        desc: "Sehemu maalum za kuangalia majina ya Mungu na mapokeo ya maisha ya kijamii ya Kiyahudi, karibu na maandishi ya Biblia.",
      },
    },
    designers: {
      amos: {
        role: "Mbunifu & Msanidi",
        desc: "Anabuni na kuunda utambulisho wa pili pamoja na uzoefu wa mtumiaji, akihakikisha kila kiolesura kina mwonekano safi, rahisi na unaofaa kujifunza.",
      },
      jean: {
        role: "Mprogramu wa Kompyuta & Msanidi",
        desc: "Anaweka hai kwenye mwazo huu kwa kubuni muundo wa kiufundi na kuendelea vipengele vya programu, akihakikisha urasilio ni laini, thabiti na salama.",
      },
    },
  },

  notFound: {
    title: "Ukurasa haukupatikana",
    body: "Ukurasa « {page} » haukupatikana kwenye programu hii.",
    home: "Rudi nyumbani",
  },
};
