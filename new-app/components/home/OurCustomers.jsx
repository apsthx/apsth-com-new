import React from "react";
import OurCustomersGroups from "./OurCustomersGroups";
import { useTranslation } from "@/app/i18n";

export default async function OurCustomers({ lng }) {
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
          <h2 className="!z-[0] !text-[calc(1.4rem_+_1.5vw)] !font-medium !leading-[1.2] xl:!text-[1.2rem] !mb-2 text-[#343f52] tracking-tighter">
            {t("home:our_customers.title", "ลูกค้าของเรา")}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[1rem] xl:text-[0.8rem] text-[#343f52]">
              <strong className="font-bold text-[#343f52]">
                APSX Platform
              </strong>{" "}
              {t(
                "home:our_customers.description",
                "ลูกค้าของเรามีมากกว่า 1,000 สาขา ทุกประเภทธุรกิจ คลินิก สปา ศูนย์สุขภาพ โรงพยาบาล ธุรกิจความงาม ศูนย์ดูแลผู้สูงอายุ และอื่นๆ ที่ไว้วางใจใช้บริการกับเรา",
              )}
            </p>
          </div>
        </div>
        <div className="bg-[#29bbb4] mx-8 p-4 xl:p-12 md:p-10 !mt-14 rounded-3xl">
          <OurCustomersGroups />
        </div>
      </div>
    </section>
  );
}
