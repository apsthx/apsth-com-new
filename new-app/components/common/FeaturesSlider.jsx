"use client";
import React, { useRef, useEffect, useState } from "react";

export default function FeaturesSlider({ items = [] }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. ฟังก์ชันอัปเดตจุดไขปลาเมื่อมีการเลื่อนสไลด์
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  // 2. ฟังก์ชันกดจุดไขปลาเพื่อเลื่อนไปหน้านั้น
  const scrollToItem = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollOffset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider || items.length === 0) return;

    const intervalTime = 4000;
    const autoScroll = setInterval(() => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScrollLeft - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
      }
    }, intervalTime);

    return () => clearInterval(autoScroll);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full relative group ">
      {/* Container สไลด์ */}
      <div
        ref={scrollRef}
        onScroll={handleScroll} // จับ Event การเลื่อน
        className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pt-2"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-none w-full snap-center px-2">
            <div className="bg-gradient-to-br from-[#e1f6f0] to-[#45c4a0] p-6 flex flex-row items-start rounded-xl shadow-sm h-full min-h-[160px]">
              <div className="flex-shrink-0">
                <div className="border border-[#a4aec633] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] mr-4 p-3 flex items-center justify-center w-[60px] h-[60px]">
                  {item.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h4
                  className="mb-2 font-bold text-[1.1rem]"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h4>
                <p className="mb-0 text-[#343f52] leading-relaxed text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. จุดไขปลา (Pagination Dots) - ปรับปรุงสีและขนาดให้ชัดขึ้น */}
      <div className="flex justify-center items-center gap-3 mt-4 mb-6 relative z-20 -top-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            className={`transition-all duration-300 !rounded-full !shadow-md cursor-pointer ${
              activeIndex === index
                ? "w-5 h-2 bg-[#2bc29d] " /* จุดที่เลือก: ยาวสีฟ้า */
                : "w-2 h-2 bg-[#f5f5f6] hover:bg-[#a4aec633]" /* จุดที่ไม่ได้เลือก: กลมสีเทา */
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
