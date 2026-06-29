import { Table } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PurchaseManage = ({ purchaseData }) => {
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

  return (
    <div className=" overflow-hidden">
      <Table variant="secondary" className="w-full rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content aria-label="Purchased Ebooks Table" className="min-w-187.5 ">
            <Table.Header className={''}>
              <Table.Column isRowHeader className=" rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">COVER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">EBOOK TITLE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">AUTHOR</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PURCHASE DATE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">PRICE</Table.Column>
              <Table.Column className=" rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">ACTIONS</Table.Column>
            </Table.Header>
            <Table.Body>
              {purchaseData.map((book) => {
                // মঙ্গোডিবির প্লেইন আইডি বা অবজেক্ট আইডি উভয়ই হ্যান্ডেল করবে
                const bookIdStr = book._id?.$oid || book._id;
                
                return (
                  <Table.Row key={bookIdStr} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {/* Cover Image */}
                    <Table.Cell className="p-4">
                      <div className="relative w-[45px] h-[65px] rounded shadow-md overflow-hidden bg-gray-100">
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

                    {/* Action Button */}
                    <Table.Cell className="p-4 text-center">
                      <Link href={`/browse-ebooks/${book?.bookId}`} className="px-5 h-10 py-1.5 bg-[#6A1B9A] hover:bg-[#501275] text-white text-xs font-semibold rounded transition-colors shadow-sm">
                        Read
                      </Link>
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

export default PurchaseManage;