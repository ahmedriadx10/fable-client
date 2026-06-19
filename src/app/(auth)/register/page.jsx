import RegisterForm from "@/components/auth/RegisterForm";
import { ImBook } from "react-icons/im"; // Fable লোগোর জন্য

const RegisterPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

      <div className="hidden flex-col justify-between bg-[#6322d6] p-12 text-white md:flex lg:p-20">

        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <ImBook className="text-3xl" />
          <span>Fable</span>
        </div>


        <div className="max-w-md space-y-6">
          <h1 className="text-5xl font-semibold leading-tight font-serif">
            Join Fable. <br />
            <span className="italic font-normal text-purple-200">Your story begins here.</span>
          </h1>
          <p className="text-sm font-light text-purple-100 leading-relaxed">
            Experience a distraction-free environment crafted for the modern bibliophile. 
            Curate your library, discover emerging voices, and engage with deep content.
          </p>
        </div>

     
        <div className="text-xs uppercase tracking-wider text-purple-300">
          © {new Date().getFullYear()} FABLE EDITORIAL. ALL RIGHTS RESERVED.
        </div>
      </div>

   
      <div className="flex items-center justify-center  p-6 sm:p-12 md:p-16 lg:p-24">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;