"use client";

import React from "react";
import { pricingPlans } from "@/data/pricing";

export default function PackageTable({ translations }) {
  const t = translations || {};

  // ใช้ PRO+ เป็นฐานเพราะมีฟีเจอร์ครบที่สุดเพื่อสร้างแถว
  const allFeatures = pricingPlans[2].features;

  const limitFeatures = allFeatures.filter(
    (f) => f.value !== undefined || f.key.includes("free_"),
  );

  const systemFeatures = allFeatures.filter(
    (f) =>
      !f.isAddOn &&
      f.value === undefined &&
      !f.key.includes("free_") &&
      f.key !== "email_document" &&
      f.key !== "online_reg_line",
  );

  const conditionalFeatures = allFeatures.filter(
    (f) => f.key === "email_document" || f.key === "online_reg_line",
  );

  const addOnFeatures = allFeatures.filter((f) => f.isAddOn);

  return (
    <div className="relative bg-[#fefefe] pb-10 lg:pb-20">
      <section className="relative z-10 wrapper !bg-transparent w-full">
        <div className="mx-auto px-4 md:px-6 !max-w-[1200px]">
          <div className="mt-10 overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 bg-white/50">
                    <th className="p-8 min-w-[320px]">
                      <h3 className="!text-sm !font-medium text-[#343f52] tracking-tight">
                        เปรียบเทียบแพ็กเกจ
                      </h3>
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                        Feature Comparison
                      </p>
                    </th>
                    {pricingPlans.map((plan, index) => (
                      <th key={index} className="p-6 text-start min-w-[200px]">
                        <h4 className="!text-xs !font-medium !text-[#02b3b3] uppercase tracking-[0.2em] !mb-0">
                          {plan.title}
                        </h4>
                        <div className="flex flex-col">
                          <div className="flex items-baseline">
                            <span className="!text-lg font-medium text-[#343f52]">
                              ฿{plan.price1yr.toLocaleString()}
                            </span>
                            <span className="text-gray-400 text-[14px] font-medium ml-1">
                              /{t.billingCycles?.["1yr"] || "ปี"}
                            </span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="text-[13px]">
                  <SectionHeader
                    label="Usage Limits & Services"
                    color="text-emerald-500"
                    bgColor="bg-emerald-50/50"
                  />
                  {limitFeatures.map((f, index) => (
                    <FeatureRow
                      key={f.key}
                      featureKey={f.key}
                      t={t}
                      plans={pricingPlans}
                      index={index}
                    />
                  ))}

                  <SectionHeader
                    label="Standard System Features"
                    color="text-[#02b3b3]"
                    bgColor="bg-cyan-50/30"
                  />
                  {systemFeatures.map((f, index) => (
                    <FeatureRow
                      key={f.key}
                      featureKey={f.key}
                      t={t}
                      plans={pricingPlans}
                      index={index}
                    />
                  ))}
                  {conditionalFeatures.map((f, index) => (
                    <FeatureRow
                      key={f.key}
                      featureKey={f.key}
                      t={t}
                      plans={pricingPlans}
                      index={index}
                    />
                  ))}

                  <SectionHeader
                    label="Advanced Systems (Optional Add-ons)"
                    color="text-orange-500"
                    bgColor="bg-orange-50/40"
                  />
                  {addOnFeatures.map((f, index) => (
                    <FeatureRow
                      key={f.key}
                      featureKey={f.key}
                      t={t}
                      plans={pricingPlans}
                      index={index}
                      isAddOnRow
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ label, color, bgColor }) {
  return (
    <tr className={bgColor}>
      <td
        colSpan={4}
        className={`!text-[#1bb59b] bg-[#ffffff] p-3 px-8 text-[12px] font-medium uppercase tracking-[0.2em] border-y border-gray-100 ${color}`}
      >
        {label}
      </td>
    </tr>
  );
}

function FeatureRow({ featureKey, t, plans, isAddOnRow = false, index }) {
  // ใช้ index ในการเช็คเพื่อสลับสีแถว (เลขคู่เป็นสีขาว เลขคี่เป็นสีเทาจาง/เขียวจาง)
  const rowBgColor = index % 2 !== 0 ? "!bg-[#fcfcfc]" : "!bg-white";

  return (
    <tr
      className={`group !border-b !border-[#f5f5f6] ${rowBgColor} hover:bg-[#02b3b30a] transition-colors`}
    >
      <td className="!p-4 !px-8">
        <div className="flex items-center gap-2">
          <span
            className={`!font-medium text-[0.8rem] ${isAddOnRow ? "text-slate-500" : "text-slate-700"}`}
          >
            {t.features?.[featureKey] || featureKey}
          </span>
        </div>
      </td>
      {plans.map((plan, idx) => {
        const feature = plan.features.find((f) => f.key === featureKey);
        const isIncluded = feature?.included === true;

        return (
          <td key={idx} className="p-4 text-center">
            <div className="flex justify-start items-center gap-2 px-2">
              {isIncluded ? (
                <>
                  <div className="w-3 h-3 rounded-full bg-[#1bb59b] text-[#ffff] flex items-center justify-center shrink-0">
                    <svg
                      className="w-1.5 h-1.5 "
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
                  </div>
                  {feature.value && (
                    <span className="text-[12px] font-bold text-slate-800">
                      {feature.value}{" "}
                      <span className="text-[14px] font-light !text-[#343f52] ml-0.5">
                        {t.units?.[featureKey]}
                      </span>
                    </span>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#343f52] text-[#ffff] flex items-center justify-center shrink-0">
                    <svg
                      className="w-1.5  h-1.5"
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
                  </div>
                  {isAddOnRow && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[14px] font-medium uppercase tracking-tighter whitespace-nowrap">
                      {t.addOnLabel || "ADD ON"}
                    </span>
                  )}
                </div>
              )}
            </div>
          </td>
        );
      })}
    </tr>
  );
}
