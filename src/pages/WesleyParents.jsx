import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { wesleyParents as wesleyParentsFr } from "@/lib/data/wesleyParents";

export default function WesleyParents() {
  const { t, lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "wesleyParents");
  const data = content?.wesleyParents || wesleyParentsFr;

  const [activeParent, setActiveParent] = useState("susanna");
  const [selectedRule, setSelectedRule] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const { categories, rules } = data.susanna;
  const filteredRules = activeCategory === "all" ? rules : rules.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
        <h1 className="font-heading text-3xl font-bold mb-2">{t("wesley.home.parents.title")} {data.surname}</h1>
        <p className="text-muted-foreground text-sm">{data.subtitle}</p>
      </div>

      {/* Parent Selector */}
      <div className="flex gap-3 mb-6 justify-center">
        <button
          onClick={() => setActiveParent("susanna")}
          className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeParent === "susanna" ? "bg-emerald-600 text-white shadow" : "bg-card border border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          {data.selectors.susanna}
        </button>
        <button
          onClick={() => setActiveParent("samuel")}
          className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
            activeParent === "samuel" ? "bg-teal-700 text-white shadow" : "bg-card border border-border text-muted-foreground hover:bg-muted"
          }`}
        >
          {data.selectors.samuel}
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
                <h2 className="font-heading text-xl font-bold mb-1">{data.susanna.name} ({data.susanna.years})</h2>
                <p className="text-white/80 text-xs mb-2">{data.susanna.tagline}</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {data.susanna.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Method title */}
          <h3 className="font-heading text-lg font-bold mb-3 text-center">{data.susanna.methodTitle}</h3>
          <p className="text-sm text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            {data.susanna.methodIntro}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id ? "bg-emerald-600 text-white" : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
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
                <h2 className="font-heading text-xl font-bold mb-1">{data.samuel.name} ({data.samuel.years})</h2>
                <p className="text-white/80 text-xs mb-2">{data.samuel.tagline}</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {data.samuel.bio}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {data.samuel.contributions.map((item, i) => (
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
