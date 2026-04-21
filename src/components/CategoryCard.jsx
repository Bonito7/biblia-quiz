import { ScrollText, BookOpen, Users, Quote, Eye, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getLanguage } from "../lib/i18n";
import { categoryTranslations } from "../lib/quizTranslations";

const iconMap = {
  ScrollText,
  BookOpen,
  Users,
  Quote,
  Eye,
  MapPin,
  Clock
};

export default function CategoryCard({ category, index, onSelect }) {
  const Icon = iconMap[category.icon] || BookOpen;
  const [lang, setLang] = useState(getLanguage());

  useEffect(() => {
    const onStorage = () => {
      const currentLang = getLanguage();
      setLang(prev => prev !== currentLang ? currentLang : prev);
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(onStorage, 500);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(interval); };
  }, []);

  const trans = categoryTranslations[category.id][lang] || categoryTranslations[category.id].fr;
  const labels = {
    questions: { fr: "questions", en: "questions", es: "preguntas", pt: "perguntas", ru: "вопросов", zh: "问题", hi: "प्रश्न", sw: "maswali" }[lang],
    chooseLevel: { fr: "Choisir niveau", en: "Choose level", es: "Elegir nivel", pt: "Escolher nível", ru: "Выбрать уровень", zh: "选择级别", hi: "स्तर चुनें", sw: "Chagua kiwango" }[lang]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <button
        onClick={onSelect}
        className="group block w-full text-left"
      >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30">
          {/* Gradient accent */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="font-heading text-lg font-semibold mb-1.5">{trans.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{trans.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              {category.questionsCount} {labels.questions}
            </span>
            <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              {labels.chooseLevel} →
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}