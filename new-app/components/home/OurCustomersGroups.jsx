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
  const [loading, setLoading] = useState(true);
  const [showImages, setShowImages] = useState(false);

  // กำหนดรูปสำรอง
  const fallbackImage = "/assets/img/logo/apsx_icon.png";

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
          // --- แก้ไข: เอาการกรอง ID S00879 ออก และดึงทุกรายการที่มีหรือไม่มีรูปก็ได้ ---
          const processedData = result.data.map((item) => ({
            ...item,
            // ถ้าไม่มีรูปใน API ให้ใช้ fallbackImage ทันที
            displayImage: item.image || item.shop_logo || fallbackImage,
          }));

          const shuffledData = [...processedData].sort(
            () => 0.5 - Math.random(),
          );
          setGridItems(shuffledData.slice(0, 55));

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

  const renderLogoItem = (item, index) => {
    // ฟังก์ชันจัดการเมื่อรูปภาพโหลดไม่สำเร็จ (404 หรือ URL เสีย)
    const handleError = (e) => {
      e.target.src = fallbackImage;
    };

    return (
      <div
        key={item.id || index}
        className={`group relative flex justify-center items-center transition-all duration-700 ease-out w-full
        ${showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{
          transitionDelay: `${index * 30}ms`,
        }}
      >
        {/* Tooltip */}
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 pointer-events-none 
                        opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
                        transition-all duration-300 origin-bottom w-[200px] z-50"
          style={{ zIndex: 99999 }}
        >
          <div className="relative rounded-[1.2rem] bg-white border border-[#f5f5f6] shadow-[0_15px_30px_rgba(0,0,0,0.15)] p-3 text-center mb-2">
            <h4 className="!text-[14px] !font-medium text-[#343f52] !mb-0.5 leading-tight">
              {item.name || "Customer"}
            </h4>
            <span className="text-[0.55rem] font-medium text-[#9499a3]">
              {item.province || "Thailand"}
            </span>
            <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>
          </div>
        </div>

        {/* โลโก้ */}
        <div className="relative p-1 border-2 border-[#eeeeee] shadow-sm rounded-3xl bg-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer z-10">
          <Image
            className="object-contain rounded-3xl transition-transform duration-300 group-hover:scale-105"
            src={item.displayImage}
            alt={item.name || "logo"}
            width={64}
            height={64}
            style={{ width: "4rem", height: "4rem" }}
            unoptimized
            onError={handleError}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="wrapper !overflow-visible py-5">
      <div className="container !overflow-visible">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-11 gap-4 items-center justify-items-center !overflow-visible">
          {loading
            ? Array.from({ length: 22 }).map((_, i) => <SkeletonCard key={i} />)
            : gridItems.map((item, index) => renderLogoItem(item, index))}
        </div>
      </div>
    </section>
  );
}
