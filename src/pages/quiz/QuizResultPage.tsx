import { useQuiz } from "@/features/quiz/context/QuizContext"
import QuizSummary from "@/features/quiz/components/QuizSummary"
import { useNavigate } from "react-router"

export default function QuizResultPage() {
  const quiz = useQuiz()
  const navigate = useNavigate()

  return (
    <QuizSummary
      total={quiz.cards.length}
      correct={quiz.correct}
      onBack={() => {
        quiz.reset()
        navigate("/")
      }}
    />
  )
}
