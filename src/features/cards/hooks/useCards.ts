import { useEffect, useState, useCallback } from "react"
import { createCard, getCards } from "@/services/api/cards.api"
import type { Card, CardCreatePayload } from "../cards.types"

export function useCards() {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async (tags?: string[]) => {
    setLoading(true)
    try {
      const data = await getCards(tags)
      setCards(data)
    } finally {
      setLoading(false)
    }
  }, [])

  async function create(payload: CardCreatePayload) {
    setLoading(true)
    try {
      const card = await createCard(payload)
      setCards(prev => [...prev, card])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [load])

  return {
    cards,
    loading,
    create,
    load
  }
}
