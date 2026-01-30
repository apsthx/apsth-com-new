import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import {
  getWhyApsx,
  getApsxWhyFeatures,
  getSecurityFactors,
  getVerificationSystems,
  getSystemAddons,
} from "@/data/features";
import PartnerItems from "@/components/Partner";
// components
import Badge from "@/components/common/Badges";

export default async function WhyAPSX({ lng }) {
  const { t } = await useTranslation(lng);
  const whyApsxItems = getWhyApsx(t);
  const whyFeaturesItems = getApsxWhyFeatures(t);
  const securityItems = getSecurityFactors(lng);
  const verificationItems = getVerificationSystems(lng);
  const addonItems = getSystemAddons(lng);
  return (
    <section
      id="snippet-3"
      className="container wrapper !bg-[#ffffff] overflow-hidden"
    >
      <div className=" pt-0 xl:pt-6 lg:pt-6 md:pt-6 ">
        <div className=" mb-12">
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="flex justify-center mb-6"
          >
            <span className="flex items-center gap-2 px-4 py-1.5 text-[0.6rem] xl:text-[0.7rem] tracking-[0.2em] font-black uppercase rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-100 text-[#1bb59b]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bc29d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2bc29d]"></span>
              </span>
              {t(
                "home:why_apsx.why_apsx.why_apsx",
                "ทำไมถึงควรเลือก APSX Platform",
              )}
            </span>
          </div>
          <div
            data-cues="slideInDown"
            data-delay={300}
            className=" mx-auto text-center mb-2"
          >
            {/* ส่วนหัวเล็ก - ใช้ Badge หรือ Text Uppercase */}
            <h2 className="!text-[0.75rem] uppercase !text-[#9499a3] !font-normal !mb-4 !tracking-[0.1rem] bg-blue-50 inline-block px-3 py-1 rounded-md">
              {t(
                "home:why_apsx.why_apsx.solution",
                "ครอบคลุมทุกความต้องการของสถานพยาบาลยุคดิจิทัล",
              )}
            </h2>

            <div className="max-w-[900px] mx-auto">
              {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
              <h3 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
                {t(
                  "home:why_apsx.why_apsx.why_apsx",
                  "ทำไมถึงควรเลือก APSX Platform",
                )}
              </h3>

              {/* คำอธิบาย - ปรับความกว้างให้อ่านง่ายขึ้น (Line Length) */}
              <p className="text-[1rem] text-[#60697b] font-medium !leading-[1.7] !mb-0 px-4">
                {t(
                  "home:why_apsx.why_apsx.description",
                  "จัดการน้อยลง แต่ดูแลได้มากขึ้น ลดภาระงานเอกสารที่ซับซ้อน เพื่อคืนเวลาที่สำคัญที่สุดให้กับการดูแลคนไข้ของคุณอย่างเต็มที่",
                )}
              </p>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="flex flex-wrap justify-center mx-[-15px]">
          {whyApsxItems.map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={item.id} // แนะนำให้ใช้ item.id เพื่อความเสถียรของ React
              className="w-full sm:w-6/12 md:w-4/12 xl:w-1/5 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="card !h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white !border !border-[#a4aec633] !rounded-lg !shadow-md">
                <div className="card-body flex flex-col items-center text-center p-6 xl:!p-8">
                  {/* Icon Box: ใช้ bgColor และ iconColor จาก Array ข้อมูล */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i
                      className={`uil ${item.icon} text-[2rem] leading-none`}
                    />
                  </div>

                  <h4 className="text-[1.05rem] font-bold text-[#343f52] mb-2 leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-[0.85rem] text-[#60697b] leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*/.row */}
      </div>
      <div className=" !mt-16">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className=" mx-auto text-center mb-12"
        >
          <div className="max-w-[900px] mx-auto">
            {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
            <h3 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-2">
              {t(
                "home:why_apsx.why_apsx.input_opd_card.title",
                "InPut OPD Card ผ่านระบบออนไลน์",
              )}
            </h3>

            {/* คำอธิบาย - ปรับความกว้างให้อ่านง่ายขึ้น (Line Length) */}
            <p className="text-[1rem] text-[#60697b] font-medium !leading-[1.7] !mb-0 px-4">
              {t(
                "home:why_apsx.why_apsx.input_opd_card.description",
                "รองรับการบันทึกข้อมูล OPD Card ผ่านระบบออนไลน์ รองรับ คลินิกเฉพาะทาง คลินิกเวชกรรม คลินิกทั่วไป คลินิกพยาบาลผดุงครรภ์ คลินิกกายภาพบำบัด คลินิกแพทย์แผนไทย-จีน คลินิกอายุรกรรม คลินิกแม่และเด็ก คลินิกบําบัดยาเสพติด คลินิกสุขภาพจิต คลินิกตา คลินิกทันตกรรม",
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className=" mx-auto text-center mb-12"
        >
          {/* ส่วนหัวเล็ก - ใช้ Badge หรือ Text Uppercase */}
          <h2 className="!text-[0.75rem] uppercase !text-[#9499a3] !font-normal !mb-4 !tracking-[0.1rem] bg-blue-50 inline-block px-3 py-1 rounded-md">
            {t(
              "home:why_apsx.what_new_apsx.solution",
              "Platform ที่ทำให้การจัดการคลินิกเป็นเรื่องง่าย",
            )}
          </h2>

          <div className="max-w-[900px] mx-auto">
            {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
            <h3 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-2">
              {t(
                "home:why_apsx.what_new_apsx.title",
                "APSX Platform ออกแบบมาเพื่อช่วยเจ้าของธุรกิจจัดการบริหารงาน ได้อย่างลงตัว",
              )}
            </h3>

            {/* คำอธิบาย - ปรับความกว้างให้อ่านง่ายขึ้น (Line Length) */}
            <p className="text-[1rem] text-[#60697b] font-medium !leading-[1.7] !mb-0 px-4">
              {t(
                "home:why_apsx.what_new_apsx.description",
                "ระบบครอบคลุมทุกด้านของธุรกิจ ไม่ว่าจะเป็นการจัดการระบบภายใน การเงิน การตลาด การขาย การสต๊อก ค่าใช้จ่าย ค่าคอมมิชชั่น และอื่นๆ ครบจบในแพลตฟอร์มเดียว",
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-[-15px]">
          {whyFeaturesItems.map((item) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={item.id}
              className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="!border !border-[#a4aec633] !rounded-lg !shadow-md card !h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white">
                <div className="card-body flex flex-col items-center text-center p-6 xl:!p-8 h-full">
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-md ${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i
                      className={`uil ${item.icon} text-[2rem] leading-none`}
                    />
                  </div>

                  <h4 className="text-[1rem] font-bold text-[#343f52] mb-2 leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-[0.85rem] text-[#60697b] leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section id="snippet-2" className="wrapper ">
          <div className=" pt-20 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}
            <div
              className="max-w-[850px] mb-12 mx-auto text-center" // เพิ่ม mx-auto และ text-center เพื่อจัดกึ่งกลาง
              data-cues="slideInDown"
              data-delay={300}
            >
              {/* ส่วน Badge ด้านบนจัดกลาง */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t("home:why_apsx.security_first.solution", "Security First")}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.security_first.title",
                    "ระบบ Login 2 ชั้น Google Authenticatorเพิ่มระบบความปลอดภัยสูงสุด",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายจัดกลาง */}
              <p className="!text-[1.05rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.security_first.description",
                  "ระบบเพิ่มความปลอดภัยสูงสุดของผู้ใช้งาน เพื่อความปลอดภัยของคุณรวมไปถึงการตรวจสอบความถูกต้อง มาพร้อมกับระบบ เปิด-ปิดการ Login ตามเวลาที่กำหนด ผ่านระบบอีกชั้นหนึ่ง",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
              {securityItems.map((item) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={item.id}
                  className="w-full md:w-6/12 lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px] "
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
                          <div className="bg-white/90 border border-white px-7 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2">
                            <span className="text-[0.9rem] font-bold tracking-wide text-slate-800">
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
          <div className=" pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
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
                <h2 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.face_verification.title",
                    "ระบบตรวจสอบใบหน้า Face Verification (Comparison AI)",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายจัดกลาง */}
              <p className="!text-[1.05rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
                {t(
                  "home:why_apsx.face_verification.description",
                  "Face Verification ระบบตรวจสอบและยืนยันตัวตนด้วยใบหน้า เพิ่มความปลอดภัยให้กับคลินิกของคุณ ด้วยเทคโนโลยีการเปรียบเทียบใบหน้าแบบ AI ที่แม่นยำ รวดเร็ว และทันสมัย ยกระดับการบริการที่เหนือกว่าด้วยความปลอดภัยที่มั่นใจได้ทุกครั้งที่เข้าใช้บริการหรือการตัดคอร์ส",
                )}
              </p>
            </div>

            {/* --- ส่วนรายการรูปภาพด้านล่าง (เรียง 2 Columns) --- */}
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
              {verificationItems.map((item) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={item.id}
                  className="w-full md:w-6/12 lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
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
                            <span className="text-[0.9rem] font-bold tracking-wide text-slate-800">
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
          <div className=" pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
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
                <h2 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.additional_services.title",
                    "บริการเสริมของระบบ",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายตามต้นฉบับ */}
              <p className="!text-[1.05rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
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
                  data-cues="slideInDown"
                  data-delay={300}
                  key={item.id}
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
                            <span className="text-[0.9rem] font-bold tracking-tight text-slate-800">
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

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] !text-[#9499a3] !font-normal">
                  {t("home:why_apsx.partner.solution", "Partner")}
                </span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <h2 className="!text-[1.8rem] md:!text-[2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
                  {t(
                    "home:why_apsx.partner.title",
                    "เรารวบรวมเครื่องมือที่คุณทำงานเข้าด้วยกันผ่าน Partner ของเรา",
                  )}
                </h2>
              </div>

              {/* ส่วนคำอธิบายตามต้นฉบับ */}
              <p className="!text-[1.05rem] text-[#60697b] !leading-[1.7] !mb-0 max-w-[700px] mx-auto">
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

        {/*/.row */}
      </div>
      {/* /. */}

      {/* /. */}
    </section>
  );
}
