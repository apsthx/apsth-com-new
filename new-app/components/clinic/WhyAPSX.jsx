import { useTranslation } from "@/app/i18n";

import SlidesImages from "./SlidesImages";
import ImageGallery from "./ImageGallery";
import {
  getWhyApsx,
  getSystemFunctions,
  getClinicReports,
} from "@/data/features";

export default async function WhyAPSX({ lng }) {
  const { t } = await useTranslation(lng);
  const whyApsxItems = getWhyApsx(t);
  const functionItems = getSystemFunctions(t);
  const reportItems = getClinicReports(t);
  return (
    <section id="snippet-3" className="wrapper !bg-[#ffffff] ">
      <div className="container !mb-16 xl:!mb-4 pt-4 xl:pt-10 lg:pt-28 md:pt-28 ">
        <div className="container mb-12">
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
        <div className="flex flex-wrap justify-center mx-[-15px]">
          {whyApsxItems.map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={item.id} // แนะนำให้ใช้ item.id เพื่อความเสถียรของ React
              className="w-full sm:w-6/12 md:w-4/12 xl:w-1/5 flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div className="card !border !border-[#a4aec633] !shadow-md !h-full !rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white">
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
        <ImageGallery />
        <div className="!mt-10  mx-auto">
          {/* หัวข้อส่วนฟังก์ชัน */}
          <div
            data-cues="slideInDown"
            data-delay={50}
            className="mb-0 text-center lg:text-left"
          >
            <h3 className="!text-[1.8rem] font-black text-[#343f52] mb-2">
              {t("clinic:system_functions.title", "ฟังก์ชันของระบบ")}
            </h3>
          </div>

          <div className="flex flex-wrap mx-[-15px]">
            {functionItems.map((item, index) => (
              <div
                data-cues="slideInDown"
                data-delay={index * 50}
                key={item.id}
                /* ปรับเป็น w-6/12 บนจอใหญ่เพื่อให้แบ่งเป็น 2 คอลัมน์ */
                className="w-full  px-[15px] mb-1"
              >
                <div className="flex items-start p-1 bg-white border-[#e7eaf3] transition-all duration-300   group cursor-default">
                  {/* Icon Checkmark ที่เนียนตาขึ้น */}
                  <i className="uil uil-check text-[0.85rem] mr-2"></i>
                  <span className="text-[0.85rem] font-bold text-[#60697b] group-hover:text-[#343f52] transition-colors duration-300 leading-tight">
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
        <div className="mt-4  mx-auto py-10">
          {/* หัวข้อส่วนฟังก์ชัน */}
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="mb-0 text-center lg:text-left"
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
            {reportItems.map((item, index) => (
              <div
                data-cues="slideInDown"
                /* Logic การ Delay ที่คุณทำไว้ดีมากครับ: แบ่งกลุ่มการโผล่ตามลำดับ */
                data-delay={(index % 2) * 100 + Math.floor(index / 2) * 50}
                key={item.id}
                className="w-full px-[15px] lg:w-1/2"
              >
                <div className="flex items-center p-1 bg-white  transition-all duration-300 group h-full cursor-default">
                  <i className="uil uil-check text-[0.85rem] mr-2"></i>
                  <span className="text-[0.85rem] font-bold text-[#60697b] group-hover:text-[#343f52] leading-tight transition-colors duration-300">
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
