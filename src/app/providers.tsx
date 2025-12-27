import { AuthProvider } from "@/features/auth/context/AuthContext"
import { ThemeProvider } from "@/shared/components/theme-provider"
import { ColorThemeProvider } from "@/shared/theme/ColorThemeProvider"

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ColorThemeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ColorThemeProvider>
    </ThemeProvider>
  )
}
