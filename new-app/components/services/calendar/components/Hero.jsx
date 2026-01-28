import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pt-20 pb-10 xl:pt-28 lg:pt-28 md:pt-24 !text-center !relative !font-medium !text-[#464c58] !tracking-wide overflow-hidden">
        {/* --- Grid Background Layer --- */}
        <div
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{
            backgroundImage: `
                linear-gradient(to right, #00B7B8 2px, transparent 1px),
                linear-gradient(to bottom, #00B7B8 2px, transparent 1px)
              `,
            backgroundSize: "80px 80px", // ปรับขนาดช่องตารางที่นี่
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)", // ทำให้ขอบจางลง
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] max-w-[900px] mx-auto !px-[15px] !text-center"
        >
          {/* 2. Headline: ใช้ฟอนต์น้ำหนัก Black และเล่นสีแบรนด์ที่คำสำคัญ */}
          <h2 className=" text-[1.8rem] md:text-[2.5rem] xl:!text-[2rem] font-black !leading-[1.2] !mb-6 text-[#343f52] tracking-tight">
            {t("calendar:title", "นัดหมายชม Demo โปรแกรม คลินิก")}
          </h2>

          {/* 3. Description: ปรับขนาดตัวอักษรและ Line-height ให้อ่านสบายตา */}
          <div className="max-w-[750px] mx-auto">
            <p className="text-[1rem] xl:text-[1.1rem] text-[#60697b] leading-[1.7] font-light mb-8">
              {t(
                "calendar:description",
                "นัดหมายชม Demo โปรแกรม คลินิก APSX Platform รองรับธุรกิจประเภท Clinic, Spa, Wellness, Hospital, Beauty, ศูนย์ดูแลผู้สูงอายุ, คลินิกสุขภาพจิต, คลินิกตา, ทุกประเภทคลินิก ระบบครอบคลุมทุกด้านของธุรกิจ ไม่ว่าจะเป็น การจัดการระบบภายใน การจัดการการเงิน การจัดการการตลาด การจัดการการขาย การจัดการการสต๊อก การจัดการการค่าใช้จ่าย ค่าคอมมิชชั่น ค่ามือและอื่นๆ",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
