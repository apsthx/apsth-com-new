import { useTranslation } from "@/app/i18n";

import { getApsxPlatformData, AiSuggestion } from "@/data/features";
// components
import Badge from "@/components/common/Badges";

export default async function PlatformHighlights({ lng }) {
  const { t } = await useTranslation(lng);
  const apsxPlatformItems = getApsxPlatformData(t, lng);
  const suggestions = AiSuggestion(t, lng);
  return (
    <section className="wrapper overflow-hidden">
      <div className=" py-[2rem] xl:!py-[2rem] lg:!py-[0rem] md:!py-[0rem]">
        {/*/.row */}
        <div className="mt-0 flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 items-center">
          <div className="container">
            <div className="px-4 flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              {/*/column */}
              <div
                data-cues="slideInDown"
                data-delay={300}
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full"
              >
                <div className="flex items-center gap-4 !mb-0">
                  {/* ส่วนของหัวข้อ */}
                  <h2 className="!text-[calc(1.2rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-none !m-0">
                    {t("home:platform_highlights.title", "จุดเด่น")}{" "}
                    <span className="text-[#343f52]">APSX Platform</span>
                  </h2>
                </div>
                <p className="lead !text-[1.05rem] !leading-[1.6] !font-medium text-[#2bc29d]">
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
            </div>

            <div className="w-full mb-4">
              {/* คอนเทนเนอร์หลัก: ใช้ flex-wrap เพื่อให้การ์ดตกลงมาเมื่อจอแคบลง */}
              <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-120px]">
                {apsxPlatformItems.map((item) => {
                  const transformedFeatures = item.list || [];

                  return (
                    <div
                      data-cues="slideInDown"
                      data-delay={300}
                      key={item.id}
                      className=" w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
                    >
                      <div className="border border-[#a4aec633] rounded-lg shadow-md h-full bg-white overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                        <article className="post p-0">
                          <div className="post-header p-6">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center">
                                <i
                                  className={`${item.icon} text-[#1bb59b] text-[1.2rem] mr-2`}
                                ></i>
                                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1bb59b] !mb-0">
                                  {item.category}
                                </p>
                              </div>
                            </div>

                            <h3 className="post-title !text-[1.1rem] !leading-[1.4] font-bold !mb-3">
                              <div className="!text-[#343f52]  transition-colors ">
                                {item.title}
                              </div>
                            </h3>

                            <p className="!text-[0.85rem] !leading-relaxed text-[#60697b] !mb-4">
                              {item.description}
                            </p>

                            <hr className="!my-4 opacity-50" />

                            {/* รายการฟีเจอร์พร้อมไอคอนติ๊กถูก */}
                            <ul className="pl-0 list-none !mb-0 space-y-3">
                              {transformedFeatures.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start">
                                  {/* ไอคอนติ๊กถูก SVG */}
                                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#1bb59b]">
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
                                    <span className="text-[0.85rem] font-bold text-[#343f52] leading-tight">
                                      {feature.title}{" "}
                                      {/* แก้จาก feature.name เป็น feature.title */}
                                    </span>
                                    <span className="text-[0.75rem] text-[#aab0bc] mt-0.5">
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
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                AI Suggestion
              </h2>
              <Badge
                color="teal"
                variant="softText"
                className="!inline-flex items-center gap-x-1.5 !text-[1rem] mb-2 !px-4 !py-[5px] !leading-none !shadow-sm !rounded-full w-fit"
              >
                <i className="uil uil-award !text-[1.5rem] transform translate-y-[1px]"></i>
                <span className="leading-none">
                  {t("new", "ใหม่")} {t("free_label", "ใช้งานฟรี")}!
                </span>
              </Badge>
              <div className="flex items-end gap-2">
                <p className="!text-lg font-bold text-[#1e293b] group-hover:text-blue-700 transition-colors">
                  {t(
                    "home:platform_highlights.ai_suggestion.ai_highlights.save_time.title",
                    "ลดเวลาบันทึก",
                  )}
                </p>
                <p className="text-[#64748b] text-sm leading-relaxed">
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
                  <h3 className="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-1">
                    {t(
                      "home:platform_highlights.ai_suggestion.title",
                      "AI Suggestion",
                    )}
                  </h3>
                  <p className="xl:!text-[1rem] !text-[calc(0.8rem_+_1.02vw)]">
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
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#1bb59b] transition-transform duration-200 group-hover:scale-110">
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
                    <h4 className="!mb-1 text-[#343f52] !font-medium">
                      {item.item}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            {/*/column */}
          </div>
        </div>
      </div>
    </section>
  );
}
