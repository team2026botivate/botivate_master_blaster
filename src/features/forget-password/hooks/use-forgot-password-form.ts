import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, otpSchema, passwordSchema, EmailFormData, OtpFormData, PasswordFormData } from "../schemas/forgot-password-schemas";

type ForgotPasswordStep = "email" | "otp" | "password" | "success";

// Mock OTP for demo: "123456"
const MOCK_VALID_OTP = "123456";

export const useForgotPasswordForm = () => {
  const [currentStep, setCurrentStep] = useState<ForgotPasswordStep>("email");
  const [userEmail, setUserEmail] = useState<string>("");
  const [otpError, setOtpError] = useState<string>("");
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const handleEmailSubmit = (data: EmailFormData) => {
    console.log("Sending OTP to:", data.email);
    setUserEmail(data.email);
    setCurrentStep("otp");
    // Mock: OTP sent successfully
  };

  const handleOtpSubmit = (data: OtpFormData) => {
    console.log("Verifying OTP:", data.otp);
    // Mock verification: accept "123456" as valid OTP
    if (data.otp === MOCK_VALID_OTP) {
      console.log("OTP verified successfully");
      setOtpError("");
      setCurrentStep("password");
    } else {
      setOtpError("Invalid OTP. Please try again or use test OTP: 123456");
    }
  };

  const handlePasswordSubmit = (data: PasswordFormData) => {
    console.log("Resetting password for:", userEmail);
    console.log("New password set successfully");
    setCurrentStep("success");
  };

  const handleResendOtp = () => {
    console.log("Resending OTP to:", userEmail);
    setOtpError("");
    setIsResendDisabled(true);
    // Mock cooldown for 30 seconds
    setTimeout(() => setIsResendDisabled(false), 30000);
  };

  const resetFlow = () => {
    setCurrentStep("email");
    setUserEmail("");
    setOtpError("");
    emailForm.reset();
    otpForm.reset();
    passwordForm.reset();
  };

  return {
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
  };
};
