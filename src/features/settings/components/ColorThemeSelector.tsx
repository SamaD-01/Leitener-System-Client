import { useColorTheme } from "@/shared/theme/ColorThemeProvider"
// import { Button } from "@/shared/components/ui/shadcn/button"
import { Check } from "lucide-react"
import { cn } from "@/shared/lib/cn"

const themes = [
  { value: "default" as const, label: "Default", color: "bg-gray-500" },
  { value: "blue" as const, label: "Blue", color: "bg-blue-500" },
  { value: "violet" as const, label: "Violet", color: "bg-violet-500" },
  { value: "green" as const, label: "Green", color: "bg-green-500" },
  { value: "orange" as const, label: "Orange", color: "bg-orange-500" },
]

export default function ColorThemeSelector() {
  const { theme, setTheme } = useColorTheme()

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Color theme</label>
        <p className="text-sm text-muted-foreground">
          Choose your preferred color palette
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={cn(
              "relative flex flex-col items-center gap-2 p-4 border rounded-lg transition-all hover:border-primary",
              theme === themeOption.value && "border-primary ring-2 ring-primary ring-offset-2"
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full",
                themeOption.color
              )}
            />
            <span className="text-sm font-medium">{themeOption.label}</span>
            {theme === themeOption.value && (
              <div className="absolute top-2 right-2">
                <Check className="h-4 w-4 text-primary" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

