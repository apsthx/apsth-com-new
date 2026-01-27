import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

export default async function Update({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] d">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
          {t("update:hero.title", "คู่มือการใช้งาน (Documentation)")}
        </h2>
        <p className="lead text-[1rem] !mb-10 !text-center md:!px-24 lg:!px-[12.5rem] xl:!px-0">
          {t(
            "update:hero.description",
            "คู่มือการใช้งาน (Documentation) ของโปรแกรม คลินิก APSX Platform รองรับธุรกิจประเภท Clinic, Spa, Wellness, Hospital, Beauty, ศูนย์ดูแลผู้สูงอายุ, คลินิกสุขภาพจิต, คลินิกตา, ทุกประเภทคลินิก",
          )}
        </p>
        <div
          className="flex flex-col w-full !mt-[50px] accordion"
          id="accordion-features"
        >
          {[
            {
              id: "blog1",
              title: t(
                "update:blog.blog1.title",
                "ปรับโครงสร้าง + เขียนระบบใหม่ทั้งหมด (Version X)",
              ),
              items: t("update:blog.blog1.items", { returnObjects: true }),
            },
            {
              id: "blog2",
              title: t(
                "update:blog.blog2.title",
                "ปรับโครงสร้าง + เพิ่มฟังก์ชัน ยาชุด คอร์สชุด ตรวจชุด และอื่นๆ (V3.9)",
              ),
              items: t("update:blog.blog2.items", { returnObjects: true }),
            },
            {
              id: "blog3",
              title: t(
                "update:blog.blog3.title",
                "ปรับโครงสร้างของ การเปิดใบเสร็จ + เพิ่มการตั้งค่าวันหยุดคลินิก (V2.1 - V3.6)",
              ),
              items: t("update:blog.blog3.items", { returnObjects: true }),
            },
          ].map((blog, index) => {
            const collapseId = `collapse-${blog.id}`;
            const headingId = `heading-${blog.id}`;
            const isFirst = index === 0;

            return (
              <div
                className="card accordion-item !mb-5 w-full border-0 shadow-sm"
                key={blog.id}
              >
                <div
                  className="card-header !mb-0 !p-[1.1rem_1.3rem] !border-0 !bg-inherit"
                  id={headingId}
                >
                  <button
                    // ปรับฟอนต์หัวข้อ: text-lg (1.125rem) และใช้ leading-tight
                    className={`hover:!text-[#00B7B8] font-bold text-left w-full flex justify-between items-center text-lg md:text-xl leading-tight transition-all ${!isFirst ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isFirst ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    <span className="max-w-[90%]">{blog.title}</span>
                    {/* เพิ่ม Icon ลูกศรเพื่อให้ UI ชัดเจนขึ้น */}
                    <i className="uil uil-angle-down text-2xl ml-2"></i>
                  </button>
                </div>

                <div
                  id={collapseId}
                  className={`collapse ${isFirst ? "show" : ""}`}
                  aria-labelledby={headingId}
                  data-bs-parent="#accordion-features"
                >
                  <div className="card-body flex-[1_1_auto] p-[0.5rem_1.5rem_1.5rem_2rem]">
                    <ul className="list-unstyled space-y-3">
                      {blog.items &&
                        Object.values(blog.items).map((text, i) => (
                          <li
                            key={i}
                            className="flex items-start text-slate-700 dark:text-slate-300"
                          >
                            {/* ปรับขนาด Bullet และช่องไฟ */}
                            <span className="mr-3 text-[#00B7B8] text-lg">
                              •
                            </span>
                            {/* ปรับฟอนต์เนื้อหา: text-[15px] สำหรับมือถือ และ text-base (16px) สำหรับจอใหญ่ */}
                            <span className="text-[15px] md:text-base leading-relaxed tracking-wide">
                              {text}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
