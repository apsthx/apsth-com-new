import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section
      id="snippet-2"
      className="wrapper !bg-[#ffffff] relative overflow-hidden"
    >
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
          className="w-full max-w-[950px] mx-auto !px-[15px] !text-center"
        >
          {/* 2. Headline: เน้นความหนักแน่นและใช้สีแบรนด์ไฮไลท์คำสำคัญ */}
          <h2 className="text-[2rem] md:text-[2.6rem] xl:!text-[2rem] font-black !leading-[1.15] !mb-8 text-[#343f52] tracking-tighter">
            {t("hospital:hero.title_part1", "ระบบโรงพยาบาล")}{" "}
            <span className=" text-[#00B7B8] relative inline-block">
              {t("hospital:hero.title_part2", "อัจฉริยะ")}
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#00B7B8]/15 -z-10"></span>
            </span>
            <br className="hidden md:block" />
            <span className="text-[0.9em] opacity-90">
              {t("hospital:hero.title_part3", "จัดการง่าย ครบจบในระบบเดียว")}
            </span>
          </h2>

          {/* 3. Description: ปรับให้อ่านง่าย มีการเว้นวรรคที่ดี */}
          <div className="max-w-[800px] mx-auto">
            <p className="text-[1rem] xl:text-[1.15rem] text-[#60697b] leading-[1.8] font-light">
              {t(
                "hospital:hero.description",
                "นวัตกรรมระบบบริหารจัดการโรงพยาบาลยุคใหม่ ที่รวบรวมทุกฟังก์ชันการทำงานไว้ในที่เดียว ช่วยเพิ่มประสิทธิภาพการดูแลผู้ป่วยและการจัดการทรัพยากรให้เป็นเรื่องง่าย",
              )}
            </p>
          </div>

          {/* 4. Trust Badges: เล็กๆ ด้านล่างเพื่อเพิ่มความมั่นใจ */}
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 transition-all duration-500"
          >
            {/* Security - สีน้ำเงิน/กรมท่า สื่อถึงความปลอดภัย */}
            <div className="flex items-center gap-2 group cursor-default">
              <i className="uil uil-shield-check text-2xl text-[#00B7B8] group-hover:text-[#00B7B8] transition-colors duration-300"></i>
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#00B7B8] group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                High Security
              </span>
            </div>

            {/* Cloud - สีฟ้า/Cyan สื่อถึงระบบออนไลน์และก้อนเมฆ */}
            <div className="flex items-center gap-2 group cursor-default">
              <i className="uil uil-cloud-database-tree text-2xl text-[#00B7B8] group-hover:text-[#00B7B8] transition-colors duration-300"></i>
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#00B7B8] group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                Cloud System
              </span>
            </div>

            {/* Real-time - สีเขียว/มิ้นท์ สื่อถึงความสดใหม่และการทำงานตลอดเวลา */}
            <div className="flex items-center gap-2 group cursor-default">
              <i className="uil uil-sync text-2xl text-[#00B7B8] group-hover:text-[#00B7B8] transition-colors duration-300"></i>
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#00B7B8] group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                Real-time Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
