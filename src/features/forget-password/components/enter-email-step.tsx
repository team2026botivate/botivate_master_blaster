import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EmailFormData } from "../schemas/forgot-password-schemas";
import Link from "next/link";
import { Button_Custom } from "@/components/common/Button_ui";

interface EnterEmailStepProps {
  form: UseFormReturn<EmailFormData>;
  onSubmit: (data: EmailFormData) => void;
}




export const EnterEmailStep = ({ form, onSubmit }: EnterEmailStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-foreground text-2xl font-bold">Forgot Password?</h2>
        <p className="text-muted-foreground text-sm">
          Enter your email address and we'll send you an OTP to reset your
          password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-foreground text-sm font-medium"
          >
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="projectmayhem@fc.com"
            {...register("email")}
            className="h-10"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-destructive text-sm" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button_Custom
          label="Send OTP"
          type="submit"
          disabled={isSubmitting}
          whatAction="Sending..."
          className="w-full"
        />

        <div className="text-center">
          <Link
            href="/"
            className="text-primary text-sm transition-colors hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};
