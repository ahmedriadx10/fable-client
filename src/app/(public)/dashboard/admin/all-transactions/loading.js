import { Skeleton } from "@heroui/react";

export default function Loading() {
  // লেজার টেবিলে ইনিশিয়াল রো (Row) হিসেবে ৫টি ডামি ট্রানজেকশন ডাটা রেন্ডার করব
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header Section)
         ================================================================= */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-80 rounded-xl" /> {/* Financial Ledger Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-2xl rounded" /> {/* Subtitle Line */}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* =================================================================
          ২. মেইন কন্টেইনার কার্ড ও লেজার টেবিল স্ট্রাকচার স্কেলিটন
         ================================================================= */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        
        {/* টেবিল সাব-হেডার (অল ট্রানজেকশন টাইটেল ও রেকর্ড কাউন্টার ব্যাজ) */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-6 w-36 rounded-md" /> {/* All Transactions Title */}
          <Skeleton className="h-6 w-24 rounded-full" /> {/* Records Counter Badge */}
        </div>
        
        {/* টেবিল রেসপনসিভ স্ক্রল কন্টেইনার সিমুলেশন (min-w-212.5 অর্থাৎ ৮৫০ পিক্সেল ম্যাচিং) */}
        <div className="overflow-hidden border border-gray-50 rounded-2xl">
          <div className="w-full overflow-x-auto">
            <div className="min-w-200 w-full">
              
              {/* টেবিল হেডার কলাম লেআউট */}
              <div className="grid grid-cols-[1.8fr_80px_2fr_1.5fr_1.2fr_1.2fr_1fr] bg-gray-50/70 border-b border-gray-100 p-4">
                <div className="text-gray-400 font-semibold text-xs tracking-wider text-center">TRANSACTION ID</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">COVER</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">EBOOK TITLE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">USER / BUYER</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">TYPE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">DATE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">AMOUNT</div>
              </div>

              {/* টেবিল বডি ডামি ট্রানজেকশন রো সমূহ */}
              <div className="divide-y divide-gray-50">
                {skeletonRows.map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[1.8fr_80px_2fr_1.5fr_1.2fr_1.2fr_1fr] items-center p-4"
                  >
                    {/* কলাম ১: ট্রানজেকশন আইডি ও কপি বাটন এরিয়া (সেন্টার এলাইনড) */}
                    <div className="flex items-center justify-center gap-2 pr-4">
                      <Skeleton className="h-6 w-36 rounded" /> {/* Transaction ID text box backup */}
                      <Skeleton className="h-6 w-6 rounded shrink-0" /> {/* Copy Icon button backup */}
                    </div>

                    {/* কলাম ২: বুক কভার ইমেজ (w-10 h-14.5 অর্থাৎ 40px × 58px ডাইমেনশন মিলিয়ে) */}
                    <div>
                      <div className="w-10 h-14.5 rounded shadow-sm overflow-hidden bg-gray-100">
                        <Skeleton className="w-full h-full" />
                      </div>
                    </div>

                    {/* কলাম ৩: ইবুক টাইটেল ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-5/6 rounded-md" />
                    </div>

                    {/* কলাম ৪: বায়ার / ইউজার নেম ফিল্ড স্কেলিটন */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-2/3 rounded-md" />
                    </div>

                    {/* কলাম ৫: কস্ট টাইপ ব্যাজ স্কেলিটন */}
                    <div>
                      <Skeleton className="h-5 w-20 rounded-full" />
                    </div>

                    {/* কলাম ৬: ক্রিয়েশন ডেট ফিল্ড স্কেলিটন */}
                    <div>
                      <Skeleton className="h-4 w-20 rounded-md" />
                    </div>

                    {/* কলাম ৭: টোটাল অ্যামাউন্ট প্রাইস স্কেলিটন */}
                    <div>
                      <Skeleton className="h-4 w-12 rounded-md" />
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