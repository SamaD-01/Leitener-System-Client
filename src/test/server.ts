import { setupServer } from "msw/node"
import { http, HttpResponse } from "msw"

export const server = setupServer(
  http.get("http://localhost:8080/cards/quizz", () => {
    return HttpResponse.json([
      { id: "1", question: "Specific Question 123", answer: "A" }
    ])
  }),
  http.patch("http://localhost:8080/cards/*/answer", () => {
    return HttpResponse.json({ success: true })
  })
)