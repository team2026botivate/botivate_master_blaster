"use client";

import { Button_Custom } from "@/components/common/Button_ui";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useFactorySignupForm } from "../hooks/use-factory-signup-form";
import { DetailsStepSuperAdmin } from "./details-step-super-admin";
import { VerificationStepSignup } from "./review-step";
import { RoleStep } from "./role-step";
import { StepIndicator } from "./step-indicator";

export default function SignupFactoryMultistep() {
  const {
    form,
    currentStep,
    isSuccess,
    handleNext,
    handleBack,
    handleSubmit,
    selectedRole,
    handleRoleSelect,
    pendingStatus,
  } = useFactorySignupForm();

  const {
    handleSubmit: formHandleSubmit,
    getValues,
    formState: { isSubmitting },
  } = form;

  const render_button = ({
    currentStep,
    handleNext,
    isSubmitting,
    pendingStatus,
  }: any) => {
    switch (currentStep) {
      case 1:
        return (
          <Button_Custom
            label="Next"
            type="button"
            whatAction="Next"
            onClick={handleNext}
            disabled={isSubmitting}
          />
        );
      case 2:
        return (
          <Button_Custom
            label="Create Account"
            type="button"
            whatAction="Creating Account ..."
            onClick={handleNext}
            disabled={isSubmitting}
          />
        );
      case 3:
        return (
          <Button_Custom
            href="/login"
            label="Login"
            type={pendingStatus ? "button" : "submit"}
            whatAction={pendingStatus ? "Login" : "Login"}
            disabled={isSubmitting || pendingStatus}
          />
        );
    }
  };
  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4 dark:from-zinc-950 dark:to-zinc-900">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:bg-black dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)]">
          <div className="mb-6 flex justify-center">
            <div className="bg-success/10 flex h-16 w-16 items-center justify-center rounded-full">
              <Check className="text-success h-8 w-8" />
            </div>
          </div>
          <h2 className="mb-2 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Account Created Successfully!
          </h2>
          <p className="mb-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Your company has been created. A confirmation link has been sent to
            the company email.
          </p>
          <Button_Custom
            label="Back to Login"
            type="button"
            whatAction="Back to Login"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4 dark:from-zinc-950 dark:to-zinc-900">
      <div className="bg-card w-full max-w-2xl rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:p-8 dark:bg-black dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)]">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            Botivate OS
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Create your account to get started
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} />

        <form onSubmit={formHandleSubmit(handleSubmit)}>
          {/* Step 1: Details (Super Admin) */}

          {currentStep === 1 && (
            <RoleStep
              selectedRole={selectedRole}
              onRoleSelect={handleRoleSelect}
              error={
                !selectedRole && currentStep > 1
                  ? "Please select a role"
                  : undefined
              }
            />
          )}
          {currentStep === 2 && <DetailsStepSuperAdmin form={form as any} />}

          {/* Step 2: Review & Submit */}
          {currentStep === 3 && (
            <VerificationStepSignup
              formData={getValues()}
              pendingStatus={pendingStatus}
            />
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 rounded-md border border-neutral-300 px-6 py-2 font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
            )}

            {render_button({
              currentStep,
              handleNext,
              isSubmitting,
              pendingStatus,
            })}
          </div>
        </form>

        {currentStep === 1 && (
          <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
