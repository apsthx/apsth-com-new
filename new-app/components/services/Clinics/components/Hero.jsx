import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pt-20 pb-10 xl:pt-28 lg:pt-28 md:pt-24 !text-center !relative !font-medium !text-[#464c58] !tracking-wide overflow-hidden">
        {/* --- Grid Background Layer --- */}
        <div
          className="absolute inset-0 z-0 opacity-[0.2]"
          style={{
            backgroundImage: `
                linear-gradient(to right, #37d5af 2px, transparent 1px),
                linear-gradient(to bottom, #37d5af 2px, transparent 1px)
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
            {t("clinic:hero.title_part1", "โปรแกรม คลินิก ")}{" "}
            <span className=" text-[#2bc29d] relative inline-block">
              {t("clinic:hero.title_part2", " ใช้งานง่าย")}
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#2bc29d]/15 -z-10"></span>
            </span>
            <br className="hidden md:block" />
            {t("clinic:hero.title_part3", " ครบทุกฟังก์ชันในระบบเดียว")}
          </h2>

          {/* 3. Description: ปรับขนาดตัวอักษรและ Line-height ให้อ่านสบายตา */}
          <div className="max-w-[750px] mx-auto">
            <p className="text-[1rem] xl:text-[1.1rem] text-[#60697b] leading-[1.7] font-light mb-8">
              {t(
                "clinic:hero.description",
                "ยกระดับการจัดการคลินิกด้วยระบบบริหารจัดการที่ครบวงจร ช่วยให้คุณทำงานได้อย่างมีประสิทธิภาพ รองรับการเติบโตทุกประเภท ทุกขนาด และทุกสาขา",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
