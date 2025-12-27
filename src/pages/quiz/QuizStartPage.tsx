import { useQuiz } from "@/features/quiz/context/QuizContext"
import { Button } from "@/shared/components/ui/shadcn/button"
import { useNavigate } from "react-router"

export default function QuizStartPage() {
  const quiz = useQuiz()
  const navigate = useNavigate()

  async function start() {
    const hasCards = await quiz.start()
    if (hasCards) {
      navigate("/quiz/play")
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <div className="text-5xl mb-4">🧠</div>
        <h1 className="text-3xl font-bold">Ready to learn?</h1>
        <p className="text-muted-foreground">
          Test your knowledge with today's quiz
        </p>
      </div>

      {quiz.error && (
        <div className="p-4 border rounded-lg bg-muted flex items-center gap-3">
          <span className="text-2xl">😔</span>
          <p className="text-sm">{quiz.error}</p>
        </div>
      )}

      <div className="flex justify-center">
        <Button
          data-testid="start-quiz-button"
          onClick={start}
          disabled={quiz.loading}
          size="lg"
          className="text-lg px-8 py-6"
        >
          {quiz.loading ? (
            <>
              <span className="mr-2">⏳</span>
              Loading...
            </>
          ) : (
            <>
              <span className="mr-2">🚀</span>
              Start quiz
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
