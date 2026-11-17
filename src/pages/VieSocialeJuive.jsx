import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { LANGUAGES, useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { sections as sectionsFr } from "@/lib/data/vieSociale";

export default function VieSocialeJuive() {
  const { t, lang } = useTranslation();
  const { content, loading } = useTranslatedPage(lang, "vieSociale");

  const sections = content?.sections || sectionsFr;

  const [activeSection, setActiveSection] = useState("fetes");
  const [expandedIdx, setExpandedIdx] = useState(null); // index stable, pas le nom

  const section = sections.find(s => s.id === activeSection);
  const langName = LANGUAGES.find(l => l.code === lang)?.name || lang;

  // Reset expanded quand on change de section
  const handleSectionChange = (id) => {
    setActiveSection(id);
    setExpandedIdx(null);
  };

  const displayedItems = section.items;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🕍</div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">
          {t("jewishLife.title")}
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          {t("jewishLife.subtitle")}
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => handleSectionChange(s.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeSection === s.id
                ? `bg-gradient-to-r ${s.color} text-white shadow-md`
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {s.emoji} {t("jewishLife.sections." + s.id)}
          </button>
        ))}
      </div>

      {/* Translation indicator */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-primary mb-5 px-1 py-3 bg-primary/5 rounded-xl border border-primary/20">
          <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
          <span className="font-medium">{t("jewishLife.translating")} — {langName}…</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection + lang + (loading ? "-loading" : "-done")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: loading ? 0.35 : 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-2"
        >
          {displayedItems.map((item, i) => {
            // Section header (séparateur)
            if (item.name.startsWith("—")) {
              return (
                <div key={`header-${activeSection}-${i}`} className="pt-4 pb-1">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1">{item.name}</h3>
                </div>
              );
            }

            const isOpen = expandedIdx === i;

            return (
              <motion.div
                key={`item-${activeSection}-${i}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
              >
                <button
                  onClick={() => setExpandedIdx(isOpen ? null : i)}
                  className="w-full text-left bg-card border border-border/60 rounded-xl p-4 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      {item.subtitle && <p className="text-xs text-primary/80 mt-0.5 italic">{item.subtitle}</p>}
                    </div>
                    <span className="text-muted-foreground flex-shrink-0 text-xs mt-0.5">{isOpen ? '▲' : '▼'}</span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 pt-3 border-t border-border/50 space-y-2 overflow-hidden"
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