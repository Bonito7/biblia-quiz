import { base44 } from "@/api/base44Client";

// Cache en mémoire pour éviter les appels LLM répétés
const translationCache = {};

export async function translateQuizQuestions(categoryId, difficulty, lang) {
  // Si français, retourner les données originales
  if (lang === 'fr') return null;

  const cacheKey = `${categoryId}-${difficulty}-${lang}`;
  
  // Vérifier le cache
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  // Récupérer les questions originales
  const { questions } = await import('./quizData');
  const originalQuestions = questions[categoryId]?.[difficulty] || [];

  if (originalQuestions.length === 0) return null;

  try {
    // Traduction via LLM avec cache
    const result = await base44.integrations.Core.InvokeLLM({
      model: "claude_sonnet_4_6",
      prompt: `You are an expert translator. Translate ALL these quiz questions and answers from French to the target language.

STRICT RULES:
1. Translate EVERY field: question, options (A, B, C, D), correct, explanation.
2. Keep biblical references (Genèse 1:1, Matthieu 5:3, etc.) UNCHANGED.
3. Keep Hebrew terms/names UNCHANGED.
4. Return EXACTLY ${originalQuestions.length} items in same order.
5. Return ONLY valid JSON with a "questions" array. No markdown.

Target language: ${lang}

JSON to translate:
${JSON.stringify(originalQuestions.map(q => ({
  question: q.question,
  options: q.options,
  correct: q.correct,
  explanation: q.explanation
})))}`,
      response_json_schema: {
        type: "object",
        properties: {
          questions: {
            type: "array",
            items: {
              type: "object",
              properties: {
                question: { type: "string" },
                options: { type: "array", items: { type: "string" } },
                correct: { type: "number" },
                explanation: { type: "string" }
              }
            }
          }
        }
      }
    });

    const translated = result.questions || [];
    const fullQuestions = originalQuestions.map((q, idx) => {
      const t = translated[idx];
      return t ? { ...q, ...t } : q;
    });

    translationCache[cacheKey] = fullQuestions;
    return fullQuestions;
  } catch (error) {
    console.error(`Translation error for ${cacheKey}:`, error);
    return null;
  }
}