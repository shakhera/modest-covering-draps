import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div>
      <div className="pt-6 lg:pt-24 mb-6">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white shadow-xl  font-sans mx-auto">
          <h1 className="text-3xl font-bold text-center text-red-600">
            Create an account
          </h1>

          <form className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block ">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User name"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              />
            </div>
            <div className="space-y-2 text-sm">
              <label htmlFor="email" className="block ">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              />
            </div>
            <div className="space-y-2 text-sm">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              />
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-black text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Sign Up
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                Let&apos;s go
              </span>
              <span className="bg-red-950 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="bg-red-950 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="bg-red-950 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              <span className="bg-red-950 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
          </form>

          {/* Social icons */}
          <SocialLogin></SocialLogin>

          <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Already have an account?
            <Link to="/login" className="underline hover:text-indigo-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
