import { useTranslation } from "@/app/i18n";

import SlidesImages from "./SlidesImages";

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
            <h2 className="!text-[0.75rem] uppercase !text-[#9499a3] !font-medium !mb-4 !tracking-[0.1rem] bg-blue-50 inline-block px-3 py-1 rounded-md">
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
              bgColor: "bg-[#edf9f6]",
              iconColor: "text-[#45c4a0]",
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
              bgColor: "bg-[#edf9f6]",
              iconColor: "text-[#45c4a0]",
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
              bgColor: "bg-[#edf9f6]",
              iconColor: "text-[#45c4a0]",
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
              bgColor: "bg-[#edf9f6]",
              iconColor: "text-[#45c4a0]",
            },
          ].map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={index * 50}
              key={index}
              /* xl: 5 คอลัมน์ (w-1/5)
              lg/md: 3 คอลัมน์ (w-4/12)
              sm: 2 คอลัมน์ (sm:w-6/12) -> ถ้าอยากให้จอเล็กกลางๆ เห็น 2
              default: 1 คอลัมน์ (w-full) -> จอมือถือปกติเห็น 1 เต็มๆ
            */
              className="xl:w-1/5 lg:w-4/12 md:w-4/12 sm:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"
            >
              <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !h-full border-0 !rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white overflow-hidden group">
                <div className="card-body flex flex-col items-center text-center p-6 xl:!p-7">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.bgColor || "bg-[#00b899]/10"} ${item.iconColor || "text-[#00b899]"} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <i
                      className={`uil ${item.icon || "uil-file-info-alt"} text-[1.8rem] leading-none`}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-[0.95rem] xl:text-[1.05rem] font-bold text-[#343f52] mb-2 leading-tight group-hover:text-[#00b899] transition-colors">
                    {item.title}
                  </h4>

                  {/* Description (ถ้ามี) */}
                  {item.desc && (
                    <p className="text-[0.8rem] xl:text-[0.85rem] text-[#60697b] leading-relaxed mb-0 line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mx-[-15px] justify-center ">
          {[
            {
              image: "/assets/clinic/career-img-1.jpg",
            },
            {
              image: "/assets/clinic/career-img-2.jpg",
            },
            {
              image: "/assets/clinic/career-img-3.jpg",
            },
            {
              image: "/assets/clinic/career-img-4.jpg",
            },
            {
              image: "/assets/clinic/career-img-5.jpg",
            },
          ].map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={index}
              className="xl:w-1/5 lg:w-4/12 md:w-6/12 w-6/12 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px] py-4"
            >
              {/* Container ของรูปภาพ - ไม่มีเงา เน้นความเรียบง่าย */}
              <div className="group relative aspect-square flex items-center justify-center rounded overflow-hidden transition-all duration-300 hover:scale-105 bg-transparent">
                <img
                  src={item.image}
                  alt={`icon-${index}`}
                  // ใช้ object-contain ถ้าเป็นโลโก้เพื่อให้เห็นขอบครบ หรือ object-cover ถ้าอยากให้เต็มพื้นที่
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="!mt-10  mx-auto">
          {/* หัวข้อส่วนฟังก์ชัน */}
          <div
            data-cues="slideInDown"
            data-delay={50}
            className="mb-8 text-center lg:text-left"
          >
            <h3 className="!text-[1.8rem] font-black text-[#343f52] mb-2">
              {t("clinic:system_functions.title", "ฟังก์ชันของระบบ")}
            </h3>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            {[
              {
                title: t("clinic:system_functions.list1", "ภาพรวม Overview"),
              },
              {
                title: t(
                  "clinic:system_functions.list2",
                  "รองรับการดูยอดขายได้หลายสาขาพร้อมกัน",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list3",
                  "รองรับการดูยอด กำไร/ขาดทุน และ Top Sale",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list4",
                  "การจัดการง่ายใน User เดียว (Simple Control Shop)",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list5",
                  "จัดการได้ด้วยตัวเอง ไม่ต้องเรียกใช้งานฝ่าย IT",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list6",
                  "ระบบค่าคอมมิชชั่นแบบขั้นบันได และค่ามือพนักงาน",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list7",
                  "การตั้งค่าเอกสารยืดหยุ่น และผังบัญชี",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list8",
                  "จัดการข้อมูลลูกค้า มาตรฐาน JCI/HL7 ระดับสากล",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list9",
                  "รองรับพันธุกรรมครอบครัว และประวัติสุขภาพจิต",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list10",
                  "รองรับบริการ คอร์ส/Lab/X-Ray และการตัดต้นทุน",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list11",
                  "รองรับการให้ค่ามือแพทย์ และค่าคอมมิชชั่น",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list12",
                  "รองรับระบบการบริหารจัดการ IPD/OPD",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list13",
                  "ระบบส่งโปรโมชั่นผ่านข้อความ และ Email",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list14",
                  "รองรับการออกเอกสารทางการแพทย์ครบวงจร",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list15",
                  "รายงานผลในรูปแบบ Excel และ PDF",
                ),
              },
              {
                title: t(
                  "clinic:system_functions.list16",
                  "และฟังก์ชันอื่นๆ อีกมากมาย",
                ),
              },
            ].map((item, index) => (
              <div
                data-cues="slideInDown"
                data-delay={index * 50} // เพิ่มลูกเล่นให้ค่อยๆ โผล่ทีละนิด
                key={index}
                className="xl:w-12/12 w-full px-[15px] mb-3"
              >
                <div className="flex items-center p-4 bg-white rounded-xl border border-[#e7eaf3] transition-all duration-300 hover:border-[#00b899] hover:shadow-md group">
                  {/* Icon Checkmark สีเขียวมินต์ */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#00b899]/10 text-[#00b899] mr-4 transition-all group-hover:bg-[#00b899] group-hover:text-white">
                    <i className="uil uil-check text-[1rem]"></i>
                  </div>

                  <span className="text-[0.8rem] font-bold text-[#60697b] group-hover:text-[#343f52] leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="flex flex-wrap mx-[-15px] justify-center !mt-10"
          >
            <div className="w-full px-[15px]">
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
                <iframe
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src="https://www.canva.com/design/DAGDOA8Z35w/IOuQOSRcElr5vjJW7Nl8vA/view?embed"
                  allowFullScreen={true}
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container !mt-12">
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
          <SlidesImages />
        </div>
        <div className="mt-10  mx-auto py-20">
          {/* หัวข้อส่วนฟังก์ชัน */}
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="mb-8 text-center lg:text-left"
          >
            <h3
              data-cues="slideInDown"
              data-delay={300}
              className="!text-[1.8rem] font-black text-[#343f52] mb-2"
            >
              {t("clinic:all_reports.title", "รายงานทั้งหมด")}
            </h3>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            {[
              {
                title: t("clinic:all_reports.list1", "รายงานสรุปข้อมูลลูกค้า"),
              },
              {
                title: t(
                  "clinic:all_reports.list2",
                  "รายงานสรุปการวินิจฉัยโรค",
                ),
              },
              { title: t("clinic:all_reports.list3", "รายงานการจัดคิว") },
              {
                title: t("clinic:all_reports.list4", "รายงานสรุปการใช้บริการ"),
              },
              {
                title: t(
                  "clinic:all_reports.list5",
                  "รายงานสรุปการใช้บริการคงเหลือ",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list6",
                  "รายงานสรุปความเคลื่อนไหวการใช้บริการ",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list7",
                  "รายงานสรุปการตรวจ/Lab/X-Ray",
                ),
              },
              {
                title: t("clinic:all_reports.list8", "รายงานวิเคราะห์ยอดขาย"),
              },
              {
                title: t(
                  "clinic:all_reports.list9",
                  "รายงานการวิเคราะห์ยอดซื้อ RFM",
                ),
              },
              {
                title: t("clinic:all_reports.list10", "รายงานสรุปประวัติ OPD"),
              },
              { title: t("clinic:all_reports.list11", "รายงานคูปอง") },
              {
                title: t("clinic:all_reports.list12", "รายงานการนัดหมาย"),
              },
              {
                title: t("clinic:all_reports.list13", "รายงาน Sale Pipeline"),
              },
              {
                title: t("clinic:all_reports.list14", "รายงานยา/อุปกรณ์"),
              },
              {
                title: t(
                  "clinic:all_reports.list15",
                  "รายงานการจ่ายยา/อุปกรณ์",
                ),
              },
              {
                title: t("clinic:all_reports.list16", "รายงานการสั่งซื้อ"),
              },
              {
                title: t(
                  "clinic:all_reports.list17",
                  "รายงานการโอน/รับเข้า/เบิก/ปรับปรุง",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list18",
                  "รายงานสรุปล็อตยา/อุปกรณ์คงเหลือ",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list19",
                  "รายงานสรุปความเคลื่อนไหวยา/อุปกรณ์",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list20",
                  "รายงานแจ้งเตือนยา/อุปกรณ์หมดอายุ",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list21",
                  "รายงานสรุปยา/อุปกรณ์คงเหลือ",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list22",
                  "รายงานแจ้งเตือนยา/อุปกรณ์ใกล้จะหมด",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list23",
                  "รายงานการโอนและปรับปรุงคอร์ส",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list24",
                  "รายงานการโอนและปรับปรุงยาในคอร์ส",
                ),
              },
              {
                title: t("clinic:all_reports.list25", "รายงานยอดขาย/บัญชี"),
              },
              {
                title: t("clinic:all_reports.list26", "รายงานสรุปกำไร/ขาดทุน"),
              },
              {
                title: t("clinic:all_reports.list27", "รายงานบัญชีลูกหนี้"),
              },
              {
                title: t("clinic:all_reports.list28", "รายงานสรุปรายได้"),
              },
              {
                title: t("clinic:all_reports.list29", "รายงานใบแจ้งหนี้"),
              },
              { title: t("clinic:all_reports.list30", "รายงานใบเสร็จ") },
              {
                title: t("clinic:all_reports.list31", "รายงานใบกำกับภาษี"),
              },
              {
                title: t(
                  "clinic:all_reports.list32",
                  "รายงานสรุปค่ามือ/คอมมิชชั่น",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list33",
                  "รายงานสรุปยอดขายพนักงาน",
                ),
              },
              {
                title: t("clinic:all_reports.list34", "รายงานสรุปค่าใช้จ่าย"),
              },
              { title: t("clinic:all_reports.list35", "รายงานผังบัญชี") },
              { title: t("clinic:all_reports.list36", "รายงานวงเงิน") },
              { title: t("clinic:all_reports.list37", "รายงานแต้ม") },
              {
                title: t(
                  "clinic:all_reports.list38",
                  "รายงานเบิกค่าใช้จ่าย E-Claim",
                ),
              },
              {
                title: t(
                  "clinic:all_reports.list39",
                  "รายงานวัตถุออกฤทธิ์/ยาเสพติดให้โทษ",
                ),
              },
              { title: t("clinic:all_reports.list40", "รายงาน ร.ขจ.2") },
              {
                title: t("clinic:all_reports.list41", "รายงาน ร.ว.จ.3/4"),
              },
              {
                title: t("clinic:all_reports.list42", "รายงาน ร.ย.ส.4/5"),
              },
              {
                title: t("clinic:all_reports.list43", "รายงาน ย.ส.5/6/7"),
              },
            ].map((item, index) => (
              <div
                data-cues="slideInDown"
                data-delay={(index % 2) * 100 + Math.floor(index / 2) * 50}
                key={index}
                className="xl:w-1/2 lg:w-1/2 w-full px-[15px] mb-3"
              >
                <div className="flex items-center p-4 bg-white rounded-xl border border-[#e7eaf3] transition-all duration-300 hover:border-[#00b899] hover:shadow-md group h-full">
                  {/* Icon Checkmark สีเขียวมินต์ */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#00b899]/10 text-[#00b899] mr-4 transition-all group-hover:bg-[#00b899] group-hover:text-white">
                    <i className="uil uil-check text-[1rem]"></i>
                  </div>

                  <span className="text-[0.85rem] font-bold text-[#60697b] group-hover:text-[#343f52] leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*/.row */}
      </div>
    </section>
  );
}
