// Cache en mémoire pour éviter les appels LLM répétés
const translationCache = {};

export async function translateQuizQuestions(categoryId, difficulty, lang) {
  // Si français, retourner les données originales
  if (lang === 'fr') return null;

  // La traduction LLM n'est plus disponible sans backend IA.
  // L'application reste en français pour toutes les langues.
  return null;
}