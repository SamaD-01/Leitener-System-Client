import CardForm from "@/features/cards/components/CardForm"
import { useCards } from "@/features/cards/hooks/useCards"
import { useNavigate } from "react-router"

export default function CardFormPage() {
  const { create, loading } = useCards()
  const navigate = useNavigate()

  async function handleCreate(data: {
    question: string
    answer: string
    tag: string
  }) {
    await create(data)
    navigate("/cards")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">✨</span>
        <h1 className="text-2xl font-bold">Create new card</h1>
      </div>
      <CardForm onSubmit={handleCreate} loading={loading} />
    </div>
  )
}
