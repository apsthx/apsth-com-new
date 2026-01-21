"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Check } from "lucide-react";

export default function LanguageChanger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("th");

  const languages = [
    { code: "th", name: "", flag: "🇹🇭" },
    { code: "en", name: "", flag: "🇺🇸" }, 
  ];

  // ดึงภาษาปัจจุบันจาก pathname
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split("/");
      const locale = segments[1];
      if (languages.some(lang => lang.code === locale)) {
        setCurrentLanguage(locale);
      }
    }
  }, [pathname]);

  // ฟังก์ชันหา URL ใหม่
  const redirectedPathname = (locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // ฟังก์ชันบันทึกภาษา
  const handleLanguageChange = (locale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", locale);
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
    setIsOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium">{currentLang?.flag} {currentLang?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={redirectedPathname(lang.code)}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentLanguage === lang.code
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check className="w-5 h-5 text-blue-600" />
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