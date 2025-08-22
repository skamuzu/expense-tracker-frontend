import type { SubmitHandler } from "react-hook-form";
import {config, email, z} from "zod";
import axios from "axios"
import axiosInstance from "../services/requests"
import { useNavigate } from "react-router-dom";


export const loginSchema = z.object({
  email:z.email({ message: "Please enter a valid email address" }),
   password: z
    .string()
    .min(8, { message: "Must be at least 8 characters" }),
})


export type LoginFields = z.infer<typeof loginSchema>
export const loginSubmit = async (data:LoginFields) => {
  try {
    const response = await axiosInstance.post("/users/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response;
  } catch (error) {
    throw error; 
  }
};


