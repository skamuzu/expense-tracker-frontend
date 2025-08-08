import React from "react";
import { CircleDollarSign } from "lucide-react";
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const LoginPage = () => {
  return (
    <main className="w-full min-h-screen font-display sm:flex sm:flex-col md:flex-row z-10 overflow-hidden">
      <section className="p-10 flex flex-col min-h-screen w-4/7 justify-start relative z-20 bg-white">
        <h1 className="font-bold mb-32 text-lg">Expense Tracker</h1>
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
            className="w-3/5 bg-violet-500 p-1.5 rounded-sm text-white font-bold"
          >
            LOGIN
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <span className="text-violet-500 underline">Sign Up</span>
        </p>
      </section>
      <section className="relative bg-purple-200 w-3/7 z-10 flex flex-col ">
        <div className="bg-purple-600 w-40 h-40 rounded-3xl absolute -top-8 -left-2 z-0"></div>
        <div className="bg-none w-50 h-50 border-15 border-pink-700 absolute top-1/3 -right-12 rounded-3xl">
          {" "}
        </div>
        <div className="bg-purple-600 w-40 h-40 rounded-3xl absolute -bottom-8 -left-2 z-0"></div>
        <div className="w-full z-20 flex flex-col items-center  mt-6 ">
          <div className="h-20 flex items-center w-4/5 bg-white rounded-lg px-4 gap-2">
            <CircleDollarSign className="h-14 rounded-full w-14 bg-yellow-500 text-white " />
            <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Track your Income & Expenses</p>
                <p>$430,000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
