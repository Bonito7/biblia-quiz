import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useCategories, totalQuestions } from "../lib/quizData";
import { useTranslation } from "../lib/i18n";
import CategoryCard from "../components/CategoryCard";
import DifficultySelector from "../components/DifficultySelector";
import PullToRefresh from "../components/PullToRefresh";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t } = useTranslation();
  const categories = useCategories();

  return (
    <PullToRefresh onRefresh={() => new Promise(r => setTimeout(r, 500))}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          {t("home.badge")}
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {t("home.title")}
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {t("home.subtitle")}
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} onSelect={() => setSelectedCategory(category)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <DifficultySelector
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
      >
        {[
          { value: String(categories.length), label: t("home.statCategories") },
          { value: String(totalQuestions), label: t("home.statQuestions") },
          { value: "∞", label: t("home.statWisdom") }
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </PullToRefresh>
  );
}
