import React from "react";
import { useTranslation } from "@/app/i18n";
import { getSystemUpdates } from "@/data/docs";

export default async function Update({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pt-20 xl:pt-28 pb-16 mb-16 xl:4">
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
            {getSystemUpdates(t).map((blog, index) => {
              const isFirst = index === 0;
              const items = Array.isArray(blog.items)
                ? blog.items
                : Object.values(blog.items || {});

              return (
                <div
                  className="card accordion-item mb-5 border-0 shadow-[0_5px_25px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)]"
                  key={blog.id}
                >
                  <div
                    className="card-header !bg-transparent p-0 border-0"
                    id={`heading-${blog.id}`}
                  >
                    <button
                      className={`accordion-button flex items-center gap-3 md:gap-4 !p-5 md:!p-6 !shadow-none font-bold text-left w-full transition-all ${!isFirst ? "collapsed" : ""} group`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${blog.id}`}
                      aria-expanded={isFirst}
                    >
                      {/* Version Badge - ทำให้ดูเด่นขึ้น */}
                      <div
                        className={`flex-shrink-0 px-3 py-1 rounded-lg text-[0.7rem] font-bold tracking-wider uppercase transition-colors ${
                          isFirst
                            ? "bg-[#00b8b8] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {blog.version}
                      </div>

                      <span className="text-[1rem] md:text-lg text-[#343f52] group-hover:text-[#00b8b8] transition-colors leading-snug grow pr-6">
                        {blog.title}
                      </span>
                    </button>
                  </div>

                  <div
                    id={`collapse-${blog.id}`}
                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                    data-bs-parent="#accordion-update"
                  >
                    {/* ปรับ Padding บน Mobile (p-4) ให้ต่างจาก Desktop (p-8) */}
                    <div className="card-body p-5 pt-0 md:p-[0_2rem_2.5rem_5.5rem]">
                      <div className="relative pl-6 py-2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-[#00b8b866] before:to-transparent">
                        <ul className="list-unstyled m-0 space-y-4">
                          {items.map((text, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 group/item"
                            >
                              {/* จุด Bullet ที่ดูดีขึ้น */}
                              <div className="!mt-2 w-2 h-2 rounded-full border-2 border-[#00b8b8] bg-white flex-shrink-0 group-hover/item:bg-[#00b8b8] transition-colors" />
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
