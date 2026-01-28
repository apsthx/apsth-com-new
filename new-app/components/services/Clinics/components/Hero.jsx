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
            {t("clinic:hero.title_part1", "โปรแกรม คลินิก ")}{" "}
            <span className=" text-[#00B7B8] relative inline-block">
              {t("clinic:hero.title_part2", " ใช้งานง่าย")}
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#00B7B8]/15 -z-10"></span>
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
          {/* 4. Trust Badges: เล็กๆ ด้านล่างเพื่อเพิ่มความมั่นใจ */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 transition-all duration-500">
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
