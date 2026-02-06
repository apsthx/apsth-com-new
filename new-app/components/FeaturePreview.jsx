import React from "react";
import { useTranslation } from "@/app/i18n";
import { getApsxWhyFeatures } from "@/data/features";
import Link from "next/link";
import FeatureCarousel from "./common/FeatureCarousel";

export default async function FeaturePreview({ lng }) {
  const { t } = await useTranslation(lng);
  const whyFeaturesItems = getApsxWhyFeatures(t);

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
                {t("home:why_apsx.header.title", "APSX Platform มีอะไร?")}
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
        </section>
      </div>
    </section>
  );
}
