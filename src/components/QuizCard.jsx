import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function QuizCard({ question, questionIndex, totalQuestions, selectedAnswer, onAnswer, showResult }) {
  return (
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-muted-foreground">
            Question {questionIndex + 1} sur {totalQuestions}
          </span>
          <span className="text-xs font-medium text-primary">
            {Math.round(((questionIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-6 leading-snug">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correct;
            const showCorrectWrong = showResult;

            return (
              <button
                key={idx}
                onClick={() => !showResult && onAnswer(idx)}
                disabled={showResult}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 relative",
                  !showResult && "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]",
                  !showResult && !isSelected && "border-border/50 bg-background",
                  !showResult && isSelected && "border-primary bg-primary/5",
                  showCorrectWrong && isCorrect && "border-emerald-500 bg-emerald-50",
                  showCorrectWrong && isSelected && !isCorrect && "border-red-400 bg-red-50",
                  showCorrectWrong && !isCorrect && !isSelected && "border-border/30 opacity-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold shrink-0 transition-colors",
                    !showResult && !isSelected && "bg-muted text-muted-foreground",
                    !showResult && isSelected && "bg-primary text-primary-foreground",
                    showCorrectWrong && isCorrect && "bg-emerald-500 text-white",
                    showCorrectWrong && isSelected && !isCorrect && "bg-red-400 text-white"
                  )}>
                    {showCorrectWrong && isCorrect ? <CheckCircle className="w-4 h-4" /> :
                     showCorrectWrong && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                     String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-5 overflow-hidden"
            >
              <div className={cn(
                "p-4 rounded-xl text-sm leading-relaxed",
                selectedAnswer === question.correct
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                  : "bg-amber-50 border border-amber-200 text-amber-800"
              )}>
                <p className="font-semibold mb-1">
                  {selectedAnswer === question.correct ? "✨ Excellent !" : "📖 Bonne à savoir :"}
                </p>
                <p>{question.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}