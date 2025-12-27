import { Link, useLocation } from "react-router"
import { ThemeToggle } from "./ThemeToggle"
import { LayoutDashboard, Brain, CreditCard, Settings } from "lucide-react"
import { cn } from "@/shared/lib/cn"

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/quiz", label: "Quiz", icon: Brain },
    { path: "/cards", label: "Cards", icon: CreditCard },
    { path: "/settings", label: "Settings", icon: Settings },
  ]

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}