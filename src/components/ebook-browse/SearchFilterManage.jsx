"use client";

import { FiSearch, FiArrowRight } from "react-icons/fi";

const SearchFilterManage = ({
  search, setSearch,
  genre, setGenre,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  sortBy, setSortBy
}) => {
  
  // জেনর লিস্ট ডামি ড্রপডাউন ডাটা
  const genres = ["All Ebooks", "Science Fiction", "Sci-Fi", "Classic", "Self-Help", "Romance", "Memoir", "Poetry"];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* মেইন হেডিং শিরোনাম */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight">
          Explore the Fable Library
        </h1>
        <p className="text-gray-500 mt-2 text-base max-w-xl">
          Discover a curated collection of timeless stories and contemporary masterpieces.
        </p>
      </div>

      {/* ১. সার্চ বার বার সেকশন */}
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center p-1.5 mb-6 transition-all focus-within:border-[#6D28D9]/50 focus-within:ring-2 focus-within:ring-[#6D28D9]/10">
        <div className="flex items-center flex-1 pl-4 text-gray-400">
          <FiSearch className="w-5 h-5 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, or genre..."
            className="w-full pl-3 bg-transparent text-gray-800 text-sm outline-none placeholder-gray-400"
          />
        </div>
        <button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
          Search
        </button>
      </div>

      {/* ২. ফিল্টার এবং কম্বোবক্স এরিয়া */}
      <div className="w-full bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-4">
          {/* জেনর সিলেক্টর */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Genre:</span>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
            >
              {genres.map((g, idx) => (
                <option key={idx} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* প্রাইস রেঞ্জ ইনপুট */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Price:</span>
            <div className="flex items-center bg-slate-50 border border-gray-200 rounded-xl px-2 py-1 max-w-45">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-12 bg-transparent text-center text-xs font-semibold outline-none text-gray-700 placeholder-gray-400"
              />
              <span className="text-gray-300 mx-1 text-xs">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-12 bg-transparent text-center text-xs font-semibold outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#6D28D9] text-white p-1.5 rounded-lg ml-2 hover:bg-[#5B21B6] transition-colors">
                <FiArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* সর্টিং অপশন */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-2 text-xs font-semibold text-gray-700 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <option value="Newest First">Newest First</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default SearchFilterManage;