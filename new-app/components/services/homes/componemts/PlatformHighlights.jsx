import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import TypeWriter from "@/components/common/TypeWriter";
import Link from "next/link";
import PagesSlider from "./PagesSlider";
import { slidesData } from "@/data/blogs";

import { useTranslation } from "@/app/i18n";

// components
import Badge from "@/components/common/Badges";

export default async function PlatformHighlights({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section className="wrapper overflow-hidden">
      <div className="container py-[0rem] xl:!py-[0rem] lg:!py-[0rem] md:!py-[0rem]">
        {/*/.row */}
        <div className="mt-0 flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 items-center">
          <div className="container">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              <div
                data-cues="slideInDown"
                data-delay={300}
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2"
              >
                <div className="flex flex-wrap !relative overlap-grid-2 group/container">
                  {/* รูปที่ 1: ด้านหลัง (Default z-[3]) */}
                  <div className="item xl:w-[70%] xl:ml-[30%] lg:w-[70%] lg:ml-[30%] md:w-[70%] md:ml-[30%] w-full z-[3] relative transition-all duration-300 hover:z-[10] hover:scale-[1.02]">
                    <figure className="!rounded-[1.2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-[6px] border-white relative overflow-hidden bg-white">
                      <Image
                        className="w-full h-auto block" // เปลี่ยน object-cover เป็น block และให้มันกว้างเต็ม
                        src="/assets/homes/platform_highlight1.webp"
                        alt="platform highlight 1"
                        width={450}
                        height={450}
                        priority
                      />
                    </figure>
                  </div>
                  {/* รูปที่ 2: ด้านหน้า (Default z-[4]) */}
                  <div className="item xl:w-[50%] xl:!mt-[-60%] xl:ml-0 lg:w-[55%] lg:!mt-[-40%] lg:ml-0 md:w-[55%] md:!mt-[-40%] md:ml-0 w-full -mt-[25%] z-[4] relative transition-all duration-300 hover:z-[10] hover:scale-[1.02]">
                    <figure className="!rounded-[1.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white relative overflow-hidden">
                      <Image
                        className="w-full h-auto object-cover"
                        src="/assets/homes/platform_highlight2.webp"
                        alt="platform highlight 2"
                        width={450}
                        height={450}
                      />
                    </figure>
                  </div>
                </div>

                <div
                  className="shape bg-dot primary bg-[radial-gradient(#5eb9f0,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50"
                  data-rellax-speed={1}
                  style={{ top: "6rem", left: "4rem" }}
                />
              </div>
              {/*/column */}
              <div
                data-cues="slideInDown"
                data-delay={300}
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full"
              >
                <div className="flex items-center gap-4 !mb-4">
                  {/* ส่วนของ Icon Box */}
                  <div className="flex-shrink-0 p-3 bg-[#5eb8f027] rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 218.67"
                      className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] solid-mono text-primary !text-[#3f78e0]"
                    >
                      <path
                        className="fill-secondary"
                        d="M88 208a48.06 48.06 0 01-48-48 45.85 45.85 0 012.26-14.48 10.66 10.66 0 1120.22 6.75 24.28 24.28 0 00-1.15 7.73 26.65 26.65 0 0052.56 6.22 10.67 10.67 0 0120.77 4.87A47.71 47.71 0 0188 208z"
                      ></path>
                      <path
                        className="fill-primary"
                        d="M248 210.67a8 8 0 01-2.22-.32L5.78 141A8 8 0 010 133.34v-48a8 8 0 015.78-7.68l240-69.32A8 8 0 01256 16v186.7a8 8 0 01-3.2 6.4 8.09 8.09 0 01-4.8 1.57z"
                      ></path>
                      <path
                        className="fill-primary"
                        d="M245.33 218.67A10.67 10.67 0 01234.66 208V10.67a10.67 10.67 0 1121.34 0V208a10.66 10.66 0 01-10.67 10.67zm-234.66-64A10.66 10.66 0 010 144V74.69a10.67 10.67 0 0121.34 0V144a10.67 10.67 0 01-10.67 10.67z"
                      ></path>
                    </svg>
                  </div>

                  {/* ส่วนของหัวข้อ */}
                  <h2 className="!text-[calc(1.2rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-none !m-0">
                    {t("home:platform_highlights.title", "จุดเด่น")}{" "}
                    <span className="text-[#5eb9f0]">APSX Platform</span>
                  </h2>
                </div>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  {t(
                    "home:platform_highlights.sub_title",
                    "ระบบครบวงจรที่ตอบโจทย์ทุกความต้องการ",
                  )}
                </p>
                <p className="!mb-1">
                  <strong className="font-bold text-[#019eff]">
                    APSX Platform
                  </strong>{" "}
                  {t(
                    "home:platform_highlights.description",
                    "APSX Platform คือแพลตฟอร์มบริหารจัดการคลินิกและธุรกิจสุขภาพที่ออกแบบมาเพื่อให้คุณ บริหารงานได้อย่างมีประสิทธิภาพสูงสุด ไม่ว่าจะเป็น คลินิก โรงพยาบาล Wellness Spa หรือศูนย์ดูแลผู้สูงอายุ ครอบคลุมทุกฟังก์ชันการทำงานที่จำเป็นในระบบเดียว",
                  )}
                </p>
                <div className="flex flex-wrap mx-[-15px] !mt-[15px] xl:mx-[-20px]">
                  {/* Column 1 */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                    <ul className="pl-0 list-none !mb-0">
                      {/* OPD System */}
                      <li className="flex items-start !mt-5 first:!mt-0 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#e0f2fe] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-medkit text-[#0ea5e9] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          ระบบเวชระเบียน (OPD Management)
                        </span>
                      </li>

                      {/* Inventory */}
                      <li className="flex items-start !mt-5 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#fef3c7] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-store text-[#f59e0b] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          ระบบบริหารสต็อกยา
                        </span>
                      </li>

                      {/* Reports */}
                      <li className="flex items-start !mt-5 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#dcfce7] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-chart-line text-[#22c55e] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          รายงานวิเคราะห์กว่า 40 รูปแบบ
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                    <ul className="pl-0 list-none !mb-0">
                      {/* CRM */}
                      <li className="flex items-start !mt-5 first:!mt-0 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#ede9fe] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-users-alt text-[#8b5cf6] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า
                        </span>
                      </li>

                      {/* Multi-Branch */}
                      <li className="flex items-start !mt-5 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#ffedd5] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-layers text-[#f97316] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          รองรับหลายสาขาในบัญชีเดียว
                        </span>
                      </li>

                      {/* Security */}
                      <li className="flex items-start !mt-5 group">
                        <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#fee2e2] rounded-lg transition-transform group-hover:scale-110">
                          <i className="uil uil-shield-check text-[#ef4444] text-[1.2rem] leading-none" />
                        </span>
                        <span className="text-[#60697b] font-medium leading-relaxed self-center">
                          สิทธิ์การเข้าถึงที่ยืดหยุ่น
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>

            <div className="w-full mb-4">
              {/* คอนเทนเนอร์หลัก: ใช้ flex-wrap เพื่อให้การ์ดตกลงมาเมื่อจอแคบลง */}
              <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-100px]">
                {[
                  {
                    id: "blog1",
                    category: "OPD System",
                    icon: "uil-medkit",
                    title: t(
                      "home:platform_highlights.features.blog1.title",
                      "ระบบเวชระเบียน (OPD Management)",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog1.sub_title",
                      "ฟังก์ชันบันทึกครบถ้วน ครอบคลุมงานหน้าคลินิก",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog1.description",
                      "ระบบบันทึกเวชระเบียนที่ออกแบบมาเพื่องานคลินิกโดยเฉพาะ ครอบคลุมทุกขั้นตอนตั้งแต่ลงทะเบียนผู้ป่วย การตรวจรักษา การจ่ายยา ไปจนถึงการเก็บเงิน พร้อมเอกสารทางการแพทย์ที่ครบถ้วน ลดภาระงานเอกสารและเพิ่มประสิทธิภาพการให้บริการ",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list1.title",
                          "บันทึก OPD Card ออนไลน์",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list1.description",
                          "แทนแฟ้มกระดาษแบบเดิม บันทึกครบถ้วนตามมาตรฐาน",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list2.title",
                          "ลงทะเบียน-นัดหมาย-คิว",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list2.description",
                          "จัดการผู้ป่วยตั้งแต่ต้นทางถึงปลายทาง",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list3.title",
                          "ข้อมูลผู้ป่วยมาตรฐาน JCI/HL7",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list3.description",
                          "เก็บข้อมูลระดับสากล",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list4.title",
                          "เอกสารทางการแพทย์ 15+ แบบ",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list4.description",
                          "ใบรับรอง, ใบนัด, ใบส่งตัว, ใบส่งแล็บ ฯลฯ",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list5.title",
                          "บริการ Lab/X-Ray/Course",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list5.description",
                          "จัดการบริการพิเศษและคอร์สทรีตเมนต์",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog1.list.list6.title",
                          "Face Verification AI",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog1.list.list6.description",
                          "ยืนยันตัวตนด้วยใบหน้าเพื่อความปลอดภัย",
                        ),
                      },
                    ],
                  },
                  {
                    id: "blog2",
                    category: "Inventory",
                    icon: "uil-store",
                    title: t(
                      "home:platform_highlights.features.blog2.title",
                      "ระบบบริหารสต็อกยา",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog2.sub_title",
                      "รวมในแพลตฟอร์ม ไม่ต้องซื้อโมดูลเพิ่ม",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog2.description",
                      "ระบบจัดการคลังยาและเวชภัณฑ์ที่ครบครันและทรงพลัง รวมอยู่ในแพ็คเกจหลักโดยไม่มีค่าใช้จ่ายเพิ่มเติม ควบคุมสต็อก ติดตามล็อต ตรวจสอบวันหมดอายุ และบริหารต้นทุนได้อย่างมีประสิทธิภาพ",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list1.title",
                          "จัดการสต็อค Real-time",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list1.description",
                          "อัพเดทสต็อคทันทีที่มีการจ่ายยาหรือรับเข้า",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list2.title",
                          "ระบบแจ้งเตือนอัจฉริยะ",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list2.description",
                          "เตือนยาหมดอายุ ยาใกล้หมด ยาหมดสต็อค",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list3.title",
                          "จัดการล็อตยา",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list3.description",
                          "ติดตามแต่ละล็อต วันผลิต วันหมดอายุ แยกตามล็อต",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list4.title",
                          "การสั่งซื้อ-โอนสต็อค",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list4.description",
                          "สั่งซื้อจากซัพพลายเออร์ โอนสต็อคระหว่างสาขา",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list5.title",
                          "รายงานความเคลื่อนไหว",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list5.description",
                          "ติดตามการจ่าย-รับเข้า มูลค่าสต็อค",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog2.list.list6.title",
                          "ปรับปรุงสต็อค",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog2.list.list6.description",
                          "ปรับเพิ่ม/ลด สต็อคเมื่อมีของเสีย หรือตรวจนับ",
                        ),
                      },
                    ],
                  },
                  {
                    id: "blog3",
                    category: "Reports",
                    icon: "uil-chart-line",
                    title: t(
                      "home:platform_highlights.features.blog3.title",
                      "รายงานวิเคราะห์กว่า 40 รูปแบบ",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog3.sub_title",
                      "ครอบคลุมทั้งงานบริการ การเงิน และการบริหาร",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog3.description",
                      "ระบบรายงานที่ครบครันและหลากหลาย ตอบโจทย์ทุกมิติการบริหารงาน ตั้งแต่รายงานด้านการเงิน บัญชี คลังยา ไปจนถึงการตลาด Export เป็น Excel/PDF ได้ทันที",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list1.title",
                          "รายงานการเงิน-บัญชี",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list1.description",
                          "กำไร/ขาดทุน, รายได้, ลูกหนี้, ใบเสร็จ, ใบกำกับภาษี",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list2.title",
                          "รายงานการให้บริการ",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list2.description",
                          "OPD, Lab, X-Ray, คอร์ส, การนัดหมาย",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list3.title",
                          "รายงานคลังยา-เวชภัณฑ์",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list3.description",
                          "สต็อค, ความเคลื่อนไหว, หมดอายุ, การสั่งซื้อ",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list4.title",
                          "รายงานวิเคราะห์ยอดขาย",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list4.description",
                          "Top Sale, Forecasting, Sale Pipeline, RFM",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list5.title",
                          "รายงานค่ามือ-คอมมิชชั่น",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list5.description",
                          "แพทย์, พยาบาล, พนักงาน แยกตามประเภท",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog3.list.list6.title",
                          "รายงานทางการแพทย์",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog3.list.list6.description",
                          "วัตถุออกฤทธิ์ (ร.ขจ.2, ร.ว.จ.3/4, ย.ส.5/6/7)",
                        ),
                      },
                    ],
                  },
                  {
                    id: "blog4",
                    category: "CRM",
                    icon: "uil-users-alt",
                    title: t(
                      "home:platform_highlights.features.blog4.title",
                      "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog4.sub_title",
                      "เพื่อนำไปต่อยอดทำการตลาดและ CRM",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog4.description",
                      "ระบบ CRM และ Marketing Automation วิเคราะห์พฤติกรรมการซื้อ แบ่งกลุ่มลูกค้า และส่งโปรโมชั่นได้อย่างตรงเป้าหมาย เพิ่มยอดขายและรักษาฐานลูกค้าเก่า",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list1.title",
                          "RFM Analysis",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list1.description",
                          "วิเคราะห์พฤติกรรมลูกค้า (Recency, Frequency, Monetary)",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list2.title",
                          "Customer Segmentation",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list2.description",
                          "แบ่งกลุ่มลูกค้าตามเกณฑ์ต่างๆ",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list3.title",
                          "Marketing Campaign",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list3.description",
                          "ส่งโปรโมชั่นผ่าน SMS/Email/Line OA",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list4.title",
                          "Sale Pipeline",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list4.description",
                          "ติดตาม Lead และโอกาสการขายจนปิดการขาย",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list5.title",
                          "Line Official Account",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list5.description",
                          "เชื่อมต่อ Line ให้ลูกค้าตรวจสอบข้อมูลได้เอง",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog4.list.list.list6.title",
                          "ระบบแต้มสะสมและคูปอง",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog4.list.list.list6.description",
                          "สร้าง Loyalty Program เพื่อรักษาฐานลูกค้า",
                        ),
                      },
                    ],
                  },
                  {
                    id: "blog5",
                    category: "Multi-Branch",
                    icon: "uil-layers",
                    title: t(
                      "home:platform_highlights.features.blog5.title",
                      "รองรับหลายสาขาในบัญชีเดียว",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog5.sub_title",
                      "จัดการได้จากศูนย์กลาง",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog5.description",
                      "ระบบ Multi-Branch ควบคุมภาพรวมทุกสาขาจากบัญชีเดียว โอนสต็อคระหว่างสาขา เปรียบเทียบผลประกอบการ และบริหารฐานข้อมูลลูกค้าชุดเดียวกัน",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list1.title",
                          "จัดการจากศูนย์กลาง",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list1.description",
                          "ดูและควบคุมทุกสาขาจาก User เดียว",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list2.title",
                          "Dashboard แบบ Real-time",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list2.description",
                          "ดูภาพรวมยอดขาย กำไร ของทุกสาขาทันที",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list3.title",
                          "โอนสต็อคระหว่างสาขา",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list3.description",
                          "จัดสรรยาและอุปกรณ์ระหว่างสาขาได้สะดวก",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list4.title",
                          "ตั้งค่าแยกได้",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list4.description",
                          "กำหนดราคา โปรโมชั่น สิทธิ์แยกตามสาขา",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list5.title",
                          "รายงานเปรียบเทียบ",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list5.description",
                          "เทียบผลประกอบการระหว่างสาขาได้ง่าย",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog5.list.list.list6.title",
                          "ข้อมูลลูกค้ารวม",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog5.list.list.list6.description",
                          "ฐานข้อมูลเดียวกัน ใช้บริการได้ทุกสาขา",
                        ),
                      },
                    ],
                  },
                  {
                    id: "blog6",
                    category: "Security",
                    icon: "uil-shield-check",
                    title: t(
                      "home:platform_highlights.features.blog6.title",
                      "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
                    ),
                    sub_title: t(
                      "home:platform_highlights.features.blog6.sub_title",
                      "แบ่งโฟลว์การทำงานตามระดับผู้ใช้",
                    ),
                    description: t(
                      "home:platform_highlights.features.blog6.description",
                      "ระบบจัดการสิทธิ์ที่ยืดหยุ่น ควบคุมการเข้าถึงข้อมูลละเอียดถึงระดับเมนู กำหนดได้ตามบทบาท พร้อมระบบความปลอดภัย 2 ชั้น ป้องกันการเข้าถึงข้อมูลที่ไม่เหมาะสม",
                    ),
                    list: [
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list1.title",
                          "Role-Based Access Control",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list1.description",
                          "กำหนดสิทธิ์ตามบทบาท เจ้าของ/แพทย์/พนักงาน",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list2.title",
                          "การจำกัดการเข้าถึงข้อมูล",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list2.description",
                          "ควบคุมคนเห็นข้อมูล ละเอียดถึงระดับเมนู",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list3.title",
                          "Google Authenticator",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list3.description",
                          "ระบบ Login 2 ชั้น เพิ่มความปลอดภัยสูงสุด",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list4.title",
                          "กำหนดเวลาการใช้งาน",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list4.description",
                          "ตั้งเวลาเปิด-ปิดการเข้าถึงระบบตามช่วงเวลา",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list5.title",
                          "Audit Log",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list5.description",
                          "บันทึกการเข้าใช้งานและการแก้ไขข้อมูลทั้งหมด",
                        ),
                      },
                      {
                        title: t(
                          "home:platform_highlights.features.blog6.list.list.list6.title",
                          "IP Whitelist",
                        ),
                        description: t(
                          "home:platform_highlights.features.blog6.list.list.list6.description",
                          "จำกัดการเข้าถึงจาก IP ที่กำหนดเท่านั้น",
                        ),
                      },
                    ],
                  },
                ].map((item) => {
                  // แก้ไขตรงนี้: เนื่องจาก item.list เป็น Array อยู่แล้ว จึง map ออกมาใช้ได้เลย
                  const transformedFeatures = item.list || [];

                  return (
                    <div
                      data-cues="slideInDown"
                      data-delay={300}
                      key={item.id}
                      className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
                    >
                      <div className="!rounded-[0.6rem] h-full shadow-lg bg-white overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                        <article className="post p-0">
                          <div className="post-header p-6">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center">
                                <i
                                  className={`${item.icon} text-[#3f78e0] text-[1.2rem] mr-2`}
                                ></i>
                                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#3f78e0] !mb-0">
                                  {item.category}
                                </p>
                              </div>
                            </div>

                            <h3 className="post-title !text-[1.1rem] !leading-[1.4] font-bold !mb-3">
                              <div className="!text-[#343f52] hover:!text-[#3f78e0] transition-colors cursor-pointer">
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
                                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
            className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center !mt-[7rem] shadow-md border border-[#a4aec633] rounded-lg mb-4 pb-10 "
          >
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[80px]">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mt-[-25px]">
                {/* 1. AI Analysis Icon (บน - โทนน้ำเงินเข้ม High-Tech) */}
                <div className="w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <div
                    className="
                            /* Border & Shape */
                            !rounded-3xl border border-white/60 
                            
                            /* Layout & Spacing */
                            xl:mx-8 lg:mx-6 md:mx-4 
                            flex flex-col items-center justify-center p-12 
                            
                            /* Color & Glassmorphism */
                            bg-gradient-to-br from-[#f0fdfa] to-[#eef2ff] 
                            shadow-[0_20px_50px_rgba(13,148,136,0.05)]
                            backdrop-blur-sm 
                          "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-4 drop-shadow-md"
                    >
                      <defs>
                        {/* นิยามการไล่เฉดสี Navy Blue ไปจนถึงสี Light Blue */}
                        <linearGradient
                          id="aiGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#1e3a8a" />{" "}
                          {/* Navy Blue */}
                          <stop offset="100%" stopColor="#60a5fa" />{" "}
                          {/* Light Blue */}
                        </linearGradient>

                        {/* ใส่เงาจางๆ ให้เส้น SVG */}
                        <filter
                          id="shadow"
                          x="-20%"
                          y="-20%"
                          width="140%"
                          height="140%"
                        >
                          <feDropShadow
                            dx="0.5"
                            dy="1"
                            stdDeviation="0.5"
                            floodOpacity="0.3"
                          />
                        </filter>
                      </defs>

                      <g stroke="url(#aiGradient)" filter="url(#shadow)">
                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 5.898 4 4 0 0 0 7.864.444A3 3 0 1 0 12 5Z" />
                        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                        <path d="M6.003 5.125A3 3 0 1 0 12 5" />
                        <path d="M15 13a4.5 4.5 0 0 1-3-4" />
                        <path d="M17.526 10.895A4 4 0 0 0 15 5a3 3 0 1 1 5.997.125" />
                        <path d="M21.474 10.895a4 4 0 0 1-2.526 5.77 4 4 0 0 1-7.864.444" />
                        <path d="M12 13v8" />
                        <path d="M9 17h6" />
                      </g>
                    </svg>
                    <h3 className="text-xl font-bold text-[#1e293b]">
                      {t(
                        "home:platform_highlights.ai_suggestion.ai_highlights.save_time.title",
                        "ลดเวลาบันทึก",
                      )}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {t(
                        "home:platform_highlights.ai_suggestion.ai_highlights.save_time.description",
                        "ประหยัดเวลาได้มากกว่า 50%",
                      )}
                    </p>
                  </div>
                </div>

                {/* 2. Patient Monitoring Icon (ล่างซ้าย - โทนเขียวหัวเป็ด Modern Teal) */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <div
                    className="
                            /* Color & Glassmorphism */
                            bg-gradient-to-br from-[#9df3ec18] to-[#a4faf31f] 
                            shadow-[0_20px_50px_rgba(13,148,136,0.05)]
                            backdrop-blur-sm
                            rounded-[0.4rem] bg-[#f0fdfa] p-10 flex flex-col items-center justify-center h-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0d9488" // Teal
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <span className="font-semibold text-[#134e4a] text-center">
                      AI Diagnostics
                    </span>
                  </div>
                </div>

                {/* 3. Smart Robot/Automation (ล่างขวา - โทนม่วงคราม Royal Indigo) */}
                <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !px-[15px] max-w-full !mt-[25px]">
                  <div
                    className=" 
                            /* Color & Glassmorphism */
                            bg-gradient-to-br from-[#bcb8ff00] to-[#9c97ff11] 
                            shadow-[0_20px_50px_rgba(13,148,136,0.05)]
                            backdrop-blur-sm
                            rounded-[0.4rem] bg-[#f5f3ff] p-10 flex flex-col items-center justify-center h-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4f46e5" // Indigo
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3"
                    >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                    <span className="font-semibold text-[#1e1b4b] text-center">
                      Smart Robotics
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -left-12 z-20 animate-pulse">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-xl border border-teal-100">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></span>
                  <span className="text-[11px] font-bold text-teal-800">
                    Real-time Analysis
                  </span>
                </div>
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !mt-[80px]">
              <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
                AI Suggestion
              </h2>
              <Badge
                color="blue"
                variant="softText"
                className="!inline-flex items-center gap-x-1.5 !text-[1rem] mb-2 !px-4 !py-[5px] !leading-none !shadow-sm !rounded-full w-fit"
              >
                <i className="uil uil-award !text-[1.5rem] transform translate-y-[1px]"></i>
                <span className="leading-none">
                  {t("new", "ใหม่")} {t("free_label", "ใช้งานฟรี")}!
                </span>
              </Badge>
              <div className="flex gap-1">
                <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#f0f9ff] rounded-lg transition-transform group-hover:scale-110">
                  <i className="uil uil-robot text-[#0284c7] text-[1.2rem] leading-none" />
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

              <div className="flex gap-1">
                <span className="flex-shrink-0 mr-4 w-9 h-9 flex items-center justify-center bg-[#eff6ff] rounded-lg text-[#3b82f6]">
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
                  <strong className="text-[#d16b86]">
                    {t("new_feature_label", "ฟีเจอร์ใหม่ล่าสุด")}!
                  </strong>{" "}
                  {t(
                    "home:platform_highlights.ai_suggestion.description",
                    "ระบบ AI ช่วยแนะนำข้อความในการบันทึกเวชระเบียน ลดเวลาการพิมพ์ลดข้อผิดพลาด และใช้ศัพท์ทางการแพทย์ที่ถูกต้อง ใช้งานง่าย สะดวก รวดเร็ว และที่สำคัญ",
                  )}
                  <strong className="text-[#5eb9f0]">
                    {t("free_label", "ใช้งานฟรี")}!
                  </strong>{" "}
                </p>
              </div>
              <div className="!mt-[15px] ml-14">
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list1.title",
                        "CC - Chief Complaint (อาการสำคัญ)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list2.title",
                        "PMH - Past Medical History (ประวัติการรักษา)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list3.title",
                        "PE - Physical Examination (การตรวจร่างกาย)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list4.title",
                        "NOTE - Note (บันทึกเพิ่มเติม)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list5.title",
                        "HPI - History of Present Illness (ประวัติอาการปัจจุบัน)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list6.title",
                        "DX - Diagnosis (การวินิจฉัยโรค)",
                      )}
                    </h4>
                  </div>
                </div>
                {/*/column */}
                <div className="flex flex-row">
                  <span className="flex-shrink-0 w-4 h-4 mt-[3px] mr-2 text-[#3f78e0]">
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
                  <div>
                    <h4 className="!mb-1">
                      {t(
                        "home:platform_highlights.ai_suggestion.list.list7.title",
                        "GA - General Appearance (ลักษณะทั่วไป)",
                      )}
                    </h4>
                  </div>
                </div>
              </div>
              {/*/.row */}
            </div>
            {/*/column */}
          </div>
        </div>
      </div>
    </section>
  );
}
