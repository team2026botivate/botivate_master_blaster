import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all",
                currentStep === step
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                  : currentStep > step
                  ? "border-success bg-success text-white"
                  : "border-neutral-300 bg-white text-neutral-400 dark:border-neutral-700 dark:bg-zinc-900"
              )}
            >
              {currentStep > step ? <Check className="h-5 w-5" /> : step}
            </div>
            <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
              {step === 1 ? "Role" : step === 2 ? "Details" : "Review"}
            </span>
          </div>
          {step < 3 && (
            <div
              className={cn(
                "h-0.5 flex-1 transition-all",
                currentStep > step ? "bg-success" : "bg-neutral-300 dark:bg-neutral-700"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
