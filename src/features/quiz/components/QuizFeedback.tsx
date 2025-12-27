import { useState } from "react"
import { Button } from "@/shared/components/ui/shadcn/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/shadcn/dialog"

export default function QuizFeedback({
  expected,
  userAnswer,
  onWrong,
  onForce
}: {
  expected: string
  userAnswer: string
  onWrong: () => void
  onForce: () => void
}) {
  const [showConfirm, setShowConfirm] = useState(false)

  function handleForceClick() {
    setShowConfirm(true)
  }

  function handleConfirmForce() {
    setShowConfirm(false)
    onForce()
  }

  return (
    <>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-card border rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🤔</span>
              <h3 className="text-xl font-semibold">Let's check your answer</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <span>✍️</span>
                  Your answer:
                </p>
                <p className="font-medium text-base">{userAnswer}</p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <span>✅</span>
                  Correct answer:
                </p>
                <p className="font-semibold text-base">{expected}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                variant="destructive" 
                onClick={onWrong}
                className="flex-1 gap-2"
              >
                <span>❌</span>
                Wrong
              </Button>
              <Button 
                onClick={handleForceClick}
                variant="outline"
                className="flex-1 gap-2"
              >
                <span>✓</span>
                Force correct
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm force validation</DialogTitle>
            <DialogDescription>
              Are you sure you want to mark this answer as correct even though it doesn't match the expected answer? This will move the card to the next category.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmForce}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
