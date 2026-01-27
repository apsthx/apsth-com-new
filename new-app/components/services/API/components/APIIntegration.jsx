import React from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";

export default async function APIIntegration({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-5" className="wrapper !bg-[#ffffff]  ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-start">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <div className="relative group">
              {/* ของตกแต่งหลังรูปภาพ (Decoration Blur) - ทำให้ดูมีมิติสมัยใหม่ */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#00b899]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <figure className="m-0 p-0 relative overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] ">
                <Image
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-100"
                  src="/assets/api/saas-img-1.jpg"
                  alt="API System Overview"
                  width={800}
                  height={538}
                  priority
                />

                {/* Overlay แสงจางๆ เวลา Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </figure>

              {/* แถบตกแต่งเล็กๆ (Floating Badge) - เพิ่มความดูเป็น Software SaaS */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-[#00b899] flex items-center justify-center text-white">
                  <i className="uil uil-shield-check text-xl"></i>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-extrabold text-slate-400 m-0 leading-none">
                    Status
                  </p>
                  <p className="text-sm font-bold text-slate-800 m-0">
                    API Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-line relative align-top !pl-[1.4rem] inline-flex !tracking-[0.02rem] !leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#00B7B8] !text-[#00B7B8] !mb-3">
              API Integration
            </h2>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-2">
              {t("api:title", "คู่มือการใช้งาน (API Integration)")}
            </h3>
            <div className="card-body !p-[0_0_0_1.1rem]">
              <p>
                {t(
                  "api:description",
                  "คู่มือการใช้งาน (API Integration) ของโปรแกรม คลินิก APSX Platform รองรับธุรกิจประเภท Clinic, Spa, Wellness, Hospital, Beauty, ศูนย์ดูแลผู้สูงอายุ, คลินิกสุขภาพจิต, คลินิกตา, ทุกประเภทคลินิก",
                )}
              </p>
            </div>
            <div className="flex flex-wrap mx-[-15px]">
              {[
                {
                  title: t(
                    "api:list1",
                    "1. ดึงข้อมูลเอกสารต่างๆ ได้แก่ ใบแจ้งหนี้, ใบวางมัดจำ, ใบเสร็จและบัญชีลูกหนี้",
                  ),
                },
                {
                  title: t(
                    "api:list2",
                    "2. ดึงข้อมูลลูกค้า ได้แก่ ข้อมูลลูกค้าทั้งหมดและประวัติ OPD Card ทั้งหมด",
                  ),
                },
                {
                  title: t(
                    "api:list3",
                    "3. ดึงข้อมูลรายการตรวจ ตรวจทั่วไป/ตรวจแล็บและรายการผลแล็บ",
                  ),
                },
                {
                  title: t(
                    "api:list4",
                    "4. ดึงข้อมูลการนัดหมาย ได้แก่ เพิ่มนัดหมาย, รายงานการนัดหมายและนัดหมายเพิ่มเติม",
                  ),
                },
                {
                  title: t(
                    "api:list5",
                    "5. ดึงข้อมูลรายการยา/อุปกรณ์ทั้งหมด, รายการคงเหลือ, รอบสต๊อกและรายการหมดอายุ",
                  ),
                },
                {
                  title: t(
                    "api:list6",
                    "6. ดึงข้อมูลรายการใช้บริการ, รายการคอร์สคงเหลือ, รายการตัดคอร์ส",
                  ),
                },
                {
                  title: t(
                    "api:list7",
                    "7. ค่ามือแพทย์/ค่ามือพนักงานและต้นทุนยา/อุปกรณ์",
                  ),
                },
                {
                  title: t("api:list8", "8. ดึงข้อมูลรายงานทั้งหมดในระบบ"),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="xl:w-12/12 w-full px-[15px] mb-3" // ปรับเป็น 12/12 เพื่อให้แสดง 1 แถวต่อ 1 ข้อ
                >
                  <div className="flex items-center p-4 bg-white rounded-xl border border-[#e7eaf3] transition-all duration-300 hover:border-[#00b899] hover:shadow-md group">
                    {/* Icon Checkmark สีเขียวมินต์ */}
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#00b899]/10 text-[#00b899] mr-4 transition-all group-hover:bg-[#00b899] group-hover:text-white">
                      <i className="uil uil-check text-[1rem]"></i>
                    </div>

                    <span className="text-[0.80rem] font-medium text-[#60697b] group-hover:text-[#343f52] leading-tight">
                      {index + 1}. {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://documenter.getpostman.com/view/40820836/2sB3QDwDGH"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full   !text-[#00B7B8] font-bold text-[0.9rem] transition-all duration-300    hover:-translate-y-1 group"
            >
              <span>API Documentation</span>
              {/* Icon Postman หรือลูกศร */}
              <i className="uil uil-arrow-right text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
          {/*/column */}
        </div>
      </div>
    </section>
  );
}
