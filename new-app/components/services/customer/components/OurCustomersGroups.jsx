"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SkeletonCard = () => (
  <div className="w-full flex justify-center items-center">
    <div className="w-[80px] sm:w-[100px] md:w-[110px] h-[60px] bg-[#a4aec633] animate-pulse rounded-md"></div>
  </div>
);

export default function OurCustomersGroups() {
  const [items, setItems] = useState([]);
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
          // --- แก้ไขตรงนี้: เอาการกรอง ID ออกให้หมด เอาทุกข้อมูลที่มีรูปภาพ ---
          const allData = result.data.filter((item) => {
            const hasImage =
              (item.image && item.image !== "") ||
              (item.shop_logo && item.shop_logo !== "");
            return hasImage; // เอาหมดทุกตัวที่มีรูป ไม่สน ID เริ่มต้นที่เท่าไหร่
          });

          setItems(allData); // แสดงผลตามลำดับ API ตั้งแต่ตัวแรกยันตัวสุดท้าย
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
    const imageSource = item.image || item.shop_logo;

    return (
      <div
        key={`${item.id}-${index}`}
        className={`group relative flex justify-center items-center transition-all duration-500 ease-out w-full
        ${showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transitionDelay: `${Math.min(index * 10, 800)}ms`,
        }}
      >
        {/* Tooltip รายละเอียด */}
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none 
                        opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
                        transition-all duration-300 origin-bottom w-[180px]"
          style={{ zIndex: 100 }}
        >
          <div className="relative rounded-[1rem] bg-white shadow-2xl p-3 text-center">
            <div className="relative inline-block mb-1 p-0.5 rounded-full bg-slate-50">
              <Image
                className="rounded-full object-contain border border-slate-100"
                src={imageSource}
                alt={item.name || "logo"}
                width={48}
                height={48}
                unoptimized
              />
            </div>
            <h4 className="!text-[10px] font-bold text-[#343f52] mb-0.5 leading-tight">
              {item.name || "Customer"}
            </h4>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.5rem] uppercase tracking-wider font-extrabold text-[#00B7B8]">
                {item.nature_type || "Partner"}
              </span>
              <span className="text-[0.5rem] font-medium text-slate-400">
                {item.province || ""}
              </span>
            </div>
            <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white"></div>
          </div>
        </div>

        {/* โลโก้ - สีจริง 100% */}
        <div className="relative inline-block p-2 shadow-sm rounded-full bg-white transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer z-10">
          <Image
            className="object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
            src={imageSource}
            alt={item.name || "logo"}
            width={75}
            height={75}
            style={{ width: "4.5rem", height: "4.5rem" }}
            unoptimized
          />
        </div>
      </div>
    );
  };

  return (
    <section className="wrapper !overflow-visible">
      <div className="container !overflow-visible py-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-5 items-center justify-items-center !overflow-visible">
          {loading
            ? Array.from({ length: 40 }).map((_, i) => <SkeletonCard key={i} />)
            : items.map((item, index) => renderLogoItem(item, index))}
        </div>
      </div>
    </section>
  );
}
