import { useState } from "react"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { Button } from "@/shared/components/ui/shadcn/button"
import { Input } from "@/shared/components/ui/shadcn/input"
import { useNavigate } from "react-router"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      // Use "Guest" if no username provided, dummy password
      await login(username || "Guest", "dummy-password")
      navigate("/")
    } catch {
      setError("Login failed")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">
            Enter your username to continue your progress
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Username (optional)"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="text-center text-lg"
            />
          </div>

          {error && <p className="text-sm text-destructive text-center">{error}</p>}

          <Button type="submit" className="w-full" size="lg">
            {username ? "Continue" : "Continue as Guest"}
          </Button>
        </form>
      </div>
    </div>
  )
}
