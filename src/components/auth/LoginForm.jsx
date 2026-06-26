"use client";

import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Spinner,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { error } from "better-auth/api";
import { useRouter } from "next/navigation";
import { roleBasedDashboardLink } from "@/lib/core/relevant-data";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;



    const result = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
      },
    );

    if(result?.data?.user){
       toast.success("Login successful");
          setLoading(false);
          setFormData({
            email: "",
            password: "",
          });
          router.push(`${roleBasedDashboardLink[result?.data?.user?.role]}`);

    }

    if (result?.error) {
      toast.error(result?.error?.message);
      setLoading(false)
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (result?.error) {
      return toast.error(
        result?.error?.message || "Google sign-in failed try again",
      );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-(--color-text-primary)">
          Sign In
        </h2>
        <p className="mt-2 text-sm text-(--color-text-secondary)">
          Continue your journey through the world of words.
        </p>
      </div>

      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email Address</Label>
          <Input
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
          type={showPassword ? "text" : "password"}
        >
          <div className="flex items-center justify-between">
            <Label>Password</Label>
          </div>

          <div className="relative flex items-center">
            <Input
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              {showPassword ? (
                <FaRegEyeSlash size={16} />
              ) : (
                <FaRegEye size={16} />
              )}
            </button>
          </div>
          <FieldError />
        </TextField>

        {/* লগইন বাটন */}
        <div className="flex gap-2">
          <Button
            type="submit"
            fullWidth
            className="mt-5 w-full bg-(--color-primary) text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-(--color-primary-light) transition-colors shadow-md cursor-pointer"
          >
            {loading ? <Spinner color="current" /> : "Sign Up"}
          </Button>
        </div>
      </Form>

      {/* ডিভাইডার */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full border-t border-slate-200"></div>
        <span className="relative bg-white px-3 text-xs uppercase text-slate-400 font-semibold tracking-wider">
          OR
        </span>
      </div>

      {/* গুগল সাইন ইন বাটন */}
      <Button
        variant="bordered"
        className="w-full text-(--color-text-primary) border border-(--color-border) bg-(--color-surface) py-2 font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
        onPress={handleGoogleSignIn}
      >
        <FcGoogle />
        Continue with Google
      </Button>

      {/* রেজিস্টার লিংক */}
      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-(--color-primary) hover:underline"
        >
          Create one
        </Link>
      </p>

      {/* ফুটার লিংকসমূহ */}
      <div className="flex justify-center gap-4 pt-4 text-xs text-slate-400 font-medium">
        <a href="#" className="hover:text-slate-600">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-slate-600">
          Terms of Service
        </a>
        <a href="#" className="hover:text-slate-600">
          Help Center
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
