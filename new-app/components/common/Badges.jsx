import React from "react";

const Badge = ({ children, color = "blue", className = "" }) => {
  // รวม Palette สี Solid ทั้งหมดที่คุณให้มา
  const palette = {
    blue: "rgba(63,120,224)",
    yellow: "rgba(250,183,88)",
    orange: "rgba(247,139,119)",
    red: "rgba(226,98,107)",
    pink: "rgba(209,107,134)",
    purple: "rgba(160,124,197)",
    indigo: "rgba(116,126,209)",
    sky: "rgba(84,168,199)",
    teal: "rgba(69,196,160)",
    green: "rgba(124,183,152)",
    magenta: "rgba(230,104,179)",
    azure: "rgba(94,185,240)",
    violet: "rgba(96,93,186)",
    dark: "#21262c",
    gray: "rgba(148,153,163)",
    white: "rgba(255,255,255)",
  };

  const backgroundColor = palette[color] || palette.blue;

  // ปรับสีตัวอักษรอัตโนมัติ (ถ้าพื้นหลังขาวให้ใช้ตัวหนังสือเข้ม)
  const textColor = color === "white" ? "#343f52" : "#ffffff";

  return (
    <span
      className={`badge opacity-100 !rounded-full px-1.5  leading-[1.2] inline-block ${className}`}
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
