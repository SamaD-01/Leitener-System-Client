import { Button } from "@/shared/components/ui/shadcn/button";
import { Card, CardContent } from "@/shared/components/ui/shadcn/card";
import { Trophy, Target, XCircle } from "lucide-react";
// import { cn } from "@/shared/lib/cn";

export default function QuizSummary({ total, correct, onBack }: { total: number; correct: number; onBack: () => void }) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  const wrong = total - correct

  const getEmoji = () => {
    if (percentage >= 90) return "🏆"
    if (percentage >= 70) return "🎉"
    if (percentage >= 50) return "👍"
    return "💪"
  }

  const getMessage = () => {
    if (percentage >= 90) return "Excellent work!"
    if (percentage >= 70) return "Great job!"
    if (percentage >= 50) return "Good effort!"
    return "Keep practicing!"
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <div className="text-6xl">{getEmoji()}</div>
        <h2 className="text-3xl font-bold">Quiz completed!</h2>
        <p className="text-lg text-muted-foreground">{getMessage()}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">{percentage}%</span>
            </div>
            <p className="text-sm text-muted-foreground">Score</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-2xl font-bold">{correct}</span>
            </div>
            <p className="text-sm text-muted-foreground">Correct</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <span className="text-2xl font-bold">{wrong}</span>
            </div>
            <p className="text-sm text-muted-foreground">Wrong</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onBack} size="lg" className="gap-2">
          <span>🏠</span>
          Back to dashboard
        </Button>
      </div>
    </div>
  )
}
