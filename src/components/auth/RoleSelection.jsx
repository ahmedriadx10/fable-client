"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { ImBook } from "react-icons/im"; // রিডারের জন্য বই আইকন
import { FiEdit3 } from "react-icons/fi"; // রাইটারের জন্য এডিট আইকন
// import { authClient } from "@/lib/auth-client"; // তোমার প্রজেক্টের better-auth ক্লায়েন্ট পাথ অনুযায়ী ইমপোর্ট করবে

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("user"); // ডিফল্ট 'reader' সিলেক্ট থাকবে
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleConfirmSelection = async () => {
    setLoading(true);
    try {
      // Better-Auth এর updateUser মেথড দিয়ে রোল সেট করা হচ্ছে
      /* await authClient.updateUser({
        role: selectedRole,
      }); 
      */
      
      console.log("Updated Role to:", selectedRole);
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to update role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center space-y-10">
      {/* হেডার ও সাবটাইটেল */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          How will you use Fable?
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Personalize your experience. This will help us tailor your dashboard and recommendations.
        </p>
      </div>

      {/* custom role selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        
        {/* user card */}
        <div
          onClick={() => setSelectedRole("user")}
          className={`relative cursor-pointer rounded-xl border-2 p-8 bg-white transition-all duration-300 flex flex-col items-center justify-center text-center ${
            selectedRole === "user"
              ? "border-[#6322d6] shadow-md ring-1 ring-[#6322d6]/20"
              : "border-(--color-border) hover:border-purple-200"
          }`}
        >

          <div className="absolute top-4 right-4 flex items-center justify-center">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                selectedRole === "user"
                  ? "border-[#6322d6] bg-[#6322d6]"
                  : "border-(--color-border) bg-white"
              }`}
            >
              {selectedRole === "user" && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
          </div>


          <div className="flex flex-col items-center space-y-4 select-none">

            <div className="p-3 bg-[#6322d6] text-white rounded-xl shadow-inner">
              <ImBook className="text-2xl" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-800">Reader</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal px-2">
              I want to discover and read original stories. Explore curated collections and support your favorite authors.
            </p>
          </div>
        </div>

        {/* write card*/}
        <div
          onClick={() => setSelectedRole("writer")}
          className={`relative cursor-pointer rounded-xl border-2 p-8 bg-white transition-all duration-300 flex flex-col items-center justify-center text-center ${
            selectedRole === "writer"
              ? "border-[#6322d6] shadow-md ring-1 ring-[#6322d6]/20"
              : "border(--color-border) hover:border-purple-200"
          }`}
        >

          <div className="absolute top-4 right-4 flex items-center justify-center">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                selectedRole === "writer"
                  ? "border-[#6322d6] bg-[#6322d6]"
                  : "border-(--color-border) bg-white"
              }`}
            >
              {selectedRole === "writer" && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
          </div>


          <div className="flex flex-col items-center space-y-4 select-none">

            <div
              className={`p-3 rounded-xl transition-colors ${
                selectedRole === "writer"
                  ? "bg-purple-100 text-[#6322d6]"
                  : "bg-[#f1f3f9] text-slate-700"
              }`}
            >
              <FiEdit3 className="text-2xl" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-800">Writer</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal px-2">
              I want to write, publish, and grow my audience. Access editorial tools, analytics, and monetization features.
            </p>
          </div>
        </div>

      </div>


      <div className="w-full flex flex-col items-center space-y-4 pt-4">
        <Button
          onPress={handleConfirmSelection}
          isLoading={loading}
          className="w-full max-w-sm bg-[#6322d6] text-white font-semibold text-sm h-11 rounded-xl flex items-center justify-center transition-all hover:bg-[#521bc2] shadow-lg shadow-purple-500/10 cursor-pointer"
        >
          Confirm Selection
        </Button>
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          Please select your primary role to continue your journey with Fable.
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;