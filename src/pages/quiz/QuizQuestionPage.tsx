import { useState } from "react"
import QuizQuestion from "@/features/quiz/components/QuizQuestion"
import QuizFeedback from "@/features/quiz/components/QuizFeedback"
import { useQuiz } from "@/features/quiz/context/QuizContext"
import { Navigate } from "react-router"
import QuizSkeleton from "@/features/quiz/components/QuizSkeleton"
import QuizProgress from "@/features/quiz/components/QuizProgress"

export default function QuizQuestionPage() {
  const quiz = useQuiz()
  const [userAnswer, setUserAnswer] = useState<string>("")
  const [showFeedback, setShowFeedback] = useState(false)

  if (!quiz.currentCard) return <Navigate to="/quiz" />
  if (quiz.finished) return <Navigate to="/quiz/result" />

  function normalizeAnswer(answer: string): string {
    return answer.trim().toLowerCase()
  }

  function isAnswerCorrect(userAnswer: string, expectedAnswer: string): boolean {
    return normalizeAnswer(userAnswer) === normalizeAnswer(expectedAnswer)
  }

  async function submit(answer: string) {
    setUserAnswer(answer)
    const correct = isAnswerCorrect(answer, quiz.currentCard!.answer)
    
    if (correct) {
      await quiz.submitAnswer(true)
      setUserAnswer("")
    } else {
      setShowFeedback(true)
    }
  }

  async function handleWrong() {
    await quiz.submitAnswer(false)
    setShowFeedback(false)
    setUserAnswer("")
  }

  async function handleForce() {
    await quiz.submitAnswer(true)
    setShowFeedback(false)
    setUserAnswer("")
  }

  if (showFeedback) {
    return (
      <QuizFeedback
        expected={quiz.currentCard.answer}
        userAnswer={userAnswer}
        onWrong={handleWrong}
        onForce={handleForce}
      />
    )
  }

  if (quiz.loading) return <QuizSkeleton />
  return (
    <div className="space-y-6">
      <QuizProgress
        current={quiz.currentIndex + 1}
        total={quiz.cards.length}
      />

      <QuizQuestion
        question={quiz.currentCard.question}
        onSubmit={submit}
      />
    </div>
  )
}