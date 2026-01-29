import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Update({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pt-20 xl:pt-28 pb-16">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[0.7rem] font-bold tracking-[0.2em] text-[#2bc29d] uppercase bg-[#2bc29d]/10 rounded-lg">
            What's New
          </div>
          <h2 className="text-[2rem] xl:text-[2.6rem] font-black text-[#343f52] mb-4">
            {t("update:hero.title", "ประวัติการอัปเดตระบบ")}
          </h2>
          <div className="max-w-[700px] mx-auto">
            <p className="text-[1.05rem] text-[#60697b] font-light leading-relaxed">
              {t(
                "update:hero.description",
                "เราพัฒนาอย่างต่อเนื่องเพื่อมอบประสบการณ์ที่ดีที่สุดให้กับธุรกิจคลินิกและศูนย์ความงามของคุณ",
              )}
            </p>
          </div>
        </div>

        {/* --- Accordion Update List --- */}
        <div className="max-w-[900px] mx-auto">
          <div className="accordion accordion-wrapper" id="accordion-update">
            {[
              {
                id: "blog1",
                version: "Version X",
                tag: "Latest",
                title: t(
                  "update:blog.blog1.title",
                  "ปรับโครงสร้าง + เขียนระบบใหม่ทั้งหมด",
                ),
                items: t("update:blog.blog1.items", { returnObjects: true }),
              },
              {
                id: "blog2",
                version: "V3.9",
                tag: "Stable",
                title: t(
                  "update:blog.blog2.title",
                  "ฟังก์ชันยาชุด คอร์สชุด และตรวจชุด",
                ),
                items: t("update:blog.blog2.items", { returnObjects: true }),
              },
              {
                id: "blog3",
                version: "V2.1 - V3.6",
                tag: "Legacy",
                title: t(
                  "update:blog.blog3.title",
                  "ระบบใบเสร็จ + ตั้งค่าวันหยุดคลินิก",
                ),
                items: t("update:blog.blog3.items", { returnObjects: true }),
              },
            ].map((blog, index) => {
              const isFirst = index === 0;

              return (
                <div
                  className="card accordion-item mb-5 border-0 shadow-[0_5px_20px_rgba(0,0,0,0.03)] rounded-2xl overflow-hidden"
                  key={blog.id}
                >
                  <div
                    className="card-header !bg-transparent p-0 border-0"
                    id={`heading-${blog.id}`}
                  >
                    <button
                      className={`accordion-button flex items-center gap-4 !p-6 !shadow-none font-bold text-left w-full transition-all ${!isFirst ? "collapsed" : ""} group`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${blog.id}`}
                      aria-expanded={isFirst}
                    >
                      {/* Version Badge */}
                      <div
                        className={`flex-shrink-0 px-3 py-1 rounded-md text-[0.65rem] font-medium tracking-tighter uppercase ${isFirst ? "bg-[#2bc29d] text-white" : "bg-[#f5f5f6] text-[#343f52]"}`}
                      >
                        {blog.version}
                      </div>

                      {/* Title */}
                      <span className="!text-[0.95rem] md:text-lg text-[#343f52] group-hover:text-[#2bc29d] transition-colors leading-snug grow">
                        {blog.title}
                      </span>
                    </button>
                  </div>

                  <div
                    id={`collapse-${blog.id}`}
                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                    data-bs-parent="#accordion-update"
                  >
                    <div className="card-body p-[0_2rem_2rem_5rem]">
                      <div className="relative pl-6 py-2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-[#a4aec666] before:to-transparent">
                        <ul className="list-unstyled m-0 space-y-4">
                          {blog.items &&
                            Object.values(blog.items).map((text, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2bc29d] flex-shrink-0" />
                                <span className="text-[0.95rem] text-[#60697b] leading-relaxed">
                                  {text}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
