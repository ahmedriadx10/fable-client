"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchFilterManage from "./SearchFilterManage";
import EbookCardsContainer from "./EbookCardsContainer";
import {Pagination} from "@heroui/react";
const BrowseEbook = ({ booksData,availableGenres,totalBooks }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ইউআরএল কুয়েরি থেকে ইনিশিয়াল ভ্যালু রিড করবে, না থাকলে ডিফল্ট খালি স্ট্রিং ("") হবে
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [genre, setGenre] = useState(searchParams.get("genre") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

//pagination related 
 const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

 const totalItems=totalBooks
 const perPage=8
  const totalPages = Math.ceil(totalItems/perPage);

 const getPageNumbers = () => {

  if(totalPages <=1){
    return [1]
  }
    const pages= [];
    pages.push(1);
    if (page > 3) {
      pages.push("ellipsis");
    }
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }
    pages.push(totalPages);
    return pages;
  };

  const startItem = (page - 1) * perPage + 1;
  const endItem = Math.min(page * perPage, totalItems);

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

    // page query add 

    if(page && page>1){
      params.set('page',page)
    }
console.log('page update test',page)

    const queryString = params.toString();
    
    // কন্ডিশনাল রাউটিং: কুয়েরি থাকলে '?' সহ পুশ করবে, ক্লিয়ার হলে ক্লিন রাউটে ব্যাক করবে
    if (queryString) {
      router.push(`/browse-ebooks?${queryString}`, { scroll: false });
    } else {
      router.push(`/browse-ebooks`, { scroll: false });
    }
    
  }, [search, genre, minPrice, maxPrice, sortBy, router,page]);

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
          availableGenres={availableGenres}
          page={page}
          setPage={setPage}
        />

        {/* বুক কাউন্ট বার */}
        <div className="mb-6 mt-8">
          {/* <p className="text-gray-500 font-medium text-sm">
            Showing 1-{booksData?.length || 0} of {booksData?.length || 0} books
          </p> */}
        </div>

        {/* ইবুক কার্ড কন্টেইনার */}
        <EbookCardsContainer booksData={booksData} />
        

{/* pagination is here */}

{totalItems  && <div className='mt-5' >
   <Pagination className="justify-between">
         <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}
          <Pagination.Item>
            <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
</div>}
      </div>
    </section>
  );
};

export default BrowseEbook;