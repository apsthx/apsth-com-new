import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import Button from "@/components/common/Button";
import AnimatedText from "@/components/common/AnimatedText";
import TypeWriter from "@/components/common/TypeWriter";

export default async function ProductOverview({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section
      id="product_overview"
      className="relative overflow-hidden pt-24 bg-[#ffff]"
    >
      <div className="container flex flex-wrap items-center justify-start !mt-[-30px] ">
        <div className="grid grid-cols-1 gap-2 pt-0">
          <div className="flex flex-col-reverse lg:flex-row items-center !mt-10">
            <div className="w-full !space-y-2">
              <span className="text-[#343f52] text-xl font-medium py-1 rounded-full">
                {t("home:title", "โปรแกรม คลินิก APSX Platform")}
              </span>
              <h2 className="text-3xl md:!text-lg !font-medium !text-[#1bb59b]">
                {t(
                  "home:features.title",
                  "ระบบที่ใช้งานง่ายมี ประสิทธิภาพและทันสมัย ที่สุดในตอนนี้",
                )}
              </h2>
              <p className="text-[#343f52] text-sm leading-relaxed">
                {t("home:features.description", "เป็นระบบที่ลงตัว...")}
              </p>

              <p className="text-[#343f52] text-sm leading-relaxed">
                {t(
                  "home:features.features.description",
                  "ยกระดับการบริหารจัดการ...",
                )}
              </p>
            </div>
          </div>
          <div>
            <Button
              rounded="lg"
              color="dark"
              href={`/${lng}/#service_expansion`}
            >
              <span className="absolute top-1 right-1"></span>
              <i className="uil uil-comment-search text-[0.8rem] mr-1"></i>
              <span className="!font-medium !text-[14px]">
                {"ดูรายละเอียดเพิ่มเติม"}
              </span>
            </Button>
          </div>
          <div className="space-y-2 !mt-0">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#343f52] relative z-10 max-w-4xl mx-auto p-10">
              {[
                {
                  title: "ระบบเวชระเบียน (OPD Management)",
                  icon: "uil uil-file-bookmark-alt",
                },
                { title: "ระบบบริหารสต็อกยา", icon: "uil uil-medkit" },
                {
                  title: "รายงานวิเคราะห์กว่า 40 รูปแบบ",
                  icon: "uil uil-analytics",
                },
                {
                  title: "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
                  icon: "uil-users-alt",
                },
                {
                  title: "รองรับหลายสาขาในบัญชีเดียว",
                  icon: "uil uil-store-alt",
                },
                {
                  title: "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
                  icon: "uil-lock-access",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
                      relative flex flex-col items-center justify-center text-center
                      w-48 h-44 bg-[#e1f6f0]/50 text-[#343f52] !shadow-lg transition-all duration-300
                      group
                      cursor-default
                      ${index % 2 !== 0 ? "!mt-1" : ""} // สลับฟันปลาขึ้นลงแบบรังผึ้ง
                    `}
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="p-5 flex flex-col items-center gap-2">
                    {/* Icon เปลี่ยนสีเมื่อ Hover */}
                    <i
                      className={`${item.icon} text-2xl text-[#1bb59b]  mb-2 transition-colors`}
                    />

                    <span className="font-medium leading-tight">
                      {t(
                        `home:platform_highlights.features.blog${index + 1}.title`,
                        item.title,
                      )}
                    </span>

                    {/* จุดเล็กๆ ด้านล่าง */}
                    <div className="w-2 h-2 rounded-full bg-[#45c4a0] mt-2 opacity-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-0">
            <div className="flex items-center justify-start text-center gap-2 text-slate-800 !font-medium">
              <i className="uil uil-comments !text-xl text-[#1bb59b]" />
              <h4 className="!mt-2 !text-xl !font-medium">
                ระบบหลังบ้านที่ทำให้เรื่องคลินิกเป็นเรื่องง่าย ครบจบในที่เดียว
              </h4>
            </div>
            <div className="!flex !items-center gap-2 text-slate-800 !font-medium">
              <h4 className="!mt-4 !font-medium">
                อิสระในการใช้งาน ทุกที่ ทุกเวลา
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: "uil-mobile-android",
                  text: "Desktop & Mobile",
                },
                {
                  icon: "uil-heart-alt",
                  text: "อินเทอร์เฟซใช้งานง่าย",
                },
                { icon: "uil-bolt", text: "เข้าถึงรวดเร็ว ทุกที่" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 transition-all px-4 py-2 bg-[#343f52]/5 rounded-lg"
                >
                  <i className={`uil ${item.icon} text-[#343f52] !text-sm`} />
                  <span className="text-sm !font-light !text-[#343f52]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
