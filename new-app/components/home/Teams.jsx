import React from "react";
import { useTranslation } from "@/app/i18n";
import OurTeam from "./OurTeam";

export default async function Teams({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section
      id="snippet-2"
      className="container wrapper !bg-[#ffffff]  overflow-hidden"
    >
      <div className="  pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
        >
          {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
          <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] !mb-2 text-[#343f52] tracking-tighter">
            {t("home:teams.title", "ทีมงานของเรา")}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[1rem] xl:text-[1.1rem] text-[#343f52] opacity-70">
              <strong className="font-bold text-[#343f52]">
                APSX Platform
              </strong>{" "}
              {t(
                "home:teams.description",
                "ทีมงานของเรามีประสบการณ์และความเชี่ยวชาญในการพัฒนาพร้อมให้คำปรึกษาและบริการลูกค้าอย่างมืออาชีพ",
              )}
            </p>
          </div>
          <OurTeam />
        </div>
      </div>
    </section>
  );
}
