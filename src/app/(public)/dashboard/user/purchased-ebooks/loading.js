import { Skeleton } from "@heroui/react";

export default function Loading() {
  // টেবিলে ইনিশিয়াল রো (Row) হিসেবে ৪টি ডামি রো রেন্ডার করব
  const skeletonRows = Array.from({ length: 4 });

  return (
    <div className="p-6  mx-auto lg:mx-0">
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header Section)
         ================================================================= */}
      <div className="mb-6 flex flex-col gap-2">
        <Skeleton className="h-9 w-64 rounded-xl" /> {/* Page Title */}
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-3xl rounded" /> {/* Subtitle Line 1 */}
        </div>
      </div>

      {/* =================================================================
          ২. টেবিল লেআউট স্কেলিটন (Table Structure mapping HeroUI)
         ================================================================= */}
      <div className="overflow-hidden border border-gray-100 rounded-2xl bg-white shadow-sm">
        {/* টেবিল রেসপনসিভ স্ক্রল কন্টেইনার সিমুলেশন */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-187.5 w-full">
            
            {/* টেবিল হেডার */}
            <div className="grid grid-cols-[100px_1fr_120px_140px] bg-gray-50/70 border-b border-gray-100 p-4">
              <div className="text-gray-400 font-semibold text-xs tracking-wider">COVER</div>
              <div className="text-gray-400 font-semibold text-xs tracking-wider">EBOOK TITLE</div>
              <div className="text-gray-400 font-semibold text-xs tracking-wider">PRICE</div>
              <div className="text-gray-400 font-semibold text-xs tracking-wider text-center">ACTIONS</div>
            </div>

            {/* টেবিল বডি (ডামি রো সমূহ) */}
            <div className="divide-y divide-gray-50">
              {skeletonRows.map((_, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-[100px_1fr_120px_140px] items-center p-4"
                >
                  {/* Cover Image Column (w-[45px] h-[65px] মিলিয়ে) */}
                  <div>
                    <div className="w-11.25 h-16.25 rounded overflow-hidden shadow-sm">
                      <Skeleton className="w-full h-full" />
                    </div>
                  </div>

                  {/* Book Title Column */}
                  <div className="pr-6">
                    <Skeleton className="h-5 w-2/3 rounded-md" />
                  </div>

                  {/* Price Column */}
                  <div>
                    <Skeleton className="h-5 w-14 rounded-md" />
                  </div>

                  {/* Action Button Column (বামে-ডানে মার্জিন অটো করে সেন্টারে আনা হয়েছে) */}
                  <div className="flex justify-center">
                    <Skeleton className="h-8 w-20 rounded" /> {/* Read Button skeleton */}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}