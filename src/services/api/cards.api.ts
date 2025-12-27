import type { Card, CardCreatePayload } from "@/features/cards/cards.types"
import { apiClient } from "./client"

export async function createCard(payload: CardCreatePayload): Promise<Card> {
  const response = await apiClient.post<Card>('/cards', payload)
  return response.data
}

export async function getCards(tags?: string[]): Promise<Card[]> {
  const params = new URLSearchParams()
  if (tags && tags.length > 0) {
    tags.forEach(tag => params.append('tags', tag))
  }
  
  const response = await apiClient.get<Card[]>('/cards', { params })
  return response.data
}

export async function getCardById(id: string): Promise<Card> {
  const response = await apiClient.get<Card>(`/cards/${id}`)
  return response.data
}

export async function updateCard(id: string, payload: Partial<Card>): Promise<Card> {
  const response = await apiClient.put<Card>(`/cards/${id}`, payload)
  return response.data
}

export async function deleteCard(id: string): Promise<void> {
  await apiClient.delete(`/cards/${id}`)
}