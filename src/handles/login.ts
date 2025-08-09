// loginLogic.ts
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, { message: "At least 8 characters" })
    .refine((p) => /[A-Z]/.test(p), {
      message: "Must contain an uppercase letter",
    })
    .refine((p) => /[a-z]/.test(p), {
      message: "Must contain a lowercase letter",
    })
    .refine((p) => /[0-9]/.test(p), { message: "Must contain a number" })
    .refine((p) => /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]/.test(p), {
      message: "Must contain a special character",
    }),
});
