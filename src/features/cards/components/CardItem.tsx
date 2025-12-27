import { Badge } from "@/shared/components/ui/shadcn/badge"
import type { Card } from "../cards.types"
import { HelpCircle, CheckCircle2, Hash } from "lucide-react"

const categoryEmojis: Record<string, string> = {
  FIRST: "🌱",
  SECOND: "🌿",
  THIRD: "🌳",
  FOURTH: "🌲",
  FIFTH: "⭐",
  SIXTH: "🌟",
  SEVENTH: "💫",
  DONE: "✅",
}

export default function CardItem({ card }: { card: Card }) {
  return (
    <div className="group relative bg-card border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4 text-primary shrink-0" />
              <h3 className="font-semibold text-base sm:text-lg leading-tight">
                {card.question}
              </h3>
            </div>
          </div>
          <Badge className="shrink-0" variant="outline">
            <span className="mr-1">{categoryEmojis[card.category] || "📌"}</span>
            {card.category}
          </Badge>
        </div>

        <div className="pt-3 border-t">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {card.answer}
            </p>
          </div>
        </div>

        {card.tag && (
          <div className="flex items-center gap-2 pt-2">
            <Hash className="h-3 w-3 text-muted-foreground" />
            <Badge variant="secondary" className="text-xs">
              {card.tag}
            </Badge>
          </div>
        )}
      </div>
    </div>
  )
}
