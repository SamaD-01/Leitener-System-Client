import { Badge } from "@/shared/components/ui/shadcn/badge"

export default function CategoryProgress({ data }: { data: Record<number, number> }) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Leitner categories</h2>
      {Object.entries(data).map(([cat, count]) => (
        <div key={cat} className="flex items-center justify-between">
          <Badge>Category {cat}</Badge>
          <span>{count} cards</span>
        </div>
      ))}
    </div>
  )
}
