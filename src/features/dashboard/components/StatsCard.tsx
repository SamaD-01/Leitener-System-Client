import { Card, CardContent } from "@/shared/components/ui/shadcn/card";

export default function StatsCard({ label, value }: { label: string; value: number }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}