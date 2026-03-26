import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { categories } from "../lib/quizData";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
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
          Testez vos connaissances bibliques
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Bible Quiz
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Explorez la Parole de Dieu à travers des questions captivantes.
          Choisissez une catégorie et commencez votre parcours.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
      >
        {[
          { value: "4", label: "Catégories" },
          { value: "40", label: "Questions" },
          { value: "∞", label: "Sagesse" }
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}