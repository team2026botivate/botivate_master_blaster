import { z } from "zod";

// Base schema with common fields
const baseSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  mobile: z.string().trim().min(1, "Mobile number is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
});

// Super Admin schema
export const superAdminSchema = baseSchema
  .extend({
    role: z.literal("super-admin"),
    email: z.string().trim().email("Invalid email format"),
    companyName: z.string().trim().min(1, "Company name is required"),
    industryType: z.string().trim().min(1, "Industry type is required"),
    factoryAddress: z.string().trim().min(1, "Factory address is required"),
    city: z.string().trim().min(1, "City is required"),
    state: z.string().trim().min(1, "State is required"),
    companyEmail: z.string().trim().email("Invalid company email format"),
    totalEmployees: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Admin schema
export const adminSchema = baseSchema
  .extend({
    role: z.literal("admin"),
    email: z.string().trim().email("Invalid email format"),
    companyCode: z.string().trim().min(1, "Company code is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Employee schema
export const employeeSchema = baseSchema
  .extend({
    role: z.literal("employee"),
    companyCode: z.string().trim().min(1, "Company code is required"),
    dateOfBirth: z.string().trim().min(1, "Date of birth is required"),
    department: z.string().trim().min(1, "Department is required"),
    shift: z.string().trim().min(1, "Shift is required"),
    employeeId: z.string().optional(),
    designation: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Union schema
export const factorySignupSchema = z.union([
  superAdminSchema,
  adminSchema,
  employeeSchema,
]);

// Type exports
export type SuperAdminFormData = z.infer<typeof superAdminSchema>;
export type AdminFormData = z.infer<typeof adminSchema>;
export type EmployeeFormData = z.infer<typeof employeeSchema>;
export type FactorySignupFormData = z.infer<typeof factorySignupSchema>;
export type UserRole = "super-admin" | "admin" | "employee" | null;
