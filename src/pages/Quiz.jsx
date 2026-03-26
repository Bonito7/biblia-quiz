import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, questions } from "../lib/quizData";
import QuizCard from "../components/QuizCard";

export default function Quiz() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = window.location.pathname.split("/quiz/")[1];
  
  const category = categories.find(c => c.id === categoryParam);
  const categoryQuestions = questions[categoryParam] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!category || categoryQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">Catégorie introuvable</p>
        <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
      </div>
    );
  }

  const handleAnswer = useCallback((answerIdx) => {
    setSelectedAnswer(answerIdx);
    setShowResult(true);
    setAnswers(prev => [...prev, answerIdx]);
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion < categoryQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz finished — navigate to results
      const allAnswers = [...answers];
      const score = allAnswers.reduce((acc, ans, idx) => {
        return acc + (ans === categoryQuestions[idx].correct ? 1 : 0);
      }, 0);
      
      navigate(`/results?category=${categoryParam}&score=${score}&total=${categoryQuestions.length}`);
    }
  }, [currentQuestion, categoryQuestions, answers, categoryParam, navigate]);

  const question = categoryQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {category.name}
      </button>

      {/* Quiz Card */}
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

      {/* Next Button */}
      {showResult && (
        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleNext}
            size="lg"
            className="gap-2 rounded-xl px-6"
          >
            {currentQuestion < categoryQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}