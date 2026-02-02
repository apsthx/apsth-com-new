"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Button = ({
  children,
  color = "teal",
  href,
  onClick,
  className = "",
  target = "_self",
  rounded = "full",
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const palette = {
    blue: { base: "#3b73e1", hover: "#2d5eb8" },
    yellow: { base: "#f0a51b", hover: "#d99214" },
    orange: { base: "#f0663d", hover: "#d9552b" },
    red: { base: "#d93d4d", hover: "#bc2f3d" },
    pink: { base: "#cf5582", hover: "#b5466f" },
    purple: { base: "#9265cf", hover: "#7c51b8" },
    indigo: { base: "#6570e0", hover: "#5059c2" },
    sky: { base: "#4ba9cd", hover: "#3a8eaf" },
    teal: { base: "#1bb591", hover: "#159476" },
    green: { base: "#01c965", hover: "#01a854" },
    magenta: { base: "#d152a5", hover: "#b6408d" },
    azure: { base: "#51a3e5", hover: "#3a88c7" },
    violet: { base: "#6b60db", hover: "#554bb8" },
    dark: { base: "#343f52", hover: "#1a1f24" },
    gray: { base: "#EFF1F5", hover: "#e2e5eb" },
    white: { base: "#fcfcfc", hover: "#f0f0f0" },
  };

  const roundedClasses = {
    none: "!rounded-none",
    sm: "!rounded-sm",
    md: "!rounded-md",
    lg: "!rounded-lg",
    xl: "!rounded-xl",
    "2xl": "!rounded-2xl",
    "3xl": "!rounded-3xl",
    full: "!rounded-full",
  };

  const selectedColor = palette[color] || palette.blue;
  const selectedRounded = roundedClasses[rounded] || roundedClasses.full;

  // ปรับสีตัวอักษร: สีเทา (gray) และสีขาว (white) ให้ใช้ตัวหนังสือเข้ม
  const textColor =
    color === "white" || color === "gray" ? "#343f52" : "#ffffff";

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (href) {
      if (target === "_blank") {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }
  };

  const sharedStyles = {
    backgroundColor: isHovered ? selectedColor.hover : selectedColor.base,
    color: textColor,
    fontSize: "13px",
    letterSpacing: "0.7px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.25s ease, transform 0.1s ease",
  };

  return (
    <button
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`!font-medium !tracking-wide px-5 py-2 leading-tight active:scale-95 outline-none ${selectedRounded} ${className}`}
      style={sharedStyles}
    >
      {children}
    </button>
  );
};

export default Button;
