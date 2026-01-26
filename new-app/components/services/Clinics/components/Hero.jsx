import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
      <div className="container  py-16 xl:py-20 lg:py-20 md:py-20">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
        >
          {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
          <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] text-[#343f52] tracking-tighter">
            {t(
              "clinic:hero.title",
              "โปรแกรม คลินิก ใช้งานง่าย ครบทุกฟังก์ชันในระบบเดียว",
            )}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[0.8rem] xl:text-[1rem] text-[#343f52] opacity-70">
              {t(
                "clinic:hero.description",
                "โปรแกรม คลินิก รองรับการจัดการ คลินิก พร้อม ระบบบริหารจัดการที่ครบวงจร ที่จะช่วยให้คุณทำงานได้อย่างมีประสิทธิภาพ รองรับหลากหลาย ทุกประเภท ทุกขนาด ทุกสาขา",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
