import { Check } from "lucide-react"

interface StepIconProps {
  step: number
  currentStep: number
}

export function StepIcon({ step, currentStep }: StepIconProps) {
  const isCompleted = step <= currentStep
  const isCurrent = step === currentStep + 1

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
        isCompleted ? "bg-pink-400" : isCurrent ? "border-2 border-pink-400" : "bg-slate-700"
      }`}
    >
      {isCompleted ? (
        <Check className="h-5 w-5 text-slate-950" />
      ) : (
        <span className={`text-sm ${isCurrent ? "text-pink-400" : "text-slate-400"}`}>{step}</span>
      )}
    </div>
  )
}

