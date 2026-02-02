"use client";

export default function GridBackground({
  gridColor = "#37d5af", // สีของเส้นตาราง
  gridSize = "80px", // ขนาดช่องตาราง
  lineThickness = "1px", // ความหนาของเส้น
  opacity = 0.4, // ความโปร่งใสรวม
}) {
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
        // ตั้งค่าให้อยู่ตรงกลางนิ่งๆ ไม่ขยับตาม Scroll
        backgroundPosition: "center center",

        /* เทคนิค Fade Down: ให้ตารางค่อยๆ จางหายไปด้านล่าง */
        maskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 30%, transparent 60%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 30%, transparent 60%)",

        width: "100%",
        height: "100%", // ปรับกลับเป็น 100% เพราะไม่ต้องเผื่อระยะเลื่อนแล้ว
        top: 0,
      }}
    />
  );
}
