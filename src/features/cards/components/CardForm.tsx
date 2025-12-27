import { Button } from "@/shared/components/ui/shadcn/button"
import { Input } from "@/shared/components/ui/shadcn/input"
import { Textarea } from "@/shared/components/ui/shadcn/textarea"
import { useState } from "react"
import { HelpCircle, CheckCircle2, Hash } from "lucide-react"
import { Card, CardContent } from "@/shared/components/ui/shadcn/card"

type Props = {
  onSubmit: (data: {
    question: string
    answer: string
    tag: string
  }) => void
  loading: boolean
}

export default function CardForm({ onSubmit, loading }: Props) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [tag, setTag] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ question, answer, tag })
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Question
            </label>
            <Input
              placeholder="What is the question?"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
              className="text-base"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              Answer
            </label>
            <Textarea
              placeholder="What is the answer?"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              required
              className="min-h-30 text-base"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Hash className="h-4 w-4 text-muted-foreground" />
              Tag (optional)
            </label>
            <Input
              placeholder="e.g., JavaScript, React, etc."
              value={tag}
              onChange={e => setTag(e.target.value)}
              className="text-base"
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading || !question.trim() || !answer.trim()}
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            {loading ? (
              <>
                <span>⏳</span>
                Creating...
              </>
            ) : (
              <>
                <span>✨</span>
                Create card
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
