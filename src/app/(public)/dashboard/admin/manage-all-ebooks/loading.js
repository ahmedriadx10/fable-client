import { Skeleton } from "@heroui/react";

export default function Loading() {
  // ডিরেক্টরি টেবিলে ইনিশিয়াল ভিউ হিসেবে ৫টি ডামি বুক আইটেম রেন্ডার করব
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header & Subtitle)
         ================================================================= */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-64 rounded-xl" /> {/* Manage All Ebooks Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-2xl rounded" /> {/* Subtitle Line */}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* =================================================================
          ২. মেইন কন্টেইনার কার্ড ও টেবিল স্ট্রাকচার স্কেলিটন
         ================================================================= */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        
        {/* টেবিল সাব-হেডার (ডিরেক্টরি টাইটেল ও টোটাল ইবুক কাউন্টার ব্যাজ) */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-6 w-36 rounded-md" /> {/* Ebook Directory Title */}
          <Skeleton className="h-6 w-28 rounded-full" /> {/* Total Ebooks Badge */}
        </div>
        
        {/* টেবিল রেসপনসিভ স্ক্রল কন্টেইনার সিমুলেশন */}
        <div className="overflow-hidden border border-gray-50 rounded-2xl">
          <div className="w-full overflow-x-auto">
            <div className="min-w-200 w-full">
              
              {/* টেবিল হেডার কলাম লেআউট (৬টি কলামের প্রফেশনাল স্পেসিং) */}
              <div className="grid grid-cols-[90px_2fr_1.5fr_1fr_1fr_1.2fr] bg-gray-50/70 border-b border-gray-100 p-4">
                <div className="text-gray-400 font-semibold text-xs tracking-wider">COVER</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">EBOOK TITLE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">WRITER NAME</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">PRICE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">STATUS</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider text-center">ACTIONS</div>
              </div>

              {/* টেবিল বডি ডামি বুক রো সমূহ */}
              <div className="divide-y divide-gray-50">
                {skeletonRows.map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[90px_2fr_1.5fr_1fr_1fr_1.2fr] items-center p-4"
                  >
                    {/* কলাম ১: বুক কভার ইমেজ (w-11.25 h-16.25 অর্থাৎ 45px × 65px মিলিয়ে) */}
                    <div>
                      <div className="w-11.25 h-16.25 rounded shadow-md overflow-hidden bg-gray-100">
                        <Skeleton className="w-full h-full" />
                      </div>
                    </div>

                    {/* কলাম ২: ইবুক টাইটেল ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-5/6 rounded-md" />
                    </div>

                    {/* কলাম ৩: রাইটার নেম ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-2/3 rounded-md" />
                    </div>

                    {/* কলাম ৪: প্রাইস স্কেলিটন */}
                    <div>
                      <Skeleton className="h-4 w-12 rounded-md" />
                    </div>

                    {/* কলাম ৫: স্ট্যাটাস ব্যাজ স্কেলিটন */}
                    <div>
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>

                    {/* কলাম ৬: অ্যাকশন বাটনস (Status Eye Toggle এবং Trash Delete Button) */}
                    <div className="flex items-center justify-center gap-3">
                      <Skeleton className="w-8 h-8 rounded-lg shrink-0" /> {/* Eye Toggle Button placeholder */}
                      <Skeleton className="w-8 h-8 rounded-lg shrink-0" /> {/* Delete Trash Button placeholder */}
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