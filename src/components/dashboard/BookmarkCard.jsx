'use client'
import { deleteTheBookmark } from "@/lib/actions/DeleteBookmark";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiExternalLink } from "react-icons/fi";

const BookmarkCard = ({ bookmark }) => {
  const { title, genre, price, authorName, bookId, coverImage,_id } = bookmark;

  // coverImage thakle seta dekhabe, na thakle akta fallback placeholder kaj korbe
  const finalCover = coverImage || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop";

  const handleDelete = async() => {

const result=await deleteTheBookmark(_id)

if(deletedCount>0){
  toast.success('Bookmark delete successfull')
}

  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
      {/* Book Cover Image */}
      <div className="relative aspect-3/4 w-full bg-slate-100 overflow-hidden">
        <Image
          src={finalCover}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        
        {/* Genre Tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-purple-700 px-2.5 py-1 rounded-md shadow-sm">
          {genre}
        </span>
      </div>

      {/* Book Details */}
      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-bold text-slate-800 text-base line-clamp-1 group-hover:text-purple-700 transition-colors">
            {title}
          </h3>
          <span className="text-sm font-extrabold text-purple-600 shrink-0">
            ${price}
          </span>
        </div>
        
        <p className="text-xs text-slate-500 mb-4">By {authorName}</p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <Link
            href={`/browse-ebooks/${bookId}`}
            className="grow inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-sm shadow-purple-200"
          >
            <span>View Details</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </Link>
          
          <button
            onClick={handleDelete}
            title="Remove Bookmark"
            className="p-2.5 text-slate-400 cursor-pointer hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-slate-200 hover:border-rose-100 transition-all"
            aria-label="Delete bookmark"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;