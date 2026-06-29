'use client'
import { Table } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCopy } from "react-icons/fa6";
import toast from "react-hot-toast"; // react-hot-toast ইম্পোর্ট করা হয়েছে

const UserPurchaseHistory = ({ purchaseData }) => {
  console.log("user purchase data", purchaseData);

  // সরাসরি আইএসও ডেট স্ট্রিং ফরম্যাট করার ফাংশন
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  // ক্লিপবোর্ডে টেক্সট কপি করার ফাংশন
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
          <Table.Content aria-label="Purchased Ebooks Table" className="min-w-187.5">
            <Table.Header>
              <Table.Column isRowHeader className="rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">COVER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">EBOOK TITLE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">AUTHOR</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PURCHASE DATE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PRICE</Table.Column>
              <Table.Column className="rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">Transaction ID</Table.Column>
            </Table.Header>
            <Table.Body>
              {purchaseData.map((book) => {
                // মঙ্গোডিবির প্লেইন আইডি বা অবজেক্ট আইডি উভয়ই হ্যান্ডেল করবে
                const bookIdStr = book._id?.$oid || book._id;
                
                return (
                  <Table.Row key={bookIdStr} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
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

                    {/* Author Name */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      {book.authorName}
                    </Table.Cell>

                    {/* Purchase Date */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      {formatDate(book.createdAt)}
                    </Table.Cell>

                    {/* Price */}
                    <Table.Cell className="p-4 font-semibold text-gray-800 text-sm">
                      ${parseFloat(book.price).toFixed(2)}
                    </Table.Cell>

                    {/* Transaction ID with Copy Feature */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      <div className="flex items-center justify-center gap-2 font-mono">
                        <span>{book?.transactionId || "N/A"}</span>
                        {book?.transactionId && (
                          <button
                            onClick={() => handleCopy(book.transactionId)}
                            className="p-1.5 cursor-pointer text-gray-400 hover:text-purple-700 hover:bg-purple-50 rounded transition-all"
                            title="Copy Transaction ID"
                          >
                            <FaCopy className="w-4 h-4" />
                          </button>
                        )}
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

export default UserPurchaseHistory;