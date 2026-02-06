import React from "react";
import { useTranslation } from "@/app/i18n";
import { getSystemFunctions, getClinicReports } from "@/data/features";

export default async function SytemFunction({ lng }) {
  const { t } = await useTranslation(lng);
  const functionItems = getSystemFunctions(t);
  const reportItems = getClinicReports(t);

  return (
    <div className="container flex flex-wrap mx-[-15px] !mt-[-30px]">
      <div className="!mt-10">
        <div className="flex gap-2 !items-center !mb-0">
          <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
          <h3 className="!mt-2 !text-lg !font-medium text-[#343f52]">
            {t("clinic:system_functions.title", "ฟังก์ชันของระบบ")}
          </h3>
        </div>

        <div className="flex flex-wrap mx-[-15px]">
          {functionItems.map((item, index) => (
            <div key={item.id} className="w-full  px-[15px]">
              <div className="flex items-start p-1 bg-white border-[#e7eaf3] transition-all duration-300   group cursor-default">
                <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] transition-colors duration-300 leading-tight">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 !items-center !mt-6">
          <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
          <h3 className="!mt-2 !text-lg !font-medium text-[#343f52] mb-2">
            {t("clinic:all_reports.title", "รายงานทั้งหมด")}
          </h3>
        </div>

        <div className="flex flex-wrap mx-[-15px]">
          {reportItems.map((item, index) => (
            <div key={item.id} className="w-full px-[15px] lg:w-1/2">
              <div className="flex items-center p-1 transition-all duration-300 group h-full cursor-default">
                <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] leading-tight transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
}
