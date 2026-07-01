'use client'
import { roleBasedDashboardNavigationLinks } from "@/lib/core/relevant-data";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { logoutAccount } from "@/lib/core/LogoutAccout";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { ImBook } from "react-icons/im";

const DashboardSidebarMobileMenu = ({user}) => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()
  const state = useOverlayState();

  const navItems = roleBasedDashboardNavigationLinks[user?.role]

  return (
    <div className='flex justify-between py-2 px-2 items-center lg:hidden'>
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-(--color-primary) select-none"
        >
          <ImBook className="text-2xl" />
          <span>Fable</span>
        </Link>
      </div>

      <div className='flex gap-2'>
        <div className="">
          <Avatar size="md" className="ring-2 ring-purple-100">
            <Avatar.Image src={user?.image} referrerPolicy="no-referrer" alt={user?.name} />
            <Avatar.Fallback>{user?.name?.slice(0, 2)?.toUpperCase()}</Avatar.Fallback>
          </Avatar>
        </div>
        
        <div>
          <div className="flex flex-col gap-3">
            <h3 className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer hover:bg-slate-50 focus:outline-none transition-colors" onClick={() => setIsOpen(true)}>
              <FiMenu size={25} />
            </h3>

            <Drawer.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
              <Drawer.Content placement="left">
                <Drawer.Dialog>
                  <Drawer.Header>
                    <Drawer.Heading></Drawer.Heading>
                  </Drawer.Header>
                  
                  <Drawer.Body>
                    <div className='flex flex-col justify-between h-full'>
                      
                      {/* এই ডিভটিতে flex-1 এবং overflow-y-auto দেওয়া হয়েছে যাতে মেনু আইটেম বেশি হলে শুধু এই অংশটুকু স্ক্রল হয় */}
                      <div className="space-y-10 flex-1 overflow-y-auto pr-1">
                        <h2>
                          <Link
                            href="/"
                            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-(--color-primary) select-none"
                          >
                            <ImBook className="text-2xl" />
                            <span>Fable</span>
                          </Link>
                        </h2>

                        <nav className="flex flex-col gap-1">
                          {navItems.map((item, inx) => (
                            <Link
                              onClick={() => setIsOpen(!isOpen)}
                              href={item?.href}
                              key={inx}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                path === item?.href
                                  ? "bg-[#6322d6]/10 text-[#6322d6]"
                                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              <item.icon className="size-5 text-muted" />
                              {item.name}
                            </Link>
                          ))}
                        </nav>
                      </div>

                      {/* এই বটম সেকশনটিতে bg-white এবং sticky bottom-0 দেওয়া হয়েছে যাতে এটি সবসময় ড্রয়ারের নিচে ফিক্সড থাকে */}
                      <div className="pt-6 border-t border-slate-100 space-y-4 bg-white sticky bottom-0">
                        <div className="flex items-center gap-3 px-2">
                          <Avatar size="sm" className="ring-2 ring-purple-100">
                            <Avatar.Image src={user?.image} referrerPolicy="no-referrer" alt={user?.name} />
                            <Avatar.Fallback>{user?.name?.slice(0, 2)?.toUpperCase()}</Avatar.Fallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-800 leading-tight">{user?.name}</span>
                            <span className="text-xs text-slate-400 font-medium capitalize">{user?.role === 'user' ? 'Reader' : user?.role}</span>
                          </div>
                        </div>

                        <button
                          onClick={logoutAccount}
                          className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors text-left"
                        >
                          <FiLogOut className="text-lg" />
                          <span>Logout</span>
                        </button>
                      </div>

                    </div>
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebarMobileMenu;