import BookmarkManage from "@/components/dashboard/BookmarkManage";
import { bookmarkDataGet } from "@/lib/api/BookmarksData";
import { getUserSession } from "@/lib/core/session";

const WriterBookmarkPage = async () => {
  const user = await getUserSession();

  const bookmarkData = await bookmarkDataGet(user?.id) || [];
console.log(bookmarkData)
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
      <div className=" mx-auto lg:mx-0">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Bookmarks</h1>
          <p className="text-sm text-slate-500 mt-2 max-w-xl">
            Curate your personal collection of literature, research, and drafts. Access your saved items instantly across all your devices.
          </p>
        </div>

        {/* Bookmark Manager */}
        <BookmarkManage bookmarkData={bookmarkData} />
      </div>
    </div>
  );
};

export default WriterBookmarkPage;