import { z } from "zod";

export const SIGN_IN_FORM_SCHEMA = z.object({
  accounts: z
    .string()
    .min(6, { message: "Account must be at least 4 characters long" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
