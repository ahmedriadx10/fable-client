import LoginForm from "@/components/auth/LoginForm";
import { ImBook } from "react-icons/im"; // Fable লোগোর জন্য
export const metadata = {
  title: 'Login | Fable',
  description: '...',
}
const LoginPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

      <div className="hidden flex-col justify-between bg-[#6322d6] p-12 text-white md:flex lg:p-20">

        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <ImBook className="text-3xl" />
          <span>Fable</span>
          <span className="ml-1 rounded bg-purple-500/30 px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider text-purple-200">
            Editorial
          </span>
        </div>


        <div className="max-w-md space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-purple-300 opacity-80">
            — EST. {new Date().getFullYear() - 1}
          </div>
          <h1 className="text-5xl font-bold leading-[1.15] font-serif">
            Welcome back to <br />
            <span className="italic font-normal">your story.</span>
          </h1>
          <p className="text-sm font-light text-purple-100/90 leading-relaxed pt-2">
            Access your curated library, track your deep reading progress, and rejoin the global community of authors and bibliophiles.
          </p>
        </div>


        <div className="text-xs uppercase tracking-wider text-purple-300/70">
          © {new Date().getFullYear()} FABLE EDITORIAL. ALL RIGHTS RESERVED.
        </div>
      </div>

 
      <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 bg-white">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;