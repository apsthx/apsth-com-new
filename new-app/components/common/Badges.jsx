import React from "react";

const Badge = ({ children, color = "blue", className = "" }) => {
  // รวม Palette สี Solid ทั้งหมดที่คุณให้มา
  const palette = {
    blue: "#3b73e1", // เข้มขึ้นนิดให้ดูหนักแน่นขึ้น
    yellow: "#f0a51b", // ลดความจ้าให้เป็นเหลืองทองที่นิ่งขึ้น
    orange: "#f0663d", // ส้มที่ดูเข้มข้นขึ้น ไม่จ้าจนแสบตา
    red: "#d93d4d", // แดงที่ดูพรีเมียมขึ้น
    pink: "#cf5582", // ชมพูเข้มขึ้นเล็กน้อย
    purple: "#9265cf", // ม่วงที่ดูนวลและลึกขึ้น
    indigo: "#6570e0", // ครามที่ลดความนีออนลง
    sky: "#4ba9cd", // ฟ้าที่ดูเย็นและลึกขึ้นกว่าเดิม
    teal: "#1bb591", // เขียวมิ้นต์ที่ดูแน่นขึ้น
    green: "#01c965", // เขียวที่ดูเป็นธรรมชาติและสบายตา
    magenta: "#d152a5", // บานเย็นที่ดูซอฟต์ลงนิดนึง
    azure: "#51a3e5", // ฟ้า Azure ที่มีมิติมากขึ้น
    violet: "#6b60db", // ม่วงน้ำเงินที่ดูเข้มขึ้นเล็กน้อย
    dark: "#252b31", // ปรับ Dark ให้ดูลึกขึ้นอีกนิด
    gray: "#9299a6", // เทาที่ดูนิ่งและเป็นกลางมากขึ้น
    white: "#fcfcfc", // ใช้สีขาวเกือบสนิท เพื่อให้ดูละมุนกับสีอื่น
  };
  const backgroundColor = palette[color] || palette.blue;

  // ปรับสีตัวอักษรอัตโนมัติ (ถ้าพื้นหลังขาวให้ใช้ตัวหนังสือเข้ม)
  const textColor = color === "white" ? "#343f52" : "#ffffff";

  return (
    <span
      className={`!font-medium !tracking-wide badge opacity-100 !rounded-full px-1.5  leading-[1.2] inline-block ${className}`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: "12px",
        letterSpacing: "0.7px",
        verticalAlign: "middle", // ช่วยให้จัดวางคู่กับตัวอักษรอื่นได้สวยขึ้น
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
