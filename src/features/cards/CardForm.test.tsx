import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CardForm from "./components/CardForm"

test("creates card with category 1", async () => {
  const onSubmit = vi.fn()

  render(<CardForm onSubmit={onSubmit} loading={false} />)

  await userEvent.type(screen.getByPlaceholderText(/what is the question/i), "What is TDD?")
  await userEvent.type(screen.getByPlaceholderText(/what is the answer/i), "Test Driven Development")
  await userEvent.click(screen.getByRole("button", { name: /create/i }))

  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      question: "What is TDD?",
      answer: "Test Driven Development"
    })
  )
})
