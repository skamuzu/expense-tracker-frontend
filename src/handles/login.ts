import type { SubmitHandler } from "react-hook-form";
import {email, z} from "zod"


export const loginSchema = z.object({
  email:z.email({ message: "Please enter a valid email address" }),
   password: z
    .string()
    .min(8, { message: "Must be at least 8 characters" }),
})

export type LoginFields = z.infer<typeof loginSchema>
export const loginSubmit: SubmitHandler<LoginFields> = async (data) => {
  console.log("Waiting...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Done waiting", data);
};

