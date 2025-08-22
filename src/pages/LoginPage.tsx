
import { Button } from "@/components/ui/button";
import Hero from "@/components/pageComponents/Hero";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSubmit } from "@/handles/login";
import { type LoginFields } from "@/handles/login";
import { zodResolver } from "@hookform/resolvers/zod"
import { ShieldAlert } from 'lucide-react';
import { loginSchema } from "@/handles/login";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<LoginFields>({resolver:zodResolver(loginSchema)});

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFields) => {
    try {
      const response = await loginSubmit(data);
      if (response.status === 200) {
        localStorage.setItem("authTokens",JSON.stringify(response.data))
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="w-full md:min-h-screen sm:h-fit font-display flex flex-col md:flex-row z-10 overflow-hidden">
      <section className="p-6 md:p-10 flex flex-col md:min-h-screen  w-full md:w-4/7 justify-start relative z-20 bg-white mb-10 md:mb-0">
        <h1 className="font-bold mb-8 text-2xl md:mb-32">Expense Tracker</h1>
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-between gap-1.5 mb-6">
            <h2 className="font-extrabold text-xl">Welcome Back</h2>
            <p className="text-gray-700 text-sm">
              Please enter your details to log in
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
            {...register("email")}
              type="text"
              id="email"
              className="md:w-3/5 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-2"
              placeholder="john@example.com"
            />
            {errors.email && (<div className="text-red-500 mb-4 flex gap-1"><ShieldAlert/> {errors.email.message}</div>)}
            <label htmlFor="password" className="text-sm font-semibold mb-2">
              Password
            </label>
            <input
            {...register("password")}
              type="password"
              id="password"
              className="md:w-3/5 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-2"
              placeholder="Min 8 characters"
            />
            {errors.password && (<div className="text-red-500 mb-4 flex gap-1"><ShieldAlert/> {errors.password.message}</div>)}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="md:w-3/5 w-full bg-violet-500 hover:bg-violet-700 p-1.5 rounded-sm text-white font-bold"
          >
           {isSubmitting ? "Loading..." : "LOGIN"}
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to={`/signup`} className="text-violet-500 hover:text-violet-700 underline">Sign Up</Link>
        </p>
      </section>
      <Hero/>
      </main>
  );
};

export default LoginPage;
