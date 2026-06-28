import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

const EmptyBook = ({ message = "No book details found." }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mb-4">
        <FiBookOpen className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{message}</h2>
      <p className="text-gray-500 max-w-sm mb-6">
        The ebook you are trying to view might have been removed, or the link is broken.
      </p>
      <Link
        href="/ebooks"
        className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-xl transition-colors shadow-sm"
      >
        Browse Other Ebooks
      </Link>
    </div>
  );
};

export default EmptyBook;