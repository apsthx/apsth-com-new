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
          className="w-full max-w-[950px] mx-auto !px-[15px] !text-center"
        >
          {/* 2. Headline: ใช้การเน้นคำด้วยสีแบรนด์และสไตล์ที่ดูหรูหรา */}
          <h2 className="text-[1.4rem] md:text-[1.4rem] xl:!text-[1.8rem] !font-medium !leading-[1.25] !mb-8 text-[#343f52] tracking-[0.02em]">
            {t("spa:hero.title_part1", "ยกระดับธุรกิจ")}{" "}
            <span className=" text-[#2bc29d] relative inline-block">
              {t("spa:hero.title_part2", "ใช้งานง่าย")}
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#2bc29d]/15 -z-10"></span>
            </span>
            <br className="hidden md:block" />
            {t("spa:hero.title_part3", "ครบทุกฟังก์ชันในระบบเดียว")}
          </h2>

          {/* 3. Description: ใช้ Line-height ที่โปร่ง อ่านแล้วรู้สึกผ่อนคลาย */}
          <div className="max-w-[800px] mx-auto">
            <p className="text-[1rem] text-[#60697b] leading-[1.8] !font-light">
              {t(
                "spa:hero.description",
                "โปรแกรมบริหารจัดการสปาและคลินิกความงามยุคใหม่ ที่ออกแบบมาเพื่อช่วยลดความซับซ้อนในการทำงาน เพิ่มเวลาให้คุณดูแลลูกค้าได้มากขึ้น รองรับทุกฟังก์ชันตั้งแต่จองคิวจนถึงสรุปยอดขาย",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
