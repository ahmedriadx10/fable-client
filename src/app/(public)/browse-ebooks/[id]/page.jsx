import BookDetails from "@/components/ebook-browse/BookDetails";
import EmptyBook from "@/components/ebook-browse/EmptyBook";
import { getBookDetails } from "@/lib/api/BookDetails";


const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const response = await getBookDetails(id);





  // যদি API সাকসেস না হয় বা বুক ডেটা না থাকে
  if (!response || !response.success || !response.data) {
    return <EmptyBook message="Sorry,No book details found !" />;
  }

  const bookData = response.data;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <BookDetails book={bookData} />
      </div>
    </div>
  );
};

export default BookDetailsPage;