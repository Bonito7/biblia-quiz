import { useState } from "react";
import { motion } from "framer-motion";
import { Music, BookOpen, Heart } from "lucide-react";

const hymns = [
  {
    title: "And Can It Be (1738)",
    fr: "Quelle merveille — puis-je y croire ?",
    occasion: "Composé peu après la conversion de Charles, le 21 mai 1738, 3 jours avant l'expérience d'Aldersgate de John.",
    stanza: "And can it be that I should gain\nAn interest in the Saviour's blood?\nDied He for me, who caused His pain?\nFor me, who Him to death pursued?\nAmazing love! how can it be\nThat Thou, my God, shouldst die for me?",
    fr_stanza: "Quelle merveille ! Puis-je avoir part\nAu sang versé par mon Sauveur ?\nEst-ce pour moi qu'il a souffert,\nPour moi, la cause de sa douleur ?\nAmour étonnant ! Comment se peut-il\nQue toi, mon Dieu, tu sois mort pour moi ?",
    theme: "Justification par la foi, émerveillement de la grâce"
  },
  {
    title: "O for a Thousand Tongues (1739)",
    fr: "O pour mille langues",
    occasion: "Écrit pour le premier anniversaire de sa conversion. C'est le premier cantique du premier recueil officiel des Méthodistes.",
    stanza: "O for a thousand tongues to sing\nMy great Redeemer's praise,\nThe glories of my God and King,\nThe triumphs of His grace!",
    fr_stanza: "Ô pour mille langues pour chanter\nLes louanges de mon Rédempteur,\nLes gloires de mon Dieu-Roi,\nLes triomphes de Sa grâce !",
    theme: "Louange, évangélisation, joie du salut"
  },
  {
    title: "Hark! The Herald Angels Sing (1739)",
    fr: "Voici l'ange du Seigneur",
    occasion: "Initialement 'Hark how all the welkin rings' — titre modifié par George Whitefield. L'un des cantiques de Noël les plus chantés au monde.",
    stanza: "Hark! the herald angels sing,\n'Glory to the newborn King!\nPeace on earth and mercy mild,\nGod and sinners reconciled!'",
    fr_stanza: "Voici l'ange du Seigneur !\nGloire au Roi nouveau-né !\nPaix sur la terre, grâce immense,\nDieu et les pécheurs réconciliés !",
    theme: "Incarnation, Noël, réconciliation"
  },
  {
    title: "Christ the Lord Is Risen Today (1739)",
    fr: "Christ le Seigneur est ressuscité",
    occasion: "Écrit pour la première chapelle méthodiste (The Foundery, Londres). Chanté le matin de Pâques dans le monde entier.",
    stanza: "Christ the Lord is risen today, Alleluia!\nSons of men and angels say, Alleluia!\nRaise your joys and triumphs high, Alleluia!\nSing, ye heavens, and earth reply, Alleluia!",
    fr_stanza: "Christ le Seigneur est ressuscité, Alléluia !\nAnges et hommes, proclamez, Alléluia !\nÉlevez vos joies et vos chants, Alléluia !\nQue les cieux et la terre répondent, Alléluia !",
    theme: "Résurrection, victoire sur la mort, joie pascale"
  },
  {
    title: "Love Divine, All Loves Excelling (1747)",
    fr: "Amour divin, qui surpasse tout amour",
    occasion: "Cantique sur la sanctification — le chef-d'œuvre théologique de Charles. Exprime la 'perfection chrétienne' chère à John Wesley.",
    stanza: "Love divine, all loves excelling,\nJoy of heaven to earth come down!\nFix in us Thy humble dwelling,\nAll Thy faithful mercies crown.",
    fr_stanza: "Amour divin, surpassant tout amour,\nJoie du ciel descendue sur terre !\nViens demeurer dans notre demeure humble,\nCouronne toutes tes fidèles miséricordes.",
    theme: "Sanctification, perfection chrétienne, amour de Dieu"
  },
  {
    title: "Soldiers of Christ, Arise (1749)",
    fr: "Soldats du Christ, levez-vous",
    occasion: "Écrit en pleine période des persécutions contre les Méthodistes. Encourage les croyants à revêtir l'armure spirituelle d'Éphésiens 6.",
    stanza: "Soldiers of Christ, arise,\nAnd put your armour on,\nStrong in the strength which God supplies\nThrough His eternal Son.",
    fr_stanza: "Soldats du Christ, levez-vous,\nRevêtez votre armure,\nForts de la force que Dieu accorde\nPar son Fils éternel.",
    theme: "Combat spirituel, persévérance, armure d'Éphésiens 6"
  }
];

const biography = [
  {
    period: "Naissance & Enfance (1707–1720)",
    text: "Charles Wesley naît le 18 décembre 1707 à Epworth, 18e des 19 enfants de Samuel et Susanna. Né prématuré, il est si faible qu'il ne crie pas et reste enveloppé dans de la laine pendant plusieurs semaines. Sa mère Susanna lui consacre une attention particulière. Enfant, il montre une sensibilité musicale et littéraire précoce sous l'éducation rigoureuse de sa mère."
  },
  {
    period: "Westminster & Oxford (1716–1735)",
    text: "Charles fréquente Westminster School (1716) où il excelle en grec et en latin. En 1726, il entre au Christ Church College d'Oxford. C'est lui qui, en 1729, fonde le 'Holy Club' à Oxford — avant que son frère John n'en prenne la direction. George Whitefield les rejoindra. Charles est ordonné diacre et prêtre anglican en 1735, juste avant la mission en Géorgie."
  },
  {
    period: "Conversion (21 mai 1738)",
    text: "La conversion de Charles précède celle de John de 3 jours. Le 21 mai 1738, malade et allongé chez un ami, Charles lit Isaïe 40 et les paroles le frappent comme une révélation. Il reçoit l'assurance de son salut. Ce soir-là, il écrit 'And Can It Be' — son premier grand cantique. Quand John lui annonce sa propre conversion 3 jours plus tard, ils chantent ensemble."
  },
  {
    period: "L'Hymnographe du Réveil (1738–1788)",
    text: "Pendant 50 ans, Charles transforme la théologie wesleyenne en chanson. Il compose en moyenne un cantique par semaine — parfois plusieurs par jour. Il composait à cheval, dictant les vers à son compagnon. Ses cantiques sont sa prédication : ils enseignent la grâce, la sanctification, la Trinité, la résurrection avec une beauté lyrique incomparable. John disait que les cantiques de Charles étaient sa meilleure théologie."
  }
];

export default function CharlesWesley() {
  const [activeTab, setActiveTab] = useState("hymns");
  const [selectedHymn, setSelectedHymn] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0 text-5xl">
          🎵
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold mb-2">Charles Wesley</h1>
          <p className="text-muted-foreground text-sm mb-3">18 décembre 1707 — 29 mars 1788 · Epworth → Londres</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            Co-fondateur du Méthodisme avec son frère John, Charles Wesley est avant tout le plus grand hymnographe 
            de langue anglaise. Ses 6 500 cantiques ont façonné la spiritualité protestante mondiale et demeurent 
            chantés dans toutes les traditions chrétiennes au 21e siècle.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: "hymns", label: "🎵 Cantiques", },
          { id: "bio", label: "📖 Biographie" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-purple-600 text-white shadow-md"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "hymns" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hymns.map((hymn, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <button
                onClick={() => setSelectedHymn(selectedHymn === i ? null : i)}
                className="w-full text-left bg-card border border-border/60 rounded-2xl p-5 hover:border-purple-400/50 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-base text-purple-700 dark:text-purple-400 leading-tight pr-2">{hymn.title}</h3>
                  <Music className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground italic mb-2">{hymn.fr}</p>
                <p className="text-xs text-foreground/70">{hymn.occasion}</p>

                {selectedHymn === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-border/50"
                  >
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">🇬🇧 Original</p>
                        <pre className="text-xs leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{hymn.stanza}</pre>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">🇫🇷 Traduction</p>
                        <pre className="text-xs leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{hymn.fr_stanza}</pre>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2.5">
                      <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">🎯 Thème : {hymn.theme}</p>
                    </div>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "bio" && (
        <div className="space-y-4">
          {biography.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-5"
            >
              <h3 className="font-heading font-bold text-base text-purple-700 dark:text-purple-400 mb-2">{item.period}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}