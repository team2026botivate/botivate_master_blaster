import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailSchema,
  otpSchema,
  EmailFormData,
  OtpFormData,
} from "../schemas/forgot-password-schemas";

type ForgotPasswordStep = "email" | "otp" | "success";

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

  const handleEmailSubmit = async (data: EmailFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("Sending OTP to:", data.email);
    setUserEmail(data.email);
    setCurrentStep("otp");
    // Mock: OTP sent successfully
  };

  const handleOtpSubmit = async (data: OtpFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("Verifying OTP:", data.otp);
    // Mock verification: accept "123456" as valid OTP
    if (data.otp === MOCK_VALID_OTP) {
      console.log("OTP verified successfully");
      setOtpError("");
      setCurrentStep("success");
    } else {
      setOtpError("Invalid OTP. Please try again or use test OTP: 123456");
    }
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
  };

  return {
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
  };
};
