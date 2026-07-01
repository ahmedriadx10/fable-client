"use client";

import Image from "next/image";
import { Table } from "@heroui/react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import Link from "next/link";
import { writerStatusUpdate } from "@/lib/actions/writerStatusUpdate";
import DeleteEbookAlert from "./DeleteEbookAlert";
import { deleteWriterEbook } from "@/lib/actions/DeleteWriterEbook";
import toast from "react-hot-toast";
import WriterUpdateEbook from "./WriterUpdateEbook";

const ManageEbook = ({ writerEbooksData, user }) => {
  const handleTogglePublish = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "published" ? "unpublished" : "published";

    const result = await writerStatusUpdate(id, { status: nextStatus });
  };

  // // ২. এডিট হ্যান্ডলার
  // const handleEdit = (id) => {
  //   console.log(`Edit clicked for book ID: ${id}`);
  // };

  // ৩. ডিলিট হ্যান্ডলার
  const handleDelete =async (id) => {
    console.log(`Delete clicked for book ID: ${id}`);

    const result=await deleteWriterEbook(id)

if(result?.deletedCount>0){

toast.success('Ebook delete successful')
return
}

toast.error('Something went wrong please try again')



  };

  return (
    <div className="min-h-screen py-5 px-4 w-full  ">
      <div className="">
        {/* হেডার সেকশন */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#111827]">Manage Ebooks</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Overview and management of your published manuscripts. Review sales,
            adjust pricing, and control visibility.
          </p>
        </div>

        {writerEbooksData.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] p-12 sm:p-20 flex flex-col items-center text-center">
            {/* আইকন কন্টেইনার (Fable থিম ও কালার ম্যাচ) */}
            <div className="w-20 h-20 rounded-2xl bg-[#FAF5FF] flex items-center justify-center text-[#6D28D9] mb-6 shadow-sm border border-[#F3E8FF]">
              <HiOutlineBookOpen className="w-10 h-10" />
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              No Ebooks Found
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
              You haven&apos;t written or uploaded any ebooks yet. Prepare your
              next masterpiece and share it with the Fable library!
            </p>

            <Link
              href="/dashboard/writer/add-ebook"
              className="inline-flex items-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-light) text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all shadow-md sha(--color-primary)/10 active:scale-95"
            >
              <FiPlus className="w-4 h-4 stroke-3" />
              Write Your First Book
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden ">
            <Table className="bg-white p-0 rounded-2xl  ">
              <Table.ScrollContainer className="">
                <Table.Content
                  className="  "
                  aria-label="Writer's ebooks management table"
                >
                  <Table.Header className=" rounded-none bg-(--color-primary)/10 ">
                    <Table.Column
                      isRowHeader
                      className="text-xs font-bold text-gray-500 tracking-wider uppercase bg-slate-50/70 p-4"
                    >
                      Book Title
                    </Table.Column>
                    <Table.Column className="text-xs font-bold text-gray-500 tracking-wider uppercase bg-slate-50/70 p-4">
                      Price
                    </Table.Column>
                    <Table.Column className="text-xs font-bold text-gray-500 tracking-wider uppercase bg-slate-50/70 p-4">
                      Status
                    </Table.Column>
                    <Table.Column className="text-xs font-bold text-gray-500 tracking-wider uppercase bg-slate-50/70 p-4 text-right pr-8">
                      Actions
                    </Table.Column>
                  </Table.Header>

                  <Table.Body className="">
                    {writerEbooksData.map((ebook) => {
                      // সেফটি এবং ক্লিন কোডের জন্য কন্ডিশন ও প্রাইস ভ্যারিয়েবল করে নেওয়া হলো
                      const isPublished = ebook.status === "published";
                      const numericPrice = parseFloat(ebook.price) || 0;

                      return (
                        <Table.Row
                          key={ebook._id}
                          className="border-b border-(--color-border) hover:bg-slate-50/50 transition-colors"
                        >
                          {/* বুক টাইটেল ও কভার ইমেজ */}
                          <Table.Cell className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="relative w-12 aspect-3/4 rounded shadow-sm overflow-hidden bg-slate-100 shrink-0 border border-gray-100">
                                <Image
                                  src={ebook.coverImage}
                                  alt={`${ebook.title} cover`}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                  priority
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                                  {ebook.title}
                                </span>
                                <span className="text-xs text-gray-400 sm:hidden">
                                  {ebook.genre}
                                </span>
                              </div>
                            </div>
                          </Table.Cell>

                          {/* প্রাইস ডাইনামিক ফরম্যাটিং */}
                          <Table.Cell className="p-4 font-medium text-gray-700 text-sm sm:text-base">
                            {numericPrice === 0
                              ? "$0.00"
                              : `$${numericPrice.toFixed(2)}`}
                          </Table.Cell>

                          {/* স্ট্যাটাস ব্যাজ (status স্ট্রিং ভিত্তিক কন্ডিশন) */}
                          <Table.Cell className="p-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                isPublished
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "bg-purple-50 text-[#6D28D9]"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${isPublished ? "bg-emerald-500" : "bg-[#6D28D9]"}`}
                              />
                              {ebook.status}
                            </span>
                          </Table.Cell>

                          {/* অ্যাকশন বাটনস (Toggle, Edit, Delete) */}
                          <Table.Cell className="p-4">
                            <div className="flex items-center justify-end gap-4 sm:gap-6 pr-4">
                              {/* কাস্টম টগল বাটন (isPublished ট্র্যাকিং) */}
                              <label className="relative inline-flex items-center cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={isPublished}
                                  onChange={() =>
                                    handleTogglePublish(ebook._id, ebook.status)
                                  }
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6D28D9]"></div>
                              </label>

                              {/* এডিট বাটন */}
                     <WriterUpdateEbook ebookData={ebook} user={user}>
                               <span
                         
                                className="text-gray-500 cursor-pointer hover:text-(--color-info)  transition-colors"
                                title="Edit Ebook"
                              >
                                <FiEdit2 className="w-4 h-4" />
                              </span>
                     </WriterUpdateEbook>

                              {/* ডিলিট বাটন */}
                     <DeleteEbookAlert clickHandler={()=>handleDelete(ebook._id)}>
                      {         <span
                                
                                className="text-gray-500 cursor-pointer hover:text-red-500   transition-colors"
                                title="Delete Ebook"
                              >
                                <FiTrash2 className="w-5 h-5 " />
                              </span>}
                     </DeleteEbookAlert>
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
        )}
      </div>
    </div>
  );
};

export default ManageEbook;
