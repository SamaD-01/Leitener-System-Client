import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import QuizQuestionPage from "@/pages/quiz/QuizQuestionPage"
import QuizStartPage from "@/pages/quiz/QuizStartPage"
import { MemoryRouter, Routes, Route } from "react-router"
import { QuizProvider } from "./context/QuizContext"

test("user can answer a quiz question", async () => {
  render(
    <MemoryRouter initialEntries={["/quiz"]}>
      <QuizProvider>
        <Routes>
          <Route path="/quiz" element={<QuizStartPage />} />
          <Route path="/quiz/play" element={<QuizQuestionPage />} />
        </Routes>
      </QuizProvider>
    </MemoryRouter>
  )

  const startBtn = await screen.findByTestId("start-quiz-button")
  expect(startBtn).toBeInTheDocument()
  await userEvent.click(startBtn)

  expect(await screen.findByText(/Specific Question 123/i)).toBeInTheDocument()

  const input = screen.getByRole("textbox")
  await userEvent.type(input, "A")
  await userEvent.click(screen.getByRole("button", { name: /submit/i }))
})
