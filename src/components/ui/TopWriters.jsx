"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMedal, FaBookOpen, FaBagShopping } from "react-icons/fa6";

const TopWriters = ({ writersData }) => {
  // সেফটি চেক
  if (!writersData || writersData.length === 0) return null;

  // Stagger Effect কন্টেইনার ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // প্রতিটি কার্ডের অ্যানিমেশন ভেরিয়েন্ট
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-(--color-bg)">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* সেকশন হেডার - এখন বামপাশে (Left Aligned) কনসিস্টেন্ট লুক */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-(--color-warning) bg-[rgba(245,158,11,0.1)] rounded-full mb-1.5">
            <FaMedal className="text-xs" /> Top Sellers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
            Meet Our Top Writers
          </h2>
          <p className="text-xs text-(--color-text-secondary) mt-1 max-w-md">
            The creative minds behind the most read and celebrated ebooks on our platform.
          </p>
        </div>

        {/* ৩-কলামের রেস্পনসিভ গ্রিড - উইডথ ফুল করে দেওয়া হয়েছে */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {writersData.map((writer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 24px -10px rgba(109, 40, 217, 0.12)" }}
              className="group flex flex-col items-center p-6 bg-(--color-surface) border border-(--color-border) hover:border-(--color-primary-light) rounded-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* রাইটারের র‍্যাঙ্ক ব্যাজ (১, ২, ৩) */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-(--color-primary-lighter) text-(--color-primary) text-xs font-bold flex items-center justify-center">
                #{index + 1}
              </div>

              {/* গোলকার অ্যাভাটার/ইমেজ কন্টেইনার */}
              <div className="relative w-20 h-20 rounded-full p-1 border-2 border-(--color-border) group-hover:border-(--color-primary) transition-colors duration-300 mb-4 bg-(--color-surface)">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-(--color-bg)">
                  <Image
                    src={writer.writerImage}
                    alt={writer.writerName}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* রাইটারের নাম */}
              <h3 className="text-base font-bold text-(--color-text-primary) group-hover:text-(--color-primary) transition-colors mb-1 text-center">
                {writer.writerName}
              </h3>

              {/* কতগুলো বই আছে */}
              <p className="inline-flex items-center gap-1 text-[11px] font-medium text-(--color-text-secondary) mb-4">
                <FaBookOpen className="text-xs" /> {writer.totalBooks} {writer.totalBooks > 1 ? "Published Books" : "Published Book"}
              </p>

              {/* সেলস ইনফো স্ট্রিপ */}
              <div className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-(--color-surface) border border-(--color-border) rounded-xl text-xs font-bold text-(--color-text-primary)">
                <FaBagShopping className="text-(--color-icon-writer-sales)" />
                <span>{writer.totalSales} Sales</span>
                <span className="text-(--color-border)">|</span>
                <span className="text-(--color-icon-writer-revenue)">${writer.totalRevenue?.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TopWriters;