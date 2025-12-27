import { useState, useMemo } from "react"
import { useCards } from "@/features/cards/hooks/useCards"
import CardList from "@/features/cards/components/CardList"
import { Button } from "@/shared/components/ui/shadcn/button"
import { Link } from "react-router"
import CardListSkeleton from "@/features/cards/components/CardListSkeleton"
import { Badge } from "@/shared/components/ui/shadcn/badge"
import { X } from "lucide-react"

export default function CardsPage() {
  const { cards, loading, load } = useCards()
  const [selectedTag, setSelectedTag] = useState<string>("")

  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    cards.forEach(card => {
      if (card.tag) tags.add(card.tag)
    })
    return Array.from(tags).sort()
  }, [cards])

  const filteredCards = useMemo(() => {
    if (!selectedTag) return cards
    return cards.filter(card => card.tag === selectedTag)
  }, [cards, selectedTag])

  async function handleTagFilter(tag: string) {
    setSelectedTag(tag)
    if (tag) {
      await load([tag])
    } else {
      await load()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <h1 className="text-2xl font-bold">My cards</h1>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <Link to="/cards/new">
            <span className="mr-2">➕</span>
            Create card
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏷️</span>
            <span className="text-sm font-medium">Filter by tag:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant={selectedTag ? "outline" : "default"}
              size="sm"
              onClick={() => handleTagFilter("")}
            >
              All
            </Button>
            {availableTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => handleTagFilter(tag)}
              >
                #{tag}
              </Button>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              Filtered by: {selectedTag}
              <button
                onClick={() => handleTagFilter("")}
                className="ml-2 hover:bg-muted rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        )}
      </div>

      {loading ? <CardListSkeleton /> : <CardList cards={filteredCards} />}
    </div>
  )
}
