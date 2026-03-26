import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { difficulties } from "../lib/quizData";

export default function DifficultySelector({ category, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-card border border-border/60 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className={`h-1 -mt-6 -mx-6 mb-5 rounded-t-2xl bg-gradient-to-r ${category.color}`} />
        <h3 className="font-heading text-xl font-semibold mb-1">{category.name}</h3>
        <p className="text-sm text-muted-foreground mb-5">Choisissez votre niveau</p>

        <div className="space-y-3">
          {difficulties.map((diff, i) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/quiz/${category.id}?difficulty=${diff.id}`}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 ${diff.bg} hover:scale-[1.02] transition-transform duration-200 block`}
              >
                <span className="text-2xl">{diff.icon}</span>
                <div className="flex-1">
                  <p className={`font-semibold ${diff.color}`}>{diff.label}</p>
                  <p className="text-xs text-muted-foreground">{diff.description}</p>
                </div>
                <span className="text-muted-foreground text-sm">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
        >
          Annuler
        </button>
      </motion.div>
    </motion.div>
  );
}