"use client";

import React, { useState } from "react";
import Image from "next/image";
import { pricingPlans } from "@/data/pricing";

export default function Package({ translations }) {
  // คงสไตล์การรับค่า translations แบบเดิม
  const t = translations || {};

  // ล็อก billingCycle เป็น "1yr" โดยไม่ต้องใช้ Toggle Switcher
  const billingCycle = "1yr";

  const getPrice = (plan, cycle) => {
    if (!plan) return 0;
    return plan.price1yr || 0; // ล็อกให้ดึงแต่ 1yr
  };

  const getOldPrice = (plan, cycle) => {
    return plan.oldPrice1yr || null; // ล็อกให้ดึงแต่ oldPrice1yr
  };

  const getLabel = (cycle) => {
    return t.billingCycles?.["1yr"] || "/ ปี";
  };

  return (
    <div className="relative bg-[#fefefe] pb-10 lg:pb-20">
      {/* --- Background Effect (คงไว้เหมือนเดิม) --- */}
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
          {/* ตัดส่วน Billing Switcher ออกเพื่อให้ล็อกที่รายปีอย่างเดียว */}

          <div className="mt-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => {
                const currentPrice = getPrice(plan, billingCycle);
                const oldPrice = getOldPrice(plan, billingCycle);

                return (
                  <div key={index} className="group">
                    <div className="  h-full relative bg-white/40 backdrop-blur-xl !border border-[#a4aec633] shadow-xl rounded-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 overflow-hidden flex flex-col">
                      <div className="card-body p-6 md:p-8 flex flex-col items-center text-center h-full">
                        {/* --- ราคา (คงสไตล์เดิม) --- */}
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

                        <h4 className="!text-lg font-bold mb-6 !text-[#02b3b3] uppercase !tracking-[0.1em]">
                          {plan.title}
                        </h4>

                        {/* --- รายการฟีเจอร์ (คงสไตล์เดิมทั้งหมด) --- */}
                        <ul className="text-left space-y-4 mb-8 flex-grow w-full border-t border-gray-100 pt-6">
                          {plan.features.map((feature, idx) => {
                            const featureLabel =
                              translations.features?.[feature.key] ||
                              feature.key;

                            return (
                              <li
                                key={idx}
                                className="flex items-start gap-3 !text-[0.85rem]"
                              >
                                <div
                                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                    feature.included
                                      ? "bg-[#00b6b60e] text-[#00b6ad]"
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

                                <div
                                  className={`leading-snug ${feature.included ? "text-[#343f52] font-medium" : "text-gray-400 font-normal"}`}
                                >
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {feature.isAddOn && (
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#edf9f6] text-[#45c4a0] border border-[#e1f6f0] uppercase">
                                        {translations.addOnLabel}
                                      </span>
                                    )}

                                    <div className="flex items-baseline gap-1">
                                      <span>{featureLabel}</span>
                                      {feature.value && (
                                        <strong className="ml-1">
                                          {feature.value}
                                        </strong>
                                      )}
                                      {translations.units?.[feature.key] && (
                                        <span className="text-[14px] text-slate-500 font-normal ml-0.5">
                                          {translations.units[feature.key]}
                                        </span>
                                      )}
                                    </div>
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
