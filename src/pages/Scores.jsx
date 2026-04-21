import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, TrendingUp } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { scoresTranslations } from "../lib/quizTranslations";
import { getLanguage } from "../lib/i18n";

export default function Scores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    base44.entities.QuizScore.list("-created_date", 50)
      .then(setScores)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const bestByCategory = scores.reduce((acc, s) => {
    if (!acc[s.category] || s.percentage > acc[s.category].percentage) {
      acc[s.category] = s;
    }
    return acc;
  }, {});

  const labels = scoresTranslations[lang] || scoresTranslations.fr;
  const locales = { fr: "fr-FR", en: "en-US", es: "es-ES", pt: "pt-BR", ru: "ru-RU", zh: "zh-CN", hi: "hi-IN", sw: "sw-TZ" };
  const locale = locales[lang] || "fr-FR";

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Trophy className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-heading text-3xl font-bold mb-2">{labels.yourScores}</h1>
        <p className="text-muted-foreground text-sm">{labels.trackProgress}</p>
      </motion.div>

      {scores.length === 0 ? (
        <div className="text-center py-16">
          <Medal className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">{labels.noScores}</p>
          <p className="text-sm text-muted-foreground/70 mt-1">{labels.playQuiz}</p>
        </div>
      ) : (
        <>
          {/* Best scores */}
          {Object.keys(bestByCategory).length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {labels.bestScores}
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
                      <p className="text-sm font-medium truncate">{cat}</p>
                      <p className="text-xs text-muted-foreground">{s.score}/{s.total_questions} {labels.goodAnswers}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* History */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {labels.history}
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
                    <p className="text-sm font-medium truncate">{s.category}</p>
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
  );
}