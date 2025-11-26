import * as React from "react";
import { Building2, UserCog, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserRole } from "../schemas/factory-signup-schemas";

interface RoleStepProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
  error?: string;
}

const roles = [
  {
    value: "super-admin" as const,
    label: "Super Admin",
    description: "Creates company, manages admins and settings.",
    icon: Building2,
  },
];

export function RoleStep({ selectedRole, onRoleSelect, error }: RoleStepProps) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 space-y-4 duration-300">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Select Your Role
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Choose the role that best describes your position
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {roles.map((role) => (
          <button
            key={role.value}
            type="button"
            onClick={() => onRoleSelect(role.value)}
            className={cn(
              "group relative flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all hover:shadow-lg",
              selectedRole === role.value
                ? "border-primary bg-primary/5 shadow-md"
                : "hover:border-primary/50 border-neutral-200 dark:border-neutral-800",
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors",
                selectedRole === role.value
                  ? "bg-primary/10 text-primary"
                  : "group-hover:bg-primary/10 group-hover:text-primary bg-neutral-100 text-neutral-500 dark:bg-neutral-800",
              )}
            >
              <role.icon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                {role.label}
              </h4>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {role.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
