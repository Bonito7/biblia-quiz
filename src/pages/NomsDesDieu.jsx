import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { divineNameCategories as divineNameCategoriesFr, pronunciationNote as pronunciationNoteFr } from "@/lib/data/nomsDeDieu";

export default function NomsDesDieu() {
  const { t, lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "nomsDeDieu");

  const categories = content?.divineNameCategories || divineNameCategoriesFr;
  const pronunciationNote = content?.pronunciationNote || pronunciationNoteFr;

  const [activeCategory, setActiveCategory] = useState("elohim");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const cat = categories.find(c => c.id === activeCategory);

  const filtered = cat.names.filter(n =>
    n.transliteration.toLowerCase().includes(search.toLowerCase()) ||
    n.meaning.toLowerCase().includes(search.toLowerCase()) ||
    n.hebrew.includes(search)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">✡️</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">{t("divineNames.title")}</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          {t("divineNames.subtitle")}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setExpanded(null); setSearch(""); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={t("divineNames.searchPlaceholder")}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Names List */}
      <div className="space-y-3">
        {filtered.map((name, i) => (
          <motion.div
            key={name.transliteration}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <button
              onClick={() => setExpanded(expanded === name.transliteration ? null : name.transliteration)}
              className="w-full text-left bg-card border border-border/60 rounded-2xl p-5 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-right" dir="rtl">
                    <p className="font-bold text-2xl text-primary leading-none">{name.hebrew}</p>
                    <p className="text-xs text-muted-foreground mt-1 text-left" dir="ltr">{name.transliteration}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-base">{name.meaning}</p>
                    <p className="text-xs text-muted-foreground">{name.occurrences}</p>
                  </div>
                </div>
                <span className="text-muted-foreground flex-shrink-0 text-lg">
                  {expanded === name.transliteration ? '▲' : '▼'}
                </span>
              </div>

              {expanded === name.transliteration && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 pt-4 border-t border-border/50 space-y-3 text-left"
                >
                  <p className="text-sm text-foreground/80 leading-relaxed">{name.usage}</p>
                  <div className="bg-muted/50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">📖 {t("divineNames.references")}</p>
                    <p className="text-xs text-foreground/80">{name.references}</p>
                  </div>
                </motion.div>
              )}
            </button>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-6">{t("divineNames.noResult")}</p>
        )}
      </div>

      {/* Footer note */}
      <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
        <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong>{t("divineNames.pronunciationNoteTitle")}</strong> {pronunciationNote}
        </p>
      </div>
    </div>
  );
}