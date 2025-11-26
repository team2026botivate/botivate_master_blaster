import { Button_Custom } from "@/components/common/Button_ui";

interface SuccessStepProps {
  onBackToLogin: () => void;
}



export const SuccessStep = ({ onBackToLogin }: SuccessStepProps) => {
  return (
    <div className="space-y-6 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-green-600">
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-foreground text-2xl font-bold">Success!</h2>
        <p
          className="text-muted-foreground text-sm"
          role="status"
          aria-live="polite"
        >
          OTP verified successfully. Your password has been reset.
        </p>
        <p className="text-muted-foreground text-sm">
          You can now log in with your new credentials.
        </p>
      </div>

      <Button_Custom
        label="Back to Login"
        onClick={onBackToLogin}
        className="w-full"
      />
    </div>
  );  
};
