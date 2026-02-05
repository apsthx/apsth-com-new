"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const FeatureCarousel = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    // ปรับความสูง: มือถือเป็นจัตุรัส/วิดีโอ, จอใหญ่สูง 400px - 500px
    <div className="relative w-full aspect-square sm:aspect-video md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl group">
      {/* Screen Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className={`h-full w-full bg-gradient-to-br ${slide.color || "from-slate-50 to-slate-100"} p-2 flex items-center justify-center`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title || "Feature Image"}
                fill
                className="object-cover transform transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls - Responsive Layout */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-8 w-[90%] sm:w-auto justify-center">
        {/* Prev Button - ซ่อนในมือถือขนาดเล็กมากเพื่อเพิ่มพื้นที่ */}
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 !bg-white/40 backdrop-blur-md !rounded-lg flex items-center justify-center hover:bg-white/60 transition shadow-lg border border-white/20"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#45c4a0]" />
          </button>
        </div>

        {/* Navigation Dots - ปรับระยะห่างตามจอ */}
        <div className="flex !space-x-1 bg-black/5 backdrop-blur-sm p-2 !rounded-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 !rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 sm:w-8 bg-[#45c4a0]"
                  : "w-1.5 sm:w-2 bg-[#dfe0e3] hover:bg-[#45c4a0]/50"
              }`}
            />
          ))}
        </div>

        {/* Next & Play Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/40 backdrop-blur-md !rounded-l-lg flex items-center justify-center hover:bg-white/60 transition shadow-lg border border-white/20"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#45c4a0]" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/40 backdrop-blur-md !rounded-r-lg flex items-center justify-center hover:bg-white/60 transition shadow-lg border border-white/20"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#45c4a0]" />
            ) : (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#45c4a0] ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
