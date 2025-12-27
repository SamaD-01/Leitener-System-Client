import { Progress } from "@/shared/components/ui/shadcn/progress"

export default function QuizProgress({
  current,
  total
}: {
  current: number
  total: number
}) {
  const value = total === 0 ? 0 : Math.round((current / total) * 100)

  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium flex items-center gap-2">
          <span>📊</span>
          Progress
        </span>
        <span className="text-muted-foreground">
          {current} / {total}
        </span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
