import { useEffect, useState } from "react"
import { getDashboardStats } from "@/services/api/dashboard.api"
import CategoryProgress from "@/features/dashboard/components/CategoryProgress"
import StreakCard from "@/features/dashboard/components/StreakCard"
import StatsCard from "@/features/dashboard/components/StatsCard"

export default function DashboardPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    getDashboardStats().then(setData)
  }, [])

  if (!data) return null

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📊</span>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total cards" value={data.totalCards} />
        <StatsCard label="Mastered" value={data.masteredCards} />
        <StreakCard days={data.streak} />
      </div>

      <CategoryProgress data={data.categories} />
    </div>
  )
}
