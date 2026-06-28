"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiBookmark, FiLock, FiCheckCircle } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { bookmarkEbook } from "@/lib/actions/Bookmark";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookDetails = ({ book ,user}) => {
  const {
    title,
    summary,
    content, 
    fullContent,
    genre,
    price,
    coverImage,
    authorId,
    authorName,
    createdAt,
    purchased,
    bookmarked,
    hasAccess,
    isWriter,
    _id
  } = book;

  const router=useRouter()
  // ডেট ফরম্যাট করা
  const formattedDate = createdAt?.$date 
    ? new Date(createdAt.$date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "Recent";

  // স্ট্রাইপ বা পেমেন্ট হ্যান্ডলার
  const handlePurchase = () => {
    if (isWriter || purchased) return;
    console.log("Redirecting to Stripe Checkout for:", title);
  };

  const handleBookmark = async() => {
    if (isWriter) return;
if(!user){
  router.push('/login')
}

if(bookmarked) return

    console.log("Toggling bookmark status...");


    const bookmarkData={
title,
genre,
price,authorId,
authorName,
userId:user?.id,
bookId:_id

    }
const result=await bookmarkEbook(bookmarkData,_id)

    
if(result?.insertedId){
  toast.success('Bookmarked succesfully')
}



  };

  return (
    <div className="space-y-10">
      {/* টপ সেকশন: ইমেজ এবং বুক ইনফো */}
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* ইবুক কভার ইমেজ */}
        <div className="relative w-full md:w-[320px] h-112.5 shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, 320px"
            priority
            className="object-cover"
          />
        </div>

        {/* বুক ডিটেইলস টেক্সট */}
        <div className="flex flex-col justify-between flex-1 space-y-6">
          <div className="space-y-4">
            {/* জেনর এবং ডেট */}
            <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md border border-purple-100">
                {genre}
              </span>
              <span>•</span>
              <span>Published {formattedDate}</span>
            </div>

            {/* টাইটেল */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* রাইটার লিংক */}
            <p className="text-gray-600">
              by{" "}
              <Link
                href={`/writers/${authorId}`}
                className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                {authorName}
                <FiCheckCircle className="w-4 h-4 text-purple-600 fill-purple-100" />
              </Link>
            </p>

            {/* প্রাইস */}
            <div className="text-2xl font-bold text-gray-900">${price}</div>

            {/* সামারি/ডেসক্রিপশন */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
              {summary}
            </p>
          </div>

          {/* অ্যাকশন বাটন গ্রুপ */}
          <div className="flex items-center gap-3 pt-4">
            {/* পারচেজ বাটন */}
            <button
              onClick={handlePurchase}
              disabled={isWriter}
              className={`flex cursor-pointer items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl transition-all duration-200 ${
                purchased
                  ? "bg-emerald-600 text-white cursor-default"
                  : isWriter
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-(--color-primary) hover:bg-purple-800 text-white active:scale-95 shadow-md shadow-purple-100"
              }`}
            >
              {purchased ? (
                <>Already Purchased</>
              ) : isWriter ? (
                <>Your Ebook</>
              ) : (
                <>
                  Buy Now <FiShoppingCart className="w-5 h-5" />
                </>
              )}
            </button>

            {/* বুকমার্ক বাটন */}
            <button
              onClick={handleBookmark}
              disabled={isWriter}
              className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 ${
                isWriter
                  ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                  : bookmarked
                  ? "bg-purple-50 border-purple-200 text-(--color-primary)"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95"
              }`}
              title={isWriter ? "You cannot bookmark your own book" : "Bookmark Ebook"}
            >
              {bookmarked ? <FaBookmark className="w-5 h-5" /> : <FiBookmark className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* বটম সেকশন: কন্ডিশনাল কন্টেন্ট এরিয়া (ভার্টিক্যাল স্ক্রলবার সহ) */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        {hasAccess ? (
          // যদি অ্যাক্সেস থাকে (পারচেজড অথবা রাইটার নিজে)
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              Full Book Content
            </h2>
            
            {/* 📜 কন্টেন্ট এরিয়াতে max-h এবং overflow-y-auto দেওয়া হয়েছে */}
            <div className="max-h-137.5 overflow-y-auto pr-4 text-gray-700 whitespace-pre-line leading-relaxed scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
              {fullContent || content}
            </div>
          </div>
        ) : (
          // যদি অ্যাক্সেস না থাকে (লকড স্টেট)
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-4">
              <FiLock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Full content available after purchase
            </h3>
            <p className="text-gray-500 text-sm max-w-md mb-4">
              Unlock the complete journey by purchasing this ebook. Get instant access to all pages and chapters.
            </p>
            {/* ডামি কঙ্কাল/স্কেলেটন ইফেক্ট লাইনের জন্য */}
            <div className="w-full max-w-xs space-y-2 opacity-40">
              <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2 bg-gray-200 rounded-full w-5/6 mx-auto"></div>
              <div className="h-2 bg-gray-200 rounded-full w-4/6 mx-auto"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;