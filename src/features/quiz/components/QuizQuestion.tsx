import { Button } from "@/shared/components/ui/shadcn/button";
import { Textarea } from "@/shared/components/ui/shadcn/textarea";
import { useState } from "react"
import { HelpCircle, Send } from "lucide-react"

export default function QuizQuestion({ question, onSubmit }: { question: string; onSubmit: (answer: string) => void }) {
  const [value, setValue] = useState("")

  function submit() {
    if (value.trim()) {
      onSubmit(value)
      setValue("")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      submit()
    }
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="bg-card border rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 mt-1">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight flex-1">
            {question}
          </h2>
        </div>
        
        <div className="space-y-4">
          <Textarea 
            value={value} 
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer here..."
            className="min-h-30 text-base"
            autoFocus
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Press Ctrl+Enter (or Cmd+Enter) to submit
            </p>
            <Button 
              onClick={submit} 
              disabled={!value.trim()}
              size="lg"
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
