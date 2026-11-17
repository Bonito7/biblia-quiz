// Données statiques de la page Noms de Dieu.
// Le contenu est identique au JSON traduit (src/lib/content/pages/<lang>/nomsDeDieu.json)
// : mêmes clés, mêmes tableaux. Ne pas reformuler le texte français.

export const divineNameCategories = [
  {
    id: "elohim",
    label: "Noms Divins Principaux",
    emoji: "✡️",
    color: "from-indigo-600 to-blue-700",
    names: [
      {
        hebrew: "אֵל",
        transliteration: "El",
        meaning: "Dieu, le Puissant",
        usage: "Forme la plus ancienne et universelle du nom divin. Utilisé seul ou comme préfixe/suffixe dans d'autres noms (El-Shaddai, Élohim). Transcende les cultures sémitiques.",
        references: "Genèse 14:18 ; Nombres 23:8 ; Psaume 19:1",
        occurrences: "~250 fois"
      },
      {
        hebrew: "אֱלֹהִים",
        transliteration: "Élohim",
        meaning: "Dieu (pluriel de majesté)",
        usage: "Nom le plus fréquent dans l'AT. Pluriel grammatical utilisé avec un verbe singulier — signe de plénitude et de majesté. Certains y voient une préfiguration trinitaire. Utilisé dès Genèse 1:1.",
        references: "Genèse 1:1 ; Psaume 68:5",
        occurrences: "~2 600 fois"
      },
      {
        hebrew: "יהוה",
        transliteration: "YHWH (Yahweh / Jéhovah)",
        meaning: "JE SUIS CELUI QUI SUIS / L'Éternel",
        usage: "Le nom propre de Dieu, révélé à Moïse au buisson ardent (Exode 3:14). Tétagramme sacré — les Juifs ne le prononcent pas et disent 'Adonaï' à la place. C'est le nom de l'Alliance, de la présence et de la fidélité.",
        references: "Exode 3:14-15 ; Ésaïe 42:8",
        occurrences: "~6 800 fois"
      },
      {
        hebrew: "אֲדֹנָי",
        transliteration: "Adonaï",
        meaning: "Seigneur, Maître souverain",
        usage: "Titre de souveraineté absolue. Utilisé à la place de YHWH dans la lecture synagogale. Exprime la seigneurie totale de Dieu sur toute création et sur son peuple.",
        references: "Psaume 8:1 ; Ésaïe 6:1",
        occurrences: "~450 fois"
      }
    ]
  },
  {
    id: "compounds",
    label: "Noms Composés avec El",
    emoji: "🔗",
    color: "from-violet-600 to-purple-700",
    names: [
      {
        hebrew: "אֵל שַׁדַּי",
        transliteration: "El-Shaddaï",
        meaning: "Dieu Tout-Puissant / Dieu aux seins (nourricier)",
        usage: "Nom révélé à Abraham. 'Shaddaï' vient probablement de 'shad' (sein) — Dieu nourricier et suffisant, ou de 'shadad' (détruire) — Dieu tout-puissant. Les deux sens coexistent : force absolue et soin maternel.",
        references: "Genèse 17:1 ; Exode 6:3 ; Job 1:1",
        occurrences: "~48 fois"
      },
      {
        hebrew: "אֵל עֶלְיוֹן",
        transliteration: "El-Elyon",
        meaning: "Dieu Très-Haut",
        usage: "Nom utilisé par Melchisédek (Genèse 14:18). Exprime la transcendance absolue de Dieu au-dessus de tous les dieux et de toute autorité. Utilisé dans des contextes de victoire et de souveraineté.",
        references: "Genèse 14:18-20 ; Psaume 78:35",
        occurrences: "~28 fois"
      },
      {
        hebrew: "אֵל עוֹלָם",
        transliteration: "El-Olam",
        meaning: "Dieu Éternel",
        usage: "Nom révélé à Beer-Shéva. 'Olam' = éternité, permanence. Dieu dont la nature transcende le temps et dont les promesses ne finissent jamais. Abraham plante un tamaris pour célébrer ce nom.",
        references: "Genèse 21:33 ; Ésaïe 40:28",
        occurrences: "~4 fois explicites"
      },
      {
        hebrew: "אֵל רֹאִי",
        transliteration: "El-Roï",
        meaning: "Dieu qui voit",
        usage: "Nom donné par Agar dans le désert (Genèse 16). Le seul nom de Dieu donné par une femme dans la Bible. Exprime que Dieu voit la souffrance des oubliés et des exclus.",
        references: "Genèse 16:13",
        occurrences: "Unique"
      },
      {
        hebrew: "אֵל קַנָּא",
        transliteration: "El-Qanna",
        meaning: "Dieu jaloux / Dieu ardent",
        usage: "Exprime l'amour exclusif et passionné de Dieu pour son peuple — comme un époux jaloux de l'exclusivité de l'amour conjugal. Ce n'est pas jalousie-envie mais jalousie-fidélité.",
        references: "Exode 20:5 ; Deutéronome 4:24",
        occurrences: "~6 fois"
      }
    ]
  },
  {
    id: "yhwh_compounds",
    label: "Noms Composés avec YHWH",
    emoji: "✨",
    color: "from-amber-600 to-orange-700",
    names: [
      {
        hebrew: "יהוה יִרְאֶה",
        transliteration: "YHWH-Yireï",
        meaning: "L'Éternel pourvoira",
        usage: "Révélé à Abraham sur le Mont Moriah, après que Dieu fournit un bélier en remplacement d'Isaac. Ce nom fonde la doctrine de la providence divine : Dieu voit à l'avance et pourvoit.",
        references: "Genèse 22:14",
        occurrences: "Unique"
      },
      {
        hebrew: "יהוה נִסִּי",
        transliteration: "YHWH-Nissi",
        meaning: "L'Éternel est ma bannière",
        usage: "Révélé après la victoire sur Amalek. Moïse élève les mains et Israël l'emporte. L'autel construit s'appelle 'L'Éternel est ma bannière' — signe que Dieu lui-même est l'étendard sous lequel on combat.",
        references: "Exode 17:15",
        occurrences: "Unique"
      },
      {
        hebrew: "יהוה שָׁלוֹם",
        transliteration: "YHWH-Shalom",
        meaning: "L'Éternel est paix",
        usage: "Révélé à Gédéon, qui craignait de mourir après avoir vu l'ange de l'Éternel. Nom d'un autel construit à Ophra. Shalom = intégralité, prospérité, harmonie, absence de guerre intérieure.",
        references: "Juges 6:24",
        occurrences: "Unique"
      },
      {
        hebrew: "יהוה רֹעִי",
        transliteration: "YHWH-Roï",
        meaning: "L'Éternel est mon berger",
        usage: "Le nom le plus aimé du peuple hébreu. Psaume 23 — David exprime la relation de confiance totale avec Dieu comme berger : direction, nourriture, protection, présence dans la mort. Jésus s'en est approprié le titre (Jean 10).",
        references: "Psaume 23:1 ; Jean 10:11",
        occurrences: "~1 fois explicite + contextes"
      },
      {
        hebrew: "יהוה צְבָאוֹת",
        transliteration: "YHWH-Tsabaot",
        meaning: "L'Éternel des armées",
        usage: "Nom de la puissance militaire et céleste de Dieu. 'Tsabaot' = armées (armées d'Israël + armées célestes). Révèle que Dieu est le commandant en chef des forces du ciel et de la terre.",
        references: "1 Samuel 1:3 ; Ésaïe 6:3",
        occurrences: "~285 fois"
      },
      {
        hebrew: "יהוה רָפְאֶךָ",
        transliteration: "YHWH-Ropheka",
        meaning: "L'Éternel qui te guérit",
        usage: "Révélé à Mara, après que Dieu rend les eaux amères douces. Dieu se révèle comme guérisseur de son peuple — physiquement (maladies) et spirituellement (blessures du cœur et du péché).",
        references: "Exode 15:26",
        occurrences: "Unique"
      },
      {
        hebrew: "יהוה שַׁמָּה",
        transliteration: "YHWH-Shamma",
        meaning: "L'Éternel est là",
        usage: "Dernier nom révélé dans l'AT, par Ézéchiel pour désigner la Jérusalem restaurée. La présence de Dieu est la définition ultime de la cité parfaite. Préfigure la Nouvelle Jérusalem (Apocalypse 21:3).",
        references: "Ézéchiel 48:35",
        occurrences: "Unique"
      },
      {
        hebrew: "יהוה צִדְקֵנוּ",
        transliteration: "YHWH-Tsidqenu",
        meaning: "L'Éternel notre justice",
        usage: "Nom messianique révélé par Jérémie pour désigner le roi à venir de la lignée de David. Ce roi (le Messie) sera lui-même la justice de Dieu pour son peuple — préfigurant la justification par la foi.",
        references: "Jérémie 23:6 ; 33:16",
        occurrences: "2 fois"
      },
      {
        hebrew: "יהוה מְקַדִּשְׁכֶם",
        transliteration: "YHWH-Meqaddishkem",
        meaning: "L'Éternel qui vous sanctifie",
        usage: "Révélé dans le contexte de la loi du sabbat. Dieu ne se contente pas de justifier — il sanctifie, met à part, rend saint. Le sabbat est le signe de cette sanctification continue.",
        references: "Exode 31:13 ; Lévitique 20:8",
        occurrences: "~4 fois"
      }
    ]
  },
  {
    id: "other",
    label: "Autres Titres Divins",
    emoji: "👑",
    color: "from-rose-600 to-pink-700",
    names: [
      {
        hebrew: "הָאָבִּיר",
        transliteration: "Ha-Avir / Puissant de Jacob",
        meaning: "Le Puissant, le Taureau de Jacob",
        usage: "Titre utilisé dans les bénédictions de Jacob. 'Avir' = fort comme un taureau. Exprime la puissance brute de Dieu comme protecteur et défenseur de son peuple.",
        references: "Genèse 49:24 ; Psaume 132:2",
        occurrences: "~6 fois"
      },
      {
        hebrew: "קְדוֹשׁ יִשְׂרָאֵל",
        transliteration: "Qedosh Yisrael",
        meaning: "Le Saint d'Israël",
        usage: "Titre cher au prophète Ésaïe (25 occurrences dans son livre). Exprime la sainteté absolue de Dieu — son altérité radicale, sa pureté, son intégrité morale. La sainteté est l'attribut central d'Ésaïe 6.",
        references: "Ésaïe 1:4 ; 6:3",
        occurrences: "~30 fois"
      },
      {
        hebrew: "גֹּאֵל",
        transliteration: "Go'el",
        meaning: "Le Rédempteur / Vengeur du sang",
        usage: "Terme juridique hébreu désignant le parent proche qui rachète un membre appauvri de la famille. Appliqué à Dieu : il rachète Israël de l'esclavage et répare ce qui a été perdu. Ruth et Boaz illustrent ce concept.",
        references: "Ésaïe 41:14 ; Ruth 3:9 ; Job 19:25",
        occurrences: "~20 fois (appliqué à Dieu)"
      },
      {
        hebrew: "מֶלֶךְ",
        transliteration: "Melek",
        meaning: "Roi",
        usage: "Dieu est présenté comme roi d'Israël et de l'univers. Titre central dans les Psaumes royaux (93, 96-99). La théocratie de l'AT repose sur ce titre : Dieu lui-même est le vrai roi.",
        references: "Psaume 93:1 ; Ésaïe 44:6",
        occurrences: "Très nombreuses"
      },
      {
        hebrew: "אָבִינוּ",
        transliteration: "Avinu",
        meaning: "Notre Père",
        usage: "Titre d'intimité filiale, développé dans la prière. Rare dans l'AT (Ésaïe 63:16), il exprime la relation de tendresse paternelle. Jésus en fera le nom principal dans la prière du Seigneur ('Notre Père').",
        references: "Ésaïe 63:16 ; 64:8 ; Matthieu 6:9",
        occurrences: "~15 fois (AT + NT)"
      }
    ]
  }
];

export const pronunciationNote =
  "Le Tétagramme sacré (יהוה - YHWH) n'est jamais prononcé dans la tradition juive par respect pour la sainteté divine. Les lecteurs synagogaux disent « Adonaï » à sa place. La vocalisation « Jéhovah » est une combinaison médiévale des consonnes de YHWH et des voyelles d'Adonaï.";
