import type { SubmitHandler } from "react-hook-form";
import { z, email } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const signupSchema = z.object({
  image: z
    .instanceof(File, { message: "Please select an image file." })
    .refine((file) => file.size <= MAX_UPLOAD_SIZE, {
      message: `The image is too large. Max size is ${
        MAX_UPLOAD_SIZE / (1024 * 1024)
      }MB.`,
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Please upload a valid image file (JPEG, PNG, or WebP).",
    }),
  name: z.string().min(2, "Name must be greater than 2 characters"),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Must be at least 8 characters" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Must contain at least one uppercase letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Must contain at least one lowercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Must contain at least one number",
    }),
});

export type signupFields = z.infer<typeof signupSchema>;

export const signupSubmit: SubmitHandler<signupFields> = async (data) => {
  console.log("Waiting...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Done waiting", data);
  
};
