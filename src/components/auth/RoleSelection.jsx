"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "@heroui/react";
import { ImBook } from "react-icons/im"; 
import { FiEdit3 } from "react-icons/fi"; 
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { updateUserRoleOnServer } from "@/lib/actions/UserRoleSelection";


const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleConfirmSelection = async () => {

    setLoading(true)
    

    // const result = await authClient.updateUser(
    //   {
    //     role: selectedRole,
    //   },
    //   {
    //     onRequest: () => {
    //       setLoading(true);
    //     },

    //     onSuccess: () => {
    //       setLoading(false);
    //       toast.success("Role updated successfully");
    //       router.push("/");
    //     },
    //   },
    // );

    // if (result?.error) {
    //   setLoading(false);
    //   toast.error("Failed to update role try again");
    //   console.log('error',result?.error)
    // }


    const result = await updateUserRoleOnServer(selectedRole);

    setLoading(false);

    if (result?.success) {
      toast.success("Role updated successfully");
      router.push("/");
    } else if (result?.error) {
      toast.error(result.error || "Failed to update role, try again");
      console.log('error', result.error);
    }

  };

  return (
    <div className="w-full flex flex-col items-center text-center space-y-10">

      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          How will you use Fable?
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Personalize your experience. This will help us tailor your dashboard
          and recommendations.
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
              I want to discover and read original stories. Explore curated
              collections and support your favorite authors.
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
              I want to write, publish, and grow my audience. Access editorial
              tools, analytics, and monetization features.
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
          {loading ? <Spinner color="current" /> : "Confirm Selection"}
        </Button>
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          Please select your primary role to continue your journey with Fable.
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
