import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import { getApiLists } from "@/data/docs";

export default async function APIIntegration({ lng }) {
  const { t } = await useTranslation(lng);
  const apiListItems = getApiLists(t);

  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pt-20 pb-16 xl:pt-28 xl:pb-24 lg:pt-28 md:pt-28">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          {/* ฝั่งรูปภาพ - Futuristic Tech Style */}
          <div className="xl:w-6/12 lg:w-6/12 w-full xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full xl:order-2 lg:order-2 mb-10 lg:mb-0">
            <div className="relative group">
              {/* 1. แสง Neon Glow ด้านหลัง - ใช้ 2 สีผสมกันเพื่อความล้ำ */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#2bc29d]/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              {/* 2. กรอบรูปภาพแบบล้ำๆ - เพิ่ม Gradient Border */}
              <div className="relative p-[1px] bg-gradient-to-br from-[#2bc29d]/50 to-transparent rounded-[2.2rem] overflow-hidden transition-all duration-500">
                <figure className="m-0 p-2 bg-white/80 backdrop-blur-md rounded-[2.1rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                  <Image
                    className="w-full h-auto rounded-[1.6rem] transform transition-transform duration-1000"
                    src="/assets/img/api/saas-img-1.jpg"
                    alt="API System Overview"
                    width={800}
                    height={538}
                    priority
                  />

                  {/* 3. Overlay เส้น Grid ทับรูปภาพบางๆ (Tech Look) */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(#2bc29d 1px, transparent 1px), linear-gradient(90deg, #2bc29d 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </figure>
              </div>
              <div className="absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-[#2bc29d] to-transparent opacity-50 hidden md:block"></div>
            </div>
          </div>

          {/* ฝั่งเนื้อหา */}
          <div className="xl:w-6/12 lg:w-6/12 w-full xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-lg bg-[#00b8b8]/10 text-[#00b8b8] text-[0.7rem] font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bc29d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2bc29d]"></span>
              </span>
              Developer Ready
            </div>

            <h2 className="text-[2rem] xl:text-[2.4rem] font-black text-[#343f52] !leading-[1.2] mb-4">
              {t("api:title", "คู่มือการใช้งาน (API Integration)")}
            </h2>

            <p className="text-[1rem] text-[#60697b] leading-relaxed mb-8 opacity-90 border-l-4 border-[#2bc29d]/20 pl-4">
              {t(
                "api:description",
                "ยกระดับการจัดการคลินิกด้วยการเชื่อมต่อข้อมูลผ่านระบบ API",
              )}
            </p>

            <div className="grid grid-cols-1 mb-0">
              {apiListItems.map((item, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex items-start p-1 rounded-xl transition-all duration-300 hover:bg-slate-50">
                    <i className="uil uil-check text-[0.9rem] font-bold"></i>
                    <span className="ml-3 text-[0.85rem] font-medium text-[#464c58] leading-snug">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 !mt-6 !mb-16 xl:!mb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://documenter.getpostman.com/view/40820836/2sB3QDwDGH"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl !text-[#2bc29d] font-medium text-[0.9rem] transition-all duration-300  hover:-translate-y-1"
              >
                <span>View Documentation</span>
                <i className="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
