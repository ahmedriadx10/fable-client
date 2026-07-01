import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 antialiased">
      <div className="w-full max-w-2xl text-center space-y-6">
        
        {/* ১. সাকসেস চেক আইকন স্কেলিটন */}
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-2xl inline-block shadow-sm">
            <Skeleton className="w-12 h-12 rounded-xl" />
          </div>
        </div>

        {/* ২. হেডার ও সাবটাইটেল টেক্সট স্কেলিটন */}
        <div className="space-y-3 flex flex-col items-center">
          <Skeleton className="h-8 w-64 rounded-xl" />
          <div className="space-y-1.5 flex flex-col items-center">
            <Skeleton className="h-4 w-80 max-w-xs sm:max-w-md rounded" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
        </div>

        {/* ৩. বুক ইনভয়েস কার্ড স্কেলিটন */}
        <div className="w-full bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left flex flex-col md:flex-row gap-6 items-center md:items-start max-w-2xl mx-auto">
          
          {/* বুক কভার ইমেজ স্কেলিটন (w-28 h-40 মিলিয়ে) */}
          <div className="relative w-28 h-40 bg-[#F1F5F9] rounded-md overflow-hidden shrink-0">
            <Skeleton className="w-full h-full" />
          </div>

          {/* বইয়ের ডিটেইলস এরিয়া স্কেলিটন */}
          <div className="flex-1 w-full space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4 rounded-lg" /> {/* Book Title */}
              <Skeleton className="h-4 w-1/3 rounded-md" />  {/* Author Name */}
            </div>

            <hr className="border-[#E2E8F0]" />

            {/* ট্রানজেকশন এবং প্রাইস এরিয়া স্কেলিটন */}
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3 w-24 rounded" /> {/* Transaction Label */}
                <Skeleton className="h-4 w-full max-w-45 rounded" /> {/* Dummy TxID */}
              </div>
              <div className="text-right shrink-0 space-y-1">
                <Skeleton className="h-3 w-20 rounded ml-auto" /> {/* Amount Paid Label */}
                <Skeleton className="h-6 w-16 rounded-lg ml-auto" />   {/* Price */}
              </div>
            </div>

            {/* স্ট্রাইপ সিকিউরড ব্যাজ স্কেলিটন */}
            <Skeleton className="w-full h-8 rounded-md" />
          </div>
        </div>

        {/* ৪. অ্যাকশন বাটনস স্কেলিটন */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-md mx-auto pt-2">
          <Skeleton className="w-full sm:w-44 h-11 rounded-lg" /> {/* Start Reading Button */}
          <Skeleton className="w-full sm:w-32 h-11 rounded-lg" /> {/* Go to Home Button */}
        </div>

        {/* ৫. সাপোর্ট লিংক স্কেলিটন */}
        <div className="pt-4 flex justify-center">
          <Skeleton className="h-4 w-44 rounded" />
        </div>

      </div>
    </main>
  );
}