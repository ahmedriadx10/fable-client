import { Skeleton } from "@heroui/react";

export default function Loading() {
  // যেহেতু প্রতি পেজে ৮টা করে বই দেখাবে (perPage = 8), তাই ৮টি স্কেলিটন কার্ড রেন্ডার করব
  const skeletonCards = Array.from({ length: 8 });

  return (
    <section className="min-h-screen bg-slate-50/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* =================================================================
            ১. সার্চ এবং ফিল্টার এরিয়া স্কেলিটন (SearchFilterManage)
           ================================================================= */}
        <div className="w-full flex flex-col items-center">
          {/* শিরোনাম ও সাবটাইটেল */}
          <div className="text-center mb-8 flex flex-col items-center gap-3">
            <Skeleton className="h-10 w-64 rounded-xl" />
            <Skeleton className="h-5 w-96 max-w-xs sm:max-w-xl rounded-lg" />
          </div>

          {/* সার্চ বার */}
          <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 p-1.5 mb-6 flex items-center justify-between h-13.5">
            <Skeleton className="h-5 w-48 ml-4 rounded-lg" />
            <Skeleton className="h-10 w-24 rounded-xl" />
          </div>

          {/* ফিল্টার বার */}
          <div className="w-full bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {/* Genre Select */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-12 rounded" />
                <Skeleton className="h-9 w-40 rounded-xl" />
              </div>
              {/* Price Range */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-10 rounded" />
                <Skeleton className="h-9 w-44 rounded-xl" />
              </div>
            </div>
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-14 rounded" />
              <Skeleton className="h-9 w-44 rounded-xl" />
            </div>
          </div>
        </div>

        {/* স্পেসার */}
        <div className="mb-6 mt-8"></div>

        {/* =================================================================
            ২. ইবুক কার্ড গ্রিড স্কেলিটন (EbookCardsContainer & EbookCard)
           ================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-6">
          {skeletonCards.map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col h-full"
            >
              {/* কভার ইমেজ র‍্যাপার (aspect-3/4 মিলিয়ে) */}
              <div className="relative aspect-3/4 w-full bg-slate-50 border-b border-gray-50">
                <Skeleton className="w-full h-full" />
              </div>

              {/* কন্টেন্ট ডিটেইলস এরিয়া */}
              <div className="p-4 flex flex-col flex-1 gap-4">
                {/* টেক্সট ইনফো এরিয়া */}
                <div className="flex-1 flex flex-col gap-2">
                  {/* Genre Tag */}
                  <Skeleton className="h-3 w-12 rounded" />
                  {/* Title */}
                  <Skeleton className="h-4 w-full rounded" />
                  {/* Author */}
                  <Skeleton className="h-3 w-24 rounded" />
                </div>

                {/* বটম সেকশন */}
                <div className="flex flex-col gap-3 pt-2 border-t border-gray-50">
                  {/* প্রাইস রো */}
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-8 rounded" />
                    <Skeleton className="h-5 w-12 rounded" />
                  </div>
                  {/* View Details Button */}
                  <Skeleton className="w-full h-9.5 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =================================================================
            ৩. পেজিনেশন স্কেলিটন (Pagination)
           ================================================================= */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          {/* Pagination Summary */}
          <Skeleton className="h-4 w-48 rounded" />
          {/* Pagination Controls */}
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20 rounded-lg" />
            <Skeleton className="h-9 w-9 rounded-lg" />
            <Skeleton className="h-9 w-9 rounded-lg" />
            <Skeleton className="h-9 w-20 rounded-lg" />
          </div>
        </div>

      </div>
    </section>
  );
}