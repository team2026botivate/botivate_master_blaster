"use client";
import { useForgotPasswordForm } from "../hooks/use-forgot-password-form";
import { EnterEmailStep } from "./enter-email-step";
import { ConfirmOtpStep } from "./confirm-otp-step";
import { SuccessStep } from "./success-step";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const {
    currentStep,
    userEmail,
    otpError,
    isResendDisabled,
    emailForm,
    otpForm,
    handleEmailSubmit,
    handleOtpSubmit,
    handleResendOtp,
    resetFlow,
  } = useForgotPasswordForm();

  const handleBackToLogin = () => {
    router.push("/login");
    resetFlow();
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="border-border/50 bg-card w-full max-w-md rounded-2xl border p-8 shadow-2xl">
        {currentStep === "email" && (
          <EnterEmailStep form={emailForm} onSubmit={handleEmailSubmit} />
        )}

        {currentStep === "otp" && (
          <ConfirmOtpStep
            form={otpForm}
            onSubmit={handleOtpSubmit}
            userEmail={userEmail}
            otpError={otpError}
            isResendDisabled={isResendDisabled}
            onResend={handleResendOtp}
          />
        )}

        {currentStep === "success" && (
          <SuccessStep onBackToLogin={handleBackToLogin} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
