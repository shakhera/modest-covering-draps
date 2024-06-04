import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User create successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="pt-6 lg:pt-24 mb-6">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white shadow-xl font-sans mx-auto dark:bg-black">
          <h1 className="text-3xl font-bold text-center text-red-600">
            Create an account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
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
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
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
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full border-red-800 font-extrabold border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
              Sign Up
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                Let&apos;s go
              </span>
              <span className="bg-red-600 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="bg-red-600 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
              <span className="bg-red-600 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              <span className="bg-red-600 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
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
