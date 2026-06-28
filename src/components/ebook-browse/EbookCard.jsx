"use client";

import Image from "next/image";
import Link from "next/link";

const EbookCard = ({ book }) => {
  const numericPrice = parseFloat(book?.price) || 0;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer">
      
      {/* কভার ইমেজ র‍্যাপার */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-50 border-b border-gray-50">
        <Image
          src={book?.coverImage || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"}
          alt={`${book?.title || "Book"} cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 250px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* কন্টেন্ট ডিটেইলস এরিয়া */}
      <div className="p-4 flex flex-col flex-1 gap-4">
        
        {/* টেক্সট ইনফো এরিয়া */}
        <div className="flex-1">
          <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block mb-1">
            {book?.genre || "Fiction"}
          </span>
          
          <h4 className="font-bold text-gray-900 text-sm line-clamp-1 md:line-clamp-0 group-hover:text-[#6D28D9] transition-colors" title={book?.title}>
            {book?.title}
          </h4>
          
          <p className="text-xs text-gray-400 mt-0.5 font-medium">
            {book?.authorName || "Unknown Author"}
          </p>
        </div>

        {/* বটম সেকশন */}
        <div className="flex flex-col gap-3 pt-2 border-t border-gray-50">
          
          {/* প্রাইস রো */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">Price</span>
            <span className="font-extrabold text-gray-900 text-base">
              {numericPrice === 0 ? "Free" : `$${numericPrice.toFixed(2)}`}
            </span>
          </div>
          
          {/* 🚀 ২. নতুন আল্ট্রা আই-ক্যাচিং ভিউ ডিটেইলস বাটন */}
          <Link
            href={`/browse-ebooks/${book?._id || book?.id}`}
            // onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-linear-to-r from-[#7C3AED] to-[#6D28D9] py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden group/btn shadow-[0_4px_12px_rgba(109,40,217,0.2)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.35)] hover:from-[#6D28D9] hover:to-[#5B21B6] active:scale-[0.98] block"
          >
            <span>View Details</span>
            {/* ডাইনামিক অ্যারো যা হোভার করলে ডানদিকে স্লাইড করবে */}
            <span className="transition-transform duration-300 translate-x-0 group-hover/btn:translate-x-1 font-mono text-sm leading-none">
              →
            </span>
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default EbookCard;