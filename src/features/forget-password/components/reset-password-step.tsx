"use client"
import { UseFormReturn } from "react-hook-form";
import { PasswordFormData } from "../schemas/forgot-password-schemas";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button_Custom } from "@/components/common/Button_ui";

interface ResetPasswordStepProps {
  form: UseFormReturn<PasswordFormData>;
  onSubmit: (data: PasswordFormData) => void;
}

export const ResetPasswordStep = ({
  form,
  onSubmit,
}: ResetPasswordStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="from-foreground to-muted-foreground mb-2 bg-linear-to-br bg-clip-text text-3xl font-bold text-transparent">
          Reset Password
        </h2>
        <p className="text-muted-foreground text-sm">
          Enter your new password below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-foreground text-sm font-medium"
          >
            New Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter new password"
            className="bg-background border-border shadow-input"
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p className="text-destructive text-sm" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-foreground text-sm font-medium"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            className="bg-background border-border shadow-input"
            {...register("confirmPassword")}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && (
            <p className="text-destructive text-sm" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button_Custom
          label="Reset Password"
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          isSubmitting={isSubmitting}
          whatAction="Resetting..."
        />
      </form>
    </>
  );
};
