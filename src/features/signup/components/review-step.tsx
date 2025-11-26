import { cn } from "@/lib/utils";
import { FactorySignupFormData } from "../schemas/factory-signup-schemas";

interface StepThreeProps {
  formData: FactorySignupFormData;
  pendingStatus: boolean;
}

export function VerificationStepSignup({
  formData,
  pendingStatus,
}: StepThreeProps) {
  // the pending status will come form the backend

  const renderCompanyInfo = () => {
    if ("companyName" in formData) {
      return (
        <div className="md:col-span-2">
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Company Name
          </p>
          <p className="mt-1 text-neutral-800 dark:text-neutral-200">
            {formData.companyName}
          </p>
        </div>
      );
    }
    if ("companyCode" in formData) {
      return (
        <div className="md:col-span-2">
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Company Code
          </p>
          <p className="mt-1 text-neutral-800 dark:text-neutral-200">
            {formData.companyCode}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 space-y-4 duration-300">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Your Account is Created
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Please review your status and continue to login
        </p>
      </div>

      {/* Approval Box */}
      <div
        className={cn("space-y-4 rounded-lg border p-6 dark:border-neutral-800 dark:bg-neutral-900/50", pendingStatus ? "border-red-500" : "border-green-500")}
      >
        {/* Status */}
        <div>
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Account Status
          </p>
          <p className={cn("mt-1 font-medium text-neutral-800 dark:text-neutral-200", pendingStatus ? "text-red-500" : "text-green-500")}>
            {pendingStatus ? "Pending Approval" : "Approved"}
          </p>
        </div>

        {/* User Info */}
        <div className="grid gap-4 border-t border-neutral-200 pt-4 md:grid-cols-2 dark:border-neutral-700">
          <div>
            <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Full Name
            </p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200">
              {formData.fullName}
            </p>
          </div>

          {"email" in formData && (
            <div>
              <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                Email
              </p>
              <p className="mt-1 text-neutral-800 dark:text-neutral-200">
                {formData.email}
              </p>
            </div>
          )}

          {renderCompanyInfo()}
        </div>

        {/* Approval Notice */}
        <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700">
          <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
            Approval Information
          </p>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Your registration has been received and is pending verification by
            the Botivate Management Team. You will receive a confirmation email
            once your account is approved.
          </p>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="bg-primary/5 rounded-lg p-4 text-sm">
        <p className="text-neutral-700 dark:text-neutral-300">
          Once approved, you can access your dashboard and begin setting up your
          organization profile and users.
        </p>
      </div>
    </div>
  );
}
