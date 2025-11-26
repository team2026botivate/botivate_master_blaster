
"use client"
import { useForgotPasswordForm } from "../hooks/use-forgot-password-form";
import { EnterEmailStep } from "./enter-email-step";
import { ConfirmOtpStep } from "./confirm-otp-step";
import { ResetPasswordStep } from "./reset-password-step";
import { SuccessStep } from "./success-step";
const ForgotPassword = () => {
  const {
    currentStep,
    userEmail,
    otpError,
    isResendDisabled,
    emailForm,
    otpForm,
    passwordForm,
    handleEmailSubmit,
    handleOtpSubmit,
    handlePasswordSubmit,
    handleResendOtp,
    resetFlow,
  } = useForgotPasswordForm();

  const handleBackToLogin = () => {
    resetFlow();
    window.location.href = "/";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "hsl(var(--background))",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl border border-border/50"
        style={{
          background: "hsl(var(--card))",
        }}
      >
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

        {currentStep === "password" && (
          <ResetPasswordStep
            form={passwordForm}
            onSubmit={handlePasswordSubmit}
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
