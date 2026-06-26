"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchFilterManage from "./SearchFilterManage";
import EbookCardsContainer from "./EbookCardsContainer";

const BrowseEbook = ({ booksData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL-এ আগে থেকে কোনো কুয়েরি থাকলে তা ইনিশিয়াল স্টেট হিসেবে সেট হবে
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "All Ebooks");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "Newest First");

  // ইউজার সার্চ বা ফিল্টার চেঞ্জ করলে এই useEffect ইউআরএল কুয়েরি পুশ করবে
  useEffect(() => {
    const params = new URLSearchParams();

    if (search.trim()) params.set("search", search);
    if (genre !== "All Ebooks") params.set("genre", genre);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (sortBy !== "Newest First") params.set("sortBy", sortBy);

    const queryString = params.toString();
    
    // ব্রাউজারের হিস্ট্রি নষ্ট না করে শ্যালো রাউটিং-এর মতো ইউআরএল পুশ হবে
    router.push(`/browse-ebooks?${queryString}`, { scroll: false });
  }, [search, genre, minPrice, maxPrice, sortBy, router]);

  return (
    <section className="min-h-screen bg-slate-50/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* সার্চ এবং ফিল্টার কন্ট্রোলার সেকশন */}
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

        {/* টোটাল বুকস কাউন্ট ইন্ডিকেটর */}
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