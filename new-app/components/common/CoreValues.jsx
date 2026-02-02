"use client";
import React from "react";
import Image from "next/image";
import GridBackground from "./background/GridBackground";

export default function CoreLeftValues({
  title = "Core Values",
  description = "Building the future with innovation and integrity.",
  iconClass = "uil-rocket",
  imageSrc = "/assets/img/illustrations/i7.png",
  imageAlt = "Core Values Illustration",
  features = [],
  imageRight = true,
  showGradient = false,
  children,
}) {
  // 1. จัดการโทนสีตามโหมด (Gradient vs White)
  const textColor = showGradient ? "text-[#343f52]" : "text-[#343f52]";
  const descColor = showGradient ? "text-[#343f52]" : "text-[#343f52]";
  const featureText = showGradient ? "text-[#343f52]" : "text-[#343f52]";
  const iconColor = showGradient ? "text-[#343f52]" : "text-[#343f52]";

  // 2. ปรับปรุงสี Mesh Gradient ให้ดูแพงขึ้น (ฟุ้งและโปร่งแสง)
  const backgroundStyle = {
    background: showGradient
      ? `radial-gradient(at 0% 0%, #C4F2E7 0px, transparent 60%), 
         radial-gradient(at 100% 0%, #C4F2E7 0px, transparent 60%), 
         radial-gradient(at 100% 0%, #ffffff 0px, transparent 60%),
         radial-gradient(at 0% 100%, #ffffff 0px, transparent 60%),
         linear-gradient(135deg, #ffffff 0%, #ffffff 100%)` // ใช้ Dark Mode เมื่อเปิด Gradient
      : "#ffffff",
    position: "relative",
    transition: "all 0.5s ease",
  };

  const grainStyle = {
    position: "absolute",
    inset: 0,
    opacity: 0.05,
    pointerEvents: "none",
    zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <section className="relative overflow-hidden py-24" style={backgroundStyle}>
      {/* ชั้น Grid: สีขาวจางๆ เมื่อเป็นโหมดเข้ม */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridBackground
          gridColor={showGradient ? "#ffffff" : "#ffffff"}
          gridSize="90px"
          lineThickness="1px"
          opacity={showGradient ? 0.5 : 0.3}
        />
      </div>

      {/* ชั้น Grain (Noise) */}
      {/* {showGrain && <div style={grainStyle} />} */}

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${imageRight ? "lg:flex-row-reverse" : ""}`}
        >
          {/* ฝั่งรูปภาพ */}
          <div className="w-full lg:w-1/2 group">
            <div className="relative">
              {/* แสง Glow หลังรูป */}
              <div
                className={`absolute -z-10 inset-0 ${showGradient ? "bg-[#37d5af]/20" : "bg-teal-100/40"} rounded-full blur-3xl scale-90 transition-transform duration-1000`}
              />

              {/* Perspective Container */}
              <div className="relative [perspective:1000px] flex justify-center">
                {/* 3D Wrapper */}
                <div
                  className={`
                      relative transition-transform duration-500 hover:scale-105 [transform-style:preserve-3d] rotate-x-6 
                      ${imageRight ? "rotate-y-[-16deg]" : "rotate-y-[16deg]"} hover:rotate-y-[0deg] cursor-pointer
                    `}
                >
                  {/* ตัวจอ Dashboard */}
                  <div className="relative w-[360px] md:w-[450px] h-[280px] bg-[#1e2530] rounded-2xl border-[6px] border-[#343f52] overflow-hidden z-10 [transform-style:preserve-3d]">
                    <div className="relative w-full h-full bg-white overflow-hidden">
                      <Image
                        className="w-full h-full object-contain"
                        src={imageSrc}
                        alt={imageAlt}
                        width={800}
                        height={621}
                        priority
                      />
                      {/* Overlay แสงสะท้อน */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* --- บล็อกข้อความที่พุ่งออกมา (Floating Cards) --- */}

                  {/* บล็อกที่ 1: พุ่งออกมาด้านซ้ายบน */}
                  <div className="absolute -top-6 -left-12 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl z-20 border border-white/20 transition-transform duration-700 [transform:translateZ(80px)] group-hover:[transform:translateZ(120px)_translateX(-10px)]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-gray-800">
                        REAL-TIME DATA
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-600 mt-1">
                      <i className="uil uil-chart-line !text-md"></i> +24%
                    </p>
                  </div>

                  {/* บล็อกที่ 2: พุ่งออกมาด้านขวาล่าง */}
                  <div className="absolute -bottom-4 -right-10 p-4 bg-[#1e2530]/95 backdrop-blur-md rounded-2xl shadow-2xl z-20 border border-white/10 transition-transform duration-700 [transform:translateZ(100px)] group-hover:[transform:translateZ(150px)_translateX(15px)]">
                    <div className="text-[10px] text-gray-400 mb-1">
                      Total Revenue
                    </div>
                    <div className="text-lg font-bold text-white">
                      $42,500.00
                    </div>
                  </div>

                  {/* --- ขาตั้งจอ --- */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-10 bg-[#2d3748] rounded-b-md border-x-2 border-black/10 -z-10"></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-3 bg-[#343f52] rounded-full border-b-2 border-black/20 -z-10"></div>
                </div>

                {/* Shadow บนพื้น */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 md:w-64 h-5 bg-black/20 blur-2xl rounded-[100%] -z-20"></div>
              </div>
            </div>
          </div>

          {/* ฝั่งเนื้อหา */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 !mb-2">
                {iconClass && (
                  <div
                    className={` rounded-xl flex items-center justify-center`}
                  >
                    <i className={`uil ${iconClass} ${iconColor} text-xl `} />
                  </div>
                )}
                <span
                  className={`text-xl font-bold tracking-tight ${textColor}`}
                >
                  {title}
                </span>
              </div>

              <p className={`text-[18px] leading-relaxed !mb-2 ${descColor}`}>
                {description}
              </p>

              <ul className="grid grid-cols-1 gap-4">
                {features.map((item, idx) => (
                  <FeatureItem
                    key={idx}
                    text={typeof item === "string" ? item : item.text}
                    textColor={featureText}
                    iconColor={iconColor}
                    icon={
                      typeof item === "object" && item.icon
                        ? item.icon
                        : "uil-check-circle"
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

const FeatureItem = ({ text, icon, textColor, iconColor }) => (
  <li className="flex items-start gap-2 group">
    <div className={`flex-shrink-0 mt-1 transition-transform ${iconColor}`}>
      <i className={`uil ${icon} text-md text-[#2bc29d]`} />
    </div>
    <span className={`${textColor} font-medium text-[16px] leading-7`}>
      {text}
    </span>
  </li>
);
