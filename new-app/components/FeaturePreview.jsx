import React from "react";
import Button from "@/components/common/Button";
import { useTranslation } from "@/app/i18n";
import Image from "next/image";
import { Sparkles, Zap, Lock, BarChart3 } from "lucide-react";
import {
  getApsxWhyFeatures,
  getFeedbackData,
  getSystemFunctions,
  getClinicReports,
  getWhyApsx,
  getFeaturesData,
} from "@/data/features";
import Link from "next/link";
import FeatureCarousel from "./common/FeatureCarousel";

export default async function FeaturePreview({ lng }) {
  const { t } = await useTranslation(lng);
  const whyFeaturesItems = getApsxWhyFeatures(t);
  const feedbackItems = getFeedbackData(t, lng);
  const functionItems = getSystemFunctions(t);
  const reportItems = getClinicReports(t);
  const featuresItems = getFeaturesData(t, lng);
  const whyApsxItems = getWhyApsx(t);

  const showcaseSlides = [
    {
      title: "Interface ที่สวยงาม",
      description: "ออกแบบให้ใช้งานง่าย สวยงาม และทันสมัย",
      image: "/assets/img/showcaseSlides/showcaseSlide1.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile-First Design",
      description: "รองรับทุกอุปกรณ์ ทั้ง Mobile, Tablet และ Desktop",
      image: "/assets/img/showcaseSlides/showcaseSlide2.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Dark Mode Support",
      description: "สลับโหมดสีได้ตามความชอบ",
      image: "/assets/img/showcaseSlides/showcaseSlide3.png",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Customizable Themes",
      description: "ปรับแต่งธีมและสีได้ตามต้องการ",
      image: "/assets/img/showcaseSlides/showcaseSlide4.png",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Customizable Themes",
      description: "ปรับแต่งธีมและสีได้ตามต้องการ",
      image: "/assets/img/showcaseSlides/showcaseSlide5.png",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Customizable Themes",
      description: "ปรับแต่งธีมและสีได้ตามต้องการ",
      image: "/assets/img/showcaseSlides/showcaseSlide6.png",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Customizable Themes",
      description: "ปรับแต่งธีมและสีได้ตามต้องการ",
      image: "/assets/img/photos/bg26.jpg",
      color: "from-pink-500 to-rose-500",
    },
  ];
  return (
    <section
      id="feature_preview"
      className="relative overflow-hidden py-6 !mt-14 bg-[#ffff] "
    >
      <section className="relative z-10 pt-2 pb-4 px-0 sm:px-6 lg:px-0">
        <div className="mx-auto">
          <div className="relative max-w-5xl mx-auto mb-6">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl border border-[#a4aec633] overflow-hidden">
              <FeatureCarousel slides={showcaseSlides} />
            </div>
          </div>
        </div>
      </section>
      <div
        data-cues="slideInDown"
        data-delay={300}
        className="container flex flex-wrap items-center justify-center"
      >
        <section className="wrapper !bg-[#ffffff]">
          {/* ส่วนหัวข้อ (ถ้ามี) */}
          <div className="mb-6">
            <div className="flex items-center justify-start text-start gap-2 text-slate-800 font-medium">
              <i className="uil uil-comments !text-xl text-[#1bb59b]" />
              <h2 className="!text-xl !font-medium text-[#343f52]">
                APSX Platform มีอะไร
              </h2>
            </div>
            <p className="text-slate-500 !text-[18px]">
              {t(
                "home:why_apsx.what_new_apsx.title",
                "APSX Platform ออกแบบมาเพื่อช่วยเจ้าของธุรกิจจัดการบริหารงาน ได้อย่างลงตัว",
              )}
              {t(
                "home:why_apsx.what_new_apsx.description",
                "ระบบครอบคลุมทุกด้านของธุรกิจ ไม่ว่าจะเป็นการจัดการระบบภายใน การเงิน การตลาด การขาย การสต๊อก ค่าใช้จ่าย ค่าคอมมิชชั่น และอื่นๆ ครบจบในแพลตฟอร์มเดียว",
              )}
            </p>
          </div>
          {/* การจัด Layout แบบสลับความสูง (Masonry Style) */}
          <div className="columns-1 md:columns-3 gap-8 space-y-8">
            {whyFeaturesItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid flex flex-col group cursor-pointer"
              >
                {/* ส่วนรูปภาพ - จำลองขนาดสลับกันเหมือนในรูป 500x400 และ 750x700 */}
                {/* ส่วนเนื้อหาใต้รูป */}
                <div className="px-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600 mb-1 block">
                    <i
                      className={`uil ${item.icon} text-[#1bb59b] text-lg`}
                    ></i>
                  </span>
                  <h3 className="!text-sm !font-medium text-slate-800 leading-tight !mb-0">
                    {item.title}
                  </h3>
                  <p className="!text-xs text-slate-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="!mt-10">
            <div className="flex gap-2 !items-center !mb-0">
              <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
              <h3 className="!mt-2 !text-lg !font-medium text-[#343f52]">
                {t("clinic:system_functions.title", "ฟังก์ชันของระบบ")}
              </h3>
            </div>

            <div className="flex flex-wrap mx-[-15px]">
              {functionItems.map((item, index) => (
                <div key={item.id} className="w-full  px-[15px]">
                  <div className="flex items-start p-1 bg-white border-[#e7eaf3] transition-all duration-300   group cursor-default">
                    <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                    <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] transition-colors duration-300 leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 !items-center !mt-6">
              <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
              <h3 className="!mt-2 !text-lg !font-medium text-[#343f52] mb-2">
                {t("clinic:all_reports.title", "รายงานทั้งหมด")}
              </h3>
            </div>

            <div className="flex flex-wrap mx-[-15px]">
              {reportItems.map((item, index) => (
                <div key={item.id} className="w-full px-[15px] lg:w-1/2">
                  <div className="flex items-center p-1 transition-all duration-300 group h-full cursor-default">
                    <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                    <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] leading-tight transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
