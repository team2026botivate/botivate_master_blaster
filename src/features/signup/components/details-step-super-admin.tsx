import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SuperAdminFormData } from "../schemas/factory-signup-schemas";

interface DetailsStepSuperAdminProps {
  form: UseFormReturn<SuperAdminFormData>;
}

export function DetailsStepSuperAdmin({ form }: DetailsStepSuperAdminProps) {
  const {
    register,
    formState: { errors },
  } = form;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 space-y-4 duration-300">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Company & Personal Details
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="text-destructive text-xs">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Official Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input
            id="mobile"
            {...register("mobile")}
            placeholder="+1 234 567 8900"
          />
          {errors.mobile && (
            <p className="text-destructive text-xs">{errors.mobile.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-destructive text-xs">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-destructive text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Company Details */}
      <div className="my-6 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <h4 className="mb-4 font-semibold text-neutral-800 dark:text-neutral-200">
          Company Information
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="companyName">Factory / Company Name *</Label>
            <Input
              id="companyName"
              {...register("companyName")}
              placeholder="Acme Manufacturing"
            />
            {errors.companyName && (
              <p className="text-destructive text-xs">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="industryType">Industry Type *</Label>
            <select
              id="industryType"
              {...register("industryType")}
              className="border-input shadow-input focus-visible:ring-primary flex h-10 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm text-black focus-visible:ring-2 focus-visible:outline-none dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select industry</option>
              <option value="automotive">Automotive</option>
              <option value="electronics">Electronics</option>
              <option value="textiles">Textiles</option>
              <option value="food">Food & Beverage</option>
              <option value="pharmaceutical">Pharmaceutical</option>
              <option value="chemicals">Chemicals</option>
              <option value="other">Other</option>
            </select>
            {errors.industryType && (
              <p className="text-destructive text-xs">
                {errors.industryType.message}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="factoryAddress">Factory Address *</Label>
            <textarea
              id="factoryAddress"
              {...register("factoryAddress")}
              placeholder="123 Industrial Park, Zone A"
              rows={2}
              className="border-input shadow-input focus-visible:ring-primary flex w-full rounded-md border bg-gray-50 px-3 py-2 text-sm text-black focus-visible:ring-2 focus-visible:outline-none dark:bg-zinc-800 dark:text-white"
            />
            {errors.factoryAddress && (
              <p className="text-destructive text-xs">
                {errors.factoryAddress.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input id="city" {...register("city")} placeholder="New York" />
            {errors.city && (
              <p className="text-destructive text-xs">{errors.city.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Input id="state" {...register("state")} placeholder="NY" />
            {errors.state && (
              <p className="text-destructive text-xs">{errors.state.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyEmail">Official Company Email *</Label>
            <Input
              id="companyEmail"
              type="email"
              {...register("companyEmail")}
              placeholder="info@company.com"
            />
            {errors.companyEmail && (
              <p className="text-destructive text-xs">
                {errors.companyEmail.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalEmployees">Approx. Total Employees</Label>
            <Input
              id="totalEmployees"
              type="number"
              {...register("totalEmployees")}
              placeholder="100"
            />
          </div>
        </div>
        <p className="text-muted-foreground mt-3 text-xs">
          A unique Factory Code will be generated after submission. Use this
          code to invite Admins and Employees.
        </p>
      </div>
    </div>
  );
}
