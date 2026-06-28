import { FiBookmark } from "react-icons/fi";
import BookmarkCard from "./BookmarkCard";

const BookmarkManage = ({ bookmarkData = [] }) => {
  
  // Empty State UI
  if (bookmarkData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 border-2 border-dashed border-slate-200 rounded-2xl bg-white max-w-md mx-auto text-center mt-10">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 ring-8 ring-purple-50/50">
          <FiBookmark className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800">No Bookmarks Found</h3>
        <p className="text-sm text-slate-500 mt-1 max-w-xs">
          You haven't saved any ebooks yet. Start exploring your favorite genres and save them for later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-6">
      {bookmarkData.map((bookmark) => (
        <BookmarkCard key={bookmark._id} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default BookmarkManage;