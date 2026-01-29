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
          className="w-full max-w-[900px] mx-auto !px-[15px] !text-center"
        >
          {/* 2. Headline: เน้นความหนักแน่นของคำว่า 'ลูกค้าของเรา' */}
          <h2 className="text-[2.2rem] md:text-[2.6rem] xl:text-[3rem] font-black !leading-[1.1] !mb-2 text-[#343f52] tracking-tighter">
            {t("home:our_customers.title", "ลูกค้าของเรา")}
          </h2>

          {/* 3. Description: เล่นระดับสีให้ APSX Platform โดดเด่น และใช้ฟอนต์อ่านง่าย */}
          <div className="max-w-[800px] mx-auto">
            <p className="text-[1.05rem] xl:text-[1.2rem] text-[#60697b] leading-relaxed font-light">
              <span className="font-extrabold text-[#1bb59b] bg-[#1bb59b]/5 px-2 py-0.5 rounded-md">
                APSX Platform
              </span>{" "}
              {t(
                "home:our_customers.description",
                "ภูมิใจที่ได้เป็นเบื้องหลังความสำเร็จของลูกค้ามากกว่า 1,000 สาขา ครอบคลุมทุกประเภทธุรกิจสุขภาพและความงามทั่วประเทศ",
              )}
            </p>
          </div>
        </div>
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="text-center bg-[#f0f8fe]/30 py-2 rounded-xl"
        >
          <div className="text-2xl font-bold text-[#e2626b]">1,000+</div>
          <div className="text-[0.65rem] uppercase tracking-widest font-black">
            Branches
          </div>
        </div>
      </div>
    </section>
  );
}
