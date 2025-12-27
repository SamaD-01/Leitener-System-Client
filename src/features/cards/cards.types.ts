export type Category =
  | "FIRST"
  | "SECOND"
  | "THIRD"
  | "FOURTH"
  | "FIFTH"
  | "SIXTH"
  | "SEVENTH"
  | "DONE"

export type CardCreatePayload = {
  question: string
  answer: string
  tag: string
}

export type Card = {
  id: string
  question: string
  answer: string
  tag: string
  category: Category
}
