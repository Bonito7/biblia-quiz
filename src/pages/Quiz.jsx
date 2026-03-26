import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, questions } from "../lib/quizData";
import QuizCard from "../components/QuizCard";

export default function Quiz() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const difficulty = urlParams.get('difficulty') || 'debutant';

  const difficultyLabel = { debutant: '🌱 Débutant', intermediaire: '📖 Intermédiaire', expert: '🔥 Expert' };

  const category = categories.find(c => c.id === categoryId);
  const allQuestions = questions[categoryId] || {};
  const categoryQuestions = allQuestions[difficulty] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIdx) => {
    setSelectedAnswer(answerIdx);
    setShowResult(true);
    setAnswers(prev => [...prev, answerIdx]);
  };

  const handleNext = () => {
    if (currentQuestion < categoryQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const allAnswers = [...answers];
      const score = allAnswers.reduce((acc, ans, idx) => {
        return acc + (ans === categoryQuestions[idx].correct ? 1 : 0);
      }, 0);
      navigate(`/results?category=${categoryId}&score=${score}&total=${categoryQuestions.length}&difficulty=${difficulty}`);
    }
  };

  if (!category || categoryQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">Catégorie introuvable</p>
        <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
      </div>
    );
  }

  const question = categoryQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {category.name}
        </button>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
        >
          {difficultyLabel[difficulty]}
        </motion.span>
      </div>

      <AnimatePresence mode="wait">
        <QuizCard
          key={currentQuestion}
          question={question}
          questionIndex={currentQuestion}
          totalQuestions={categoryQuestions.length}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          showResult={showResult}
        />
      </AnimatePresence>

      {showResult && (
        <div className="mt-6 flex justify-end">
          <Button onClick={handleNext} size="lg" className="gap-2 rounded-xl px-6">
            {currentQuestion < categoryQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}