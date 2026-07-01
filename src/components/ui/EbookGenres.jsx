"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaBrain, 
  FaHatWizard, 
  FaMagnifyingGlass, 
  FaHeart 
} from "react-icons/fa6";

const EbookGenres = ({ genresData }) => {
  // সেফটি গার্ড: যদি কোনো কারণে ডেটা না আসে তবে কিছুই দেখাবে না বা এম্পটি অ্যারে নেবে
  if (!genresData || genresData.length === 0) return null;

  // জেনারের নাম অনুযায়ী ডাইনামিক আইকন এবং কালার রিটার্ন করার ফাংশন
  const getGenreStyle = (genreName) => {
    switch (genreName?.toLowerCase()) {
      case "science fiction":
        return { icon: <FaRocket />, bg: "rgba(14, 165, 233, 0.1)", text: "#0ea5e9" };
      case "self development":
        return { icon: <FaBrain />, bg: "rgba(34, 197, 94, 0.1)", text: "#22c55e" };
      case "fantasy":
        return { icon: <FaHatWizard />, bg: "rgba(243, 232, 255, 1)", text: "#6d28d9" };
      case "mystery & thriller":
        return { icon: <FaMagnifyingGlass />, bg: "rgba(245, 158, 11, 0.1)", text: "#f59e0b" };
      case "romance":
        return { icon: <FaHeart />, bg: "rgba(239, 68, 68, 0.1)", text: "#ef4444" };
      default:
        return { icon: <FaRocket />, bg: "rgba(243, 232, 255, 1)", text: "#6d28d9" };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-(--color-surface)">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* সেকশন হেডার */}
        <div className="mb-8">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-(--color-primary) bg-(--color-primary-lighter) rounded-full mb-1.5">
            Categories
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
            Explore Ebook Genres
          </h2>
          <p className="text-xs text-(--color-text-secondary) mt-1 max-w-md">
            Find your next favorite read by diving into our diverse, hand-picked categories.
          </p>
        </div>

        {/* ৫-কলাম বিশিষ্ট রেস্পনসিভ গ্রিড লেআউট */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {genresData.map((item, index) => {
            const style = getGenreStyle(item.genre);
            
            return (
              <Link 
                key={index} 
                href={`/browse-ebooks?genre=${item.genre}`} // তোমার কথা অনুযায়ী ক্লিন কুয়েরি স্ট্রিং
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 20px -5px rgba(109, 40, 217, 0.08)",
                  }}
                  className="flex flex-col items-center justify-center p-5 bg-(--color-surface) border border-(--color-border) hover:border-(--color-primary-light) rounded-2xl transition-all duration-300 group cursor-pointer text-center h-32.5"
                >
                  {/* আইকন কন্টেইনার */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: style.bg, color: style.text }}
                  >
                    {style.icon}
                  </div>

                  {/* জেনার নেম */}
                  <span className="text-sm font-bold text-(--color-text-primary) group-hover:text-(--color-primary) transition-colors line-clamp-1">
                    {item.genre}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default EbookGenres;