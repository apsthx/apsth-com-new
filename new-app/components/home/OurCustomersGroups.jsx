"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SkeletonCard = () => (
  <div className="w-full flex justify-center items-center">
    <div className="w-[80px] sm:w-[100px] md:w-[110px] h-[60px] bg-[#a4aec633] animate-pulse rounded-md"></div>
  </div>
);

export default function OurCustomersGroups() {
  const [gridItems, setGridItems] = useState([]);
  const [marqueeItems, setMarqueeItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://shop.api-apsx.co/shop/getshop", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "769167175e6a64fd8e8982b3381a591db1ef2sadasdw224jkl",
          },
        });
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          const validData = result.data.filter((item) => {
            const hasId =
              item.id.localeCompare("S00879", undefined, { numeric: true }) >=
              0;
            const hasImage =
              (item.image && item.image !== "") ||
              (item.shop_logo && item.shop_logo !== "");
            return hasId && hasImage;
          });

          const shuffledData = [...validData].sort(() => 0.5 - Math.random());
          setGridItems(shuffledData.slice(0, 63));
          setMarqueeItems(shuffledData.slice(63));
          setTimeout(() => setShowImages(true), 150);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderLogoItem = (item, index, isMarquee = false) => {
    const imageSource = item.image || item.shop_logo;
    if (!imageSource || imageSource === "") return null;

    return (
      <div
        key={isMarquee ? `marquee-${item.id}-${index}` : item.id}
        className={`group relative flex justify-center items-center transition-all duration-700 ease-out 
        ${isMarquee ? "!mx-2 md:!mx-2 flex-shrink-0" : "w-full"} 
        ${showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{
          transitionDelay: isMarquee ? "0ms" : `${index * 40}ms`,
          zIndex: isMarquee ? 50 : "auto", // ให้ตัวที่ถูก Hover อยู่ข้างบนตัวอื่นในแถวสไลด์
        }}
      >
        {/* Tooltip - ปรับตำแหน่งให้ห่างจากตัวโลโก้มากขึ้นเพื่อลดโอกาสการโดนตัดที่ขอบล่าง */}
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 pointer-events-none 
                        opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
                        transition-all duration-300 origin-bottom w-[200px] z-50"
          style={{ zIndex: 99999 }} // บังคับให้อยู่บนสุดของระนาบ
        >
          <div className="relative rounded-[1.2rem] bg-white backdrop-blur-md border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-3 text-center">
            <div className="relative inline-block mb-1 p-0.5 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20">
              <Image
                className="rounded-full object-contain border-2 border-white"
                src={imageSource}
                alt={item.name || "logo"}
                width={56}
                height={56}
                style={{ width: "3rem", height: "3rem" }}
              />
            </div>
            <h4 className="!text-xs !font-medium text-[#343f52] mb-0.5 leading-tight">
              {item.name || "Customer"}
            </h4>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.55rem] uppercase tracking-wider font-extrabold text-indigo-600/80">
                {item.nature_type || "Partner"}
              </span>
              <span className="text-[0.55rem] font-medium text-slate-400">
                {item.province || "Thailand"}
              </span>
            </div>
            {/* ลูกศร - ปรับให้ชิดกับขอบขาวมากขึ้น */}
            <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white/95"></div>
          </div>
        </div>

        {/* โลโก้ - สีจริง 100% */}
        <div className="relative inline-blocka p-1 border-2 border-[#eeeeee] shadow-sm rounded-3xl bg-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer z-10">
          <Image
            className="object-contain rounded-3xl transition-transform duration-300 group-hover:scale-105"
            src={imageSource}
            alt={item.name || "logo"}
            width={50}
            height={50}
            style={{ width: "4rem", height: "4rem" }}
            unoptimized
          />
        </div>
      </div>
    );
  };

  return (
    <section id="snippet-2" className="wrapper !overflow-visible">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 80s linear infinite;
          /* สำคัญมาก: ห้ามมี overflow-hidden ตรงนี้ */
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .marquee-viewport {
          position: relative;
          width: 100%;
          /* ตัดเฉพาะด้านข้างซ้าย-ขวา แต่ข้างบนต้องเปิดให้ Tooltip ลอยได้กว้างๆ */
          overflow-x: hidden;
          overflow-y: visible !important;
          padding-top: 180px; /* เพิ่มพื้นที่ Safe Zone ด้านบนให้สูงขึ้นอีก */
          margin-top: -180px;
          padding-bottom: 20px;
        }
      `}</style>

      <div className=" !overflow-visible ">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-11 gap-2 md:gap-10 items-center justify-items-center !overflow-visible">
          {loading
            ? Array.from({ length: 18 }).map((_, i) => <SkeletonCard key={i} />)
            : gridItems.map((item, index) => renderLogoItem(item, index))}
        </div>
      </div>
    </section>
  );
}
