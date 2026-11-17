import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { wesleySermons as wesleySermonsFr } from "@/lib/data/wesleySermons";

export default function WesleySermons() {
  const { lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "wesleySermons");
  const data = content?.wesleySermons || wesleySermonsFr;

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = data.sermons.filter(s =>
    s.fr.toLowerCase().includes(search.toLowerCase()) ||
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📖</div>
        <h1 className="font-heading text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={data.searchPlaceholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((sermon, i) => (
          <motion.div
            key={sermon.number}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <button
              onClick={() => setSelected(selected === sermon.number ? null : sermon.number)}
              className="w-full text-left bg-card border border-border/60 rounded-xl p-4 hover:border-amber-400/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {sermon.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm">{sermon.fr}</p>
                      <p className="text-xs text-muted-foreground italic">{sermon.title} · {sermon.text} · {sermon.date}</p>
                    </div>
                    <span className="text-muted-foreground flex-shrink-0">{selected === sermon.number ? '▲' : '▼'}</span>
                  </div>

                  {selected === sermon.number && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-border/50 space-y-3"
                    >
                      <p className="text-sm text-foreground/80 leading-relaxed">{sermon.summary}</p>
                      <blockquote className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 pl-3 p-3 rounded-r-lg">
                        <p className="text-xs italic text-amber-800 dark:text-amber-300">{sermon.key_quote}</p>
                      </blockquote>
                    </motion.div>
                  )}
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
