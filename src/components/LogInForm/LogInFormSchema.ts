import { z } from "zod";

export const LOG_IN_FORM_SCHEMA = z.object({
  accounts: z
    .string()
    .min(6, { message: "Account must be at least 4 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
