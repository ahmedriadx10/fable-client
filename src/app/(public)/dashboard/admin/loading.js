import { Skeleton } from "@heroui/react";

export default function Loading() {
  // ডোনাট চার্টের নিচে পপুলার জেনরা লিস্টের জন্য ৫টি ডামি রো রেন্ডার করব
  const dummyGenreRows = Array.from({ length: 5 });

  return (
    <section className="p-6 min-h-screen space-y-6 bg-gray-50/20">
      
      {/* =================================================================
          ১. হেডার সেকশন স্কেলিটন (Header & Title)
         ================================================================= */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-56 rounded-xl" /> {/* Analytics Overview */}
        <Skeleton className="h-4 w-full max-w-sm rounded" /> {/* Subtitle */}
      </div>

      {/* =================================================================
          ২. স্ট্যাটস কার্ড স্কেলিটন (AdminDashboardStats)
         ================================================================= */}
      {/* ফিক্সড h-40 এবং ৪-কলাম লেআউট ব্রেকপয়েন্ট হুবহু মেইন ফাইলের মতোই রাখা হয়েছে */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <div 
            key={id} 
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-40"
          >
            {/* কার্ড হেডার: আইকন এবং ব্যাজ */}
            <div className="flex justify-between items-center w-full">
              <Skeleton className="w-10 h-10 rounded-xl" /> {/* Icon box fallback */}
              <Skeleton className="w-12 h-6 rounded-full" /> {/* Badge fallback */}
            </div>
            
            {/* কার্ড মেটা ডেটা: টাইটেল ও কাউন্টার */}
            <div className="space-y-2 w-full">
              <Skeleton className="h-3 w-24 rounded" /> {/* Card Label */}
              <Skeleton className="h-7 w-20 rounded-lg" /> {/* Value Counter */}
            </div>
          </div>
        ))}
      </div>

      {/* =================================================================
          ৩. চার্ট ও অ্যানালিটিক্স সেকশন স্কেলিটন (AdminDashboardAnalytics)
         ================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 📈 বাম পাশের এরিয়া চার্ট কন্টেইনার (lg:col-span-2) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-2">
              <Skeleton className="h-5 w-56 rounded-md" /> {/* Monthly Sales Title */}
              <Skeleton className="h-3 w-64 rounded" /> {/* Subtitle Text */}
            </div>
            <Skeleton className="h-8 w-28 rounded-lg" /> {/* Last 6 Months Filter Dropdown */}
          </div>

          {/* ডামি চার্ট এরিয়া (h-72 বজায় রাখা হয়েছে) */}
          <div className="w-full h-72 bg-slate-50/50 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden border border-slate-100/60">
            {/* চার্ট লাইনের ডামি অ্যানিমেটেড এফেক্ট তৈরির জন্য শিমার কঙ্কাল */}
            <Skeleton className="w-full h-full opacity-40 rounded-lg" />
            
            {/* ডামি X এবং Y অ্যাক্সিস গ্রিড লাইনের সিমুলেশন */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none opacity-20">
              <div className="border-b border-slate-300 w-full" />
              <div className="border-b border-slate-300 w-full" />
              <div className="border-b border-slate-300 w-full" />
            </div>
          </div>
        </div>

        {/* 🍩 ডান পাশের ডোনাট চার্ট কন্টেইনার */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="space-y-2">
            <Skeleton className="h-5 w-36 rounded-md" /> {/* Popular Genres Title */}
            <Skeleton className="h-3 w-48 rounded" /> {/* Subtitle */}
          </div>

          {/* ডামি বৃত্তাকার ডোনাট চার্ট এরিয়া (h-52 ডাইমেনশন ধরে) */}
          <div className="w-full h-52 flex justify-center items-center my-2">
            <div className="w-40 h-40 rounded-full border-18 border-slate-100 flex items-center justify-center relative animate-pulse">
              {/* ইনার সার্কেল ফাঁকা রেখে ডোনাট এফেক্ট স্টেবল রাখা হয়েছে */}
              <div className="absolute text-slate-300 text-xs font-semibold">Loading...</div>
            </div>
          </div>

          {/* কাস্টম লিজেন্ড / জেনরা লিস্ট স্কেলিটন (max-h-40 রেঞ্জ মিলিয়ে) */}
          <div className="space-y-3 max-h-40 overflow-hidden pt-2">
            {dummyGenreRows.map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Skeleton className="w-3 h-3 rounded-full shrink-0" /> {/* Color Bullet dot */}
                  <Skeleton className="h-4 w-24 rounded" /> {/* Genre text placeholder */}
                </div>
                <Skeleton className="h-4 w-8 rounded" /> {/* Percentage label */}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}