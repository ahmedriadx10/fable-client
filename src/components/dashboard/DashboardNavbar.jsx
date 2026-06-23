'use client'

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiBell, FiSearch } from "react-icons/fi";
import { Button, Input, Avatar } from "@heroui/react";
import DashboardSidebarMobileMenu from "./DashboardSidebarMobileMenu";

const DashboardNavbar = () => {
  // মোবাইল ড্রয়ার ওপেন/ক্লোজ স্টেট
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-white border-b border-slate-100 sticky top-0 z-30 px-4 md:px-6 flex items-center justify-between">
      
      {/* বাম পাশ: লোগো বা সার্চবার */}
      <div className="flex items-center">
        <Link href="/" className="flex lg:hidden items-center gap-2 text-base font-bold text-slate-900 select-none">
          <div className="w-6 h-6 bg-[#6322d6] rounded-md flex items-center justify-center text-white font-serif font-bold text-xs">
            F
          </div>
          <span>Fable</span>
        </Link>

        <div className="max-w-xs w-full hidden lg:block">
          <Input
            size="sm"
            placeholder="Search updates..."
        
            className="bg-slate-50 border border-slate-100 rounded-lg"
          />
        </div>
      </div>

      {/* ডান পাশ */}
      <div className="flex items-center gap-3">
        
        {/* ডেস্কটপ আইকনসমূহ */}
        <div className="hidden lg:flex items-center gap-2">
          <Button isIconOnly variant="light" className="text-slate-600 hover:text-[#6322d6] rounded-xl">
            <FiMail className="text-xl" />
          </Button>

          <Button isIconOnly variant="light" className="text-slate-600 hover:text-[#6322d6] rounded-xl relative">
            <FiBell className="text-xl" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-1 ring-white" />
          </Button>
        </div>

        {/* ইউজার ইমেজ */}
        <Avatar size="sm" className="w-8 h-8">
          <Avatar.Image src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg" alt="Riad Ahmed" />
          <Avatar.Fallback>RA</Avatar.Fallback>
        </Avatar>

        {/* মোবাইল মেনু বাটন (স্টেট পাস করা হয়েছে) */}
        <div className="lg:hidden pl-1 border-l border-slate-100">
          <DashboardSidebarMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

      </div>
    </header>
  );
};

export default DashboardNavbar;