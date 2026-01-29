import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section
      id="hero"
      className="wrapper !bg-[#ffffff] overflow-hidden relative"
    >
      <div className="container pt-20 pb-10 xl:pt-28 lg:pt-28 md:pt-24 !text-center !relative !font-medium !text-[#464c58] !tracking-wide overflow-hidden">
        {/* --- Grid Background Layer --- */}
        <div
          className="absolute inset-0 z-0 opacity-[0.3]"
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
        <div className="flex flex-col items-center text-center">
          {/* Headline - เน้นความสำคัญด้วยสีสันและขนาด */}
          <h1
            className="max-w-[900px] !text-[calc(1.8rem_+_1.5vw)] xl:!text-[2rem] font-black leading-[1.1] text-[#343f52] tracking-tight mb-6"
            data-cue="slideInDown"
          >
            {t(
              "wellness:hero.title_part1",
              "โปรแกรม Wellness/ศูนย์ดูแลผู้สูงอายุ",
            )}{" "}
            <span className=" text-[#2bc29d] relative inline-block">
              {t("wellness:hero.title_part2", "ใช้งานง่าย")}
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#2bc29d]/15 -z-10"></span>
            </span>
            <br className="hidden md:block" />
            <span className="text-slate-400 font-bold">
              {t("wellness:hero.title_part3", "จัดการง่าย ครบจบในระบบเดียว")}
            </span>
          </h1>

          {/* Description - ปรับความกว้างและขนาดตัวอักษรให้อ่านง่ายขึ้น */}
          <div
            className="max-w-[700px] mx-auto mb-2"
            data-cue="slideInDown"
            data-delay="300"
          >
            <p className="text-[0.95rem] md:text-[1.1rem] leading-relaxed text-slate-500">
              {t(
                "wellness:hero.description",
                "ยกระดับการบริหารจัดการศูนย์ดูแลผู้สูงอายุและ Wellness ครบวงจร ด้วยระบบที่ออกแบบมาเพื่อความสะดวก รวดเร็ว และแม่นยำ รองรับการทำงานทุกขนาดและทุกสาขา",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
