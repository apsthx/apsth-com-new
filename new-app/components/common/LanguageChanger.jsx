"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Check, ChevronDown } from "lucide-react";

export default function LanguageChanger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("th");

  const languages = [
    { code: "th", name: "ภาษาไทย", flag: "🇹🇭" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  useEffect(() => {
    if (pathname) {
      const segments = pathname.split("/");
      const locale = segments[1];
      if (languages.some((lang) => lang.code === locale)) {
        setCurrentLanguage(locale);
      }
    }
  }, [pathname]);

  const redirectedPathname = (locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLanguageChange = (locale) => {
    if (typeof window !== "undefined") {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
    setIsOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative inline-block text-left">
      {/*ปุ่มหลัก: เน้นขนาดเล็กและกะทัดรัด (Compact) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300
          bg-[oklch(85.5%_0.138_181.071)/0.1] hover:bg-[oklch(85.5%_0.138_181.071)/0.2]
          border border-[oklch(85.5%_0.138_181.071)/0.3] group`}
      >
        <Globe className="w-4 h-4 text-[oklch(60%_0.15_181)]" />
        <span className="text-[0.8rem] font-semibold text-[#343f52]">
          {currentLang?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 text-gray-400
            ${isOpen ? "rotate-180" : "group-hover:translate-y-0.5"}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-40 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
            <div className="p-1.5">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={redirectedPathname(lang.code)}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentLanguage === lang.code
                      ? "bg-[oklch(85.5%_0.138_181.071)/0.15] text-[oklch(55%_0.15_181)]"
                      : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-[0.85rem] font-medium">
                      {lang.name}
                    </span>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
