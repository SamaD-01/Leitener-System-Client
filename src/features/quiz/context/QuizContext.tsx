import { createContext, useContext, useState } from "react"
import { getQuizCards, answerCard } from "@/services/api/quiz.api"
import type { QuizCard } from "../quiz.types"

type QuizContextType = {
  cards: QuizCard[]
  currentIndex: number
  correct: number
  loading: boolean
  finished: boolean
  error: string | null
  currentCard?: QuizCard
  start: () => Promise<boolean>
  submitAnswer: (isValid: boolean) => Promise<void>
  reset: () => void
}

const QuizContext = createContext<QuizContextType | null>(null)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<QuizCard[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const currentCard = cards[currentIndex]
  const finished = currentIndex >= cards.length && cards.length > 0

  async function start(): Promise<boolean> {
    setLoading(true)
    setError(null)
    try {
      const data = await getQuizCards()
      if (data.length === 0) {
        setError("No quiz available today. Come back tomorrow!")
        return false
      } else {
        setCards(data)
        setCurrentIndex(0)
        setCorrect(0)
        return true
      }
    } catch (err) {
      setError("Failed to load quiz. Please try again later.")
      return false
    } finally {
      setLoading(false)
    }
  }

  async function submitAnswer(isValid: boolean) {
    await answerCard(currentCard.id, isValid)
    if (isValid) setCorrect(v => v + 1)
    setCurrentIndex(i => i + 1)
  }

  function reset() {
    setCards([])
    setCurrentIndex(0)
    setCorrect(0)
    setError(null)
  }

  return (
    <QuizContext.Provider
      value={{
        cards,
        currentIndex,
        correct,
        loading,
        finished,
        error,
        currentCard,
        start,
        submitAnswer,
        reset
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const ctx = useContext(QuizContext)
  if (!ctx) {
    throw new Error("useQuiz must be used within QuizProvider")
  }
  return ctx
}
