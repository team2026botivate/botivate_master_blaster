import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EmployeeFormData } from "../schemas/factory-signup-schemas";

interface DetailsStepEmployeeProps {
  form: UseFormReturn<EmployeeFormData>;
}

export function DetailsStepEmployee({ form }: DetailsStepEmployeeProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Personal & Employment Details
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
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
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
            <p className="text-xs text-destructive">{errors.mobile.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className="text-xs text-destructive">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-xs text-destructive">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      {/* Employment Details */}
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h4 className="mb-3 font-semibold text-neutral-800 dark:text-neutral-200">
          Employment Details
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="companyCode">Company Code *</Label>
            <Input
              id="companyCode"
              {...register("companyCode")}
              placeholder="Enter factory code"
            />
            {errors.companyCode && (
              <p className="text-xs text-destructive">{errors.companyCode.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeId">Employee ID</Label>
            <Input
              id="employeeId"
              {...register("employeeId")}
              placeholder="EMP-001"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department *</Label>
            <select
              id="department"
              {...register("department")}
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black shadow-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select department</option>
              <option value="production">Production</option>
              <option value="quality">Quality Control</option>
              <option value="maintenance">Maintenance</option>
              <option value="warehouse">Warehouse</option>
              <option value="logistics">Logistics</option>
              <option value="administration">Administration</option>
            </select>
            {errors.department && (
              <p className="text-xs text-destructive">{errors.department.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="shift">Shift *</Label>
            <select
              id="shift"
              {...register("shift")}
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black shadow-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select shift</option>
              <option value="A">Shift A (Morning)</option>
              <option value="B">Shift B (Afternoon)</option>
              <option value="C">Shift C (Night)</option>
            </select>
            {errors.shift && (
              <p className="text-xs text-destructive">{errors.shift.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              {...register("designation")}
              placeholder="Worker, Supervisor, etc."
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Enter the Factory Code given by your factory HR or supervisor. Your account will be
          reviewed and approved by Admin/Super Admin.
        </p>
      </div>
    </div>
  );
}
