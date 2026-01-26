"use client";

import React, { useState } from "react";
import Image from "next/image";
import { pricingPlans } from "@/data/pricing";

export default function Package({ translations }) {
  // ใช้ค่าเริ่มต้นจาก translations หรือ fallback เป็นอ็อบเจกต์ว่าง
  const t = translations || {};

  const [billingCycle, setBillingCycle] = useState("1yr");

  const getPrice = (plan, cycle) => {
    if (!plan) return 0;
    switch (cycle) {
      case "3mo":
        return plan.price3mo || 0;
      case "6mo":
        return plan.price6mo || 0;
      case "1yr":
        return plan.price1yr || 0;
      default:
        return plan.price1yr || 0;
    }
  };

  const getOldPrice = (plan, cycle) => {
    return plan[`oldPrice${cycle}`] || null;
  };

  const getLabel = (cycle) => {
    if (cycle === "3mo") return t.billingCycles?.["3mo"] || "/ 3 เดือน";
    if (cycle === "6mo") return t.billingCycles?.["6mo"] || "/ 6 เดือน";
    return t.billingCycles?.["1yr"] || "/ ปี";
  };

  return (
    <div className="relative  bg-[#fefefe] pb-10 lg:pb-32">
      {/* --- Background Effect --- */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-40 md:opacity-60 w-full">
        <Image
          className="animate-[pulse_10s_infinite_ease-in-out] mx-auto"
          alt="glow"
          src="/assets/img/photos/blurry.png"
          width={1600}
          height={1000}
          priority
        />
      </div>

      <section className="relative z-10 wrapper !bg-transparent w-full">
        <div className="container mx-auto px-4 md:px-6 !max-w-[1400px]">
          <div className="w-full flex flex-col items-center text-center mb-0">
            {/* --- Billing Switcher --- */}
            <div className="flex bg-gray-200/50 backdrop-blur-sm p-1.5 rounded-full mb-8 relative z-20 w-fit mx-auto border !border-[#e5f4fd] shadow-inner">
              {[
                { label: t.billingCycles?.["3mo"] || "3 เดือน", value: "3mo" },
                { label: t.billingCycles?.["6mo"] || "6 เดือน", value: "6mo" },
                { label: t.billingCycles?.["1yr"] || "1 ปี", value: "1yr" },
              ].map((item) => {
                const isActive = billingCycle === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => setBillingCycle(item.value)}
                    className={`relative px-8 py-2.5 rounded-full text-sm font-black transition-all duration-500 ease-out min-w-[100px]
                    ${isActive ? "!text-[#3f78e0] scale-105" : "text-gray-500 hover:text-gray-800"}`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-[-1] animate-in fade-in zoom-in duration-300" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => {
                const currentPrice = getPrice(plan, billingCycle);
                const oldPrice = getOldPrice(plan, billingCycle);
                const discountPercent = oldPrice
                  ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
                  : 0;

                return (
                  <div key={index} className="group">
                    <div className="h-full relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 overflow-hidden flex flex-col">
                      <div className="card-body p-6 md:p-8 flex flex-col items-center text-center h-full">
                        {/* --- ราคา --- */}
                        <div className="mb-4">
                          {oldPrice && (
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gray-400 line-through text-base decoration-red-400/60 decoration-2">
                                ฿{oldPrice.toLocaleString()}
                              </span>
                              <span className="!bg-[#fef4f2] !text-[#f78b77] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-red-100">
                                SAVE
                              </span>
                            </div>
                          )}
                          <span className="text-3xl font-black text-gray-800">
                            ฿{currentPrice.toLocaleString()}
                          </span>
                          <span className="text-gray-500 font-medium text-sm ml-1">
                            /{getLabel(billingCycle)}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold mb-6 !text-[#5eb9f0] uppercase tracking-[0.2em]">
                          {plan.title}
                        </h4>

                        {/* --- รายการฟีเจอร์ --- */}
                        <ul className="text-left space-y-4 mb-8 flex-grow w-full border-t border-gray-100 pt-6">
                          {plan.features.map((feature, idx) => {
                            const featureLabel =
                              translations.features[feature.key] || feature.key;

                            return (
                              <li
                                key={idx}
                                className="flex items-start gap-3 !text-[0.85rem]"
                              >
                                {/* ไอคอน (X สีแดงสำหรับ Add-on) */}
                                <div
                                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                    feature.included
                                      ? "bg-[#edf9f6] text-[#45c4a0]"
                                      : "bg-[#f5f5f6] text-[#9499a3]"
                                  }`}
                                >
                                  {feature.included ? (
                                    <svg
                                      className="w-3 h-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      strokeWidth="4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="w-2.5 h-2.5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      strokeWidth="4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  )}
                                </div>

                                {/* ข้อความและป้าย Add-on */}
                                <div
                                  className={`leading-snug ${feature.included ? "text-[#343f52] font-medium" : "text-gray-400 font-normal"}`}
                                >
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {feature.isAddOn && (
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#edf9f6] text-[#45c4a0] border border-[#e1f6f0] uppercase">
                                        {translations.addOnLabel}
                                      </span>
                                    )}
                                    <span>{featureLabel}</span>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
