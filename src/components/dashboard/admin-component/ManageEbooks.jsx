'use client'
import { Table } from "@heroui/react";
import Image from "next/image";
import { FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { deleteWriterBookByAdmin } from "@/lib/actions/AdminBookDelete";
import { bookStatusUpdateByAdmin } from "@/lib/actions/AdminBookStatusUpdate";

const ManageEbooks = ({ ebooksData }) => {


  // Safe fallback to prevent rendering crashes if ebooksData is empty or loading
  const validEbooksData = ebooksData || [];

  // Function to handle status toggles (Publish / Unpublish)
  const handleToggleStatus =async (id, currentStatus) => {
    const nextStatus = currentStatus === "published" ? "unpublished" : "published";
    // Place your server action/API handler call here later

const result=await bookStatusUpdateByAdmin(id,{status:nextStatus})

if(result?.modifiedCount>0){

  return toast.success(`Ebook status updated to ${nextStatus}!`);
}

toast.error('Failed to update ebook status !')

  };

  // Function to handle ebook absolute deletions
  const handleDeleteEbook = async(id) => {
    // Place your server action/API handler call here later
    const result = await deleteWriterBookByAdmin(id)

if(result?.deletedCount>0){
  return toast.error("Ebook permanently deleted!");
}
 
toast.error('Failed to delete ebook')

  };

  return (
    <div className="overflow-hidden">
      <Table variant="secondary" className="w-full rounded-2xl ">
        <Table.ScrollContainer >
          <Table.Content aria-label="Admin Manage Ebooks Table" className="min-w-200">
            <Table.Header>
              <Table.Column isRowHeader className="rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">COVER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">EBOOK TITLE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">WRITER NAME</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PRICE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">STATUS</Table.Column>
              <Table.Column className="rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">ACTIONS</Table.Column>
            </Table.Header>
            <Table.Body  >
              {validEbooksData.map((book) => {
                const bookIdStr = book._id?.$oid || book._id;
                const isPublished = book.status === "published";

                return (
                  <Table.Row key={bookIdStr} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {/* Cover Image */}
                    <Table.Cell className="p-4">
                      <div className="relative w-11.25 h-16.25 rounded shadow-md overflow-hidden bg-gray-100">
                        <Image
                          src={book.coverImage || "https://placehold.co/45x65"}
                          alt={book.title || "Ebook Cover"}
                          fill
                          sizes="45px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </Table.Cell>

                    {/* Book Name */}
                    <Table.Cell className="p-4 font-bold text-gray-800 text-sm max-w-xs truncate" title={book.title}>
                      {book.title}
                    </Table.Cell>

                    {/* Writer Name */}
                    <Table.Cell className="p-4 text-gray-600 font-medium text-sm">
                      {book.authorName || "Unknown Author"}
                    </Table.Cell>

                    {/* Price */}
                    <Table.Cell className="p-4 font-semibold text-gray-800 text-sm">
                      ${parseFloat(book.price || 0).toFixed(2)}
                    </Table.Cell>

                    {/* Status Badge */}
                    <Table.Cell className="p-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        isPublished 
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {book.status || "Unpublished"}
                      </span>
                    </Table.Cell>

                    {/* Actions Area */}
                    <Table.Cell className="p-4 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        {/* Publish / Unpublish Action Switch */}
                        <button
                          onClick={() => handleToggleStatus(bookIdStr, book.status)}
                          className={`p-2 cursor-pointer rounded-lg border transition-all ${
                            isPublished
                              ? "text-amber-600 bg-amber-50 border-amber-100 hover:bg-amber-100"
                              : "text-emerald-600 bg-emerald-50 border-emerald-100 hover:bg-emerald-100"
                          }`}
                          title={isPublished ? "Unpublish Ebook" : "Publish Ebook"}
                        >
                          {isPublished ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                        </button>

                        {/* Delete Action Button */}
                        <button
                          onClick={() => handleDeleteEbook(bookIdStr)}
                          className="p-2 cursor-pointer text-rose-600 bg-rose-50 border border-rose-100 rounded-lg hover:bg-rose-100 transition-all"
                          title="Delete Ebook"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageEbooks;