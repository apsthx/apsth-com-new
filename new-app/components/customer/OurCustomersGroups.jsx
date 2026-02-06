"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SkeletonCard = () => (
  <div className="w-full flex justify-center items-center">
    <div className="w-[80px] sm:w-[100px] md:w-[110px] h-[60px] bg-[#a4aec633] animate-pulse rounded-md"></div>
  </div>
);

// สร้าง Component แยกสำหรับ Logo แต่ละอันเพื่อจัดการ Error ภายในตัวเอง
const LogoItem = ({ item, index, showImages, onStatusChange }) => {
  const fallbackImage = "/assets/img/logo/apsx_icon.png";
  const [imgSrc, setImgSrc] = useState(
    item.image || item.shop_logo || fallbackImage,
  );

  return (
    <div
      className={`group relative flex justify-center items-center transition-all duration-700 ease-out w-full 
      ${showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${Math.min(index * 15, 800)}ms` }}
    >
      {/* Tooltip */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none 
                      opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
                      transition-all duration-300 origin-bottom w-[180px] z-[100]"
      >
        <div className="relative rounded-[1rem] bg-white shadow-2xl p-3 text-center border border-[#f5f5f6]">
          <div className="relative inline-block mb-1 p-0.5 rounded-full bg-slate-50">
            <Image
              className="rounded-full object-contain"
              src={imgSrc}
              alt="logo"
              width={48}
              height={48}
              unoptimized
              onError={() => setImgSrc(fallbackImage)}
            />
          </div>
          <h4 className="!text-[14px] !font-medium text-[#343f52] mb-0.5 leading-tight">
            {item.name || "Customer"}
          </h4>
          <span className="text-[0.55rem] font-medium text-[#9499a3]">
            {item.province || "Thailand"}
          </span>
          <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white"></div>
        </div>
      </div>

      {/* Main Logo */}
      <div className="relative inline-block p-1 border-2 border-[#eeeeee] shadow-sm rounded-3xl bg-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer z-10">
        <Image
          className="w-16 h-16 rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
          src={imgSrc}
          alt="logo"
          width={64}
          height={64}
          unoptimized
          onLoad={onStatusChange}
          onError={() => {
            setImgSrc(fallbackImage);
            onStatusChange(); // ต้องแจ้งว่าโหลดเสร็จแล้ว (แม้จะเสีย) เพื่อให้ Skeleton หาย
          }}
        />
      </div>
    </div>
  );
};

export default function OurCustomersGroups() {
  const [items, setItems] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

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
          // ไม่กรองออกแล้ว เพื่อให้จำนวนคงที่
          setItems(result.data);
          if (result.data.length === 0) setShowImages(true);
        }
      } catch (error) {
        setShowImages(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Fail-safe 3 วินาทีพอ ถ้าโหลดนานเกินไปให้โชว์เลย
    const timeout = setTimeout(() => {
      if (items.length > 0 && !showImages) setShowImages(true);
    }, 3000);

    if (items.length > 0 && loadedCount >= items.length) {
      setShowImages(true);
    }
    return () => clearTimeout(timeout);
  }, [loadedCount, items.length, showImages]);

  return (
    <section className="wrapper !overflow-visible py-10">
      <div className="container !overflow-visible">
        {!showImages && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 items-center justify-items-center transition-opacity duration-500 ${showImages ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
        >
          {items.map((item, index) => (
            <LogoItem
              key={index}
              item={item}
              index={index}
              showImages={showImages}
              onStatusChange={() => setLoadedCount((prev) => prev + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
