"use client";
import { useEffect, useState } from "react";

export default function GridBackground({
  gridColor = "#37d5af", // สีของเส้นตาราง
  fromColor = "#0f172a", // สีเริ่มต้นของ Background (เช่น สีน้ำเงินเข้ม)
  toColor = "#1e293b", // สีปลายทางของ Background
  direction = "to bottom", // ทิศทางการไล่สี (to bottom, to right, 45deg ฯลฯ)
  gridSize = "80px",
  lineThickness = "1px",
  opacity = 0.3,
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        // ส่วนที่ 1: พื้นหลังไล่เฉดสี
        background: `linear-gradient(${direction}, ${fromColor}, ${toColor})`,
        height: "100%",
      }}
    >
      {/* ส่วนที่ 2: เส้นตาราง (Grid Layer) */}
      <div
        className="absolute inset-0 w-full h-[150%]"
        style={{
          opacity: opacity,
          backgroundImage: `
            linear-gradient(to right, ${gridColor} ${lineThickness}, transparent ${lineThickness}),
            linear-gradient(to bottom, ${gridColor} ${lineThickness}, transparent ${lineThickness})
          `,
          backgroundSize: `${gridSize} ${gridSize}`,
          backgroundPosition: `center ${scrollY * 0.15}px`,

          // การ Mask เพื่อให้ตารางค่อยๆ จางหายไป
          WebkitMaskImage: `linear-gradient(to bottom, 
            black 0%, 
            rgba(0, 0, 0, 0.5) 40%, 
            transparent 70%
          )`,
          maskImage: `linear-gradient(to bottom, 
            black 0%, 
            rgba(0, 0, 0, 0.5) 40%, 
            transparent 70%
          )`,
        }}
      />

      {/* ส่วนที่ 3: แสง Glow ฟุ้งๆ (เพิ่มมิติ) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${gridColor}22 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
