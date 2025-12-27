import { createContext, useContext, useEffect, useState } from "react"

type Theme = "default" | "blue" | "violet" | "green" | "orange"

const ColorThemeContext = createContext<{
  theme: Theme
  setTheme: (t: Theme) => void
} | null>(null)

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("color-theme") as Theme) || "default"
  )

  function setTheme(t: Theme) {
    document.documentElement.classList.remove(
      "theme-blue",
      "theme-violet",
      "theme-green",
      "theme-orange"
    )

    if (t !== "default") {
      document.documentElement.classList.add(`theme-${t}`)
    }

    localStorage.setItem("color-theme", t)
    setThemeState(t)
  }

  useEffect(() => {
    setTheme(theme)
  }, [])

  return (
    <ColorThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext)
  if (!ctx) throw new Error("useColorTheme must be used within provider")
  return ctx
}
