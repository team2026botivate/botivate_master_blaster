import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminSchema,
  employeeSchema,
  FactorySignupFormData,
  superAdminSchema,
  UserRole,
} from "../schemas/factory-signup-schemas";

export function useFactorySignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // this is for signup pending status for taking apporval from the botivate
  const [pendingStatus, setPendingStatus] = useState(true);

  const getSchema = () => {
    switch (selectedRole) {
      case "super-admin":
        return superAdminSchema;
      case "admin":
        return adminSchema;
      case "employee":
        return employeeSchema;
      default:
        return superAdminSchema;
    }
  };
  const form = useForm<FactorySignupFormData>({
    resolver: zodResolver(getSchema()),
    mode: "onChange",
    defaultValues: {
      role: selectedRole || "super-admin",
      fullName: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      email: "",
      companyName: "",
      industryType: "",
      factoryAddress: "",
      city: "",
      state: "",
      companyEmail: "",
      totalEmployees: "",
    } as any,
  });

  const formHandleSubmit = form.handleSubmit;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    form.setValue("role" as any, role as any);
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      if (!selectedRole) {
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate all fields for current role
      const isValid = await form.trigger();

      if (isValid) {
        setCurrentStep(3);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (data: FactorySignupFormData) => {
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    // console.log("Form Data:", data);
    // setIsSuccess(true);
  };

  return {
    form,
    formHandleSubmit,
    currentStep,
    selectedRole,
    isSuccess,
    handleRoleSelect,
    handleNext,
    handleBack,
    handleSubmit,
    pendingStatus,
    setPendingStatus,
  };
}
