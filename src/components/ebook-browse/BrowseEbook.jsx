"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchFilterManage from "./SearchFilterManage";
import EbookCardsContainer from "./EbookCardsContainer";

const BrowseEbook = ({ booksData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ইউআরএল কুয়েরি থেকে ইনিশিয়াল ভ্যালু রিড করবে, না থাকলে ডিফল্ট খালি স্ট্রিং ("") হবে
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  useEffect(() => {
    const params = new URLSearchParams();

    // ১. সার্চ কুয়েরি যুক্ত করা
    if (search.trim()) {
      params.set("search", search);
    }
    
    // ২. জেনর কুয়েরি যুক্ত করা (খালি স্ট্রিং না হলেই কেবল ইউআরএল-এ সেট হবে)
    if (genre && genre.trim() !== "") {
   if(genre!=='All Ebooks'){
       params.set("genre", genre);
   }
    }
    
    // ৩. প্রাইস রেঞ্জ কুয়েরি যুক্ত করা
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    
    // ৪. সর্ট কুয়েরি যুক্ত করা (খালি স্ট্রিং না হলেই কেবল ইউআরএল-এ সেট হবে)
    if (sortBy && sortBy.trim() !== "") {
      params.set("sortBy", sortBy);
    }

    const queryString = params.toString();
    
    // কন্ডিশনাল রাউটিং: কুয়েরি থাকলে '?' সহ পুশ করবে, ক্লিয়ার হলে ক্লিন রাউটে ব্যাক করবে
    if (queryString) {
      router.push(`/browse-ebooks?${queryString}`, { scroll: false });
    } else {
      router.push(`/browse-ebooks`, { scroll: false });
    }
    
  }, [search, genre, minPrice, maxPrice, sortBy, router]);

  return (
    <section className="min-h-screen bg-slate-50/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* সার্চ এবং ফিল্টার কম্পোনেন্ট */}
        <SearchFilterManage
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* বুক কাউন্ট বার */}
        <div className="mb-6 mt-8">
          <p className="text-gray-500 font-medium text-sm">
            Showing 1-{booksData?.length || 0} of {booksData?.length || 0} books
          </p>
        </div>

        {/* ইবুক কার্ড কন্টেইনার */}
        <EbookCardsContainer booksData={booksData} />
        
      </div>
    </section>
  );
};

export default BrowseEbook;