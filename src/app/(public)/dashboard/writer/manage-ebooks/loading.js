import { Skeleton } from "@heroui/react";

export default function Loading() {
  // টেবিলে ইনিশিয়াল রো (Row) হিসেবে ৪টি ডামী বুক আইটেম জেনারেট করছি
  const skeletonRows = Array.from({ length: 4 });

  return (
    <div className="min-h-screen py-5 px-4 w-full">
      <div>
        {/* =================================================================
            ১. হেডার সেকশন স্কেলিটন (Header Section)
           ================================================================= */}
        <div className="mb-8 flex flex-col gap-2">
          <Skeleton className="h-9 w-52 rounded-xl" /> {/* Page Title */}
          <Skeleton className="h-4 w-full max-w-md rounded" /> {/* Subtitle Description */}
        </div>

        {/* =================================================================
            ২. ইবুক ম্যানেজমেন্ট টেবিল স্কেলিটন (Table Structure mapping)
           ================================================================= */}
        <div className="overflow-hidden border border-gray-100 rounded-2xl bg-white shadow-sm">
          <div className="w-full overflow-x-auto">
            <div className="w-full min-w-150">
              
              {/* টেবিল হেডার সিমুলেশন */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] bg-slate-50/70 border-b border-gray-100 p-4">
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase">Book Title</div>
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase">Price</div>
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase">Status</div>
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase text-right pr-8">Actions</div>
              </div>

              {/* টেবিল বডি ডামি আইটেম সমূহ */}
              <div className="divide-y divide-gray-100">
                {skeletonRows.map((_, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[2fr_1fr_1fr_1.2fr] items-center p-4"
                  >
                    {/* কলাম ১: বুক টাইটেল ও কভার ইমেজ প্রিভিউ (w-12 aspect-3/4 মিলিয়ে) */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 aspect-3/4 rounded shadow-sm overflow-hidden shrink-0">
                        <Skeleton className="w-full h-full" />
                      </div>
                      <div className="flex flex-col gap-2 w-full pr-4">
                        <Skeleton className="h-4 w-3/4 rounded" /> {/* Main Title Line */}
                        <Skeleton className="h-3 w-1/3 rounded sm:hidden" /> {/* Mobile Genre Backup */}
                      </div>
                    </div>

                    {/* কলাম ২: প্রাইস স্কেলিটন */}
                    <div>
                      <Skeleton className="h-5 w-16 rounded-md" />
                    </div>

                    {/* কলাম ৩: স্ট্যাটাস ব্যাজ স্কেলিটন */}
                    <div>
                      <Skeleton className="h-6 w-24 rounded-full" />
                    </div>

                    {/* কলাম ৪: অ্যাকশন কন্ট্রোলস (Toggle Switch, Edit, Delete) */}
                    <div className="flex items-center justify-end gap-4 sm:gap-6 pr-8">
                      <Skeleton className="w-11 h-6 rounded-full shrink-0" /> {/* Custom Toggle Switch backup */}
                      <Skeleton className="w-4 h-4 rounded shrink-0" /> {/* Edit Icon box */}
                      <Skeleton className="w-5 h-5 rounded shrink-0" /> {/* Delete Icon box */}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}