import CardItem from "./CardItem"
import type { Card } from "../cards.types"

export default function CardList({ cards }: { cards: Card[] }) {
  if (cards.length === 0) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-5xl">📭</div>
        <div>
          <p className="text-lg font-semibold">No cards yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Create your first card to get started!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  )
}
