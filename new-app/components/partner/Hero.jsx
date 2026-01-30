import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] overflow-hidden">
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
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full max-w-[900px] mx-auto !text-center !px-[15px]"
        >
          {/* 1. Badge เล็กๆ ด้านบนเพิ่มความเก๋ */}
          <div className="inline-block px-4 py-1.5 mb-6 text-[0.75rem] font-bold tracking-widest text-[#2bc29d] uppercase bg-[#2bc29d]/10 rounded-full">
            Our Ecosystem
          </div>

          {/* 2. Headline: เน้นคำสำคัญด้วยสี Branding */}
          <h2 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-black !leading-[1.15] !mb-6 text-[#343f52] tracking-tight">
            {t(
              "partner:hero.title_start",
              "เรารวบรวมเครื่องมือให้ทำงานเข้าด้วยกันผ่าน",
            )}{" "}
            <span className="text-[#2bc29d] relative">
              Partner
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#2bc29d]/20 -z-10"></span>
            </span>{" "}
            {t("partner:hero.title_end", "ของเรา")}
          </h2>

          {/* 3. Description: ปรับ Line-height และ Opacity ให้นุ่มนวลขึ้น */}
          <div className="max-w-[780px] mx-auto">
            <p className="text-[1.05rem] xl:text-[1.15rem] text-[#60697b] leading-[1.8] font-light">
              {t(
                "partner:hero.description",
                "เพื่อทำให้เวิร์กโฟลว์ของคุณสมบูรณ์แบบ ผ่านพาร์ทเนอร์ที่จะช่วยให้คุณทำงานได้อย่างมีประสิทธิภาพ รองรับหลากหลายประเภทธุรกิจ อาทิเช่น Clinic, Spa, Wellness, Hospital และศูนย์ดูแลผู้สูงอายุ",
              )}
            </p>
          </div>

          {/* 4. ตกแต่งด้วยปุ่มหรือ Link ถ้าต้องการ (Optional) */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="w-12 h-1 bg-[#2bc29d] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
