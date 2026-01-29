import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Certification({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-4" className="wrapper !bg-[#ffffff]">
      <div
        data-cues="slideInDown"
        data-delay={300}
        className="container pt-0 xl:pt-60 lg:pt-40 md:pt-40 pb-0 xl:pb-0 lg:pb-0 md:pb-5"
      >
        {/* แก้ไขจุดนี้: เปลี่ยนจาก bg-image/bg-overlay เป็น bg-gradient */}
        <div
          className="card !text-white !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p !relative z-0 !rounded-[1.5rem] overflow-hidden shadow-2xl 
          bg-gradient-to-t from-[#2bc29d] via-[#2ec09b] to-[#2fc09c]
          before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:z-[1]"
        >
          {/* แสง Glow ปรับโทนให้เข้ากับเขียวอมฟ้า */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-[#A2E4E5]/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="card-body !p-10 xl:!p-14 relative z-10">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto mb-10">
                <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-black !leading-[1.2] xl:!text-[1.8rem] !mb-4 !text-white drop-shadow-md">
                  Our Certification ISO Standards
                </h3>
                <div className="h-1 w-20 bg-white/50 mx-auto mb-6 rounded-full"></div>
                <h2 className="!text-[0.85rem] font-medium !leading-[1.5] uppercase !text-white/90">
                  ** Standards aligned with ISO 10781:2023 and ISO/IEC
                  29110-5-1-2:2025 (referenced from www.iso.org) **
                </h2>
              </div>

              {/* Grid สำหรับ ISO แต่ละตัว - ใช้ Glassmorphism สไตล์พาสเทล */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full !px-[15px]">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-transform hover:scale-[1.02] hover:bg-white/20">
                  <h3 className="font-bold !text-[1.4rem] !mb-3 !text-white">
                    ISO 10781:2023
                  </h3>
                  <p className="!text-[0.85rem] !leading-[1.6] !text-white/80">
                    <strong className="text-white">Health informatics</strong> —
                    HL7 Electronic Health Record-System Functional Model,
                    Release 2.1 (EHR FM)
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transition-transform hover:scale-[1.02] hover:bg-white/20">
                  <h3 className="font-bold !text-[1.4rem] !mb-3 !text-white">
                    ISO/IEC 29110-5-1-2:2025
                  </h3>
                  <p className="!text-[0.85rem] !leading-[1.6] !text-white/80">
                    <strong className="text-white">
                      Systems and software engineering
                    </strong>{" "}
                    — Life cycle profiles for very small entities (VSEs)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
