'use client'
import { Table } from "@heroui/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
import toast from "react-hot-toast";

const ManageAllTransactions = ({ transactionsData }) => {
  console.log("Admin complete transactions data", transactionsData);

  // Safe fallback to prevent rendering crashes if transactionsData is empty or loading
  const validTransactions = transactionsData || [];

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
          <Table.Content aria-label="Admin All Transactions Table" className="min-w-212.5">
            <Table.Header>
              <Table.Column isRowHeader className="rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">TRANSACTION ID</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">COVER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">EBOOK TITLE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">USER / BUYER</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">TYPE</Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">DATE</Table.Column>
              <Table.Column className="rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">AMOUNT</Table.Column>
            </Table.Header>
            <Table.Body>
              {validTransactions.map((transaction) => {
                const transactionIdStr = transaction._id?.$oid || transaction._id;
                const isPayment = transaction.costType === "payment";

                return (
                  <Table.Row key={transactionIdStr} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    
                    {/* Transaction ID with Copy Button */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      <div className="flex items-center justify-center gap-2 font-mono">
                        <span className="text-xs tracking-tight font-semibold bg-gray-50 px-2 py-1 rounded border border-gray-100">
                          {transaction?.transactionId || "N/A"}
                        </span>
                        {transaction?.transactionId && (
                          <button
                            onClick={() => handleCopy(transaction.transactionId)}
                            className="p-1.5 cursor-pointer text-gray-400 hover:text-indigo-700 hover:bg-indigo-50 rounded transition-all"
                            title="Copy Transaction ID"
                          >
                            <FaCopy className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </Table.Cell>

                    {/* Cover Image */}
                    <Table.Cell className="p-4">
                      <div className="relative w-10 h-14.5 rounded shadow-sm overflow-hidden bg-gray-100">
                        <Image
                          src={transaction.coverImage || "https://placehold.co/40x58"}
                          alt={transaction.bookName || "Ebook Cover"}
                          fill
                          sizes="40px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </Table.Cell>

                    {/* Book Name */}
                    <Table.Cell className="p-4 font-bold text-gray-800 text-sm max-w-50 truncate" title={transaction.bookName}>
                      {transaction.bookName}
                    </Table.Cell>

                    {/* Buyer/User Name */}
                    <Table.Cell className="p-4 text-gray-600 font-medium text-sm">
                      {transaction.userName || "Anonymous"}
                    </Table.Cell>

                    {/* Cost Type Badge */}
                    <Table.Cell className="p-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        isPayment 
                          ? "bg-blue-50 text-blue-700 border border-blue-100" 
                          : "bg-purple-50 text-purple-700 border border-purple-100"
                      }`}>
                        {transaction.costType || "Purchase"}
                      </span>
                    </Table.Cell>

                    {/* Creation Date */}
                    <Table.Cell className="p-4 text-gray-500 text-sm">
                      {formatDate(transaction.createdAt)}
                    </Table.Cell>

                    {/* Total Amount */}
                    <Table.Cell className="p-4 font-bold text-gray-900 text-sm">
                      ${parseFloat(transaction.price || 0).toFixed(2)}
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

export default ManageAllTransactions;