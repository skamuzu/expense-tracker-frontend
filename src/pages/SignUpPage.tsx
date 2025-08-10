
import Hero from "@/components/pageComponents/Hero";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <main className="w-full md:min-h-screen sm:h-fit font-display flex flex-col md:flex-row z-10 overflow-hidden">
      <section className="p-6 md:p-10 flex flex-col md:min-h-screen  w-full md:w-4/7 justify-start relative z-20 bg-white mb-10 md:mb-0">
        <h1 className="font-bold mb-8 text-2xl md:mb-32">Expense Tracker</h1>
        <form className="mb-4">
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
              type="text"
              id="email"
              className="md:w-3/5 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-4"
              placeholder="john@example.com"
            />
            <label htmlFor="password" className="text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="md:w-3/5 bg-gray-100 md:h-10 p-4 text-md placeholder:text-sm rounded-sm mb-4"
              placeholder="Min 8 characters"
            />
          </div>
          <button
            type="submit"
            className="md:w-3/5 w-full bg-violet-500 p-1.5 rounded-sm text-white font-bold"
          >
            LOGIN
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to={`/login`} className="text-violet-500 underline">Log In</Link>
        </p>
      </section>
      <Hero />
    </main>
  );
};

export default SignUpPage;
