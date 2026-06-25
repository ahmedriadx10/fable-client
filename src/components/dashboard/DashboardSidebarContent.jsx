'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";
import {  FiLogOut } from "react-icons/fi";
import { roleBasedDashboardNavigationLinks } from "@/lib/core/relevant-data";

import { logoutAccount } from "@/lib/core/LogoutAccout";
import { ImBook } from "react-icons/im";

const DashboardSidebarContent = ({user}) => {
  const pathname = usePathname();

  const sidebarLinks = roleBasedDashboardNavigationLinks[user?.role];

  return (
 <div className="h-full flex flex-col justify-between p-6">
      {/* Top Section: Logo & Links */}
      <div className="space-y-8">
     <Link
      href="/"
      className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-(--color-primary) select-none"
    >

        <ImBook className="text-2xl" />
      <span>Fable</span>
    </Link>

        <nav className="space-y-1.5">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#6322d6]/10 text-[#6322d6]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className={`text-lg ${isActive ? "text-[#6322d6]" : "text-slate-400"}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Profile & Logout */}
      <div className="pt-6 border-t border-slate-100 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <Avatar size="sm" className="ring-2 ring-purple-100">
            <Avatar.Image src={user?.image} referrerPolicy="no-referrer" alt={user?.name} />
            <Avatar.Fallback>{user?.name?.slice(0,2)?.toUpperCase()}</Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-tight">{user?.name}</span>
            <span className="text-xs text-slate-400 font-medium capitalize">{user?.role==='user'?'Reader':user?.role}</span>
          </div>
        </div>

        <button
          onClick={logoutAccount}
          className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors text-left"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebarContent;