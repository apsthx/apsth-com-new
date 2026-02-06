import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

import PartnerItems from "./Partner";
import {
  getApsxPlatformData,
  AiSuggestion,
  getWhyApsx,
  getSecurityFactors,
  getVerificationSystems,
  getSystemAddons,
  getHighlightFeatures,
} from "@/data/features";
// components
import Badge from "@/components/common/Badges";

export default async function PlatformHighlights({ lng }) {
  const { t } = await useTranslation(lng);
  const apsxPlatformItems = getApsxPlatformData(t, lng);
  const suggestions = AiSuggestion(t, lng);

  const HIGHLIGHT_DATA = getHighlightFeatures(t);
  const securityItems = getSecurityFactors(lng);
  const verificationItems = getVerificationSystems(lng);
  const addonItems = getSystemAddons(lng);

  return (
    <section className="wrapper overflow-hidden">
      <div className=" py-[2rem] xl:!py-[2rem] lg:!py-[0rem] md:!py-[0rem]">
        {/*/.row */}
        <div className="mt-0 flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 items-center">
          <div className="container">
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="px-4 flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center"
            >
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <div className="flex items-center gap-2 !mb-0">
                  {/* ส่วนของหัวข้อ */}
                  <i className="uil uil-location-arrow text-[#2bc29d] text-lg"></i>
                  <h2 className="!text-[calc(1.2rem_+_0.66vw)] !font-medium xl:!text-[1.3rem] !leading-none !m-0">
                    {t("home:platform_highlights.title", "จุดเด่น")}{" "}
                    <span className="text-[#343f52]">APSX Platform</span>
                  </h2>
                </div>
                <p className="lead !text-[1.0rem] !leading-[1.2] !font-medium text-[#2bc29d]">
                  {t(
                    "home:platform_highlights.sub_title",
                    "ระบบครบวงจรที่ตอบโจทย์ทุกความต้องการ",
                  )}
                </p>
                {/*/.row */}
              </div>
              <p className="!mb-1 px-6">
                <strong className="font-bold text-[#343f52]">
                  APSX Platform
                </strong>{" "}
                {t(
                  "home:platform_highlights.description",
                  "APSX Platform คือแพลตฟอร์มบริหารจัดการคลินิกและธุรกิจสุขภาพที่ออกแบบมาเพื่อให้คุณ บริหารงานได้อย่างมีประสิทธิภาพสูงสุด ไม่ว่าจะเป็น คลินิก โรงพยาบาล Wellness Spa หรือศูนย์ดูแลผู้สูงอายุ ครอบคลุมทุกฟังก์ชันการทำงานที่จำเป็นในระบบเดียว",
                )}
              </p>

              <div className="w-full py-6 bg-white">
                <div className="max-w-[1200px] mx-auto !px-4">
                  {/* Grid: ปรับขนาด gap ให้เล็กลงเพื่อความแน่นแต่ไม่เบียด */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {HIGHLIGHT_DATA.map((item, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden bg-[#45c4a0] text-white flex flex-col items-center pt-10 pb-6 !px-3 shadow-sm hover:shadow-lg transition-all duration-300 min-h-[260px]"
                      >
                        {/* --- Badge Ribbon: ย่อขนาดลงให้รับกับกล่องที่เล็กลง --- */}
                        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden pointer-events-none z-10">
                          <div
                            className={`absolute font-bold top-2 -left-8 w-24 py-0.5 shadow-sm text-center -rotate-45 text-[10px] tracking-tight ${item.badgeColor}`}
                          >
                            {item.title}
                          </div>
                        </div>

                        {/* --- Icon Area: ลดขนาดวงกลมและตัวไอคอน --- */}
                        <div className="mb-4 flex items-center justify-center">
                          <div className="p-2.5 rounded-full border-[2px] border-white/30">
                            <i
                              className={`uil ${item.icon} text-4xl text-white`}
                            />
                          </div>
                        </div>

                        {/* --- Description Text: ปรับขนาดตัวอักษรลงเล็กน้อย --- */}
                        <div className="text-center w-full px-1">
                          <p
                            className="text-[12px] sm:text-[13px] leading-[1.4] font-medium whitespace-pre-line notranslate tracking-tight"
                            translate="no"
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              data-cues="slideInDown"
              data-delay={300}
              className="w-full mb-4"
            >
              {/* คอนเทนเนอร์หลัก: ใช้ flex-wrap เพื่อให้การ์ดตกลงมาเมื่อจอแคบลง */}
              <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-120px]">
                {apsxPlatformItems.map((item) => {
                  const transformedFeatures = item.list || [];

                  return (
                    <div
                      key={item.id}
                      className=" w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
                    >
                      <div className="border border-[#a4aec633] rounded-lg shadow-md h-full bg-white overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                        <article className="post p-0">
                          <div className="post-header p-6">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center">
                                <i
                                  className={`${item.icon} text-[#1bb59b] text-[1rem] mr-2`}
                                ></i>
                                <p className="text-[0.65rem] font-medium uppercase tracking-widest text-[#1bb59b] !mb-0">
                                  {item.category}
                                </p>
                              </div>
                            </div>

                            <h3 className="post-title !text-[1rem] !leading-[1.4] !font-medium !mb-1">
                              <div className="!text-[#343f52]  transition-colors ">
                                {item.title}
                              </div>
                            </h3>

                            <p className="!text-[0.75rem] !leading-relaxed text-[#60697b] !mb-4">
                              {item.description}
                            </p>

                            <hr className="!my-4 opacity-50" />

                            {/* รายการฟีเจอร์พร้อมไอคอนติ๊กถูก */}
                            <ul className="pl-0 list-none !mb-0 space-y-3">
                              {transformedFeatures.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start">
                                  {/* ไอคอนติ๊กถูก SVG */}
                                  <span className="flex-shrink-0 w-3 h-3 !mt-2 mr-2 text-[#1bb59b]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>

                                  <div className="flex flex-col">
                                    <span className="text-[0.75rem] font-medium text-[#343f52] leading-tight">
                                      {feature.title}{" "}
                                      {/* แก้จาก feature.name เป็น feature.title */}
                                    </span>
                                    <span className="text-[0.65rem] text-[#3c3e42] mt-0.5">
                                      {feature.description}{" "}
                                      {/* แก้จาก feature.sub เป็น feature.description */}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            data-cues="slideInDown"
            data-delay={300}
            className="container px-8 flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center !mt-[1rem] xl:!mt-[4rem] 
             bg-white/40   
             border border-[#a4aec633] rounded-lg mb-4 pb-12 transition-all duration-500 shadow-md
            "
          >
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[80px]">
              <h2 className="!text-[0.75rem] !font-medium !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                AI Suggestion
              </h2>
              <Badge
                color="teal"
                variant="softText"
                className="!inline-flex items-center gap-x-1.5 !text-[1rem] mb-2 !px-4 !py-[5px] !leading-none !shadow-sm !rounded-lg w-fit"
              >
                <i className="uil uil-award !text-[0.85rem] transform translate-y-[1px]"></i>
                <span className="leading-none !text-[0.85rem] font-light">
                  {t("new", "ใหม่")} {t("free_label", "ใช้งานฟรี")}!
                </span>
              </Badge>
              <div className="flex items-end gap-2">
                <p className="!text-[0.95rem] font-medium text-[#1e293b] group-hover:text-blue-700 transition-colors">
                  {t(
                    "home:platform_highlights.ai_suggestion.ai_highlights.save_time.title",
                    "ลดเวลาบันทึก",
                  )}
                </p>
                <p className="text-[#64748b] !text-[0.75rem] leading-relaxed">
                  {t(
                    "home:platform_highlights.ai_suggestion.ai_highlights.save_time.description",
                    "ประหยัดเวลาได้มากกว่า 50%",
                  )}
                </p>
              </div>
              <div className="flex gap-1">
                <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#f0f9ff] rounded-lg transition-transform group-hover:scale-110">
                  <i className="uil uil-robot text-[#2bc29d] text-[1.2rem] leading-none" />
                </span>
                <div>
                  <h3 className="xl:!text-[1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !font-medium !mb-0">
                    {t(
                      "home:platform_highlights.ai_suggestion.title",
                      "AI Suggestion",
                    )}
                  </h3>
                  <p className="xl:!text-[0.8rem] !text-[calc(0.8rem_+_1.02vw)]">
                    {t(
                      "home:platform_highlights.ai_suggestion.sub_title",
                      "ระบบแนะนำข้อความอัตโนมัติ ตรงตามศัพท์ทางการแพทย์",
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 ">
                <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#eff6ff] rounded-lg text-[#2bc29d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M3 5h4" />
                    <path d="M21 17v4" />
                    <path d="M19 19h4" />
                  </svg>
                </span>
                <p>
                  <strong className="text-[#d152a5]">
                    {t("new_feature_label", "ฟีเจอร์ใหม่ล่าสุด")}!
                  </strong>{" "}
                  {t(
                    "home:platform_highlights.ai_suggestion.description",
                    "ระบบ AI ช่วยแนะนำข้อความในการบันทึกเวชระเบียน ลดเวลาการพิมพ์ลดข้อผิดพลาด และใช้ศัพท์ทางการแพทย์ที่ถูกต้อง ใช้งานง่าย สะดวก รวดเร็ว และที่สำคัญ",
                  )}
                  <strong className="text-[#2bc29d]">
                    {t("free_label", "ใช้งานฟรี")}!
                  </strong>{" "}
                </p>
              </div>
              {/*/.row */}
            </div>
            <div className="space-y-1 !mt-[15px] ml-14">
              {/* เพิ่มระยะห่างระหว่างบรรทัด */}
              {suggestions.map((item) => (
                <div key={item.id} className="flex flex-row items-start group">
                  {/* ส่วนของ Icon Checkmark */}
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#1bb59b] transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  {/* ส่วนของข้อความ */}
                  <div>
                    <h4 className="!text-[0.8rem] !mb-1 !text-[#484a4e] !font-medium">
                      {item.item}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section id="snippet-2" className="wrapper container">
          <div className=" pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}
            <div
              className="max-w-[850px] mb-12 mx-auto text-center" // เพิ่ม mx-auto และ text-center เพื่อจัดกึ่งกลาง
            >
              {/* ส่วน Badge ด้านบนจัดกลาง */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t("home:why_apsx.security_first.solution", "Security First")}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1.2rem] md:!text-[1.2rem] !font-medium text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.security_first.title",
                    "ระบบ Login 2 ชั้น Google Authenticatorเพิ่มระบบความปลอดภัยสูงสุด",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายจัดกลาง */}
              <p className="!text-[0.8rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.security_first.description",
                  "ระบบเพิ่มความปลอดภัยสูงสุดของผู้ใช้งาน เพื่อความปลอดภัยของคุณรวมไปถึงการตรวจสอบความถูกต้อง มาพร้อมกับระบบ เปิด-ปิดการ Login ตามเวลาที่กำหนด ผ่านระบบอีกชั้นหนึ่ง",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-30px]">
              {securityItems.map((item) => (
                <div
                  key={item.id}
                  data-cues="slideInDown"
                  className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px] "
                >
                  <div className="group relative  bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-[#a4aec633] rounded-lg shadow-md">
                    <article className="post p-0">
                      <figure className="relative !mb-0 overflow-hidden cursor-pointer">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-700 !ease-in-out group-hover:scale-110 group-hover:blur-[2px] w-full h-auto object-cover"
                            src={item.img}
                            alt={item.title || "Security Feature"}
                            width={600}
                            height={400}
                          />
                        </Link>

                        {/* Overlay: แสดงเมื่อ Hover */}
                        <figcaption className="absolute inset-0 z-[5] flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-900/10 backdrop-blur-[2px] transition-all duration-500 pointer-events-none">
                          <div className="bg-white/90 border border-white px-4 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2">
                            <span className="text-[0.75rem] !font-medium tracking-wide text-slate-800">
                              {t("home:read_more", "ดูรายละเอียด")}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="snippet-2" className="wrapper container">
          <div className=" pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div className="max-w-[850px] mb-12 mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t(
                    "home:why_apsx.face_verification.solution",
                    "Face Verification (Comparison AI)",
                  )}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1rem] md:!text-[1.2rem] !font-medium text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.face_verification.title",
                    "ระบบตรวจสอบใบหน้า Face Verification (Comparison AI)",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายจัดกลาง */}
              <p className="!text-[0.8rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.face_verification.description",
                  "Face Verification ระบบตรวจสอบและยืนยันตัวตนด้วยใบหน้า เพิ่มความปลอดภัยให้กับคลินิกของคุณ ด้วยเทคโนโลยีการเปรียบเทียบใบหน้าแบบ AI ที่แม่นยำ รวดเร็ว และทันสมัย ยกระดับการบริการที่เหนือกว่าด้วยความปลอดภัยที่มั่นใจได้ทุกครั้งที่เข้าใช้บริการหรือการตัดคอร์ส",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-30px]">
              {verificationItems.map((item) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={item.id}
                  className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-[#a4aec633] rounded-lg shadow-md">
                    <article className="post p-0 m-0">
                      <figure className="relative !mb-0 overflow-hidden cursor-pointer aspect-[3/2]">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-700 !ease-in-out group-hover:scale-110 group-hover:blur-sm w-full h-full object-cover"
                            src={item.img}
                            alt={item.title || "Face Verification System"}
                            width={600}
                            height={400}
                          />
                        </Link>

                        {/* Overlay with Button Effect */}
                        <figcaption className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 bg-slate-900/10 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center pointer-events-none">
                          <div className="bg-white/95 border border-white/20 px-7 py-2.5 rounded-full shadow-xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2">
                            <span className="text-[0.75rem] !font-medium tracking-wide text-slate-800">
                              {t("home:read_more", "ดูรายละเอียด")}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="snippet-2" className="wrapper container">
          <div className=" pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div className="max-w-[850px] mb-12 mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t(
                    "home:why_apsx.additional_services.solution",
                    "Additional Services",
                  )}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1rem] md:!text-[1.2rem] !font-medium text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.additional_services.title",
                    "บริการเสริมของระบบ",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายตามต้นฉบับ */}
              <p className="!text-[0.8rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.additional_services.description",
                  "เชื่อมต่อข้อมูลผ่าน Line@ (Official Account) เปิดให้ใช้งาน ฟรี 1 ปี ระบบซิงค์ข้อมูลลูกค้าคลินิกผ่านทาง Line@ มีฟังก์ชันดังนี้ เพิ่มนัดหมาย, ตรวจสอบ OPD ผลแล็บ,รูปก่อน/หลัง, คอร์สคงเหลือ, แจ้งเตือนนัดหมาย แสดงข้อมูลส่วนตัว และอื่นๆ",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
              {addonItems.map((item) => (
                <div
                  key={item.id}
                  data-cues="slideInDown"
                  className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-[#a4aec633] rounded-lg shadow-md ">
                    <article className="post p-0 m-0">
                      <figure className="relative !mb-0 overflow-hidden cursor-pointer aspect-[16/10]">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-700 !ease-in-out group-hover:scale-110 group-hover:blur-sm w-full h-full object-cover"
                            src={item.img}
                            alt={item.title || "System Add-on"}
                            width={600}
                            height={400}
                          />
                        </Link>

                        {/* Overlay with Glassmorphism */}
                        <figcaption className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 bg-slate-900/15 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center pointer-events-none">
                          <div className="bg-white/95 border border-white px-7 py-2.5 rounded-full shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2">
                            <span className="text-[0.75rem] !font-medium tracking-wide text-slate-800">
                              {t("home:read_more", "ดูรายละเอียด")}
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="snippet-2" className="wrapper ">
          <div className=" xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div className="max-w-[850px] mb-12 mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t("home:why_apsx.partner.solution", "Partner")}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1.8rem] md:!text-[1.2rem] !font-medium text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.partner.title",
                    "เรารวบรวมเครื่องมือที่คุณทำงานเข้าด้วยกันผ่าน Partner ของเรา",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายตามต้นฉบับ */}
              <p className="!text-[0.8rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.partner.description",
                  "เพื่อทำให้เวิร์กโฟลว์ของคุณสมบูรณ์แบบ ผ่าน Partner ของเรา ที่จะช่วยให้คุณทำงานได้อย่างมีประสิทธิภาพ รองรับหลากหลายประเภทธุรกิจ อาทิเช่น Clinic Spa Wellness Hospital Beauty ศูนย์ดูแลผู้สูงอายุ",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <PartnerItems lng={lng} />
          </div>
        </section>
      </div>
    </section>
  );
}
