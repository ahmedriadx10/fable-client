'use client'
import { Table } from "@heroui/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
import toast from "react-hot-toast";

const WriterSalesHistory = ({ salesData }) => {
  console.log("writer sales data", salesData);

  // Safe fallback to prevent rendering crashes if salesData is empty or loading
  const validSalesData = salesData || [];

  // Function to format the ISO timestamp explicitly into readable dates
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  // Function to handle clipboard copying with React Hot Toast feedback
  const handleCopy = (text) => {
    if (!text) return;
    
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Transaction ID copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        toast.error("Failed to copy Transaction ID");
      });
  };

  return (
    <div className="overflow-hidden">
      <Table variant="secondary" className="w-full rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content aria-label="Writer Sales History Table" className="min-w-187.5">
            <Table.Header>
              <Table.Column isRowHeader className="rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">COVER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">EBOOK TITLE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">BUYER NAME</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PURCHASE DATE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">AMOUNT</Table.Column>
              {/* <Table.Column className="rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">Transaction ID</Table.Column> */}
            </Table.Header>
            <Table.Body>
              {validSalesData.map((book) => {
                // Extracts MongoDB string ID safely whether it uses standard _id or serialized object notation
                const saleIdStr = book._id?.$oid || book._id;
                
                return (
                  <Table.Row key={saleIdStr} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {/* Cover Image */}
                    <Table.Cell className="p-4">
                      <div className="relative w-11.25 h-16.25 rounded shadow-md overflow-hidden bg-gray-100">
                        <Image
                          src={book.coverImage || "https://placehold.co/45x65"}
                          alt={book.bookName || "Ebook Cover"}
                          fill
                          sizes="45px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </Table.Cell>

                    {/* Book Name */}
                    <Table.Cell className="p-4 font-bold text-gray-800 text-sm">
                      {book.bookName}
                    </Table.Cell>

                    {/* Buyer Name */}
                    <Table.Cell className="p-4 text-gray-600 font-medium text-sm">
                      {book.userName || "Anonymous Reader"}
                    </Table.Cell>

                    {/* Purchase Date */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      {formatDate(book.createdAt)}
                    </Table.Cell>

                    {/* Amount */}
                    <Table.Cell className="p-4 font-semibold text-gray-800 text-sm">
                      ${parseFloat(book.price || 0).toFixed(2)}
                    </Table.Cell>

                    {/* Transaction ID with Copy Feature */}
                    {/* <Table.Cell className="p-4 text-gray-500 text-sm">
                      <div className="flex items-center justify-center gap-2 font-mono">
                        <span className="text-xs tracking-tight">{book?.transactionId || "N/A"}</span>
                        {book?.transactionId && (
                          <button
                            onClick={() => handleCopy(book.transactionId)}
                            className="p-1.5 cursor-pointer text-gray-400 hover:text-indigo-700 hover:bg-indigo-50 rounded transition-all"
                            title="Copy Transaction ID"
                          >
                            <FaCopy className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </Table.Cell> */}
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

export default WriterSalesHistory;