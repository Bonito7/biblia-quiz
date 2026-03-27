import { useState } from "react";
import { motion } from "framer-motion";

const susannaMethod = [
  {
    rule: "Règle 1 — Obéissance absolue dès le premier cri",
    detail: "Susanna enseignait que la première règle de l'éducation est de briser la volonté propre de l'enfant avant qu'elle ne s'enracine. 'Conquérir leur volonté et les habituer à l'obéissance est la base de l'éducation.' Non par cruauté, mais pour former le caractère moral. Les enfants Wesley apprenaient à obéir dès la pouponnière.",
    category: "Discipline"
  },
  {
    rule: "Règle 2 — Aucun enfant ne mange entre les repas",
    detail: "Les repas étaient pris à heures fixes et les grignotages absolument interdits. L'autodiscipline corporelle était le fondement de l'autodiscipline spirituelle. Susanna voyait le contrôle de l'appétit comme un entraînement à maîtriser toutes les passions.",
    category: "Discipline"
  },
  {
    rule: "Règle 3 — L'alphabet à 5 ans, la Bible à 6 ans",
    detail: "Chaque enfant commençait à lire le jour de ses 5 ans avec l'alphabet — sans exception. Le premier texte lu intégralement était le chapitre 1 de la Genèse. À 6 ans, ils pouvaient lire couramment la Bible. Susanna elle-même enseignait chaque enfant plusieurs heures par jour.",
    category: "Éducation"
  },
  {
    rule: "Règle 4 — Un jour entier par enfant chaque semaine",
    detail: "Avec 19 enfants, Susanna réservait un après-midi entier par semaine à chaque enfant, individuellement. Ce tête-à-tête hebdomadaire était consacré à l'instruction religieuse personnelle, à l'examen de conscience et à la formation du caractère. John avait le jeudi, Charles le samedi.",
    category: "Formation spirituelle"
  },
  {
    rule: "Règle 5 — Jamais punir deux fois la même faute",
    detail: "Susanna avait une règle de justice stricte : une faute confessée et punie ne pouvait jamais être repunie. Elle disait que reprendre éternellement une faute déjà réglée était injuste et créait l'amertume. Ce principe de grâce après le jugement marqua profondément John, qui développa la doctrine de l'assurance du pardon.",
    category: "Justice & Grâce"
  },
  {
    rule: "Règle 6 — Louange immédiate pour la vérité dite",
    detail: "Un enfant qui avouait une faute immédiatement, même grave, était toujours récompensé d'une louange pour sa sincérité — et souvent exempté de punition. 'Celui qui ment pour échapper à la punition mérite double punition — pour la faute et pour le mensonge.' La vérité était sacrée dans la maison Wesley.",
    category: "Intégrité"
  },
  {
    rule: "Règle 7 — Pas de propriété entre frères et sœurs",
    detail: "Les enfants Wesley étaient éduqués à partager librement. Prendre sans demander était puni, mais partager librement était abondamment loué. Susanna voulait former des cœurs généreux, pas des caractères avares. Ce souci pour les pauvres se retrouvera dans toute l'action sociale de John.",
    category: "Générosité"
  },
  {
    rule: "Règle 8 — Toujours promettre et toujours tenir",
    detail: "Susanna ne promettait jamais ce qu'elle ne pouvait tenir, et exigeait la même intégrité de ses enfants. Une promesse faite à un enfant était aussi sacrée qu'une promesse faite à un adulte. Cette formation à la fiabilité de la parole est directement liée à l'engagement de John Wesley à l'exactitude dans ses journaux et ses contrats pastoraux.",
    category: "Intégrité"
  }
];

const samuel = {
  name: "Samuel Wesley",
  years: "1662–1735",
  role: "Père, prêtre anglican, poète",
  portrait: "👨‍💼",
  contributions: [
    {
      title: "Formation classique et intellectuelle",
      text: "Samuel Wesley, lui-même fils d'un pasteur dissident, fit des études brillantes à Oxford (Exeter College) malgré une grande pauvreté. Il finança ses études en copiant des manuscrits. Il transmit à ses enfants le goût des langues classiques (grec, latin, hébreu), de la poésie et de la rigueur intellectuelle. John Wesley fut admis au Christ Church College d'Oxford — le plus prestigieux — sur la réputation académique de son père."
    },
    {
      title: "Le recteur d'Epworth — Foi dans l'adversité",
      text: "Samuel fut recteur d'Epworth, Lincolnshire, pendant 38 ans (1697–1735), dans des conditions difficiles. Il fut emprisonné pour dettes en 1705. En 1709, le presbytère fut incendié (l'œuvre d'ennemis). Il vécut la pauvreté avec 19 enfants. Cette ténacité dans l'adversité — refuser de fuir son poste malgré l'opposition — marqua profondément John qui, lui aussi, fit face à de violentes persécutions."
    },
    {
      title: "L'œuvre sur Job et la rigueur biblique",
      text: "Samuel passa les dernières années de sa vie à rédiger un commentaire monumental sur le livre de Job — une étude savante en latin. À son lit de mort, il légua ce manuscrit inachevé à John. L'amour de Samuel pour l'étude sérieuse des Écritures, sa méthode philologique rigoureuse, furent la fondation sur laquelle John construisit sa propre théologie biblique."
    },
    {
      title: "Appel final à John sur la sainteté",
      text: "Sur son lit de mort (25 avril 1735), Samuel dit à John ses dernières paroles : 'La chose intérieure, John, la chose intérieure. Sois attentif à la religion intérieure.' Ce moment est décisif : Samuel n'insiste pas sur le rituel ou la forme externe, mais sur la transformation intérieure du cœur — ce qui deviendra l'essence même du Méthodisme."
    }
  ]
};

export default function WesleyParents() {
  const [activeParent, setActiveParent] = useState("susanna");
  const [selectedRule, setSelectedRule] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Discipline", "Éducation", "Formation spirituelle", "Justice & Grâce", "Intégrité", "Générosité"];
  const filteredRules = activeCategory === "all" ? susannaMethod : susannaMethod.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
        <h1 className="font-heading text-3xl font-bold mb-2">Samuel & Susanna Wesley</h1>
        <p className="text-muted-foreground text-sm">Les parents qui formèrent deux des plus grands réformateurs chrétiens du 18e siècle</p>
      </div>

      {/* Parent Selector */}
      <div className="flex gap-3 mb-6 justify-center">
        <button
          onClick={() => setActiveParent("susanna")}
          className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeParent === "susanna" ? "bg-emerald-600 text-white shadow" : "bg-card border border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          👩 Susanna Wesley
        </button>
        <button
          onClick={() => setActiveParent("samuel")}
          className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeParent === "samuel" ? "bg-teal-700 text-white shadow" : "bg-card border border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          👨 Samuel Wesley
        </button>
      </div>

      {activeParent === "susanna" && (
        <div>
          {/* Susanna Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-5 mb-6"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">👩</span>
              <div>
                <h2 className="font-heading text-xl font-bold mb-1">Susanna Wesley (1669–1742)</h2>
                <p className="text-white/80 text-xs mb-2">25e enfant d'un pasteur dissident · Mère de 19 enfants · "La mère du Méthodisme"</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Susanna Annesley est l'une des femmes les plus remarquables du 18e siècle. Autodidacte brillante, 
                  elle lisait le grec, le latin et l'hébreu. Mère de 19 enfants (dont 9 moururent en bas âge), 
                  elle consacra sa vie à l'éducation systématique de ses enfants selon une méthode qu'elle avait 
                  développée elle-même. John Wesley disait : "Ma mère m'a plus appris sur la religion que tous les 
                  théologiens que j'ai lus."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Method title */}
          <h3 className="font-heading text-lg font-bold mb-3 text-center">La Méthode d'Éducation de Susanna</h3>
          <p className="text-sm text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            Susanna rédigea sa méthode éducative dans une longue lettre à John en 1732 — l'un des documents 
            pédagogiques les plus remarquables du 18e siècle.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat ? "bg-emerald-600 text-white" : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat === "all" ? "Toutes" : cat}
              </button>
            ))}
          </div>

          {/* Rules */}
          <div className="space-y-3">
            {filteredRules.map((rule, i) => (
              <motion.div
                key={rule.rule}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => setSelectedRule(selectedRule === rule.rule ? null : rule.rule)}
                  className="w-full text-left bg-card border border-border/60 rounded-xl p-4 hover:border-emerald-400/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block text-xs font-medium bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full mb-1">{rule.category}</span>
                      <p className="font-semibold text-sm">{rule.rule}</p>
                    </div>
                    <span className="text-muted-foreground text-lg flex-shrink-0">{selectedRule === rule.rule ? '▲' : '▼'}</span>
                  </div>
                  {selectedRule === rule.rule && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 text-sm text-foreground/80 leading-relaxed border-t border-border/50 pt-3"
                    >
                      {rule.detail}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {activeParent === "samuel" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-gradient-to-r from-teal-700 to-cyan-800 text-white rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">👨</span>
              <div>
                <h2 className="font-heading text-xl font-bold mb-1">Samuel Wesley (1662–1735)</h2>
                <p className="text-white/80 text-xs mb-2">Recteur d'Epworth · Prêtre anglican · Poète · Érudit biblique</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Samuel Wesley, fils d'un pasteur dissident persécuté, choisit librement l'Église d'Angleterre. 
                  Malgré une vie marquée par la pauvreté et l'adversité, il ne quitta jamais son poste d'Epworth. 
                  Grand érudit, il transmit à ses enfants l'amour des langues classiques, de la rigueur intellectuelle 
                  et la ténacité dans l'adversité.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {samuel.contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-5"
              >
                <h3 className="font-heading font-bold text-base text-teal-700 dark:text-teal-400 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}