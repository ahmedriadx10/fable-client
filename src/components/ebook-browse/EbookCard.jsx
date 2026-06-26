"use client";

import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const EbookCard = ({ book }) => {
  const numericPrice = parseFloat(book?.price) || 0;

  const handleAddToCart = (e) => {
    e.stopPropagation(); // কার্ডের ডিটেইল রাউট ট্র্রিগার হওয়া রুখতে
    console.log(`Added to cart: ${book?.title}`);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer">
      
      {/* কভার ইমেজ র‍্যাপার (অ্যাসপেক্ট রেশিও পারফেক্ট ৩:৪ বুক কভার স্ট্যান্ডার্ড) */}
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

      {/* কন্টেন্ট ডিটেইলস এরিয়া */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* জেনর বা ক্যাটাগরি */}
          <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block mb-1">
            {book?.genre || "Fiction"}
          </span>
          
          {/* বুক টাইটেল */}
          <h4 className="font-bold text-gray-900 text-sm line-clamp-1 md:line-clamp-0 group-hover:text-[#6D28D9] transition-colors" title={book?.title}>
            {book?.title}
          </h4>
          
          {/* লেখকের নাম */}
          <p className="text-xs text-gray-400 mt-0.5 font-medium">
            {book?.authorName || "Unknown Author"}
          </p>
        </div>

        {/* প্রাইস এবং কার্ট বাটন বটম লেভেল */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <span className="font-extrabold text-gray-900 text-sm">
            {numericPrice === 0 ? "Free" : `$${numericPrice.toFixed(2)}`}
          </span>
          
          {/* কাস্টম শপিং কার্ট বাটন */}
          <button
            onClick={handleAddToCart}
            className="w-8 h-8 rounded-xl bg-[#FAF5FF] text-[#6D28D9] flex items-center justify-center border border-[#F3E8FF] transition-colors hover:bg-[#6D28D9] hover:text-white hover:border-[#6D28D9] active:scale-90"
            title="Add to Cart"
          >
            <HiOutlineShoppingBag className="w-4 h-4 stroke-2" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default EbookCard;