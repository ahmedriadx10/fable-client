"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedBook = ({ featuredBooks }) => {
  // ফ্রেমার মোশন কন্টেইনার ভেরিয়েন্ট (Stagger Effect এর জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // প্রতিটি বুক কার্ডের জন্য অ্যানিমেশন ভেরিয়েন্ট
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-(--color-bg)">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* সেকশন হেডার এরিয়া */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            {/* থিম ম্যাচিং পার্পল ব্যাজ */}
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-(--color-primary) bg-(--color-primary-lighter) rounded-full mb-1.5">
              Curated Collection
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
              Featured Ebooks
            </h2>
          </div>
          
          {/* ভিউ অল বাটন - প্রাইমারি টেক্সট কালার সহ */}
          <Link 
            href="/browse-ebooks" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-primary) hover:text-(--color-primary-light) group transition-colors"
          >
            Explore All
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* কমপ্যাক্ট হরিজন্টাল বুক কার্ডস গ্রিড */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {featuredBooks?.map((book) => (
            <motion.div
              key={book._id}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.01,
                boxShadow: "0 10px 15px -3px rgba(109, 40, 217, 0.05)" // হালকা পার্পল শ্যাডো গ্লো
              }}
              className="group flex gap-4 bg-(--color-surface) border border-(--color-border) rounded-xl p-3 shadow-sm hover:border-(--color-primary-light) transition-all duration-300 items-center "
            >
              {/* বুক কভার ইমেজ */}
              <div className="relative shrink-0 w-22.5 h-34 rounded-lg overflow-hidden bg-(--color-bg) border border-(--color-border-light) shadow-sm">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  sizes="90px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>

              {/* কন্টেন্ট এরিয়া */}
              <div className="flex flex-col justify-between h-full py-1 grow overflow-hidden">
                <div>
                  {/* জেনার পিল - থিম অনুযায়ী কাস্টমাইজড */}
                  <div className="mb-1">
                    <span className="inline-block bg-(--color-primary-lighter) text-(--color-primary) text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {book.genre}
                    </span>
                  </div>

                  {/* টাইটেল এবং অথর */}
                  <h3 className="text-base font-bold text-(--color-text-primary) line-clamp-1 group-hover:text-(--color-primary)transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs font-medium text-(--color-text-secondary) truncate">
                    by {book.authorName}
                  </p>
                  
                  {/* সামারি */}
                  <p className="text-xs text-(--color-text-secondary) opacity-80 line-clamp-2 mt-1.5 leading-relaxed">
                    {book.summary}
                  </p>
                </div>

                {/* প্রাইস এবং ডিটেইলস লিঙ্ক */}
                <div className="flex items-center justify-between gap-2 pt-1 ">
                  <span className="text-sm font-bold text-(--color-text-primary)">
                    ${book.price?.toFixed(2)}
                  </span>
                  
                  <Link 
                    href={`/browse-ebooks/${book._id}`}
                    className="text-xs font-semibold text-(--color-primary) hover:text-(--color-primary-light) hover:underline transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedBook;