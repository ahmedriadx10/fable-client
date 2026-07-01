import { Skeleton } from "@heroui/react";

export default function Loading() {
  // সেলস হিস্ট্রি টেবিলের জন্য ৩টি ডামি রো (Row) জেনারেট করছি
  const skeletonRows = Array.from({ length: 3 });

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      
      {/* =================================================================
          ১. হেডার এবং ইন্ট্রোডাকশন সেকশন স্কেলিটন
         ================================================================= */}
      <div className="space-y-3">
        <Skeleton className="h-9 w-72 rounded-xl" /> {/* Welcome Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-2xl rounded" /> {/* Subtitle Line 1 */}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* =================================================================
          ২. ক্রিয়েটর স্ট্যাটস কার্ড সেকশন স্কেলিটন (WriterDashboardStats)
         ================================================================= */}
      <section className="space-y-4">
        <Skeleton className="h-6 w-44 rounded-md" /> {/* Performance Overview Heading */}
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="space-y-3 flex-1">
                <Skeleton className="h-3 w-32 rounded" /> {/* Card Title Label */}
                <Skeleton className="h-8 w-16 rounded-lg" /> {/* Card Value Status */}
              </div>
              {/* আইকন বক্সের ফলব্যাক ডাইমেনশন শিফট প্রোটেকশন */}
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Skeleton className="w-6 h-6 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          ৩. রাইটার সেলস হিস্ট্রি টেবিল সেকশন স্কেলিটন (WriterSalesHistory)
         ================================================================= */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <Skeleton className="h-6 w-56 rounded-md mb-6" /> {/* Recent Book Sales Heading */}
        
        <div className="overflow-hidden border border-gray-50 rounded-2xl">
          <div className="w-full overflow-x-auto">
            <div className="min-w-187.5 w-full">
              
              {/* টেবিল হেডার সিমুলেশন */}
              <div className="grid grid-cols-[80px_2fr_1.5fr_1.5fr_1fr] bg-gray-50/70 border-b border-gray-100 p-4">
                <div className="text-gray-400 font-semibold text-xs tracking-wider">COVER</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">EBOOK TITLE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">BUYER NAME</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">PURCHASE DATE</div>
                <div className="text-gray-400 font-semibold text-xs tracking-wider">AMOUNT</div>
              </div>

              {/* টেবিল বডি ডামি রো সমূহ */}
              <div className="divide-y divide-gray-50">
                {skeletonRows.map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[80px_2fr_1.5fr_1.5fr_1fr] items-center p-4"
                  >
                    {/* Cover Image Column (45px × 65px ডাইমেনশন মিলিয়ে) */}
                    <div>
                      <div className="w-11.25 h-16.25 rounded overflow-hidden shadow-sm">
                        <Skeleton className="w-full h-full" />
                      </div>
                    </div>

                    {/* Book Name Column */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-4/5 rounded-md" />
                    </div>

                    {/* Buyer Name Column */}
                    <div className="pr-4">
                      <Skeleton className="h-4 w-2/3 rounded-md" />
                    </div>

                    {/* Purchase Date Column */}
                    <div>
                      <Skeleton className="h-4 w-20 rounded-md" />
                    </div>

                    {/* Amount Column */}
                    <div>
                      <Skeleton className="h-4 w-14 rounded-md" />
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