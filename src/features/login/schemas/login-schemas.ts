import { z } from "zod";

export const loginMethodSchema = z.enum(["mobile", "employeeId"]);

export type LoginMethod = z.infer<typeof loginMethodSchema>;

export const mobileLoginSchema = z.object({
  loginMethod: z.literal("mobile"),
  mobile: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, {
      message: "Please enter a valid mobile number",
    })
    .min(10, { message: "Mobile number must be at least 10 digits" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const employeeIdLoginSchema = z.object({
  loginMethod: z.literal("employeeId"),
  employeeId: z.string().min(1, { message: "Employee ID is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginSchema = z.discriminatedUnion("loginMethod", [
  mobileLoginSchema,
  employeeIdLoginSchema,
]);

export type LoginFormData = z.infer<typeof loginSchema>;

export type MobileLoginData = z.infer<typeof mobileLoginSchema>;
export type EmployeeIdLoginData = z.infer<typeof employeeIdLoginSchema>;
