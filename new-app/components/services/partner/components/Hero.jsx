import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-28 xl:pt-[5rem] lg:pt-[5rem] md:pt-[5rem]">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
        >
          {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
          <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] !mb-4 text-[#343f52] tracking-tighter">
            {t(
              "partner:hero.title",
              "เรารวบรวมเครื่องมือที่คุณทำงานเข้าด้วยกันผ่าน Partner ของเรา",
            )}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[1rem] xl:text-[1.1rem] text-[#343f52] opacity-70">
              {t(
                "partner:hero.description",
                "เพื่อทำให้เวิร์กโฟลว์ของคุณสมบูรณ์แบบ ผ่าน Partner ของเรา ที่จะช่วยให้คุณทำงานได้อย่างมีประสิทธิภาพ รองรับหลากหลายประเภทธุรกิจ อาทิเช่น Clinic Spa Wellness Hospital Beauty ศูนย์ดูแลผู้สูงอายุ",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
