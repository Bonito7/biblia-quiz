import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, Home, Star, Award, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { categories } from "../lib/quizData";

export default function Results() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("category");
  const score = parseInt(params.get("score") || "0");
  const total = parseInt(params.get("total") || "0");
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const [saved, setSaved] = useState(false);

  const category = categories.find(c => c.id === categoryId);
  const categoryName = category?.name || null;
  const labels = { exceptional: "Exceptionnel!", exceptionalSub: "Score parfait", veryGood: "Très bien!", veryGoodSub: "Excellent travail", notBad: "Pas mal!", notBadSub: "Continue tes efforts", keepGoing: "À bientôt!", keepGoingSub: "Essaie à nouveau", resultsNotFound: "Résultats introuvables", backHome: "Retour à l'accueil", restart: "Recommencer", otherCategories: "Autres catégories", correct: "Correctes", incorrect: "Incorrectes", total: "Total" };

  useEffect(() => {
    if (!saved && category && total > 0 && categoryName) {
      base44.entities.QuizScore.create({
        category: categoryName,
        score,
        total_questions: total,
        percentage
      }).then(() => setSaved(true)).catch(() => {});
    }
  }, [saved, category, score, total, percentage, categoryName]);

  const getResultMessage = () => {
    if (percentage >= 90) return { icon: Trophy, text: labels.exceptional, subtitle: labels.exceptionalSub, color: "text-amber-500" };
    if (percentage >= 70) return { icon: Award, text: labels.veryGood, subtitle: labels.veryGoodSub, color: "text-emerald-500" };
    if (percentage >= 50) return { icon: Star, text: labels.notBad, subtitle: labels.notBadSub, color: "text-blue-500" };
    return { icon: Frown, text: labels.keepGoing, subtitle: labels.keepGoingSub, color: "text-muted-foreground" };
  };

  const result = getResultMessage();
  const ResultIcon = result.icon;

  if (!category) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">{labels.resultsNotFound}</p>
        <Button onClick={() => navigate("/")}>{labels.backHome}</Button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className={`w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center ${result.color}`}>
            <ResultIcon className="w-10 h-10" />
          </div>
        </motion.div>

        {/* Result Text */}
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">{result.text}</h1>
        <p className="text-muted-foreground mb-8">{result.subtitle}</p>

        {/* Score Card */}
        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <p className="text-sm text-muted-foreground mb-3">{categoryName}</p>

          {/* Score Circle */}
          <div className="relative w-36 h-36 mx-auto mb-5">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
              <motion.circle
                cx="60" cy="60" r="50" fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={314}
                initial={{ strokeDashoffset: 314 }}
                animate={{ strokeDashoffset: 314 - (314 * percentage / 100) }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-heading text-3xl font-bold"
              >
                {percentage}%
              </motion.span>
              <span className="text-xs text-muted-foreground">{score}/{total}</span>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="font-heading text-lg font-bold text-emerald-600">{score}</p>
              <p className="text-[10px] text-emerald-600/70 uppercase tracking-wider">{labels.correct}</p>
            </div>
            <div className="p-3 rounded-xl bg-red-50 border border-red-100">
              <p className="font-heading text-lg font-bold text-red-500">{total - score}</p>
              <p className="text-[10px] text-red-500/70 uppercase tracking-wider">{labels.incorrect}</p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
              <p className="font-heading text-lg font-bold text-blue-600">{total}</p>
              <p className="text-[10px] text-blue-600/70 uppercase tracking-wider">{labels.total}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate(`/quiz/${categoryId}`)}
            variant="outline"
            size="lg"
            className="gap-2 rounded-xl"
          >
            <RotateCcw className="w-4 h-4" />
            {labels.restart}
          </Button>
          <Link to="/">
            <Button size="lg" className="gap-2 rounded-xl w-full">
              <Home className="w-4 h-4" />
              {labels.otherCategories}
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}