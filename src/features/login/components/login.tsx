"use client";
import { Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginMethodTabs } from "./login-method-tabs";
import { PasswordField } from "./password-field";
import { PendingInfo } from "./pending-info";
import { useLoginForm } from "../hooks/use-login-form";
import { Button_Custom } from "@/components/common/Button_ui";
import Link from "next/link";

const BottomGradient = () => {
  return (
    <>
      <span className="via-gradient-from absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="via-gradient-to absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default function Login_main_component() {
  const {
    form,
    loginMethod,
    isLoading,
    isPending,
    onSubmit,
    handleMethodChange,
  } = useLoginForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const getInputPlaceholder = () => {
    switch (loginMethod) {
      case "mobile":
        return "+91 9XXXXXXXXX";
      case "employeeId":
        return "EMP-1234";
      default:
        return "";
    }
  };

  const getInputLabel = () => {
    switch (loginMethod) {
      case "mobile":
        return "Mobile Number";
      case "employeeId":
        return "Employee ID";
      default:
        return "";
    }
  };

  const getInputName = () => {
    switch (loginMethod) {
      case "mobile":
        return "mobile";
      case "employeeId":
        return "employeeId";
      default:
        return "mobile";
    }
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="bg-card border-border animate-in fade-in slide-in-from-right-4 mx-auto w-full max-w-md rounded-2xl border p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-300">
        <div className="mb-6">
          <h2 className="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            Sign in to Botivate OS
          </h2>
          <p className="text-muted-foreground text-sm">
            Welcome back! Please enter your details
          </p>
        </div>

        <LoginMethodTabs value={loginMethod} onChange={handleMethodChange} />

        {isPending && (
          <div className="mb-4">
            <PendingInfo />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={getInputName()}>{getInputLabel()}</Label>
            <Input
              id={getInputName()}
              placeholder={getInputPlaceholder()}
              type="text"
              {...register(getInputName() as any)}
            />
            {errors[getInputName() as keyof typeof errors] && (
              <p className="text-destructive text-xs" role="alert">
                {
                  errors[getInputName() as keyof typeof errors]
                    ?.message as string
                }
              </p>
            )}
          </div>

          <PasswordField
            id="password"
            error={errors.password?.message}
            registration={register("password")}
          />

          <div className="flex items-center justify-between pt-2">
            <div />
            <Link
              href="/forgot-password"
              className="text-primary text-sm font-medium hover:underline"
              onClick={() => console.log("Forgot password clicked")}
            >
              Forgot password?
            </Link>
          </div>

          <Button_Custom
            label="Sign in"
            type="submit"
            disabled={isLoading}
          className="w-full "
          />
        </form>

        <div className="mt-6 border-t border-neutral-200 pt-6 text-center dark:border-neutral-800">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
