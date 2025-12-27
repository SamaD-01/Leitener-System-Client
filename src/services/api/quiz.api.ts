import type { QuizCard } from "@/features/quiz/quiz.types"
import { apiClient } from "./client"

export interface QuizCardResponse {
  id: string;
  question: string;
  answer: string;
  tag?: string;
  category: string;
}

export async function getQuizCards(date?: Date): Promise<QuizCard[]> {
  const params: { date?: string } = {};

  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    params.date = `${year}-${month}-${day}`;
  }

  const response = await apiClient.get<QuizCardResponse[]>('/cards/quizz', { params });

  return response.data.map(card => ({
    id: card.id,
    question: card.question,
    answer: card.answer
  }));
}

export async function answerCard(cardId: string, isValid: boolean): Promise<void> {
  await apiClient.patch(`/cards/${cardId}/answer`, { isValid });
}
