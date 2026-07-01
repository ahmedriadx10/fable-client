import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* =================================================================
            ১. টপ সেকশন স্কেলিটন: ইমেজ এবং বুক ইনফো
           ================================================================= */}
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          
          {/* ইবুক কভার ইমেজ স্কেলিটন (md:w-[320px] এবং h-112.5 মিলিয়ে) */}
          <div className="relative w-full md:w-[320px] h-112.5 shrink-0 rounded-xl overflow-hidden border border-gray-200">
            <Skeleton className="w-full h-full" />
          </div>

          {/* বুক ডিটেইলস টেক্সট এরিয়া স্কেলিটন */}
          <div className="flex flex-col justify-between flex-1 space-y-6">
            <div className="space-y-4">
              {/* জেনর এবং ডেট রো */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-20 rounded-md" /> {/* Genre Tag */}
                <span className="text-gray-300">•</span>
                <Skeleton className="h-4 w-32 rounded" /> {/* Date */}
              </div>

              {/* টাইটেল স্কেলিটন */}
              <div className="space-y-2">
                <Skeleton className="h-9 w-3/4 rounded-xl" />
                <Skeleton className="h-9 w-1/2 rounded-xl md:hidden" /> {/* মোবাইল স্ক্রিনের জন্য ডাবল লাইন */}
              </div>

              {/* রাইটার লিংক স্কেলিটন */}
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-4 w-8 rounded" /> {/* "by" text */}
                <Skeleton className="h-5 w-36 rounded" /> {/* Author Name */}
              </div>

              {/* প্রাইস স্কেলিটন */}
              <Skeleton className="h-8 w-20 rounded-lg" />

              {/* সামারি/ডেসক্রিপশন স্কেলিটন (মাল্টিপল লাইন্স) */}
              <div className="space-y-2 max-w-2xl pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
              </div>
            </div>

            {/* অ্যাকশন বাটন গ্রুপ স্কেলিটন */}
            <div className="flex items-center gap-3 pt-4">
              <Skeleton className="h-12 w-40 rounded-xl" /> {/* Buy Now Button */}
              <Skeleton className="h-12 w-12 rounded-xl" /> {/* Bookmark Button */}
            </div>
          </div>
        </div>

        {/* =================================================================
            ২. বটম সেকশন স্কেলিটন: কন্টেন্ট এরিয়া
           ================================================================= */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            {/* কন্টেন্ট হেডার/টাইটেল স্কেলিটন */}
            <Skeleton className="h-6 w-48 rounded border-b pb-2" />
            
            {/* ডামি বডি কন্টেন্ট প্যারাগ্রাফ স্কেলিটন (যা লকড/আনলকড উভয় লেআউটকেই রিপ্রেজেন্ট করবে) */}
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-11/12 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-10/12 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-4/5 rounded" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}