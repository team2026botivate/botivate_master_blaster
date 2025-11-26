import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { OtpFormData } from "../schemas/forgot-password-schemas";
import { Button_Custom } from "@/components/common/Button_ui";

interface ConfirmOtpStepProps {
  form: UseFormReturn<OtpFormData>;
  onSubmit: (data: OtpFormData) => void;
  userEmail: string;
  otpError: string;
  isResendDisabled: boolean;
  onResend: () => void;
}



export const ConfirmOtpStep = ({
  form,
  onSubmit,
  userEmail,
  otpError,
  isResendDisabled,
  onResend,
}: ConfirmOtpStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const maskedEmail = userEmail.replace(
    /^(.{2})(.*)(@.*)$/,
    (_, p1, p2, p3) => p1 + "*".repeat(p2.length) + p3,
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-foreground text-2xl font-bold">Verify OTP</h2>
        <div
          className="text-muted-foreground space-y-1 text-sm"
          role="status"
          aria-live="polite"
        >
          <p>An OTP has been sent to</p>
          <p className="text-foreground font-medium">{maskedEmail}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp" className="text-foreground text-sm font-medium">
            Enter 6-digit OTP
          </Label>
          <Input
            id="otp"
            type="text"
            placeholder="123456"
            maxLength={6}
            {...register("otp")}
            className="h-10 text-center text-lg tracking-widest"
            aria-invalid={errors.otp || otpError ? "true" : "false"}
          />
          {errors.otp && (
            <p className="text-destructive text-sm" role="alert">
              {errors.otp.message}
            </p>
          )}
          {otpError && (
            <p className="text-destructive text-sm" role="alert">
              {otpError}
            </p>
          )}
        </div>

        <div className="text-muted-foreground space-y-2 text-sm">
          <p>Didn't receive the OTP? Check your spam folder.</p>
          <button
            type="button"
            onClick={onResend}
            disabled={isResendDisabled}
            className="text-primary transition-colors hover:underline disabled:cursor-not-allowed disabled:no-underline disabled:opacity-50"
          >
            {isResendDisabled ? "Resend OTP (cooldown active)" : "Resend OTP"}
          </button>
        </div>

        <Button_Custom
          label="Verify OTP"
          type="submit"
          disabled={isSubmitting}
          whatAction="Verifying..."
          className="w-full"
        />
      </form>
    </div>
  );
};
