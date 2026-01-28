import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";

import { useTranslation } from "@/app/i18n";

export default async function Contact({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff]">
      <div className="container pt-20 xl:pt-5 lg:pt-10 md:pt-10">
        <section id="snippet-6" className="wrapper !bg-[#ffffff] mt-16">
          <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="w-full flex-[0_0_auto] max-w-full !text-start">
                  {/* 1. Headline: เพิ่มขีดข้างสีแบรนด์เพื่อความโดดเด่น */}
                  <div className="flex items-center mb-3">
                    <h2 className=" flex items-center gap-2 !text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[2.2rem] !leading-[1.1] !text-start !mb-0 text-slate-800 dark:text-white uppercase tracking-tight">
                      {t("contact:hero.title", "ติดต่อเรา")}
                      <span className="inline-block px-3 py-1 text-[0.5rem] font-bold tracking-[0.2em] text-[#00B7B8] uppercase bg-[#00B7B8]/10 rounded-md">
                        Get in Touch
                      </span>
                    </h2>
                  </div>

                  {/* 2. Company Name: ใช้สีแบรนด์ไล่ระดับ (Gradient) ให้ดู Modern */}
                  <p className="!text-[1.35rem] md:!text-[1.5rem] font-extrabold !leading-[1.4] !mb-3">
                    {t(
                      "contact:hero.sub_title",
                      "บริษัท เอพีเอส ทีเอช จำกัด (สำนักงานใหญ่)",
                    )}
                  </p>

                  {/* 3. Address: ใช้พื้นหลังจางๆ (Subtle Background) ช่วยให้ข้อมูลที่อยู่ดูเป็นสัดส่วน */}
                  <div className="inline-flex items-start !mb-1 rounded-xl bg-slate-50 dark:bg-slate-800/50  max-w-[650px]">
                    <i className="uil uil-location-point text-2xl  mr-3 mt-1"></i>
                    <p className="!text-[1rem] font-medium !leading-[1.6] text-slate-700 dark:text-slate-300">
                      {t(
                        "contact:hero.address",
                        "เลขที่ 888/8 หมู่บ้านไอคอนเน็ค หมู่ 13 ถ.เหล่านาดี ตำบลบ้านเป็ด อำเภอเมืองขอนแก่น ขอนแก่น 40000",
                      )}
                    </p>
                  </div>

                  {/* 4. Description: ปรับขนาดฟอนต์ให้อ่านง่ายขึ้น และเพิ่ม Opacity เล็กน้อย */}
                  <p className="!text-[0.85rem] !leading-[1.8] text-slate-500 dark:text-slate-400 max-w-[750px] font-normal">
                    {t(
                      "contact:hero.description",
                      "หากท่านมีคำถามหรือข้อสงสัยเกี่ยวกับโปรแกรมคลินิก หรือต้องการข้อมูลเพิ่มเติม ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและช่วยเหลือท่านในทุกขั้นตอน",
                    )}
                  </p>
                  <nav className="nav social !mt-0">
                    {socialLinks.map((elm, i) => (
                      <a
                        key={i}
                        className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href={elm.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className={`uil ${elm.icon} text-[${elm.color}] text-[1.1rem]`}
                          // ใช้ inline style เพื่อดึงค่าสีจาก object มาแสดงผล
                          style={{ color: elm.color }}
                          // ถ้ามึงต้องใช้ unicode ผ่าน attribute data หรืออื่นๆ (แต่ปกติ uil class ก็แสดงผลได้เลย)
                        />
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="card mt-16 shadow-lg border-0 overflow-hidden rounded-xl">
                  <div className="flex flex-wrap mx-0">
                    {/* ส่วนของแผนที่ */}
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                      <div className="map map-full h-full min-h-[350px] lg:min-h-full overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30618.278706475176!2d102.770719!3d16.410354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3122897d5e307f9d%3A0xd17c877befe1c06a!2zQVBTVEggKOC4muC4o-C4tOC4qeC4seC4lyDguYDguK3guJ7guLXguYDguK3guKog4LiX4Li14LmA4Lit4LiKIOC4iOC4s-C4geC4seC4lCkgT2ZmaWNl!5e0!3m2!1sth!2sth!4v1769497368320!5m2!1sth!2sth"
                          className="w-full h-full min-h-[350px]"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>

                    {/* ส่วนของข้อมูลติดต่อ */}
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full bg-white dark:bg-[#1e1e1e]">
                      <div className="p-8">
                        {/* Tel Support Section */}
                        <div className="flex flex-row mb-0">
                          <div className="mr-4 text-[#00B7B8] text-2xl">
                            <i className="uil uil-phone-volume"></i>
                          </div>
                          <div>
                            <h5 className="text-xl font-bold mb-0 text-slate-800 dark:text-white">
                              {t(
                                "contact:map.tel_support.title",
                                "Tel Support",
                              )}
                            </h5>
                            <div className="!space-y-2 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                              <p className="mb-2 opacity-80">
                                {t(
                                  "contact:map.tel_support.description",
                                  "ต้องการความช่วยเหลือ? โทรติดต่อทีมสนับสนุนของเราได้ที่ เวลาทำการ",
                                )}
                              </p>
                              <p className="font-semibold flex items-center text-sm text-[#00B7B8]">
                                <i className="uil uil-clock mr-2 "></i>
                                {t(
                                  "contact:map.tel_support.business_days",
                                  "จันทร์-ศุกร์ 08:30-17:30",
                                )}
                              </p>
                              <p className="mb-0 text-[#d16b86] text-xs">
                                {t(
                                  "contact:map.tel_support.holidays",
                                  "วันเสาร์ ปิดทำการ : วันอาทิตย์ ปิดทำการ",
                                )}
                              </p>
                              <div className="!space-y-0">
                                {/* เบอร์มือถือ */}
                                <a
                                  href="tel:0981816769"
                                  className="flex items-center text-slate-800 dark:text-slate-200 font-bold group hover:!text-[#00B7B8] transition-colors w-fit"
                                >
                                  <span className="w-16 text-slate-400 font-normal group-hover:text-slate-400">
                                    Mobile:
                                  </span>
                                  <span className="flex items-center">
                                    098-1816769
                                    <i className="uil uil-phone ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                  </span>
                                </a>

                                {/* เบอร์สำนักงาน */}
                                <a
                                  href="tel:043002488"
                                  className="flex items-center text-slate-800 dark:text-slate-200 font-bold group hover:!text-[#00B7B8] transition-colors w-fit"
                                >
                                  <span className="w-16 text-slate-400 font-normal group-hover:text-slate-400">
                                    Office:
                                  </span>
                                  <span className="flex items-center">
                                    043-002488
                                    <i className="uil uil-telephone ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chat Support Section */}
                        <div className="flex flex-row mt-4">
                          <div className="mr-4 text-[#00B7B8] text-2xl">
                            <i className="uil uil-comments-alt"></i>
                          </div>
                          <div className="w-full !space-y-2">
                            <h5 className="text-xl font-bold mb-0 text-slate-800 dark:text-white">
                              {t(
                                "contact:map.chat_support.title",
                                "Chat Support",
                              )}
                            </h5>

                            <p className="mb-0 opacity-80 text-[14px] text-slate-600 dark:text-slate-400">
                              {t(
                                "contact:map.chat_support.description",
                                "ติดต่อทีมสนับสนุนของเราผ่านช่องทางออนไลน์",
                              )}
                            </p>

                            {/* ปรับเป็น Grid 2 คอลัมน์เพื่อให้ไม่ยาวลงไปข้างล่าง */}
                            <div className="grid grid-cols-1 sm:grid-cols-1">
                              {[
                                {
                                  label: "Line",
                                  value: "@apsth",
                                  icon: "uil-line",
                                  href: "https://page.line.me/gbc9405c",
                                  iconColor: "#06C755",
                                  bgColor: "bg-[#06C755]/5",
                                },
                                {
                                  label: "Email",
                                  value: "apsth456@gmail.com",
                                  icon: "uil-envelope",
                                  href: "mailto:apsth456@gmail.com",
                                  iconColor: "#EA4335",
                                  bgColor: "bg-[#EA4335]/5",
                                },
                                {
                                  label: "Instagram",
                                  value: "APS Thailand",
                                  icon: "uil-instagram",
                                  href: "https://www.instagram.com/apsthcom",
                                  iconColor: "#E1306C",
                                  bgColor: "bg-[#E1306C]/5",
                                },
                                {
                                  label: "Facebook",
                                  value: "APS Thailand",
                                  icon: "uil-facebook-f",
                                  href: "https://www.facebook.com/apsth",
                                  iconColor: "#1877F2",
                                  bgColor: "bg-[#1877F2]/5",
                                },
                                {
                                  label: "Youtube",
                                  value: t(
                                    "contact:map.chat_support.youtube",
                                    "Youtube: โปรแกรม คลินิก APSX Platform",
                                  ),
                                  icon: "uil-youtube",
                                  href: "https://www.youtube.com/@apsthcom",
                                  iconColor: "#FF0000",
                                  bgColor: "bg-[#FF0000]/5",
                                },
                              ].map((item, i) => (
                                <a
                                  key={i}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="!space-y-0 flex items-center group p-2 rounded-xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100"
                                >
                                  {/* ลดขนาดวงกลมไอคอนลงเล็กน้อย (w-8 h-8) เพื่อให้ประหยัดพื้นที่ */}
                                  <div
                                    className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full ${item.bgColor} transition-all duration-300 mr-2`}
                                    style={{ color: item.iconColor }}
                                  >
                                    <i
                                      className={`uil ${item.icon} text-base`}
                                      style={{ color: "inherit" }}
                                    ></i>
                                  </div>

                                  <div className="flex flex-col min-w-0 ">
                                    <span className="text-[9px] uppercase font-bold text-[#00B7B8] leading-none mb-0.5">
                                      {item.label}
                                    </span>
                                    <span className="text-[13px] hover:!text-[#00B7B8] font-semibold text-[#343f52] truncate group-hover:text-slate-900">
                                      {item.value}
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>

        <section id="snippet-4" className="wrapper !bg-[#ffffff] rounded-lg ">
          <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20 pt-10">
            {/* ส่วนหัวข้อ Section */}
            <div className="flex flex-wrap items-center !mb-10">
              <div className="w-full text-center lg:text-start">
                <h2 className="!text-[calc(1.3rem_+_0.6vw)] font-bold xl:!text-[2rem] !leading-[1.3] !mb-2 text-slate-800">
                  {t("contact:our_offices.title", "สำนักงานของเรา")}
                </h2>
              </div>
            </div>

            {/* รายการ Office Cards */}
            <div className="flex flex-wrap xl:mx-[-15px] lg:mx-[-15px] mx-[-15px] blog grid-view">
              {[
                {
                  id: "blog1",
                  title: t(
                    "contact:our_offices.office1.title",
                    "Khon Kaen (สำนักงานใหญ่)",
                  ),
                  description: t(
                    "contact:our_offices.office1.description",
                    "I-CONNECT 888/8 ถนน เหล่านาดี หมู่ 13 ตำบล บ้านเป็ด อำเภอ เมืองขอนแก่น จังหวัด ขอนแก่น 40000",
                  ),
                  img: "/assets/contact/location-1.jpg",
                },
                // คุณสามารถเพิ่มรายการสาขาอื่นตรงนี้ได้เลย
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-6/12 lg:w-4/12 px-[15px] mb-8"
                >
                  <div className="card h-full !rounded-[1rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:-translate-y-2 border-0">
                    <article className="post p-0">
                      {/* ส่วนรูปภาพพร้อม Overlay จางๆ */}
                      <figure className="overlay overlay-1 hover-scale group !mb-0 overflow-hidden h-[320px]">
                        <Image
                          className="!transition-all !duration-[0.5s] !ease-in-out group-hover:scale-110 w-full h-full object-cover"
                          src={item.img}
                          alt={item.title}
                          width={200} // ปรับ width ให้เหมาะสมกับ Card
                          height={400}
                        />
                      </figure>

                      <div className="post-header p-6">
                        <h3 className="!text-[1.2rem] font-bold !mb-3 text-slate-800 hover:text-[#00B7B8] transition-colors cursor-default">
                          {item.title}
                        </h3>

                        <div className="flex items-start">
                          <i className="uil uil-map-marker text-[#00B7B8] mr-2 text-xl"></i>
                          <p className="!text-[0.9rem] !leading-relaxed text-slate-500 !mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-50">
                          <a
                            target="_blank"
                            href="https://maps.app.goo.gl/ad23H3AgMrEVZLsx8"
                            className="!text-[0.85rem] font-bold !text-[#00B7B8] flex items-center group"
                          >
                            Google Maps
                            <i className="uil uil-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
