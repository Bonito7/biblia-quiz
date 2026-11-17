import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, TrendingUp } from "lucide-react";
import PullToRefresh from "../components/PullToRefresh";
import { useTranslation } from "../lib/i18n";

export default function Scores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang, t, locale } = useTranslation();

  const fetchScores = useCallback(async () => {
    try {
      const data = JSON.parse(localStorage.getItem('bibliaQuiz_scores') || '[]');
      setScores(data);
    } catch {
      setScores([]);
    }
  }, []);

  useEffect(() => {
    fetchScores().finally(() => setLoading(false));
  }, [fetchScores]);

  // Le nom de catégorie est stocké traduit au moment du quiz : on traduit
  // l'id si possible, sinon on retombe sur le nom enregistré.
  const categoryName = useCallback((entry) => {
    if (entry.categoryId) return t(`categories.${entry.categoryId}.name`);
    return entry.category;
  }, [t]);

  const bestByCategory = scores.reduce((acc, s) => {
    const key = s.categoryId || s.category;
    if (!acc[key] || s.percentage > acc[key].percentage) {
      acc[key] = s;
    }
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <PullToRefresh onRefresh={fetchScores}>
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Trophy className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-heading text-3xl font-bold mb-2">{t("scores.yourScores")}</h1>
        <p className="text-muted-foreground text-sm">{t("scores.trackProgress")}</p>
      </motion.div>

      {scores.length === 0 ? (
        <div className="text-center py-16">
          <Medal className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">{t("scores.noScores")}</p>
          <p className="text-sm text-muted-foreground/70 mt-1">{t("scores.playQuiz")}</p>
        </div>
      ) : (
        <>
          {/* Best scores */}
          {Object.keys(bestByCategory).length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {t("scores.bestScores")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(bestByCategory).map(([cat, s], i) => (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-heading text-lg font-bold text-primary">{s.percentage}%</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{categoryName(s)}</p>
                      <p className="text-xs text-muted-foreground">{s.score}/{s.total_questions} {t("scores.goodAnswers")}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* History */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {t("scores.history")}
            </h2>
            <div className="space-y-2">
              {scores.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl border border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    s.percentage >= 80 ? "bg-emerald-100 text-emerald-700" :
                    s.percentage >= 50 ? "bg-amber-100 text-amber-700" :
                    "bg-red-100 text-red-600"
                  }`}>
                    {s.percentage}%
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{categoryName(s)}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(s.created_date).toLocaleDateString(locale, {
                        day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                      })}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{s.score}/{s.total_questions}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    </PullToRefresh>
  );
}
