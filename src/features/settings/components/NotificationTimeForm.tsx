import { useEffect, useState } from "react"
import { updateNotificationTime, getNotificationTime } from "@/services/api/user.api"
import { Button } from "@/shared/components/ui/shadcn/button"
import { Input } from "@/shared/components/ui/shadcn/input"

export default function NotificationTimeForm() {
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    getNotificationTime().then(setTime)
  }, [])

  async function submit() {
    setLoading(true)
    await updateNotificationTime(time)
    setLoading(false)
    setSaved(true)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium flex items-center gap-2">
          <span>🔔</span>
          Daily quiz reminder
        </label>
        <p className="text-sm text-muted-foreground mt-1">
          Set a time to be notified for your daily quiz
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
        <Input 
          type="time" 
          value={time} 
          onChange={e => setTime(e.target.value)}
          className="text-base"
        />
        <Button onClick={submit} disabled={loading} className="gap-2">
          {loading ? (
            <>
              <span>⏳</span>
              Saving...
            </>
          ) : saved ? (
            <>
              <span>✅</span>
              Saved!
            </>
          ) : (
            <>
              <span>💾</span>
              Save
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
