import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormData,
  type LoginMethod,
} from "../schemas/login-schemas";

export function useLoginForm() {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("mobile");
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginMethod: "mobile",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      // Simulate API call
      console.log("Login attempt with validated data:", data);

      // Simulate pending verification check (mock)
      // In real implementation, this would come from the API response
      const mockResponse = {
        status: Math.random() > 0.7 ? "pending_verification" : "success",
      };

      if (mockResponse.status === "pending_verification") {
        setIsPending(true);
      } else {
        setIsPending(false);
        // Handle successful login
        console.log("Login successful!");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMethodChange = (method: LoginMethod) => {
    setLoginMethod(method);
    form.setValue("loginMethod", method);

    // Clear method-specific fields when switching
    if (method === "mobile") {
      form.setValue("mobile" as any, "");
    } else if (method === "employeeId") {
      form.setValue("employeeId" as any, "");
    }
  };

  return {
    form,
    loginMethod,
    isLoading,
    isPending,
    onSubmit,
    handleMethodChange,
  };
}
