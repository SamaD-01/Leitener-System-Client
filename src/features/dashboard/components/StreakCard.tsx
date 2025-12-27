import { Card, CardContent } from "@/shared/components/ui/shadcn/card"

export default function StreakCard({ days }: { days: number }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Current streak</p>
        <p className="text-3xl font-bold">{days} days 🔥</p>
      </CardContent>
    </Card>
  )
}
