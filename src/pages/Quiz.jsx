import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, questions } from "../lib/quizData";
import { getLanguage, LANGUAGES } from "../lib/i18n";
import { translateQuizQuestions } from "../lib/quizTranslationCache";
import QuizCard from "../components/QuizCard";

export default function Quiz() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const difficulty = urlParams.get('difficulty') || 'debutant';
  const [lang, setLang] = useState(getLanguage());
  const [translatingQuestions, setTranslatingQuestions] = useState(false);
  const [displayedQuestions, setDisplayedQuestions] = useState(null);

  useEffect(() => {
    const onStorage = () => {
      const currentLang = getLanguage();
      setLang(prev => prev !== currentLang ? currentLang : prev);
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(onStorage, 500);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(interval); };
  }, []);

  // Charger et traduire les questions quand la langue change
  useEffect(() => {
    const loadQuestions = async () => {
      if (lang === 'fr') {
        setDisplayedQuestions(null);
        setTranslatingQuestions(false);
        return;
      }

      setTranslatingQuestions(true);
      const translated = await translateQuizQuestions(categoryId, difficulty, lang);
      if (translated) {
        setDisplayedQuestions(translated);
      }
      setTranslatingQuestions(false);
    };

    loadQuestions();
  }, [lang, categoryId, difficulty]);

  const difficultyLabels = {
    debutant: { fr: '🌱 Débutant', en: '🌱 Beginner', es: '🌱 Principiante', pt: '🌱 Iniciante', ru: '🌱 Новичок', zh: '🌱 初学者', hi: '🌱 शुरुआती', sw: '🌱 Mwanzo' },
    intermediaire: { fr: '📖 Intermédiaire', en: '📖 Intermediate', es: '📖 Intermedio', pt: '📖 Intermediário', ru: '📖 Средний', zh: '📖 中级', hi: '📖 मध्यवर्ती', sw: '📖 Kati' },
    expert: { fr: '🔥 Expert', en: '🔥 Expert', es: '🔥 Experto', pt: '🔥 Especialista', ru: '🔥 Эксперт', zh: '🔥 专家', hi: '🔥 विशेषज्ञ', sw: '🔥 Mtaalamu' }
  };

  const labels = {
    categoryNotFound: { fr: 'Catégorie introuvable', en: 'Category not found', es: 'Categoría no encontrada', pt: 'Categoria não encontrada', ru: 'Категория не найдена', zh: '找不到类别', hi: 'श्रेणी नहीं मिली', sw: 'Kategoria haipo' },
    backHome: { fr: 'Retour à l\'accueil', en: 'Back to Home', es: 'Volver al inicio', pt: 'Voltar para casa', ru: 'Вернуться на главную', zh: '返回首页', hi: 'होम पर वापस जाएँ', sw: 'Kurudi Nyumbani' },
    nextQuestion: { fr: 'Question suivante', en: 'Next Question', es: 'Siguiente pregunta', pt: 'Próxima pergunta', ru: 'Следующий вопрос', zh: '下一个问题', hi: 'अगला प्रश्न', sw: 'Swali Linalofuata' },
    seeResults: { fr: 'Voir les résultats', en: 'See Results', es: 'Ver resultados', pt: 'Ver resultados', ru: 'Просмотреть результаты', zh: '查看结果', hi: 'परिणाम देखें', sw: 'Angalia Matokeo' }
  };

  const category = categories.find(c => c.id === categoryId);
  const allQuestions = questions[categoryId] || {};
  const originalQuestions = allQuestions[difficulty] || [];
  const categoryQuestions = displayedQuestions || originalQuestions;

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
        <p className="text-muted-foreground mb-4">{labels.categoryNotFound[lang]}</p>
        <Button onClick={() => navigate("/")}>{labels.backHome[lang]}</Button>
      </div>
    );
  }

  if (translatingQuestions) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-3 text-primary" />
        <p className="text-muted-foreground">Traduction en cours...</p>
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
          {difficultyLabels[difficulty][lang]}
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
            {currentQuestion < categoryQuestions.length - 1 ? labels.nextQuestion[lang] : labels.seeResults[lang]}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}