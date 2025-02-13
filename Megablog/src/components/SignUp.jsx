import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const session = await authService.login({ email: data.email, password: data.password });
        if (session) {
          const userData = await authService.getCurrentUser();
          if (userData) {
            dispatch(login(userData));
            navigate("/");
          }
        }
      }
    } catch (error) {
      setError(error.message || "Failed to create account");
    }
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="w-full mx-auto p-10 max-w-lg bg-gray-300 rounded-xl border-black/10">
        <div>
          <span className="w-full inline-block max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <p className="mt-2 text-center text-base text-black">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary
                     transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
        {error && <p className="text-red-400 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      value
                    ) || "Invalid email address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            <Button type="submit" className="w-full bg-blue-500 text-white">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
