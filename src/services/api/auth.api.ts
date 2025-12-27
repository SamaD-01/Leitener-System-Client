import type { AuthResponse } from "@/features/auth/auth.types"

export async function login(email: string, password: string): Promise<AuthResponse> {
  if (!email || !password) {
    throw new Error("Invalid credentials")
  }

  return {
    token: "fake-jwt-token"
  }
}