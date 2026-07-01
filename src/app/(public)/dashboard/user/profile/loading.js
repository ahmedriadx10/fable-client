import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="p-6">
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header Section)
         ================================================================= */}
      <div className="mb-8 flex flex-col gap-2">
        <Skeleton className="h-9 w-44 rounded-xl" /> {/* Page Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-xl rounded" /> {/* Subtitle Line 1 */}
        </div>
      </div>

      {/* =================================================================
          ২. প্রোফাইল কার্ড স্কেলিটন (ProfileManage)
         ================================================================= */}
      <div className="flex justify-center items-center w-full py-12">
        <div className="w-full max-w-md bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col items-center">
          
          {/* প্রোফাইল ইমেজ স্কেলিটন (w-28 h-28 rounded-full মিলিয়ে) */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5">
            <Skeleton className="w-full h-full rounded-full" />
          </div>

          {/* ইউজার নেম ও ইমেল স্কেলিটন */}
          <div className="w-full flex flex-col items-center gap-2 mb-3">
            <Skeleton className="h-7 w-48 rounded-lg" /> {/* Name */}
            <Skeleton className="h-4 w-36 rounded-md" />  {/* Email */}
          </div>

          {/* রোল ব্যাজ স্কেলিটন */}
          <Skeleton className="h-6 w-20 rounded-md mb-6" />

          {/* ডিভাইডার লাইন */}
          <div className="w-full h-px bg-gray-100 mb-6" />

          {/* আপডেট প্রোফাইল বাটন স্কেলিটন */}
          <Skeleton className="w-full h-11 rounded-xl" /> {/* Button Height mapping */}
          
        </div>
      </div>
    </div>
  );
}