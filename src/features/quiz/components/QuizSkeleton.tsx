import { Skeleton } from "@/shared/components/ui/shadcn/skeleton";

export default function QuizSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  )
}