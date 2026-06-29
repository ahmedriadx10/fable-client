'use client'

import { usePathname } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { ImBook } from "react-icons/im";

const Footer = () => {
  const path = usePathname();

  // ড্যাশবোর্ড রাউটে ফুটার হাইড রাখার লজিক
  if (path?.startsWith('/dashboard')) {
    return null;
  }
if(path.startsWith('/success')){
  return null
}


  return (
    <footer className="w-full bg-white text-slate-800 border-t border-slate-100 pt-16 pb-8 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
          

          <div className="lg:col-span-5 space-y-6">

            <div className="flex items-center gap-2 text-3xl font-bold tracking-tight text-(--color-primary)">
                   <ImBook className="text-2xl" />
              <span>Fable</span>
            </div>
            

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Celebrating independent voices since 2025. Discover original stories and join a global community of readers and writers.
            </p>

        
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-(--color-text-primary) tracking-wide">
                Stay inspired
              </h4>
              <p className="text-xs text-slate-500">
                Weekly curated reads and writer spotlights delivered to your inbox.
              </p>
              
         
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg shadow-none bg-[#94A3B815] border border-slate-200 transition-colors"
                />
                <Button
                  className="bg-(--color-primary) text-white font-semibold text-sm px-6 h-10 rounded-lg hover:bg-(--color-primary-light) transition-colors shadow-sm cursor-pointer"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>


          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end w-full">
            

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-(--color-text-primary)tracking-wide">Platform</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">About Fable</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Curated Lists</a></li>
              </ul>
            </div>


            <div className="space-y-4">
              <h4 className="text-sm font-bold text-(--color-text-primary) tracking-wide">For Writers</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Author Dashboard</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Publish Story</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Monetization</a></li>
              </ul>
            </div>


            <div className="space-y-4">
              <h4 className="text-sm font-bold text-(--color-text-primary) tracking-wide">Support</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-(--color-primary) transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>


        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Fable Editorial. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Cookies</a>
            </div>
          </div>

          {/* সোশাল আইকনস */}
          <div className="flex items-center gap-5 text-slate-600">
            <a href="#" className="hover:text-(--color-primary)  transition-colors" aria-label="Facebook">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="hover:text-(--color-primary) transition-colors" aria-label="X (Twitter)">
              <FaXTwitter size={14} />
            </a>
            <a href="#" className="hover:text-(--color-primary) transition-colors" aria-label="Instagram">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="hover:text-(--color-primary)  transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn size={14} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;