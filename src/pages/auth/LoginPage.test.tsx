import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router";
import LoginPage from "./LoginPage";
import { AuthProvider } from "@/features/auth/context/AuthContext";

test("login stores token and redirects", async () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </AuthProvider>
  )

  await userEvent.type(screen.getByPlaceholderText(/username/i), "TestUser")
  await userEvent.click(screen.getByRole("button", { name: /continue/i }))

  await waitFor(() => {
    expect(localStorage.getItem("auth_token")).toBeTruthy()
  })
})