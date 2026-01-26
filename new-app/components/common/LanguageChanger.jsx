"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelect({ color = "#5eb9f0" }) {
  const pathname = usePathname();
  const router = useRouter();

  // 1. กำหนดโครงสร้างข้อมูลภาษา
  const languageConfig = {
    th: {
      code: "th",
      label: "TH",
      name: "ภาษาไทย",
      flag: "https://flagcdn.com/w40/th.png",
    },
    en: {
      code: "en",
      label: "EN",
      name: "English",
      flag: "https://flagcdn.com/w40/gb.png",
    },
  };

  const languageCodes = ["th", "en"];
  const [currentLanguage, setCurrentLanguage] = useState("th");
  const [isOpen, setIsOpen] = useState(false);

  // 2. ตรวจสอบภาษาจาก URL (Pathname) เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split("/");
      const locale = segments[1]; // ดึง segment แรกหลัง /
      if (languageCodes.includes(locale)) {
        setCurrentLanguage(locale);
      }
    }
  }, [pathname]);

  // 3. ฟังก์ชันสร้าง URL สำหรับภาษาใหม่
  const getRedirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; // แทนที่ค่าเดิมด้วย locale ใหม่
    return segments.join("/");
  };

  // 4. ฟังก์ชันจัดการเมื่อเปลี่ยนภาษา
  const handleLanguageChange = (e, locale) => {
    e.preventDefault();

    // บันทึก Cookie
    if (typeof window !== "undefined") {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }

    // เปลี่ยน URL ไปยัง Path ของภาษานั้นๆ
    const newPath = getRedirectedPathname(locale);
    router.push(newPath);

    setCurrentLanguage(locale);
    setIsOpen(false);
  };

  const activeLangData =
    languageConfig[currentLanguage] || languageConfig["th"];

  return (
    <div
      className="nav-item dropdown relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        className="nav-link dropdown-toggle !flex items-center gap-2"
        href="#"
        role="button"
        style={{ color: isOpen ? color : "inherit" }}
        onClick={(e) => e.preventDefault()}
      >
        <img
          src={activeLangData.flag}
          alt={activeLangData.label}
          className="w-5 h-auto rounded-sm object-cover"
        />
        <span className="font-medium uppercase">{activeLangData.label}</span>
      </a>

      <ul
        className={`dropdown-menu transition-all duration-300 transform ${
          isOpen
            ? "show opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
        style={{
          display: "block",
          position: "absolute",
          top: "100%",
          left: "0px",
          margin: 0,
          paddingTop: "0px", // ช่องว่างเพื่อให้เมาส์เลื่อนจากปุ่มไปเมนูได้ (Invisible bridge)
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          zIndex: 1000,
        }}
      >
        <div className="bg-white rounded-xl py-1 min-w-[140px] overflow-hidden">
          {languageCodes.map((code) => (
            <li key={code}>
              <a
                href="#"
                onClick={(e) => handleLanguageChange(e, code)}
                className="flex items-center gap-3 px-4 py-2.5 transition-all duration-200"
                style={{
                  color: currentLanguage === code ? color : "#4b5563",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8fafc";
                  e.currentTarget.style.color = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  if (currentLanguage !== code)
                    e.currentTarget.style.color = "#4b5563";
                }}
              >
                <img
                  src={languageConfig[code].flag}
                  alt={code}
                  className="w-5 h-3.5 rounded-sm"
                />
                <span className="text-sm font-semibold">
                  {languageConfig[code].name}
                </span>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
