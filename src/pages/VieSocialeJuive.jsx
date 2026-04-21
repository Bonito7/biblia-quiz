import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "fetes",
    label: "Fêtes & Sabbat",
    emoji: "🕍",
    color: "from-blue-600 to-indigo-700",
    items: [
      {
        name: "Shabbat (שַׁבָּת)",
        subtitle: "Chaque semaine — du vendredi soir au samedi soir",
        description: "Le Sabbat hebdomadaire, fondé sur la Création (Genèse 2:3) et la Loi (Exode 20:8-11). Cessation totale du travail, repas festifs, synagogue. Symbolise l'Alliance entre Dieu et Israël (Exode 31:13). La halakha liste 39 catégories de travaux interdits.",
        detail: "Durée : 25h. Commence à l'allumage des bougies par la femme. Se termine avec la Havdalah (séparation)."
      },
      {
        name: "Pâque — Pessah (פֶּסַח)",
        subtitle: "14-21 Nissan (mars-avril)",
        description: "Commémoration de la sortie d'Égypte (Exode 12). Repas du Seder avec agneau pascal, herbes amères, matzot (pains sans levain). Lecture de la Haggadah. Les maisons sont purifiées de tout levain (hametz) — symbole de péché et d'orgueil.",
        detail: "Durée : 7 jours (8 en diaspora). Les 4 coupes de vin symbolisent les 4 promesses divines d'Exode 6:6-7."
      },
      {
        name: "Pentecôte — Shavouot (שָׁבוּעוֹת)",
        subtitle: "6-7 Sivan (mai-juin) — 50 jours après Pessah",
        description: "Fête des semaines / de la récolte. Commémoration du don de la Torah au Sinaï. Offrande des premiers fruits (bikourim). On lit le livre de Ruth. En NT : le jour de la Pentecôte (Actes 2) tombe ce jour-là.",
        detail: "Durée : 1 jour (2 en diaspora). La synagogue est décorée de verdure évoquant le Mont Sinaï."
      },
      {
        name: "Roch Hachana (רֹאשׁ הַשָּׁנָה)",
        subtitle: "1-2 Tishri (septembre-octobre)",
        description: "Nouvel An juif — littéralement 'tête de l'année'. Jugement divin symbolique : Dieu ouvre les Livres de vie. Son du Shofar (corne de bélier) 100 fois. Période de repentance (Yamim Noraïm). Miel et pomme pour une 'bonne et douce année'.",
        detail: "Durée : 2 jours. Commence 10 jours de pénitence qui s'achèvent à Yom Kippour."
      },
      {
        name: "Yom Kippour (יוֹם כִּפּוּר)",
        subtitle: "10 Tishri — Grand Jour du Pardon",
        description: "Jour le plus solennel de l'année juive. Jeûne de 25h, cinq services de prière, confessions collectives. À l'époque du Temple : le Grand Prêtre entre une fois par an dans le Saint des Saints pour asperger le propitiatoire de sang (Lévitique 16). Le bouc émissaire est envoyé dans le désert.",
        detail: "Interdit : manger, boire, se laver, relations conjugales, parfum, chaussures en cuir."
      },
      {
        name: "Souccot (סֻכּוֹת)",
        subtitle: "15-21 Tishri — Fête des Cabanes",
        description: "Commémoration des 40 ans dans le désert. Construction de cabanes (souccot) avec toit végétal laissant voir le ciel. On y mange, prie, parfois dort 7 jours. Les 4 espèces : loulav (palmier), etrog (cédrat), myrte, saule — agitées vers les 4 points cardinaux.",
        detail: "La fête la plus joyeuse. Le 7e jour (Hoshana Rabba) est le jour de la clôture définitive du jugement."
      },
      {
        name: "Hanoukka (חֲנֻכָּה)",
        subtitle: "25 Kislev — 8 jours (novembre-décembre)",
        description: "Fête des Lumières — commémoration de la rededication du Temple (165 av. J.-C.) après la victoire des Maccabées sur Antiochos IV. Miracle de l'huile (1 jour d'huile brûla 8 jours). Allumage de la Hanoukia (chandelier à 9 branches), jeux de dreidel, beignets.",
        detail: "Non biblique (inter-testamentaire). Mentionnée dans Jean 10:22 ('Fête de la Dédicace')."
      },
      {
        name: "Pourim (פּוּרִים)",
        subtitle: "14 Adar (février-mars)",
        description: "Fête la plus joyeuse — commémoration du salut des Juifs en Perse (livre d'Esther). Lecture de la Meguilah (livre d'Esther) en synagogue. On fait du bruit au nom d'Haman. Déguisements, festins, cadeaux de nourriture (mishloah manot), dons aux pauvres.",
        detail: "Durée : 1 jour. 'Pourim' = tirage au sort — Haman tira au sort pour choisir le jour du massacre."
      },
      {
        name: "Année Jubilaire (יוֹבֵל)",
        subtitle: "Tous les 50 ans",
        description: "Après 7 semaines d'années (49 ans), l'année 50 est le Jubilé (Lévitique 25). Libération de tous les esclaves hébreux, retour de chaque famille sur sa terre ancestrale, remise des dettes. Son du Shofar le Yom Kippour de l'année jubilaire. Jésus cite Ésaïe 61 ('l'année de grâce') au début de son ministère.",
        detail: "L'Année Sabbatique (tous les 7 ans) précède le Jubilé : la terre se repose, les dettes sont remises."
      }
    ]
  },
  {
    id: "mois",
    label: "Calendrier & Mois",
    emoji: "📅",
    color: "from-teal-600 to-emerald-700",
    items: [
      { name: "Nissan (נִיסָן)", subtitle: "1er mois sacré — Mars/Avril", description: "Premier mois du calendrier liturgique. Mois de la Pâque (Pessah). Exode 12:2 : 'Ce mois sera pour vous le commencement des mois, il sera pour vous le premier des mois de l'année.' Mois de la délivrance et des miracles.", detail: "30 jours. Début du printemps. La manne cessa le 16 Nissan." },
      { name: "Iyar (אִיָּר)", subtitle: "2e mois — Avril/Mai", description: "Mois de guérison (lettres initiales = Ani YHWH Ropheka — 'Je suis l'Éternel qui te guérit'). Pesah Sheni (Pâque secondaire) le 14 Iyar pour ceux qui avaient été impurs.", detail: "29 jours. Compte du Omer continue." },
      { name: "Sivan (סִיוָן)", subtitle: "3e mois — Mai/Juin", description: "Mois du don de la Torah au Sinaï. Fête de Shavouot (Pentecôte) le 6 Sivan. Mois lié à la révélation divine et à la Loi.", detail: "30 jours. En NT : la Pentecôte d'Actes 2 tombe ce mois." },
      { name: "Tamouz (תַּמּוּז)", subtitle: "4e mois — Juin/Juillet", description: "Mois de deuil — le 17 Tamouz, Moïse brise les Tables de la Loi. Début de la période des 3 semaines de deuil menant au 9 Av.", detail: "29 jours." },
      { name: "Av (אָב)", subtitle: "5e mois — Juillet/Août", description: "Mois le plus triste. Le 9 Av (Ticha BeAv) : destruction du 1er Temple (586 av. J.-C.) et du 2e Temple (70 ap. J.-C.), expulsion d'Espagne (1492), et nombreuses tragédies juives. Jeûne de 25h.", detail: "30 jours. Le 15 Av est paradoxalement une fête joyeuse (fête de l'amour)." },
      { name: "Eloul (אֱלוּל)", subtitle: "6e mois — Août/Septembre", description: "Mois de repentance précédant Roch Hachana. On sonne du Shofar chaque matin. Le roi est au champ — image de la proximité de Dieu avec son peuple avant le jugement.", detail: "29 jours. Lecture quotidienne du Psaume 27." },
      { name: "Tishri (תִּשְׁרֵי)", subtitle: "7e mois — Septembre/Octobre", description: "Mois le plus saint — Roch Hachana (1-2), Yom Kippour (10), Souccot (15-21), Chemini Atzeret (22), Simhat Torah (23). Le mois 7 reflète la perfection du chiffre 7.", detail: "30 jours. Début de l'année civile (bien que 7e mois liturgique)." },
      { name: "Hechvan (חֶשְׁוָן)", subtitle: "8e mois — Octobre/Novembre", description: "Seul mois sans fête. Parfois appelé 'Mar-Hechvan' (Hechvan amer). La tradition dit que la dédicace du Temple de Salomon devait s'y tenir. Mois des pluies en Israël — le déluge commença le 17 Hechvan.", detail: "29 ou 30 jours." },
      { name: "Kislev (כִּסְלֵו)", subtitle: "9e mois — Novembre/Décembre", description: "Mois de Hanoukka (25 Kislev). Dans certaines traditions, mois de rêves et de visions (songes de Joseph, vision de Zacharie). Le 19 Kislev est le Nouvel An hassidique.", detail: "29 ou 30 jours." },
      { name: "Tevet (טֵבֵת)", subtitle: "10e mois — Décembre/Janvier", description: "Le 8 Tevet : Ptolémée II fait traduire la Torah en grec (Septante) — jeûné par certains. Le 10 Tevet : début du siège de Jérusalem par Nabuchodonosor.", detail: "29 jours." },
      { name: "Chevat (שְׁבָט)", subtitle: "11e mois — Janvier/Février", description: "Le 15 Chevat : Roch Hachana LaIlanot — Nouvel An des arbres (Tu BiChvat). Reforestation, dégustation des 7 espèces d'Israël. Les amandiers fleurissent en Israël.", detail: "30 jours." },
      { name: "Adar (אֲדָר)", subtitle: "12e mois — Février/Mars", description: "Mois le plus joyeux. Pourim le 14 Adar. Dicton : 'Quand entre Adar, la joie augmente.' Mois de naissance et de mort de Moïse (7 Adar).", detail: "29 jours. Années bissextiles : Adar I (30j) + Adar II (29j)." }
    ]
  },
  {
    id: "monnaie",
    label: "Monnaie & Commerce",
    emoji: "🪙",
    color: "from-amber-600 to-yellow-700",
    items: [
      { name: "Guéra (גֵּרָה)", subtitle: "Plus petite unité monétaire", description: "1/20 de sicle. La plus petite monnaie mentionnée dans la Torah. Utilisée pour le demi-sicle du recensement.", detail: "Lévitique 27:25 ; Exode 30:13" },
      { name: "Beka (בֶּקַע)", subtitle: "Demi-sicle", description: "Équivaut à 10 guéras = 1/2 sicle. Utilisé lors du premier recensement d'Israël (Exode 38:26). Pèse environ 5-6 grammes.", detail: "Genèse 24:22 ; Exode 38:26" },
      { name: "Sicle (שֶׁקֶל)", subtitle: "Unité de base — ~11-14g d'argent", description: "Unité monétaire fondamentale de la Bible hébraïque. Le 'sicle du sanctuaire' est légèrement plus lourd. Abraham pèse 400 sicles d'argent pour acheter la cave de Macpéla (Genèse 23). Joseph vendu pour 20 sicles d'argent.", detail: "1 sicle = 20 guéras = 2 bekas. Juda vendit Jésus pour 30 sicles (prix d'un esclave, Exode 21:32)." },
      { name: "Mine (מָנֶה)", subtitle: "50 sicles", description: "Unité intermédiaire. 1 mine = 50 sicles (usage courant) ou 60 sicles (standard babylonien). Utilisée dans les échanges commerciaux importants et dans la description du Temple d'Ézéchiel.", detail: "Ézéchiel 45:12 ; Néhémie 7:71-72" },
      { name: "Talent (כִּכָּר)", subtitle: "3 000 sicles = 60 mines", description: "La plus grande unité de poids/valeur. Un talent d'or était une fortune colossale — environ 34 kg d'or ou d'argent. David amasse 3 000 talents d'or pour la construction du Temple. La parabole des talents (Matthieu 25) utilise cette valeur.", detail: "1 Chroniques 29:7 ; Matthieu 18:24 (10 000 talents = dette impayable)" },
      { name: "Denier romain (דִּינָר)", subtitle: "Époque du NT — salaire journalier", description: "À l'époque de Jésus, le denier (denarius) est la monnaie courante de l'Empire romain. Un denier = 1 journée de travail d'un ouvrier agricole (Matthieu 20:2). Jésus demande à voir un denier lors de la controverse sur l'impôt (Matthieu 22:19).", detail: "La drachme grecque avait une valeur similaire. 100 deniers = 1 mine environ." }
    ]
  },
  {
    id: "mesures",
    label: "Poids, Longueurs & Volumes",
    emoji: "⚖️",
    color: "from-slate-600 to-gray-700",
    items: [
      { name: "— POIDS —", subtitle: "", description: "", detail: "" },
      { name: "Guéra (גֵּרָה)", subtitle: "Poids ~0,57g", description: "La plus petite unité de poids. 20 guéras = 1 sicle.", detail: "Lévitique 27:25" },
      { name: "Sicle (שֶׁקֶל)", subtitle: "~11,4g (sanctuaire ~14g)", description: "Unité de poids de base. Le 'sicle du sanctuaire' est légèrement supérieur. Poids utilisé sur les balances pour peser l'argent, l'or et les matières précieuses.", detail: "Genèse 23:15 ; Exode 30:13" },
      { name: "Mine (מָנֶה)", subtitle: "50 sicles = ~570g", description: "Unité commerciale intermédiaire. Utilisée dans les grands échanges.", detail: "Ézéchiel 45:12" },
      { name: "Talent (כִּכָּר)", subtitle: "3 000 sicles = ~34 kg", description: "Poids le plus lourd. Un talent d'or ou d'argent représente une fortune. La Pierre de grêle de l'Apocalypse pèse un talent (Ap. 16:21).", detail: "Exode 25:39 ; 1 Rois 9:14" },
      { name: "— LONGUEURS —", subtitle: "", description: "", detail: "" },
      { name: "Doigt (אֶצְבַּע)", subtitle: "~1,85 cm", description: "La plus petite unité de longueur biblique. 4 doigts = 1 palme.", detail: "Jérémie 52:21" },
      { name: "Palme / Paume (טֶפַח)", subtitle: "~7,4 cm", description: "4 doigts côte à côte. 3 palmes = 1 empan.", detail: "Exode 25:25 ; 1 Rois 7:26" },
      { name: "Empan (זֶרֶת)", subtitle: "~22 cm", description: "Distance entre le pouce et l'auriculaire étendus. 2 empans = 1 coudée.", detail: "Exode 28:16 ; 1 Samuel 17:4 (Goliath : 6 coudées 1 empan)" },
      { name: "Coudée (אַמָּה)", subtitle: "~44-52 cm", description: "Distance du coude au bout des doigts. Unité architecturale principale de la Bible. L'Arche de Noé : 300 × 50 × 30 coudées. Le Temple de Salomon : 60 × 20 × 30 coudées.", detail: "Genèse 6:15 ; 1 Rois 6:2 ; Ézéchiel utilise la 'grande coudée' de 52 cm." },
      { name: "Porte (canne, קָנֶה)", subtitle: "6 coudées = ~2,6 m", description: "Utilisée par Ézéchiel pour mesurer le Temple eschatologique. La mesure angélique du Temple de l'Apocalypse (11:1).", detail: "Ézéchiel 40:5 ; Apocalypse 11:1" },
      { name: "Stade (stádion)", subtitle: "~185 m (grec)", description: "Mesure grecque utilisée dans le NT. Emmaüs est à 60 stades de Jérusalem (Luc 24:13 ≈ 11 km). La Nouvelle Jérusalem : 12 000 stades de côté (Ap. 21:16).", detail: "Luc 24:13 ; Jean 6:19 ; Ap. 21:16" },
      { name: "Mille romain / Lieue", subtitle: "~1 480 m", description: "Le mille romain (miliarium) = 1 000 pas doubles = ~1,48 km. Jésus dit : 'Si quelqu'un te force à faire un mille, fais-en deux avec lui' (Matthieu 5:41).", detail: "Matthieu 5:41 ; Luc 24:13" },
      { name: "Sabbat (chemin de sabbat)", subtitle: "~900 m", description: "Distance maximale autorisée pour marcher le jour du Sabbat selon la tradition rabbinique (basée sur Nombres 35:5). Le Mont des Oliviers est à un 'chemin de sabbat' de Jérusalem.", detail: "Actes 1:12" },
      { name: "— VOLUMES —", subtitle: "", description: "", detail: "" },
      { name: "Log (לֹג)", subtitle: "~0,31 litre", description: "La plus petite mesure de volume liquide. 4 logs = 1 kav. Utilisé pour l'huile dans les lois de purification.", detail: "Lévitique 14:10" },
      { name: "Kav (קַב)", subtitle: "~1,2 litre", description: "Petite mesure sèche. Lors du siège de Samarie, un kav de fiente de pigeon se vendait 5 sicles d'argent (famine extrême, 2 Rois 6:25).", detail: "2 Rois 6:25" },
      { name: "Omer (עֹמֶר)", subtitle: "~2,2 litres = 1/10 d'épha", description: "La ration de manne quotidienne par personne (Exode 16:16). Unité de la fête du premier gerbe (Lévitique 23:10-11).", detail: "Exode 16:16,36" },
      { name: "Seah (סְאָה)", subtitle: "~7 litres = 1/3 d'épha", description: "Sarah prépare 3 seah de farine pour les 3 visiteurs d'Abraham (Genèse 18:6). La femme cache le levain dans 3 seah de farine (Matthieu 13:33).", detail: "Genèse 18:6 ; Matthieu 13:33" },
      { name: "Épha (אֵיפָה)", subtitle: "~22 litres", description: "Unité principale de mesure sèche. Le boisseau = 1/10 d'épha. Utilisé pour les offrandes de grain (Lévitique 5:11). Doit être juste : 'Tu n'auras qu'un juste épha' (Lévitique 19:36).", detail: "Lévitique 5:11 ; Ézéchiel 45:11" },
      { name: "Hin (הִין)", subtitle: "~4 litres (liquide)", description: "Équivalent liquide de l'épha. Utilisé pour mesurer l'huile et le vin des libations. 1 hin = 12 logs.", detail: "Exode 29:40 ; Ézéchiel 4:11" },
      { name: "Bath (בַּת)", subtitle: "~22 litres (= épha)", description: "Étalon liquide principal. 10 baths = 1 kor (homer). La mer d'airain du Temple de Salomon contenait 2 000 baths (1 Rois 7:26).", detail: "1 Rois 7:26 ; Ézéchiel 45:14" },
      { name: "Homer / Kor (חֹמֶר / כּוֹר)", subtitle: "~220 litres = 10 éphas", description: "La plus grande mesure de volume. Les cailles dans le désert : le peuple ramassa au minimum 10 homers (Nombres 11:32). Ézéchiel 45:14 : 10 baths = 1 homer.", detail: "Nombres 11:32 ; Ézéchiel 45:11,14" }
    ]
  },
  {
    id: "vetements",
    label: "Vêtements & Habits",
    emoji: "👘",
    color: "from-rose-600 to-red-700",
    items: [
      { name: "— VÊTEMENTS COURANTS —", subtitle: "", description: "", detail: "" },
      { name: "Touniqa / Kétonet (כֻּתֹּנֶת)", subtitle: "Tunique longue — vêtement de base", description: "Longue chemise portée à même la peau par hommes et femmes. Pouvait être en lin (prêtres) ou en laine. Joseph reçoit la célèbre 'tunique de plusieurs couleurs' (ou à manches longues, kétonet passim) de son père Jacob.", detail: "Genèse 37:3 ; Jean 19:23 (tunique sans couture de Jésus)" },
      { name: "Manteau / Simlah (שִׂמְלָה)", subtitle: "Grand manteau rectangulaire", description: "Pièce de tissu rectangulaire portée par-dessus la tunique. Servait aussi de couverture la nuit. La Loi interdit de garder le manteau du pauvre en gage après le coucher du soleil (Exode 22:25-26).", detail: "Deutéronome 22:12 (franges aux coins)" },
      { name: "Meil (מְעִיל)", subtitle: "Robe sans manches, robe d'honneur", description: "Vêtement d'apparat porté par les gens de haut rang. Samuel portait un meil. Saül déchire le meil de Samuel (1 Samuel 15:27) — symbole du royaume arraché. David danse en meil (2 Samuel 6:14).", detail: "1 Samuel 2:19 ; 1 Samuel 15:27 ; Job 29:14" },
      { name: "Ceinture / Hagora (חֲגוֹרָה)", subtitle: "Ceinture, ceinturon", description: "Accessoire indispensable pour retrousser la tunique lors du travail ou du combat. 'Ceindre ses reins' = se préparer à l'action. Jean-Baptiste porte une ceinture de cuir (Matthieu 3:4).", detail: "Éphésiens 6:14 (métaphore de la vérité)" },
      { name: "Sandales (סַנְדָּל)", subtitle: "Chaussures de cuir", description: "Les Hébreux portaient des sandales de cuir — semelle attachée par des lacets. Ôter sa sandale = céder un droit (Ruth 4:7) ou signe d'indignité (Jean 1:27). Dieu dit à Moïse : 'Ôte tes sandales' (Exode 3:5).", detail: "Amos 2:6 (vendu pour une paire de sandales)" },
      { name: "Tsitsit (צִיצִית)", subtitle: "Franges rituelles aux coins du vêtement", description: "Nombres 15:38-39 ordonne d'attacher des franges (tsitsit) aux quatre coins du vêtement avec un fil bleu (tekhelet). Rappel de tous les commandements. La femme hémorragique touche le 'bord du vêtement' de Jésus (tsitsit).", detail: "Matthieu 9:20 ; Deutéronome 22:12" },
      { name: "Phylactères / Tefillin (תְּפִלִּין)", subtitle: "Boîtes de cuir contenant des textes bibliques", description: "Petites boîtes de cuir noir portées sur le bras gauche et le front lors de la prière du matin (sauf Shabbat). Contiennent 4 passages de la Torah (Ex.13:1-10 ; Ex.13:11-16 ; Dt.6:4-9 ; Dt.11:13-21). Basées sur Deutéronome 6:8.", detail: "Matthieu 23:5 (Jésus critique les phylactères élargis)" },
      { name: "— HABITS SACERDOTAUX —", subtitle: "Lévitique 8 ; Exode 28-29", description: "", detail: "" },
      { name: "Culotte de lin (מִכְנָסַיִם)", subtitle: "Sous-vêtement sacerdotal obligatoire", description: "Pantalon de lin blanc couvrant des reins aux cuisses. Tous les prêtres en portaient pour couvrir leur nudité lors du service à l'autel. Rappel de la sainteté et de la modestie devant Dieu.", detail: "Exode 28:42 ; Lévitique 6:3" },
      { name: "Tunique de lin (כֻּתֹּנֶת בַּד)", subtitle: "Robe longue de lin blanc — prêtres ordinaires", description: "Tunique blanche brodée portée par tous les prêtres. Le lin blanc symbolise la pureté. Elle descend jusqu'aux pieds. Pour les prêtres ordinaires, c'est le vêtement le plus visible.", detail: "Exode 28:39 ; Lévitique 8:13" },
      { name: "Ceinture brodée (אַבְנֵט)", subtitle: "Ceinture de lin multicolore", description: "Ceinture de fin lin blanc avec fils de couleur (bleu, pourpre, cramoisi) portée par les prêtres ordinaires, et encore plus ornée pour le Grand Prêtre. Elle permettait de retrousser la tunique.", detail: "Exode 28:39 ; 39:29" },
      { name: "Mitre / Turban (מִגְבָּעָה)", subtitle: "Couvre-chef des prêtres ordinaires", description: "Bonnet de lin blanc pour les prêtres ordinaires. Différent du grand turban (mitsnefet) du Grand Prêtre. Signe du service sacré et de la dignité sacerdotale.", detail: "Exode 28:40 ; 29:9" },
      { name: "— VÊTEMENTS DU GRAND PRÊTRE —", subtitle: "8 vêtements au total (les 4 des prêtres + 4 supplémentaires)", description: "", detail: "" },
      { name: "Robe bleue (מְעִיל הָאֵפוֹד)", subtitle: "Robe entièrement bleue — sous l'Éphod", description: "Robe de laine bleue (tekhelet) sans couture, avec une bordure de grenades en fils de couleurs alternées avec des clochettes d'or. Les clochettes tintaient pour signaler la présence du Grand Prêtre dans le lieu saint.", detail: "Exode 28:31-35 — 'afin qu'il ne meure pas'" },
      { name: "Éphod (אֵפוֹד)", subtitle: "Tablier sacerdotal suprême — lin et or", description: "Vêtement distinctif du Grand Prêtre, fait de fils d'or, de laine bleue, pourpre, cramoisie et de fin lin tressé. Porté sur la poitrine comme un tablier-corselet. Deux pierres d'onyx sur les épaulettes portent les noms des 12 tribus (6 par côté).", detail: "Exode 28:6-14 — Le Grand Prêtre 'porte' Israël devant Dieu" },
      { name: "Pectoral du jugement (חֹשֶׁן)", subtitle: "12 pierres précieuses — 12 tribus", description: "Pièce carrée (22×22 cm) de même tissu que l'Éphod, portée sur la poitrine. Sertie de 12 pierres précieuses en 4 rangées, chacune gravée du nom d'une tribu d'Israël. Contenait l'Ourim et Toummim.", detail: "Exode 28:15-30 ; les 12 pierres préfigurent les fondements de la Nouvelle Jérusalem (Ap. 21:19-20)" },
      { name: "Ourim et Toummim (אוּרִים וְתֻמִּים)", subtitle: "Lumières et Perfections — oracle divin", description: "Objets mystérieux placés dans le pectoral pour consulter Dieu. Leur nature exacte est inconnue (pierres, dés ?). Ourim = 'Lumières', Toummim = 'Perfections'. Utilisés pour obtenir des réponses divines dans des décisions nationales importantes.", detail: "Exode 28:30 ; Nombres 27:21 ; 1 Samuel 28:6" },
      { name: "Grand Turban (מִצְנֶפֶת)", subtitle: "Coiffe du Grand Prêtre en fin lin", description: "Grand turban de lin blanc, distinct du bonnet des prêtres ordinaires. Sur le turban est fixée la lame d'or (tsits) par un cordon bleu.", detail: "Exode 28:36-38 ; Lévitique 8:9" },
      { name: "Lame d'or (צִיץ)", subtitle: "Plaque d'or : 'SAINTETÉ À L'ÉTERNEL'", description: "Lame d'or pur fixée à l'avant du turban par un cordon bleu. Gravée de l'inscription : 'Qodesh l'YHWH' — 'Sainteté à l'Éternel'. Le Grand Prêtre 'porte' l'iniquité des offrandes d'Israël grâce à cette lame.", detail: "Exode 28:36-38 — 'pour qu'ils trouvent grâce devant l'Éternel'" }
    ]
  }
];

export default function VieSocialeJuive() {
  const [activeSection, setActiveSection] = useState("fetes");
  const [expanded, setExpanded] = useState(null);

  const section = sections.find(s => s.id === activeSection);
  const displayItems = section.items.filter(i => i.name.startsWith("—") || i.description);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🕍</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">Vie Sociale & Culturelle des Juifs</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Fêtes, calendrier, monnaie, mesures et vêtements — la vie quotidienne et rituelle du peuple hébreu dans la Bible
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => { setActiveSection(s.id); setExpanded(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeSection === s.id
                ? `bg-gradient-to-r ${s.color} text-white shadow-md`
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-2"
        >
          {section.items.map((item, i) => {
            // Section headers
            if (item.name.startsWith("—")) {
              return (
                <div key={i} className="pt-4 pb-1">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">{item.name}</h3>
                </div>
              );
            }

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                  className="w-full text-left bg-card border border-border/60 rounded-xl p-4 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      {item.subtitle && <p className="text-xs text-primary/80 mt-0.5 italic">{item.subtitle}</p>}
                    </div>
                    <span className="text-muted-foreground flex-shrink-0">{expanded === item.name ? '▲' : '▼'}</span>
                  </div>

                  <AnimatePresence>
                    {expanded === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-border/50 space-y-2"
                      >
                        <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                        {item.detail && (
                          <div className="bg-muted/60 rounded-lg p-2.5">
                            <p className="text-xs text-muted-foreground">{item.detail}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}