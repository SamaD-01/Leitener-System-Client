import NotificationTimeForm from "@/features/settings/components/NotificationTimeForm"
import ColorThemeSelector from "@/features/settings/components/ColorThemeSelector"

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center gap-2">
        <span className="text-2xl">⚙️</span>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="space-y-8">
        <ColorThemeSelector />
        <NotificationTimeForm />
      </div>
    </div>
  )
}
