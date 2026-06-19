"use client";

import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
  Spinner,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash, FaArrowRight } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [loading,setLoading]=useState()
const router=useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  //form submission
  const handleSubmit =async (e) => {
    e.preventDefault();

    const { name, email, image, password } = formData;

const result=await authClient.signUp.email({
name,email,password,image:image || 'https://cdn-icons-png.flaticon.com/512/8188/8188349.png'

},{
onRequest:()=>{
  setLoading(true)
},
onSuccess:()=>{
setLoading(false)
  toast.success('Registration successful')
    setFormData({
      name: "",
      email: "",
      image: "",
      password: "",
      confirmPassword: "",
    });

router.push('/register/select-role')
}

})


if(result?.error){
  setLoading(false)
  toast.error(result?.error?.message || 'Registration failed please try again')
}
    









  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-(--color-text-primary)">
          Create an account
        </h2>
        <p className="mt-2 text-sm text-(--color-text-secondary)">
          Welcome to our curated community of readers.
        </p>
      </div>


      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <TextField isRequired name="name" type="text" minLength={3}>
          <Label>Full Name</Label>
          <Input
            placeholder="John Doe"
            onChange={handleInputChange}
            value={formData.name}
            className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
          />
          <FieldError />
        </TextField>


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
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FieldError />
        </TextField>


        <TextField name="image" type="url">
          <Label>Image URL</Label>
          <Input
            className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleInputChange}
          />
          <FieldError />
        </TextField>


        <TextField
          isRequired
          minLength={6}
          name="password"
          type={showPassword ? "text" : "password"}
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
        >
          <Label>Password</Label>
          <div className="relative flex items-center">
            <Input
              className="w-full rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
            </button>
          </div>
          <FieldError />
        </TextField>


        <TextField
          isRequired
          minLength={6}
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
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
            if (value !== formData.password) {
              return "Passwords do not match try again";
            }
            return null;
          }}
        >
          <Label>Confirm Password</Label>
          <div className="relative flex items-center">
            <Input
              className="w-full rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
            >
              {showConfirmPassword ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
            </button>
          </div>
          <FieldError />
        </TextField>


        <div className="flex gap-2">
          <Button
            type="submit"
            fullWidth
            className="mt-5 w-full bg-(--color-primary) text-white font-semibold text-sm h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-(--color-primary-light) transition-colors shadow-md"
          >
  {loading?     <Spinner color="current" /> :'Sign Up'}
          </Button>
        </div>
      </Form>

 
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full border-t border-slate-200"></div>
        <span className="relative bg-white px-3 text-xs uppercase text-slate-400 font-semibold tracking-wider">
          OR
        </span>
      </div>


      <Button
        variant="bordered"
        className="w-full text-(--color-text-primary) border border-(--color-border) bg-(--color-surface) py-2 font-semibold text-sm h-10 rounded-xl"
      >
        <FcGoogle />
        Continue with Google
      </Button>


      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-(--color-primary) hover:underline"
        >
      Login
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

export default RegisterForm;