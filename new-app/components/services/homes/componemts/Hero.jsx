import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import TypeWriter from "@/components/common/TypeWriter";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <div className="pt-28 xl:pt-[4rem] lg:pt-[1rem] md:pt-[1rem] !text-center !relative">
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
                    <div className="bg-[#54a8c7] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-bold shadow-[0_10px_20px_rgba(84,168,199,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t(
                        "home:hero.user_ecosystem.role_owner",
                        "เจ้าของกิจการ",
                      )}
                    </div>
                    <div className="hidden md:block w-3 h-[2px] bg-gradient-to-r from-[#54a8c7] to-transparent"></div>
                  </div>

                  {/* 2. แพทย์/พยาบาล (เน้นตรงกลางบน) */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:top-[-25px] md:right-[15%] md:left-auto flex flex-col items-center z-10 animate-float">
                    <div className="bg-[#fab758] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-bold shadow-[0_10px_20px_rgba(250,183,88,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t(
                        "home:hero.user_ecosystem.role_medical_professional",
                        "แพทย์/พยาบาล",
                      )}
                    </div>
                    <div className="w-[2px] h-4 bg-gradient-to-b from-[#fab758] to-transparent"></div>
                  </div>

                  {/* 3. ผู้จัดการ */}
                  <div className="absolute bottom-[25%] left-[5%] md:bottom-[35%] md:-left-[50px] flex items-center z-10 animate-float-delayed">
                    <div className="bg-[#45c4a0] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-bold shadow-[0_10px_20px_rgba(69,196,160,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
                      {t("home:hero.user_ecosystem.role_manager", "ผู้จัดการ")}
                    </div>
                  </div>

                  {/* 4. พนักงาน */}
                  <div className="absolute bottom-[8%] right-[5%] md:bottom-12 md:-right-16 flex items-center z-10 animate-float">
                    <div className="hidden md:block w-4 h-[2px] bg-gradient-to-l from-[#e668b3] to-transparent"></div>
                    <div className="bg-[#e668b3] text-white px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-bold shadow-[0_10px_20px_rgba(230,104,179,0.3)] hover:scale-105 transition-transform cursor-default whitespace-nowrap">
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
                  <h2 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem]  !mb-0">
                    <span className="rotator-fade ppercase tracking-[0.15rem] text-[#45c4a0] font-bold text-[0.85rem] mb-2 block">
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
                    className="!text-[calc(1.4rem_+_1vw)] font-black xl:!text-[2.8rem] !leading-[1.1] !mb-2 text-[#343f52]"
                  >
                    {t("home:hero.title", "โปรแกรม คลินิก APSX Platform")}
                  </h2>
                </div>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  {t(
                    "home:hero.description",
                    "For Hospital, Clinic, Spa, Wellness, ศูนย์ดูแลผู้สูงอายุ ธุรกิจความงาม คลินิกเฉพาะทาง คลินิกเวชกรรม คลินิกทั่วไป คลินิกพยาบาลผดุงครรภ์ คลินิกกายภาพบำบัด คลินิกแพทย์แผนไทย-จีน คลินิกอายุรกรรม คลินิกแม่และเด็ก คลินิกบําบัดยาเสพติด คลินิกสุขภาพจิต คลินิกตา คลินิกทันตกรรม",
                  )}
                </p>

                <h2 className="!text-[calc(1.365rem_+_1.38vw)] !leading-[1.2] xl:!text-[1.4rem]  !mb-0">
                  <span className="typer !text-[#54a8c7] font-medium">
                    {/* import TypeWriter from "../common/TypeWriter"; */}
                    <TypeWriter
                      strings={[
                        t(
                          "home:hero.free_essentials.free_training",
                          "ฟรี สอนการใช้งาน",
                        ),
                        t(
                          "home:hero.free_essentials.free_updates",
                          "ฟรี อัพเดทเวอร์ชั่น",
                        ),
                      ]}
                    />
                  </span>
                  <span
                    className="cursor !text-[#54a8c7] "
                    data-owner="typer"
                  />
                </h2>

                <div className="mt-4 flex flex-col md:flex-row justify-center items-center mb-6 px-4 gap-3 md:gap-3">
                  {/* ปุ่ม Line ID - ขนาดกะทัดรัด */}
                  <Link
                    target="_blank"
                    href="https://page.line.me/gbc9405c"
                    className="btn w-full md:w-auto !inline-flex items-center justify-center !text-white !bg-[#45c4a0] border border-[#3eb392] !shadow-none hover:!shadow-md hover:!-translate-y-0.5 hover:!bg-[#3eb392] transition-all duration-300 !rounded-2xl px-5 py-2 gap-2"
                  >
                    <i
                      className="uil uil-line text-[2rem] leading-none"
                      style={{ color: "#ffffff" }}
                    />
                    <span className="font-semibold text-[0.95rem]">
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
                      className="uil uil-calendar-alt text-[2rem] leading-none"
                      style={{ color: "#ffffff" }}
                    />
                    <span className="font-semibold text-[0.95rem]">
                      {t("home:hero.connect.book_a_demo", "Book a Demo")}
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-20px]">
                  <div className="w-full flex flex-col gap-3 xl:!px-[25px] !px-[10px] !mt-[20px]">
                    {/* รายการที่ 1: Free Training */}
                    <div className=" !bg-white card shadow-[0_2px_10px_rgba(0,0,0,0.04)] border-0 !rounded-[0.6rem] transition-all hover:shadow-md">
                      <div className="card-body !py-2.5 !px-3 flex flex-row items-center gap-3">
                        {/* ไอคอนเล็กลงจาก w-12 เป็น w-10 */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#45c4a015] flex items-center justify-center">
                          <i
                            className="uil uil-presentation-check text-[1.3rem]"
                            style={{ color: "#45c4a0" }}
                          />
                        </div>

                        <div className="flex flex-col text-start">
                          <h4 className="!mb-0 text-[0.95rem] font-bold text-[#343f52] leading-tight">
                            {t(
                              "home:hero.free_essentials.free_training",
                              "สอนการใช้งานฟรี",
                            )}
                          </h4>
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
                      <div className="card-body !py-2.5 !px-3 flex flex-row items-center gap-3">
                        {/* ไอคอนเล็กลงจาก w-12 เป็น w-10 */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#54a8c715] flex items-center justify-center">
                          <i
                            className="uil uil-sync text-[1.3rem]"
                            style={{ color: "#54a8c7" }}
                          />
                        </div>

                        <div className="flex flex-col text-start">
                          <h4 className="!mb-0 text-[0.95rem] font-bold text-[#343f52] leading-tight">
                            {t(
                              "home:hero.free_essentials.free_updates",
                              "อัพเดทเวอร์ชั่นฟรี",
                            )}
                          </h4>
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
        <div className="lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
          <div
            className="absolute shape grape w-5 hidden xl:block lg:block"
            style={{ top: "-5%", left: "-15%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219.5 219.5"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
              />
            </svg>
          </div>
          <div
            className="absolute shape violet !w-[2.5rem] hidden xl:block lg:block"
            style={{ bottom: "30%", left: "-20%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 457.71 446.45"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
              />
            </svg>
          </div>
          <div
            className="absolute shape fuchsia w-6 hidden xl:block lg:block"
            style={{
              top: "0%",
              right: "-25%",
              transform: "rotate(70deg)",
            }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 411.42 329.24"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute shape yellow w-6 hidden xl:block lg:block"
            style={{ bottom: "25%", right: "-17%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>

          {/* /div */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
