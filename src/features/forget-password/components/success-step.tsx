interface SuccessStepProps {
  onBackToLogin: () => void;
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const SuccessStep = ({ onBackToLogin }: SuccessStepProps) => {
  return (
    <div className="space-y-6 text-center">
      <div className="w-16 h-16 mx-auto bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
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
        <h2 className="text-2xl font-bold text-foreground">Success!</h2>
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          OTP verified successfully. Your password has been reset.
        </p>
        <p className="text-sm text-muted-foreground">
          You can now log in with your new credentials.
        </p>
      </div>

      <button
        onClick={onBackToLogin}
        className="group/btn relative w-full h-10 bg-linear-to-br from-primary to-primary/80 text-primary-foreground rounded-md font-medium shadow-md hover:shadow-lg transition-all"
      >
        Back to Login
        <BottomGradient />
      </button>
    </div>
  );
};
