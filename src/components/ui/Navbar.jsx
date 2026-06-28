"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, Dropdown, Label, Button } from "@heroui/react";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi"; // সমস্ত আইকন react-icons থেকে নেওয়া
import { roleBasedDashboardLink } from "@/lib/core/relevant-data";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { ImBook } from "react-icons/im";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const session=authClient.useSession()

const currentUser=session?.data?.user

if(pathname.startsWith('/dashboard')){
  return null
}



  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse E-books", href: "/browse-ebooks" },
  ];

  if (currentUser) {
    navLinks.push({
      name: "Dashboard",
      href: roleBasedDashboardLink[currentUser?.role],
    });
  }

  

  // কাস্টম লোগো আইকন (image_210dfc.png এর মতো রাউন্ডেড পার্পল স্কয়ার)
  const Logo = () => (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-(--color-primary) select-none"
    >
      {/* <div className="w-8 h-8 bg-[#6322d6] rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
        F
      </div> */}
        <ImBook className="text-2xl" />
      <span>Fable</span>
    </Link>
  );

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logut successful");
          router.push("/login");
        },
      },
    });
  };

  return (
    <nav className="w-fullsticky top-0 z-50 max-w-7xl mx-auto  px-6 sm:px-8 h-16 flex items-center justify-between">

      <Logo />


      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#6322d6]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>


      <div className="flex items-center gap-4">
     
        <div className="hidden md:block">
          {currentUser ? (
        
            <Dropdown>
              <Dropdown.Trigger className="rounded-full cursor-pointer ring-2 ring-transparent hover:ring-[#6322d6]/30 transition-all">
                <Avatar>
                  <Avatar.Image alt={currentUser.name} src={currentUser.image} referrerPolicy="no-referrer" />
                  <Avatar.Fallback delayMs={1000}>{currentUser.name.slice(0,2)}</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover className=' rounded-2xl'>
                <div className="px-3 pt-3 pb-1 ">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image alt={currentUser.name} src={currentUser.image} />
                      <Avatar.Fallback delayMs={1000}>{currentUser?.name.slice(0,2)}</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-semibold text-slate-800">
                        {currentUser.name}
                      </p>
                      <p className="text-xs leading-none text-slate-400">
                        {currentUser.email}
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
             
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link
                      href={`/dashboard/${currentUser?.role}/profile`}
                      className="w-full flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <Label className="cursor-pointer">Profile</Label>
                      <FiUser className="size-4 text-slate-400" />
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onPress={handleLogOut}
                    className='hover:bg-red-100'
                  >
                    <div className="flex w-full items-center  justify-between gap-2 cursor-pointer">
                      <Label className="text-red-500 font-medium">
                        Log Out
                      </Label>
                      <FiLogOut className="size-4 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
    
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Sign In
              </Link>
              <Button className="bg-[#6322d6] text-white font-semibold text-xs px-4 h-8 rounded-lg hover:bg-[#521bc2] transition-colors shadow-sm">
             <Link href={'register'}>Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        
        {currentUser && (
          <div className="block md:hidden">
            <Avatar >
              <Avatar.Image alt={currentUser.name} src={currentUser.image} />
              <Avatar.Fallback delayMs={1000}>{currentUser?.name?.slice(0,2)}</Avatar.Fallback>
            </Avatar>
          </div>
        )}

 
        <button
        
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer hover:bg-slate-50 focus:outline-none md:hidden transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>


      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg flex flex-col p-6 space-y-4 md:hidden transition-all duration-300 z-40">
   
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-2 border-b border-slate-50 ${
                  isActive ? "text-[#6322d6]" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}


          {!currentUser && (
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-600 py-2"
              >
                Sign In
              </Link>
              <Button
                as={Link}
                href="/register"
                onClick={() => setIsOpen(false)}
                className="bg-[#6322d6] text-white font-semibold text-sm w-full h-10 rounded-xl flex items-center justify-center"
              >
                Sign Up
              </Button>
            </div>
          )}


          {currentUser && (
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
            href={`/dashboard/${currentUser?.role}/profile`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2"
              >
                <FiUser className="size-4" /> My Profile
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogOut();
                }}
                className="text-sm cursor-pointer font-medium text-red-500 flex items-center gap-2 text-left"
              >
                <FiLogOut className="size-4" /> Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
