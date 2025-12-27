import CardItemSkeleton from "./CardItemSkeleton"

export default function CardListSkeleton() {
  return (
    <div className="space-y-4">
      <CardItemSkeleton />
      <CardItemSkeleton />
      <CardItemSkeleton />
    </div>
  )
}
