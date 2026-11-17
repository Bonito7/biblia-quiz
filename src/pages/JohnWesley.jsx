import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { johnWesley as johnWesleyFr } from "@/lib/data/wesleyJohn";

export default function JohnWesley() {
  const { t, lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "wesleyJohn");
  const data = content?.johnWesley || johnWesleyFr;

  const [activeSection, setActiveSection] = useState("youth");

  const section = data.sections.find(s => s.id === activeSection);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 text-5xl">
          ✝️
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold mb-2">{t("wesley.home.john.title")}</h1>
          <p className="text-muted-foreground text-sm mb-3">{data.subtitle}</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {data.bio}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {data.sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeSection === s.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <span>{s.icon}</span> {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {section.content.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border/60 rounded-2xl p-5"
          >
            <h3 className="font-heading text-lg font-bold mb-2 text-blue-700 dark:text-blue-400">{item.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/80 mb-3">{item.text}</p>
            <blockquote className="border-l-3 border-blue-400 pl-3 text-xs italic text-muted-foreground bg-blue-50 dark:bg-blue-950/30 rounded-r-lg p-3">
              {item.verse}
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
