import Hero from "@/components/pageComponents/Hero";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signupSchema } from "@/handles/signup";
import { type signupFields } from "@/handles/signup";
import { signupSubmit } from "@/handles/signup";
import { User } from "lucide-react";
import { Download } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldAlert } from "lucide-react";

const SignUpPage = () => {
  const [preview, setPreview] = useState<string | null>(null);


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<signupFields>({ resolver: zodResolver(signupSchema) });
  return (
    <main className="w-full md:min-h-screen sm:h-fit font-display flex flex-col md:flex-row z-10 overflow-hidden">
      <section className="p-6 md:p-10 flex flex-col md:min-h-screen  w-full md:w-4/7 justify-start relative z-20 bg-white mb-10 md:mb-0">
        <h1 className="font-bold mb-8 text-2xl md:mb-32">Expense Tracker</h1>
        <form
          className="mb-4"
          onSubmit={handleSubmit(signupSubmit)}
          autoComplete="off"
        >
          <div className="flex flex-col justify-between gap-1.5 mb-6">
            <h2 className="font-extrabold text-xl">Create an account</h2>
            <p className="text-gray-700 text-sm">
              Join us today by entering your details below
            </p>
          </div>
          <div className="relative w-20 h-20 mx-auto mb-6">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              {...register("image")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const objectUrl = URL.createObjectURL(file);
                  setPreview(objectUrl);
                }
              }}
            />
            <label
              htmlFor="file-upload"
              className="rounded-full bg-purple-200 w-20 h-20 flex justify-center items-center cursor-pointer"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-full"
                />
              ) : (
                <User className="w-10 h-10 text-violet-600" />
              )}
              
              <Download className="absolute right-0 bottom-0 w-6 h-6 text-white bg-violet-700 rounded-full p-1" />
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-4 mb-4">
            <div className="flex flex-col gap-2 flex-1/2">
              <label htmlFor="name" className="text-sm text-gray-600 ">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="px-4 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-2"
                {...register("name")}
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1/2">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="px-4 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-2"
                placeholder="johndoe@email.com"
              />
              {errors.email && (
                <div className="text-red-500 mb-4 flex gap-1">
                  <ShieldAlert /> {errors.email.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-4"
              placeholder="Min 8 Characters"
              {...register("password")}
              autoComplete="password"
            />
            {errors.password && (
              <div className="text-red-500 mb-4 flex gap-1">
                <ShieldAlert /> {errors.password.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-700 p-1.5 rounded-sm text-white font-bold"
          >
            SIGN UP
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to={`/login`} className="text-violet-500 underline">
            Log In
          </Link>
        </p>
      </section>
      <Hero />
    </main>
  );
};

export default SignUpPage;
