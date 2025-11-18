"use client";

interface ProgressStepperProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressStepper({ currentStep, totalSteps }: ProgressStepperProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNumber = i + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        const isPending = stepNumber > currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all
                ${isCompleted ? 'bg-[#FF7B5F] text-white' : ''}
                ${isCurrent ? 'bg-[#FF7B5F] text-white' : ''}
                ${isPending ? 'bg-white text-gray-400 border-2 border-gray-300' : ''}
              `}
            >
              {isCompleted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                stepNumber
              )}
            </div>

            {/* Connector Line */}
            {stepNumber < totalSteps && (
              <div
                className={`
                  w-12 h-0.5 mx-1 transition-all
                  ${stepNumber < currentStep ? 'bg-[#FF7B5F]' : 'bg-gray-300'}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
