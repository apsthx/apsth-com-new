"use client";
import { useEffect, useState } from "react";

export default function GridBackground({
  gridColor = "#37d5af", // สีของเส้นตาราง
  gridSize = "80px", // ขนาดช่องตาราง
  lineThickness = "1px", // ความหนาของเส้น
  opacity = 0.4, // ความโปร่งใสรวม
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
        opacity: opacity,
        backgroundImage: `
          linear-gradient(to right, ${gridColor} ${lineThickness}, transparent ${lineThickness}),
          linear-gradient(to bottom, ${gridColor} ${lineThickness}, transparent ${lineThickness})
        `,
        backgroundSize: `${gridSize} ${gridSize}`,
        // Parallax Effect: ขยับตาม Scroll
        backgroundPosition: `center ${scrollY * 0.15}px`,

        /* เทคนิคแสดงครึ่งเดียวและ Fade Down:
           - เริ่มที่ดำ (ชัด) ที่ 0% (บนสุด)
           - ค่อยๆ จางไปจนเป็น transparent (หายไป) ที่ 50% (ครึ่งจอ)
        */
        maskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 30%, transparent 50%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 30%, transparent 50%)",

        height: "150%",
        top: "-25%",
        width: "100%",
      }}
    />
  );
}
