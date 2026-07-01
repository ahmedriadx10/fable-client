'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroHybridBanner = () => {
  // কারেন্ট একটিভ স্লাইডের ইনডেক্স ট্র্যাক করার জন্য স্টেট
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1500",
      tag: "Welcome to Fable World",
      desc: "Step into a world of limitless imagination. Read, share, and connect with original creators worldwide."
    },
    {
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1500",
      tag: "Discover Magical Stories",
      desc: "Explore a vast collection of magical fables, enchanting stories, and digital ebooks written by original creators."
    },
    {
      image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=1500",
      tag: "Share Your Imagination",
      desc: "Join our community of book lovers and writers. Publish your own fables and build your audience today!"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative group">
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          /* এখানে ম্যাজিক! স্লাইড চেঞ্জ হলেই আমরা রিয়েল-টাইমে একটিভ ইনডেক্সটা স্টেটে সেট করছি।
            সুইপারের লুপ ট্রু থাকলে `realIndex` ব্যবহার করতে হয় সঠিক ইনডেক্স পাওয়ার জন্য।
          */
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full custom-swiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              
              {/* ব্যাকগ্রাউন্ড ইমেজ */}
              <Image 
                src={slide.image} 
                alt={`Fable Banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              
              {/* হালকা ডার্ক ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/85 via-[#111827]/40 to-transparent z-10"></div>
              
              {/* কন্টেন্ট লেয়ার */}
              <div className="absolute inset-0 z-20 flex items-center">
                
                {/* এখানকার ট্রিক: animate প্রোপার্টিতে আমরা কন্ডিশন দিয়েছি। 
                  যদি এই স্লাইডের ইনডেক্স আর আমাদের activeIndex মিল হয়, কেবল তখনই ফ্রেমার মোশন "visible" অ্যানিমেশন চালাবে, 
                  নাহলে সে আবার "hidden" অবস্থায় ফিরে যাবে।
                */}
                <motion.div 
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-6 text-white"
                >
                  
                  {/* ব্যাজ */}
                  <motion.span 
                    variants={fadeInUpVariants}
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#f3e8ff] text-[#6d28d9] border border-[#8b5cf6]/20"
                  >
                    {slide.tag}
                  </motion.span>
                  
                  {/* ট্যাগলাইন */}
                  <motion.h1 
                    variants={fadeInUpVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
                  >
                    Discover & Read <br />
                    <span className="bg-gradient-to-r from-white via-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent">
                      Original Ebooks
                    </span>
                  </motion.h1>
                  
                  {/* ডেসক্রিপশন */}
                  <motion.p 
                    variants={fadeInUpVariants}
                    className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed opacity-90"
                  >
                    {slide.desc}
                  </motion.p>
                  
                  {/* বাটন */}
                  <motion.div variants={fadeInUpVariants} className="pt-2">
                    <Link 
                      href="/browse-ebooks"
                      className="inline-block px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#6d28d9] hover:bg-[#8b5cf6] rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                    >
                      Browse Ebooks
                    </Link>
                  </motion.div>
                  
                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default HeroHybridBanner;