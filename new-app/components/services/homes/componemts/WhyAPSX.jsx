import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

// components
import Badge from "@/components/common/Badges";

export default async function WhyAPSX({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 ">
        <div className="container mb-12">
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="flex justify-center mb-6"
          >
            <span className="flex items-center gap-2 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] font-black uppercase rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-100 text-[#45c4a0]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45c4a0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#45c4a0]"></span>
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
            className="container mx-auto text-center mb-12"
          >
            {/* ส่วนหัวเล็ก - ใช้ Badge หรือ Text Uppercase */}
            <h2 className="!text-[0.75rem] uppercase !text-[#3f78e0] font-bold !mb-4 !tracking-[0.1rem] bg-blue-50 inline-block px-3 py-1 rounded-md">
              {t(
                "home:why_apsx.why_apsx.solution",
                "ครอบคลุมทุกความต้องการของสถานพยาบาลยุคดิจิทัล",
              )}
            </h2>

            <div className="max-w-[900px] mx-auto">
              {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
              <h3 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-4">
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
        <div className="flex flex-wrap mx-[-15px] justify-center !mt-[-30px]">
          {/* ข้อมูล Cards: ใช้งานง่าย, รวดเร็ว, ปลอดภัย, อัจฉริยะ, คุ้มค่า */}
          {[
            {
              title: t(
                "home:why_apsx.why_apsx.apsx_items.blog1.title",
                "ใช้งานง่าย",
              ),
              desc: t(
                "home:why_apsx.why_apsx.apsx_items.blog1.description",
                "UI/UX ออกแบบมาให้สะดวก ไม่ซับซ้อน",
              ),
              /* ไอคอน uil-focus สื่อถึงความง่ายที่รวมจุดสนใจไว้ที่เดียว หรือ uil-user-check */
              icon: "uil-focus",
              bgColor: "bg-[#fff9db]",
              iconColor: "text-[#fab005]",
            },
            {
              title: t(
                "home:why_apsx.why_apsx.apsx_items.blog2.title",
                "Cloud-Based",
              ),
              desc: t(
                "home:why_apsx.why_apsx.apsx_items.blog2.description",
                "ใช้งานได้ทุกที่ ทุกเวลา บน AWS Cloud",
              ),
              /* uil-cloud-share สื่อถึงการเข้าถึงข้อมูลได้จากทุกที่ (Anywhere Access) */
              icon: "uil-cloud-share",
              bgColor: "bg-[#e7f5ff]",
              iconColor: "text-[#228be6]",
            },
            {
              title: t(
                "home:why_apsx.why_apsx.apsx_items.blog3.title",
                "อัปเดตฟรี",
              ),
              desc: t(
                "home:why_apsx.why_apsx.apsx_items.blog3.description",
                "อัปเดตฟังก์ชันใหม่อัตโนมัติ ไม่มีค่าใช้จ่ายเพิ่ม",
              ),
              icon: "uil-sync", // สัญลักษณ์การอัปเดต/หมุนเวียนข้อมูล
              bgColor: "bg-[#f3f0ff]",
              iconColor: "text-[#7950f2]",
            },
            {
              title: t(
                "home:why_apsx.why_apsx.apsx_items.blog4.title",
                "ฝึกอบรมฟรี",
              ),
              desc: t(
                "home:why_apsx.why_apsx.apsx_items.blog4.description",
                "สอนการใช้งานฟรี พร้อมให้คำปรึกษา",
              ),
              icon: "uil-presentation-play", // สัญลักษณ์การสอน/พรีเซนต์งาน
              bgColor: "bg-[#e3fafc]",
              iconColor: "text-[#15aabf]",
            },
          ].map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={index}
              className="xl:w-1/5 lg:w-4/12 md:w-4/12 w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full border-0 !rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white">
                <div className="card-body flex flex-col items-center text-center p-6 xl:!p-8">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <i
                      className={`uil ${item.icon} text-[1.8rem] leading-none`}
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
      <div className="container mt-12">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="container mx-auto text-center mb-12"
        >
          <div className="max-w-[900px] mx-auto">
            {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
            <h3 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-4">
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

      <div className="container">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="container mx-auto text-center mb-12"
        >
          {/* ส่วนหัวเล็ก - ใช้ Badge หรือ Text Uppercase */}
          <h2 className="!text-[0.75rem] uppercase !text-[#3f78e0] font-bold !mb-4 !tracking-[0.1rem] bg-blue-50 inline-block px-3 py-1 rounded-md">
            {t(
              "home:why_apsx.what_new_apsx.solution",
              "Platform ที่ทำให้การจัดการคลินิกเป็นเรื่องง่าย",
            )}
          </h2>

          <div className="max-w-[900px] mx-auto">
            {/* หัวข้อหลัก - เน้นความโดดเด่นของ APSX */}
            <h3 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-4">
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

        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] justify-center !mt-[-30px]">
          {/* ข้อมูล Cards: ใช้งานง่าย, รวดเร็ว, ปลอดภัย, อัจฉริยะ, คุ้มค่า */}
          {[
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog1.title",
                "Simple Control Shop",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog1.description",
                "สามารถดูยอดขายได้หลายสาขารวมไปถึงการจัดการได้ง่ายใน User เดียวเท่านั้น",
              ),
              icon: "uil-store", // เปลี่ยนเป็นรูปหน้าร้านเพื่อให้เข้ากับคำว่า Shop
              bgColor: "bg-[#fff9db]",
              iconColor: "text-[#fab005]",
            },
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog2.title",
                "Top Sales Products And Services",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog2.description",
                "สามารถดูยอดขายได้หลายสาขา และสามารถดูยอดขายแยกตามประเภทสินค้าได้ รายบุคคล รายเดือน รายปี และสามารถดูยอดขายแยกตามช่วงเวลาได้",
              ),

              icon: "uil-chart-line",
              bgColor: "bg-[#e7f5ff]",
              iconColor: "text-[#228be6]",
            },
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.title",
                "User Interface สวยงามใช้งานง่าย",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.description",
                "ระบบถูกออกแบบมาเพื่อให้ใช้งานง่ายไม่ซับซ้อนไม่ยุ่งยาก เทคโนโลยีใหม่ในยุคนี้",
              ),
              icon: "uil-layers", // สื่อถึงชั้นเลเยอร์ของ UI ที่สวยงาม
              bgColor: "bg-[#f3f0ff]",
              iconColor: "text-[#7950f2]",
            },
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.title",
                "Forecasting การวิเคราะห์ยอดขาย",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.description",
                "ก่อนเริ่มกิจกรรมทางการตลาดใดๆ คุณต้องประเมินว่ากิจกรรมนั้นจะประสบความสำเร็จและได้ผลเพียงใด",
              ),
              icon: "uil-analytics", // สื่อถึงการวิเคราะห์และคาดการณ์
              bgColor: "bg-[#e3fafc]",
              iconColor: "text-[#15aabf]",
            },
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.title",
                "ระบบจัดการไฟล์",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.description",
                "สามารถจัดการไฟล์ได้อย่างมีประสิทธิภาพ ได้แก่ Lab, X-ray, สลีปใบเสร็จ, รูปภาพ, เอกสารอื่นๆ",
              ),
              icon: "uil-folder-medical", // สื่อถึงการเก็บไฟล์ทางการแพทย์ (Lab/X-ray)
              bgColor: "bg-[#ebfbee]",
              iconColor: "text-[#40c057]",
            },
            {
              title: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.title",
                "ระบบจัดการ Admin",
              ),
              desc: t(
                "home:why_apsx.what_new_apsx.what_new_items.blog3.description",
                "ที่มีความยืดหยุ่นสูง สามารถจัดการทั้งหมดภายใน User เดียวเท่านั้น รวมไปถึงการจัดการ สิทธิ์การใช้งาน ตั้งค่าระบบ และส่วนอื่นๆ",
              ),
              icon: "uil-setting", // สื่อถึงการตั้งค่าและแอดมิน
              bgColor: "bg-[#fff5f5]",
              iconColor: "text-[#fa5252]",
            },
          ].map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={index}
              className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full border-0 !rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white">
                <div className="card-body flex flex-col items-center text-center p-6 xl:!p-8">
                  {/* Icon Box: ปรับขนาดเล็กลงให้ดูมินิมอล */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bgColor} ${item.iconColor} mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm`}
                  >
                    <i
                      className={`uil ${item.icon} text-[1.4rem] leading-none`}
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
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}
            <div
              className="max-w-[850px] mb-12 mx-auto text-center" // เพิ่ม mx-auto และ text-center เพื่อจัดกึ่งกลาง
              data-cues="slideInDown"
              data-delay={300}
            >
              {/* ส่วน Badge ด้านบนจัดกลาง */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] font-bold text-[#3f78e0]">
                  {t("home:why_apsx.security_first.solution", "Security First")}
                </span>
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-5">
                <h2 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
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
              {[
                {
                  id: "blog1",
                  link: "/clinic",
                  img: "/assets/homes/apsx1.webp",
                  title: "APSX Security Dashboard",
                },
                {
                  id: "blog2",
                  link: "/wellness",
                  img: "/assets/homes/apsx2.webp",
                  title: "Authentication Process",
                },
              ].map((item, index) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={index}
                  className="w-full md:w-6/12 lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="group !rounded-[1.2rem] shadow-[0_15px_45px_rgba(30,34,40,0.06)] bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <article className="post p-0">
                      <figure className="overlay overlay-1 hover-scale group !mb-0 overflow-hidden">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-[0.6s] !ease-in-out group-hover:scale-105 w-full h-auto"
                            src={item.img}
                            alt={item.title || "Security Feature"} // ป้องกัน Error missing alt
                            width={600}
                            height={400}
                          />
                        </Link>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 bg-black/5 text-center inset-0 z-[5] pointer-events-none transition-all duration-300 flex items-center justify-center">
                          <div className=" px-6 py-2 rounded-full font-bold shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-[#3f78e0]">
                            {t("home:read_more", "ดูรายละเอียด")}
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
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] font-bold text-[#3f78e0]">
                  {t(
                    "home:why_apsx.face_verification.solution",
                    "Face Verification (Comparison AI)",
                  )}
                </span>
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-5">
                <h2 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
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
              {[
                {
                  id: "blog1",
                  link: "/clinic",
                  img: "/assets/homes/apsx3.webp",
                  title: "APSX Security Dashboard",
                },
                {
                  id: "blog2",
                  link: "/wellness",
                  img: "/assets/homes/apsx4.webp",
                  title: "Authentication Process",
                },
              ].map((item, index) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={index}
                  className="w-full md:w-6/12 lg:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="group !rounded-[1.2rem] shadow-[0_15px_45px_rgba(30,34,40,0.06)] bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <article className="post p-0">
                      <figure className="overlay overlay-1 hover-scale group !mb-0 overflow-hidden">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-[0.6s] !ease-in-out group-hover:scale-105 w-full h-auto"
                            src={item.img}
                            alt={item.title || "Security Feature"} // ป้องกัน Error missing alt
                            width={600}
                            height={400}
                          />
                        </Link>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 bg-black/10 text-center inset-0 z-[5] pointer-events-none transition-all duration-300 flex items-center justify-center">
                          <div className=" px-6 py-2 rounded-full font-bold shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-[#3f78e0]">
                            {t("home:read_more", "ดูรายละเอียด")}
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
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] font-bold text-[#3f78e0]">
                  {t(
                    "home:why_apsx.additional_services.solution",
                    "Additional Services",
                  )}
                </span>
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-5">
                <h2 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
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
              {[
                {
                  id: "blog1",
                  link: "/clinic",
                  img: "/assets/homes/apsx5.webp",
                  title: "APSX Security Dashboard",
                },
                {
                  id: "blog2",
                  link: "/wellness",
                  img: "/assets/homes/apsx6.webp",
                  title: "Authentication Process",
                },
                {
                  id: "blog3",
                  link: "/wellness",
                  img: "/assets/homes/apsx7.webp",
                  title: "Authentication Process",
                },
                {
                  id: "blog4",
                  link: "/wellness",
                  img: "/assets/homes/apsx7.webp",
                  title: "Authentication Process",
                },
                {
                  id: "blog5",
                  link: "/wellness",
                  img: "/assets/homes/apsx7.webp",
                  title: "Authentication Process",
                },
              ].map((item, index) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={index}
                  /* md:w-6/12 (2 คอลัมน์บนแท็บเล็ต), lg:w-4/12 (3 คอลัมน์บนคอมพิวเตอร์) */
                  className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="group !rounded-[1.2rem] shadow-[0_15px_45px_rgba(30,34,40,0.06)] bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <article className="post p-0">
                      <figure className="overlay overlay-1 hover-scale group !mb-0 overflow-hidden">
                        <Link href={item.link}>
                          <Image
                            className="!transition-all !duration-[0.6s] !ease-in-out group-hover:scale-105 w-full h-auto"
                            src={item.img}
                            alt={item.title || "Security Feature"}
                            width={600}
                            height={400}
                          />
                        </Link>
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 bg-black/5 text-center inset-0 z-[5] pointer-events-none transition-all duration-300 flex items-center justify-center">
                          <div className=" px-6 py-2 rounded-full font-bold shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-[#3f78e0]">
                            {t("home:read_more", "ดูรายละเอียด")}
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
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            {/* --- ส่วนข้อความด้านบน (1 Column เต็มความกว้าง) --- */}

            <div
              className="max-w-[850px] mb-12 mx-auto text-center"
              data-cues="slideInDown"
              data-delay={300}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
                <span className="text-[0.7rem] uppercase tracking-[0.2rem] font-bold text-[#3f78e0]">
                  {t("home:why_apsx.partner.solution", "Partner")}
                </span>
                <span className="w-8 h-[2px] bg-[#3f78e0]"></span>
              </div>

              {/* ส่วนหัวข้อและไอคอนจัดวางกึ่งกลาง */}
              <div className="flex flex-col items-center justify-center gap-2 mb-5">
                <h2 className="!text-[1.8rem] md:!text-[2.2rem] font-bold text-[#343f52] !leading-[1.2] !mb-0">
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
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
              {[
                {
                  id: "blog1",
                  link: "/clinic",
                  title: t(
                    "home:why_apsx.partner.blog1.title",
                    "Pay Solutions",
                  ),
                  description: t(
                    "home:why_apsx.partner.blog1.description",
                    "ระบบตัดบัตรออนไลน์ รองรับช่องทางชำระเงินออนไลน์ที่หลากหลาย",
                  ),
                  img: "/assets/homes/apsx8.webp",
                },
                {
                  id: "blog2",
                  link: "/wellness",
                  title: t("home:why_apsx.partner.blog2.title", "Dietz.asia"),
                  description: t(
                    "home:why_apsx.partner.blog2.description",
                    "ระบบ Telemedicine ครบวงจรสำหรับคลินิก พร้อมการขออนุญาต ช่วยดูแลผู้ป่วยออนไลน์ได้ตามกฎหมาย",
                  ),
                  img: "/assets/homes/apsx9.png",
                },
                {
                  id: "blog3",
                  link: "/spa",
                  title: t("home:why_apsx.partner.blog3.title", "LIS/LAB Plus"),
                  description: t(
                    "home:why_apsx.partner.blog3.description",
                    "ระบบดึงผล Lab/X-Ray ผ่านระบบ LIS มาแสดงผลในระบบ อัตโนมัติ",
                  ),
                  img: "/assets/homes/apsx10.webp",
                },
                {
                  id: "blog4",
                  link: "/spa",
                  title: t(
                    "home:why_apsx.partner.blog4.title",
                    "ระบบแฟ้มเบิกค่าใช้จ่าย (e-Claim)",
                  ),
                  description: t(
                    "home:why_apsx.partner.blog4.description",
                    "รองรับการเบิกค่าใช้จ่าย สาธารณสุข (e-Claim) 16 แฟ้ม",
                  ),
                  img: "/assets/homes/apsx11.webp",
                },
                {
                  id: "blog5",
                  link: "/spa",
                  title: t("home:why_apsx.partner.blog5.title", "PEAK)"),
                  description: t(
                    "home:why_apsx.partner.blog5.description",
                    "โปรแกรมบัญชีออนไลน์ ที่ครอบคลุมการใช้งานที่สุดในไทย ให้เจ้าของธุรกิจรับรู้สภาพการเงินที่แท้จริง",
                  ),
                  img: "/assets/homes/apsx12.jpg",
                },
              ].map((item, index) => (
                <div
                  data-cues="slideInDown"
                  data-delay={300}
                  key={index}
                  className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
                >
                  <div className="!rounded-[0.6rem] h-full shadow-lg bg-white overflow-hidden transition-all hover:-translate-y-1 flex flex-col">
                    <article className="post p-0 flex flex-col h-full">
                      <figure className="overlay overlay-1 hover-scale group rounded-t !mb-0 overflow-hidden relative aspect-[4/3] w-full bg-white">
                        <Link href={item.link} className="w-full h-full block">
                          <Image
                            /* บังคับสไตล์ผ่าน className ให้ขยายเต็มพื้นที่ทุกทิศทาง */
                            className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-110 !w-full !h-full !max-w-none !object-cover"
                            src={item.img}
                            alt={item.title || "Feature Image"}
                            width={600}
                            height={450}
                            priority={true} // ช่วยให้โหลดรูปทันทีและคำนวณขนาดได้แม่นยำขึ้น
                          />
                        </Link>

                        {/* Overlay ดูรายละเอียด */}
                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 inset-0 z-[5] pointer-events-none flex items-center justify-center bg-[#343f52]/20 transition-all duration-300">
                          <div className="from-top">
                            <span className="  text-[#343f52] px-5 py-2 rounded-full font-bold text-[0.8rem] shadow-xl">
                              {t("home:read_more", "ดูรายละเอียด")}
                            </span>
                          </div>
                        </figcaption>
                      </figure>

                      <div className="post-header p-5 flex-grow">
                        <div className="post-title h4 !mb-2 inline-flex !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-50%] before:w-3 before:h-[2px] before:left-0 before:top-1/2 before:bg-[#3f78e0]">
                          <Link
                            className="!text-[#343f52] hover:!text-[#3f78e0] transition-colors"
                            href={item.link}
                          >
                            {item.title}
                          </Link>
                        </div>

                        <div className="mb-2">
                          {item.id === "blog5" && (
                            <Badge
                              color="teal"
                              variant="softText"
                              className="!text-[0.55rem] !px-2 !py-[3px] !leading-tight !shadow-sm !rounded-md"
                            >
                              {t("home:coming_soon", "เร็วๆ นี้")}
                            </Badge>
                          )}
                        </div>

                        <p className="!text-[0.85rem] !leading-relaxed text-[#60697b] !mb-0 line-clamp-3">
                          {/* line-clamp-3 ช่วยให้เนื้อหายาวเท่ากัน ไม่ทำให้ความสูงการ์ดเบี้ยว */}
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
