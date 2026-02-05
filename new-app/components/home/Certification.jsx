import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Certification({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section
      id="snippet-4"
      className="container wrapper !bg-[#ffffff] overflow-hidden"
    >
      <div
        data-cues="slideInDown"
        data-delay={300}
        className=" pt-0 xl:pt-60 lg:pt-40 md:pt-40 pb-0 xl:pb-0 lg:pb-0 md:pb-5"
      >
        {/* แก้ไขจุดนี้: เปลี่ยนจาก bg-image/bg-overlay เป็น bg-gradient */}
        <div
          className="card !text-black !mt-[-1.25rem] xl:!mt-0 lg:!mt-0 xl:-translate-y-2/4 lg:-translate-y-2/4 !mb-lg-n50p !relative z-0 !rounded-[1.5rem] overflow-hidden shadow-2xl 
          bg-gradient-to-tr from-[#f5f5f6] via-[#f5f5f6] to-[#f5f5f6]
          before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:z-[1]"
        >
          <div className="card-body !px-4 !p-14 xl:!p-14 xl:!px-14 relative z-10">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="xl:w-11/12 xxl:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h3 className="!text-[calc(1.325rem_+_0.9vw)] !font-medium !leading-[1.2] xl:!text-[1.2rem] !text-[#00115c] drop-shadow-md">
                  Our Certification ISO Standards
                </h3>
                <div className="h-1 w-20 bg-white/50 mx-auto !mb-4 rounded-full"></div>
                <h2 className="!text-[0.85rem] !font-medium !leading-[1.5] uppercase !text-black/80/90">
                  ** Standards aligned with ISO 10781:2023 and ISO/IEC
                  29110-5-1-2:2025 (referenced from{" "}
                  <a
                    target="_blank"
                    href="https://www.iso.org/home.html"
                    className="!text-[#1bb59b]"
                  >
                    www.iso.org
                  </a>
                  ) **
                </h2>
              </div>

              {/* Grid สำหรับ ISO แต่ละตัว - ใช้ Glassmorphism สไตล์พาสเทล */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full !px-2 !lg:px-[15px]">
                <div className="bg-white/10 backdrop-blur-md p-2 lg:p-8 rounded-2xl border border-white/20 transition-transform hover:bg-white/20">
                  <h3 className="!font-medium !text-[1.2rem] !mb-3 !text-[#003c85]">
                    ISO 10781:2023
                  </h3>
                  <p className="!text-[0.85rem] !leading-[1.6] !text-black/80/80">
                    <strong className="text-black/80 ">
                      Health informatics
                    </strong>{" "}
                    — HL7 Electronic Health Record-System Functional Model,
                    Release 2.1 (EHR FM)
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-2 lg:p-8  rounded-2xl border border-white/20 transition-transform hover:bg-white/20">
                  <h3 className="!font-medium !text-[1.2rem] !mb-3 !text-[#003c85]">
                    ISO/IEC 29110-5-1-2:2025
                  </h3>
                  <p className="!text-[0.85rem] !leading-[1.6] !text-black/80/80">
                    <strong className="text-black/80">
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
