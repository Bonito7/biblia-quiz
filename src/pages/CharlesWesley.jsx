import { useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { charlesWesley as charlesWesleyFr } from "@/lib/data/wesleyCharles";

export default function CharlesWesley() {
  const { t, lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "wesleyCharles");
  const data = content?.charlesWesley || charlesWesleyFr;

  const [activeTab, setActiveTab] = useState("hymns");
  const [selectedHymn, setSelectedHymn] = useState(null);

  const tabLabel = tab => (tab.labelKey ? t(tab.labelKey) : tab.label);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0 text-5xl">
          🎵
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold mb-2">{t("wesley.home.charles.title")}</h1>
          <p className="text-muted-foreground text-sm mb-3">{data.subtitle}</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {data.bio}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {data.tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-purple-600 text-white shadow-md"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab.icon} {tabLabel(tab)}
          </button>
        ))}
      </div>

      {activeTab === "hymns" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.hymns.map((hymn, i) => (
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
                        <p className="text-xs font-semibold text-muted-foreground mb-1">{data.labels.original}</p>
                        <pre className="text-xs leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{hymn.stanza}</pre>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">{data.labels.translation}</p>
                        <pre className="text-xs leading-relaxed whitespace-pre-wrap font-sans text-foreground/80">{hymn.fr_stanza}</pre>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2.5">
                      <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">{data.labels.theme} {hymn.theme}</p>
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
          {data.biography.map((item, i) => (
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
