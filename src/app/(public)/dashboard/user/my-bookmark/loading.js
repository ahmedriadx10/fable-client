import { Skeleton } from "@heroui/react";

export default function Loading() {
  // ড্যাশবোর্ডে ইনিশিয়াল ভিউ হিসেবে ৫টি কার্ডের স্কেলিটন জেনারেট করছি
  const skeletonCards = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className=" mx-auto lg:mx-0">
        
        {/* =================================================================
            ১. হেডার সেকশন স্কেলিটন (Header Section)
           ================================================================= */}
        <div className="mb-8 flex flex-col gap-3">
          <Skeleton className="h-9 w-48 rounded-xl" /> {/* Page Title */}
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-full max-w-xl rounded" /> {/* Subtitle Line 1 */}
            <Skeleton className="h-4 w-3/4 max-w-md rounded" /> {/* Subtitle Line 2 */}
          </div>
        </div>

        {/* =================================================================
            ২. বুকমার্ক কার্ড গ্রিড স্কেলিটন (BookmarkManage & BookmarkCard)
           ================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-5  gap-6">
          {skeletonCards.map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col h-full"
            >
              {/* বুক কভার ইমেজ স্কেলিটন (aspect-3/4 মিলিয়ে) */}
              <div className="relative aspect-3/4 w-full bg-slate-100">
                <Skeleton className="w-full h-full" />
                
                {/* ডামি জেনর ট্যাগ ওভারলে */}
                <div className="absolute top-3 left-3">
                  <Skeleton className="h-6 w-16 rounded-md" />
                </div>
              </div>

              {/* বুক ডিটেইলস এরিয়া স্কেলিটন */}
              <div className="p-4 flex flex-col grow gap-4">
                <div className="space-y-2">
                  {/* টাইটেল এবং প্রাইস রো */}
                  <div className="flex justify-between items-center gap-4">
                    <Skeleton className="h-5 flex-1 rounded-md" /> {/* Title */}
                    <Skeleton className="h-5 w-10 rounded-md shrink-0" /> {/* Price */}
                  </div>
                  
                  {/* অথর নেম স্কেলিটন */}
                  <Skeleton className="h-3 w-24 rounded" />
                </div>

                {/* অ্যাকশন বাটনস সেকশন (নিচে পুশ করা mt-auto দিয়ে) */}
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <Skeleton className="h-9.5 grow rounded-xl" /> {/* View Details Button */}
                  <Skeleton className="h-9.5 w-9.5 rounded-xl shrink-0" /> {/* Delete Button */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}