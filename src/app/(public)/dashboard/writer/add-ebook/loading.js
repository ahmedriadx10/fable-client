import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* =================================================================
            ১. হেডার সেকশন স্কেলিটন (Header Section)
           ================================================================= */}
        <div className="mb-8 flex flex-col gap-2">
          <Skeleton className="h-9 w-56 rounded-xl" /> {/* Page Title */}
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-full max-w-2xl rounded" /> {/* Subtitle Description */}
          </div>
        </div>

        {/* =================================================================
            ২. মেইন ফরম এরিয়া স্কেলিটন (Main Form Layout mapping)
           ================================================================= */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* লেফট সাইড: কভার ইমেজ আপলোড জোন স্কেলিটন */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Skeleton className="h-4 w-24 rounded" /> {/* Cover Image Label */}
            
            {/* ডামি আপলোড বক্স স্কেলিটন (aspect-3/4 রেশিও স্টেবল রাখার জন্য) */}
            <div className="w-full aspect-3/4 border-2 border-dashed border-gray-100 rounded-xl overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>

            {/* ডামি টিপস বক্স স্কেলিটন */}
            <Skeleton className="w-full h-10 rounded-xl" />
          </div>

          {/* রাইট সাইড: ইনপুট ফিল্ড সমূহের স্কেলিটন (md:col-span-2) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            
            {/* Ebook Title Input Field */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-24 rounded" /> {/* Input Label */}
              <Skeleton className="h-10 w-full rounded-md" /> {/* Title Input field replacement */}
            </div>

            {/* Short Summary Textarea Field */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-28 rounded" /> {/* Textarea Label */}
              <Skeleton className="h-24 w-full rounded-xl" /> {/* Summary Textbox line layout height */}
            </div>

            {/* Full Content Textarea Field */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-24 rounded" /> {/* Textarea Label */}
              <Skeleton className="h-40 w-full rounded-xl" /> {/* Manuscript Big Textbox height */}
            </div>

            {/* Genre and Price Grid Field (sm:grid-cols-2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Genre Input */}
              <div className="flex flex-col gap-3">
                <Skeleton className="h-4 w-16 rounded" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              {/* Price Input */}
              <div className="flex flex-col gap-3">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>

            {/* Publish Button */}
            <div className="mt-4">
              <Skeleton className="w-full h-10 rounded-lg" /> {/* Button box height replacement */}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}