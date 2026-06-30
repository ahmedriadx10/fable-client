"use client";

import { FiSearch, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { Select, ListBox } from "@heroui/react";

const SearchFilterManage = ({
  search, setSearch,
  genre, setGenre,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  sortBy, setSortBy,availableGenres
}) => {
  
  const genres = [{genre:'All Ebooks'},...availableGenres,] || [{genre:"All Ebooks"}, {genre:"Science Fiction"},{genre:'Fantasy'}, {genre:"Sci-Fi"}, {genre:"Classic"}, {genre:"Self-Help"}, {genre:"Romance"}, {genre:"Memoir"}, {genre:"Poetry"}];
  
  const sortOptions = [
    { id: "Nf", label: "Newest First" },
    { id: "Lth", label: "Price: Low to High" },
    { id: "Htl", label: "Price: High to Low" }
  ];

  // ফিল্টার অ্যাক্টিভ চেক (স্টেট খালি না থাকলে ক্লিয়ার বাটন আসবে)
  const isFilterActive = 
    search.trim() !== "" || 
    genre !== "" || 
    minPrice !== "" || 
    maxPrice !== "" || 
    sortBy !== "";

  // এক ক্লিকে সব স্টেট খালি স্ট্রিং করার ম্যাজিক ফাংশন
  const handleClearFilters = () => {
    setSearch("");
    setGenre("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* শিরোনাম */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight">
          Explore the Fable Library
        </h1>
        <p className="text-gray-500 mt-2 text-base max-w-xl">
          Discover a curated collection of timeless stories and contemporary masterpieces.
        </p>
      </div>

      {/* ১. সার্চ বার */}
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

      {/* ২. ফিল্টার এরিয়া */}
      <div className="w-full bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-6">
          
          {/* Genre Select (স্যাম্পল কোড থেকে ইন্সপায়ার্ড) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase shrink-0">Genre:</span>
            
            <Select 
              selectedKey={genre} 
              onSelectionChange={(key) => setGenre(key)}
            >
              <Select.Trigger className="w-40 flex items-center justify-between bg-slate-50 text-gray-700 border border-gray-200 rounded-xl py-2 px-3 text-xs font-semibold hover:border-gray-300 min-h-9 transition-all">
                <Select.Value>
                  {genre === "" ? "Select a genre" : genre}
                </Select.Value>
                <Select.Indicator>
                  <FiChevronDown className="w-3 h-3 text-gray-400" />
                </Select.Indicator>
              </Select.Trigger>
              
              <Select.Popover className="bg-white border border-gray-100 rounded-xl shadow-lg mt-1 overflow-hidden z-50 p-1">
                <ListBox className="p-0">
                  {genres.map((g) => (
                    <ListBox.Item 
                      key={g.genre} 
                      id={g.genre} 
                      className="text-xs font-medium text-gray-700 hover:bg-[#6D28D9] hover:text-white rounded-lg px-3 py-2 cursor-pointer transition-colors"
                    >
                      <span>{g.genre}</span>
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* প্রাইস রেঞ্জ */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Price:</span>
            <div className="flex items-center bg-slate-50 border border-gray-200 rounded-xl px-2 py-1 max-w-45 min-h-9">
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

        {/* Sort By Select (স্যাম্পল কোড থেকে ইন্সপায়ার্ড) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 tracking-wider uppercase shrink-0">Sort By:</span>
            
            <Select 
              selectedKey={sortBy} 
              onSelectionChange={(key) => setSortBy(key)}
            >
              <Select.Trigger className="w-44 flex items-center justify-between bg-slate-50 text-gray-700 border border-gray-200 rounded-xl py-2 px-4 text-xs font-semibold hover:border-gray-300 min-h-9 transition-all">
                <Select.Value>
                  {sortBy === "" ? "Select an option" : sortOptions.find(opt => opt.id === sortBy)?.label}
                </Select.Value>
                <Select.Indicator>
                  <FiChevronDown className="w-3 h-3 text-gray-400" />
                </Select.Indicator>
              </Select.Trigger>
              
              <Select.Popover className="bg-white border border-gray-100 rounded-xl shadow-lg mt-1 overflow-hidden z-50 p-1">
                <ListBox className="p-0">
                  {sortOptions.map((opt) => (
                    <ListBox.Item 
                      key={opt.id} 
                      id={opt.id} 
                      className="text-xs font-medium text-gray-700 hover:bg-[#6D28D9] hover:text-white rounded-lg px-3 py-2 cursor-pointer transition-colors"
                    >
                      <span>{opt.label}</span>
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* ক্লিয়ার ফিল্টার বাটন */}
          {isFilterActive && (
            <button
              onClick={handleClearFilters}
              className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100/70 px-3 py-2 rounded-xl border border-red-100 cursor-pointer h-9 flex items-center shadow-sm whitespace-nowrap"
            >
              Clear Filters
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchFilterManage;