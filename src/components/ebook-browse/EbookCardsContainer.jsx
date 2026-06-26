"use client";

import EbookCard from "./EbookCard";

const EbookCardsContainer = ({ booksData = [] }) => {
  
  if (booksData.length === 0) {
    return (
      <div className="w-full text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-gray-500 font-medium">No books matched your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {booksData.map((book) => (
        <EbookCard key={book._id?.$oid || book._id} book={book} />
      ))}
    </div>
  );
};

export default EbookCardsContainer;