"use client";
import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const images = [
    { image: "/assets/img/clinic/career-img-1.jpg" },
    { image: "/assets/img/clinic/career-img-2.jpg" },
    { image: "/assets/img/clinic/career-img-3.jpg" },
    { image: "/assets/img/clinic/career-img-4.jpg" },
    { image: "/assets/img/clinic/career-img-5.jpg" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative">
      {/* Grid Display */}
      <div className="flex flex-wrap mx-[-15px] justify-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="xl:w-1/5 lg:w-4/12 md:w-6/12 w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] py-4"
          >
            <div
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square flex items-center justify-center rounded-2xl overflow-hidden 
                         transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={`gallery-${index}`}
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-lg p-3 rounded-full border border-white/40 !text-[#1bb59b] shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Glassmorphism Lightbox Modal --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center !bg-black/5 backdrop-blur-sm transition-all duration-500 animate-in fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button (Glass Style) */}
          <button
            className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center !rounded-full bg-white/10 border border-white/20 !text-black hover:bg-white/20 hover:rotate-90 transition-all duration-300 z-[100]"
            onClick={() => setSelectedIndex(null)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 lg:left-10 w-16 h-16 flex items-center justify-center !rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hover:-translate-x-1 active:scale-90"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Large Image Container */}
          <div className="relative flex flex-col items-center justify-center w-full h-full p-4 lg:p-12">
            <div className="relative group max-w-[90vw] max-h-[85vh]">
              <img
                src={images[selectedIndex].image}
                className="w-full h-full object-contain rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.4)] animate-in zoom-in-95 duration-500 ease-out"
                alt="Full size preview"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Pagination Glass Badge */}
            <div className="absolute bottom-10 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white/90 text-sm font-light tracking-[0.2em]">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 lg:right-10 w-16 h-16 flex items-center justify-center !rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hover:translate-x-1 active:scale-90"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
