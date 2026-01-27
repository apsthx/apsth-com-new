import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className="pt-28 xl:pt-[4rem] lg:pt-[1rem] md:pt-[1rem] !text-center !relative !font-medium  !text-[#464c58] !tracking-wide ">
      <div
        className="absolute"
        style={{
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        data-cue="fadeIn"
      >
        <Image
          className="!rounded-[0.8rem]"
          alt="image"
          src="/assets/img/photos/blurry.png"
          width={1400}
          height={1080}
        />
      </div>
      <div className="flex flex-wrap mx-[-15px] !relative px-4 lg:px-0">
        <section id="snippet-1" className="wrapper !bg-transparent  w-screen">
          <div className="container mt-0 sm:pt-0 xl:pt-20 lg:pt-20 md:pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-col mt-0 pt-0 lg:flex-row mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
              <div
                data-cue="fadeIn"
                className="
                  mt-8 relative order-2 lg:order-1 
                  w-full md:w-10/12 lg:w-6/12 xl:w-7/12 flex-[0_0_auto] max-w-full
                  bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl
                  border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                  p-3 sm:p-5 rounded-[2.5rem] lg:mt-0
                  hover:scale-[101%] transition-transform cursor-default whitespace-nowrap duration-500
                "
              >
                {/* เพิ่มวงเรืองแสง (Glow) ด้านหลังรูปเพื่อความโดดเด่น */}
                <div className=" absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-400/10 blur-[100px] rounded-full"></div>

                <figure
                  data-cues="slideInDown"
                  data-delay={300}
                  className="z-[2] relative overflow-visible m-0"
                >
                  <Image
                    className="rounded-[1.5rem] h-auto w-full shadow-2xl border border-white/20"
                    src="/assets/homes/hero.webp"
                    alt="image"
                    width={1200}
                    height={800}
                    priority
                  />

                  {/* --- ส่วนของ Labels ที่เพิ่มความพรีเมียม --- */}

                  {/* 1. เจ้าของกิจการ */}
                  <div className="absolute top-[8%] left-[5%] md:top-[20%] md:-left-[80px] flex items-center group z-10 animate-float-slow">
                    <div className="tracking-[0.1em] leading-none font-medium bg-[#54a8c7] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px]   shadow-[0_10px_20px_rgba(84,168,199,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t(
                        "home:hero.user_ecosystem.role_owner",
                        "เจ้าของกิจการ",
                      )}
                    </div>
                    <div className="hidden md:block w-3 h-[2px] bg-gradient-to-r from-[#54a8c7] to-transparent"></div>
                  </div>

                  {/* 2. แพทย์/พยาบาล (เน้นตรงกลางบน) */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:top-[-25px] md:right-[15%] md:left-auto flex flex-col items-center z-10 animate-float">
                    <div className="tracking-[0.1em] leading-none font-medium bg-[#fab758] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px]   shadow-[0_10px_20px_rgba(250,183,88,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t(
                        "home:hero.user_ecosystem.role_medical_professional",
                        "แพทย์/พยาบาล",
                      )}
                    </div>
                    <div className="w-[2px] h-4 bg-gradient-to-b from-[#fab758] to-transparent"></div>
                  </div>

                  {/* 3. ผู้จัดการ */}
                  <div className="absolute bottom-[25%] left-[5%] md:bottom-[35%] md:-left-[50px] flex items-center z-10 animate-float-delayed">
                    <div className="tracking-[0.1em] leading-none font-medium bg-[#45c4a0] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px]   shadow-[0_10px_20px_rgba(69,196,160,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t("home:hero.user_ecosystem.role_manager", "ผู้จัดการ")}
                    </div>
                  </div>

                  {/* 4. พนักงาน */}
                  <div className="absolute bottom-[8%] right-[5%] md:bottom-12 md:-right-16 flex items-center z-10 animate-float">
                    <div className="hidden md:block w-4 h-[2px] bg-gradient-to-l from-[#e668b3] to-transparent"></div>
                    <div className="tracking-[0.1em] leading-none font-medium bg-[#e668b3] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] shadow-[0_10px_20px_rgba(230,104,179,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t("home:hero.user_ecosystem.role_staff", "พนักงาน")}
                    </div>
                  </div>
                </figure>
              </div>

              {/*/column */}
              <div
                data-cue="fadeIn"
                data-delay={300}
                className="xl:w-5/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[2px]"
              >
                <div
                  data-cue="fadeIn"
                  data-delay={300}
                  className="flex flex-col"
                >
                  <h2 className="!text-[calc(1.365rem_+_1.38vw)] !leading-[1.2] xl:!text-[2.4rem] !mb-0">
                    <span className="!font-Kanit rotator-fade ppercase tracking-[0.15rem] text-[#45c4a0] !font-medium text-[0.85rem] mb-2 block">
                      {/* import AnimatedText from "../common/AnimatedText"; */}
                      <AnimatedText
                        strings={[
                          t("home:hero.our_solutions.who_are_we", "เราคือใคร?"),
                          t(
                            "home:hero.our_solutions.aps_platform_clinic",
                            "APSX แพลตฟอร์มสำหรับคลินิก",
                          ),
                          t(
                            "home:hero.our_solutions.smart_inventory_emr",
                            "ระบบ EMR และคลังสินค้า",
                          ),
                        ]}
                      />
                    </span>
                  </h2>
                  <h2
                    data-cue="slideInDown"
                    data-delay={300}
                    /* เพิ่ม font-Kanit ลงไป และปรับจาก font-black เป็น font-normal (400) */
                    className="!font-Kanit  !text-[calc(1.4rem_+_1vw)] xl:!text-[2.8rem] !leading-[1.1] !mb-2 text-[#1c5045]"
                  >
                    {t("home:hero.title", "โปรแกรม คลินิก APSX Platform")}
                  </h2>
                </div>
                <p className="!font-Kanit !font-normal  lead !text-[1rem] !leading-[1.6] ">
                  {t(
                    "home:hero.description",
                    "For Hospital, Clinic, Spa, Wellness, ศูนย์ดูแลผู้สูงอายุ ธุรกิจความงาม คลินิกเฉพาะทาง คลินิกเวชกรรม คลินิกทั่วไป คลินิกพยาบาลผดุงครรภ์ คลินิกกายภาพบำบัด คลินิกแพทย์แผนไทย-จีน คลินิกอายุรกรรม คลินิกแม่และเด็ก คลินิกบําบัดยาเสพติด คลินิกสุขภาพจิต คลินิกตา คลินิกทันตกรรม",
                  )}
                </p>

                <div className="mt-9 flex flex-col md:flex-row justify-center items-center mb-6 px-4 gap-3 md:gap-3">
                  {/* ปุ่ม Line ID - ขนาดกะทัดรัด */}
                  <Link
                    target="_blank"
                    href="https://page.line.me/gbc9405c"
                    className="btn w-full md:w-auto !inline-flex items-center justify-center !text-white !bg-[#45c4a0] border border-[#3eb392] !shadow-none hover:!shadow-md hover:!-translate-y-0.5 hover:!bg-[#3eb392] transition-all duration-300 !rounded-2xl px-5 py-2 gap-2"
                  >
                    <i
                      className="uil uil-line text-[1.3rem] leading-none"
                      style={{ color: "#ffffff" }}
                    />
                    <span className="!font-Kanit font-medium  text-[0.95rem]">
                      {t("home:hero.connect.line", "Line: @apsth")}
                    </span>
                  </Link>

                  {/* ปุ่ม Book a Demo - ขนาดกะทัดรัด */}
                  <Link
                    target="_blank"
                    href="/calendar"
                    className="btn w-full md:w-auto !inline-flex items-center justify-center !text-white !bg-[#5eb9f0] hover:!bg-[#4baeeb]  border border-[#4baeeb] !shadow-none hover:!shadow-md hover:!-translate-y-0.5 transition-all duration-300 !rounded-2xl px-5 py-2 gap-2"
                  >
                    <i
                      className="uil uil-calendar-alt text-[1.3rem] leading-none"
                      style={{ color: "#ffffff" }}
                    />
                    <span className="!font-Kanit font-medium text-[0.95rem]">
                      {t("home:hero.connect.book_a_demo", "Book a Demo")}
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-20px]">
                  <div className="w-full flex flex-col gap-3 xl:!px-[25px] !px-[10px] !mt-[20px]">
                    {/* รายการที่ 1: Free Training */}
                    <div className=" !bg-white card shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-0 !rounded-[0.6rem] transition-all hover:shadow-md">
                      <div className="!font-Kanit card-body !py-2.5 !px-3 flex flex-row items-center gap-3">
                        {/* ไอคอนเล็กลงจาก w-12 เป็น w-10 */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#45c4a015] flex items-center justify-center">
                          <i
                            className="uil uil-presentation-check text-[1.3rem]"
                            style={{ color: "#45c4a0" }}
                          />
                        </div>

                        <div className="flex flex-col text-start">
                          <p className="!mb-0 text-[0.95rem] font-medium text-[#343f52] leading-tight">
                            {t(
                              "home:hero.free_essentials.free_training",
                              "สอนการใช้งานฟรี",
                            )}
                          </p>
                          <p className="!mb-0 text-[0.75rem] text-[#60697b] leading-tight">
                            {t(
                              "home:hero.free_essentials.sub_free_training",
                              "สอนใช้งานฟรีจนกว่าจะเป็น โดยทีมผู้เชี่ยวชาญ",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* รายการที่ 2: Free Updates */}
                    <div className="!bg-white  card shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-0 !rounded-[0.6rem] transition-all hover:shadow-md">
                      <div className="!font-Kanit card-body !py-2.5 !px-3 flex flex-row items-center gap-3">
                        {/* ไอคอนเล็กลงจาก w-12 เป็น w-10 */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#54a8c715] flex items-center justify-center">
                          <i
                            className="uil uil-sync text-[1.3rem]"
                            style={{ color: "#54a8c7" }}
                          />
                        </div>

                        <div className="flex flex-col text-start">
                          <p className="!mb-0 text-[0.95rem] font-medium text-[#343f52] leading-tight">
                            {t(
                              "home:hero.free_essentials.free_updates",
                              "อัพเดทเวอร์ชั่นฟรี",
                            )}
                          </p>
                          <p className="!mb-0 text-[0.75rem] text-[#60697b] leading-tight">
                            {t(
                              "home:hero.free_essentials.sub_free_updates",
                              "อัปเดตฟีเจอร์ใหม่และระบบความปลอดภัยฟรี",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/.row */}
              </div>
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
