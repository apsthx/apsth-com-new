import React from "react";

/**
 * SquareFeatureCard Component
 * @param {Object} item - ข้อมูลของแต่ละฟีเจอร์ (icon, text, badge, badgeColor, sparkle)
 */
export default function SquareFeatureCard({ item }) {
  if (!item) return null;

  return (
    <div
      data-cues="slideInDown"
      data-delay={300}
      className="group relative aspect-[4/5] min-h-[180px] w-full rounded-md bg-[#45c4a0] text-white flex flex-col items-center justify-between py-3 px-2 sm:p-4 text-center overflow-hidden border border-white/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-1"
    >
      {/* Ribbon Badge */}
      {item.badge && (
        <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden z-10">
          <div
            className={`absolute top-1.5 -left-7 w-20 py-0.5 text-[10px] font-medium -rotate-45 shadow-sm text-center uppercase tracking-tighter ${
              item.badgeColor || "bg-yellow-400 text-black"
            }`}
          >
            {item.badge}
          </div>
        </div>
      )}

      {/* Sparkle Icons (Uncomment if needed) */}
      {item.sparkle && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <i className="uil uil-star absolute top-2 right-2 text-[10px] animate-pulse" />
          <i className="uil uil-star absolute bottom-4 left-2 text-[8px] animate-pulse delay-75" />
        </div>
      )}

      {/* ส่วนบน: Icon Section */}
      <div className="mt-2 flex-shrink-0">
        <i
          className={`uil ${item.icon} text-3xl sm:text-2xl transition-transform duration-500 group-hover:scale-110 block opacity-90`}
        />
      </div>

      {/* ส่วนกลาง: Text Section */}
      <div className="flex-1 flex items-center justify-center px-1">
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.3] font-light whitespace-pre-line notranslate"
          translate="no"
        >
          {item.text}
        </p>
      </div>

      {/* ส่วนล่าง: Spacing Footer */}
      <div className="h-1 w-8 bg-white/20 rounded-full group-hover:w-12 transition-all duration-300" />
    </div>
  );
}
