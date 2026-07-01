import { Skeleton } from "@heroui/react";

export default function Loading() {
  // ড্যাশবোর্ড টেবিলে ইনিশিয়াল রো (Row) হিসেবে ৫টি ডামি ইউজার ডাটা রেন্ডার করব
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header Section)
         ================================================================= */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-72 rounded-xl" /> {/* Page Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-2xl rounded" /> {/* Subtitle Line 1 */}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* =================================================================
          ২. মেইন কন্টেইনার কার্ড ও টেবিল স্ট্রাকচার স্কেলিটন
         ================================================================= */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        
        {/* টেবিল সাব-হেডার (ইউজার লেজার টাইটেল ও কাউন্টার ব্যাজ) */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-6 w-28 rounded-md" /> {/* User Ledger Title */}
          <Skeleton className="h-6 w-36 rounded-full" /> {/* Total System Users Badge */}
        </div>
        
        {/* টেবিল রেসপনসিভ রেঞ্জ কন্টেইনার সিমুলেশন */}
        <div className="overflow-hidden border border-gray-50 rounded-2xl">
          <div className="w-full overflow-x-auto">
            <div className="min-w-200w-full">
              
              {/* টেবিল হেডার কলাম লেআউট */}
              <div className="grid grid-cols-[100px_1.5fr_2fr_1fr_1.5fr] bg-gray-50/70 border-b border-gray-100 p-4">
                <div className="text-gray-400 font-semibold text-xs tracking-wider">AVATAR</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">NAME</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">EMAIL ADDRESS</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">ROLE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider text-center">ACTIONS</div>
              </div>

              {/* টেবিল বডি ডামি ইউজার রোজনীতি */}
              <div className="divide-y divide-gray-50">
                {skeletonRows.map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[100px_1.5fr_2fr_1fr_1.5fr] items-center p-4"
                  >
                    {/* কলাম ১: ইউজার অ্যাভাটার ইমেজ (w-10 h-10 rounded-full মিলিয়ে) */}
                    <div>
                      <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden shadow-sm">
                        <Skeleton className="w-full h-full rounded-full" />
                      </div>
                    </div>

                    {/* কলাম ২: নেম ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-32 rounded-md" />
                    </div>

                    {/* কলাম ৩: ইমেইল এড্রেস ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-44 rounded-md" />
                    </div>

                    {/* কলাম ৪: রোল স্ট্যাটাস ব্যাজ স্কেলিটন */}
                    <div>
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </div>

                    {/* কলাম ৫: অ্যাকশন কন্ট্রোল এরিয়া (Select Trigger বাটন ও ডিলিট বাটন আইকন) */}
                    <div className="flex items-center justify-center gap-3">
                      <Skeleton className="h-8 w-28 rounded-lg shrink-0" /> {/* Dropdown Trigger box backup */}
                      <Skeleton className="h-8 w-8 rounded-lg shrink-0" />  {/* Delete Action button backup */}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
}