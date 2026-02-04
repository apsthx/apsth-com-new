import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import {
  getApsxWhyFeatures,
  getFeedbackData,
  getSystemFunctions,
  getClinicReports,
  getWhyApsx,
  getFeaturesData,
} from "@/data/features";
import Link from "next/link";

export default async function ServiceExpansion({ lng }) {
  const { t } = await useTranslation(lng);
  const whyFeaturesItems = getApsxWhyFeatures(t);
  const feedbackItems = getFeedbackData(t, lng);
  const functionItems = getSystemFunctions(t);
  const reportItems = getClinicReports(t);
  const featuresItems = getFeaturesData(t, lng);
  const whyApsxItems = getWhyApsx(t);

  return (
    <section
      id="service_expansion"
      className="relative overflow-hidden py-6 bg-[#ffff] "
    >
      <div className="container flex flex-wrap items-center justify-center">
        <section className="wrapper !bg-[#ffffff]">
          {/* ส่วนหัวข้อ (ถ้ามี) */}
          <div className="mb-6">
            <div className="flex items-center justify-start text-start gap-2 text-slate-800 font-medium">
              <i className="uil uil-comments !text-xl text-[#1bb59b] " />
              <h2 className="!text-xl !font-medium text-[#343f52]">
                APSX Platform มีอะไรใหม่
              </h2>
            </div>
            <p className="text-slate-500 !text-[18px]">
              {t(
                "home:why_apsx.what_new_apsx.title",
                "APSX Platform ออกแบบมาเพื่อช่วยเจ้าของธุรกิจจัดการบริหารงาน ได้อย่างลงตัว",
              )}
              {t(
                "home:why_apsx.what_new_apsx.description",
                "ระบบครอบคลุมทุกด้านของธุรกิจ ไม่ว่าจะเป็นการจัดการระบบภายใน การเงิน การตลาด การขาย การสต๊อก ค่าใช้จ่าย ค่าคอมมิชชั่น และอื่นๆ ครบจบในแพลตฟอร์มเดียว",
              )}
            </p>
          </div>
          {/* การจัด Layout แบบสลับความสูง (Masonry Style) */}
          <div className="columns-1 md:columns-3 gap-8 space-y-8">
            {whyFeaturesItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid flex flex-col group cursor-pointer"
              >
                {/* ส่วนรูปภาพ - จำลองขนาดสลับกันเหมือนในรูป 500x400 และ 750x700 */}
                {/* ส่วนเนื้อหาใต้รูป */}
                <div className="px-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600 mb-1 block">
                    <i
                      className={`uil ${item.icon} text-[#1bb59b] text-lg`}
                    ></i>
                  </span>
                  <h3 className="!text-sm !font-medium text-slate-800 leading-tight !mb-0">
                    {item.title}
                  </h3>
                  <p className="!text-xs text-slate-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff]">
          <div className="container">
            {/* หัวข้อส่วน Recent Projects */}
            <div className="mb-6 text-center md:text-left">
              <div className="flex gap-2 items-center">
                <i className="uil uil-location-arrow !text-xl text-[#1bb59b] " />
                <h4 className="!mt-2 !text-xl !font-medium">บริการของเรา</h4>
              </div>
              <p>
                APSX Platform เป็นระบบที่ลงตัวมาพร้อมกับการใช้งานง่าย สะดวกสบาย
                และรันบน Cloud ด้วยเทคโนโลยีที่ทันสมัยในยุคนี้
                ทำให้ไม่ต้องใช้แฟ้ม OPD Card แบบเก่าอีกต่อไป
              </p>
            </div>

            {/* Masonry Layout: สลับความสูงอัตโนมัติ */}
            {/* เปลี่ยนจาก columns-1 เป็น grid เพื่อให้คุมแถวได้แม่นยำขึ้น */}
            <div className="grid grid-cols-1 gap-8">
              {feedbackItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group bg-[#ffff] transition-all duration-500 overflow-hidden"
                  data-cues="slideInDown"
                  data-delay={300}
                >
                  {/* สลับซ้าย-ขวาด้วย flex-row-reverse เมื่อ index เป็นเลขคี่ */}
                  <article
                    className={`post p-0 flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse bg-white" : "md:flex-row bg-[#edf9f6]/50"} h-full`}
                  >
                    {/* Image Section: ปรับขนาดให้คงที่เมื่ออยู่ด้านข้าง */}
                    <figure className="relative w-full md:w-5/12 lg:w-4/12 !mb-0 overflow-hidden bg-slate-100 cursor-pointer aspect-[4/3] md:aspect-auto">
                      <Link
                        target="_blank"
                        href={item.link || "#"}
                        className="w-full h-full block"
                      >
                        <Image
                          className="!transition-all !duration-700 !ease-in-out group-hover:blur-sm !w-full !h-full !object-cover"
                          src={item.img || "/assets/img/placeholder.jpg"}
                          alt={item.title}
                          width={600}
                          height={450}
                          priority
                        />
                      </Link>

                      <figcaption className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 bg-slate-900/10 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center pointer-events-none">
                        <div className="bg-[#343f52] border border-[#343f52] px-5 py-2 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                          <span className="text-[#f5f5f6] font-medium text-[0.8rem]">
                            {t("home:read_more", "ดูรายละเอียด")}
                          </span>
                        </div>
                      </figcaption>
                    </figure>

                    {/* Content Section: ปรับ Padding และการจัดเรียงข้อความ */}
                    <div
                      className={`post-header p-8 md:p-10 flex flex-col justify-center flex-grow w-full md:w-7/12 lg:w-8/12 ${index % 2 !== 0 ? "text-right items-end" : "text-left items-start"}`}
                    >
                      <div
                        className={`post-title h4 !mb-0 inline-flex !tracking-[0.02rem] text-[0.8rem] font-bold !text-[#aab0bc] relative align-top  `}
                      >
                        <Link
                          target="_blank"
                          className="!text-[#343f52] transition-colors text-lg !font-medium"
                          href={item.link || "#"}
                        >
                          {item.title}
                        </Link>
                      </div>

                      {item.status === "coming_soon" && (
                        <div className="mb-3">
                          <span className="bg-[#1bb59b]/10 text-[#1bb59b] text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                            {t("home:coming_soon", "เร็วๆ นี้")}
                          </span>
                        </div>
                      )}

                      <p className="!text-[0.8rem] !leading-relaxed text-[#64748b] !mb-0 font-light max-w-2xl">
                        {item.description || item.desc}
                      </p>
                    </div>
                  </article>

                  <div className="h-[4px] w-0 bg-[#1bb59b] group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto py-20 px-6">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-1/2 top-20">
                  <div className="rounded-[2rem] p-4">
                    <div className="flex flex-wrap justify-center mx-[-10px]">
                      {whyApsxItems.map((item) => (
                        <div
                          key={item.id}
                          className="w-full sm:w-6/12 flex-[0_0_auto] px-[10px] !mt-[20px]"
                        >
                          <div className="card !h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-white !border-none !rounded-2xl !shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <div className="card-body flex flex-col items-center text-center p-6">
                              {/* Icon Box */}
                              <div
                                className={`w-10 h-10 flex items-center justify-center rounded-xl ${item.bgColor} ${item.iconColor} mb-3 group-hover:rotate-12 transition-transform duration-300`}
                              >
                                <i
                                  className={`uil ${item.icon} text-[1.2rem] leading-none`}
                                />
                              </div>

                              <h4 className="!text-sm  !mb-0 !font-medium text-[#343f52] leading-tight">
                                {item.title}
                              </h4>

                              <p className="text-[0.7rem] !font-light text-[#60697b] leading-relaxed mb-0 line-clamp-3">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  {featuresItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex gap-6 pb-10 group"
                    >
                      {/* เส้นประเชื่อมต่อ (Vertical Line) */}
                      {index !== featuresItems.length - 1 && (
                        <div className="absolute left-[24px] top-10 bottom-0 w-[2px] border-l-2 border-dashed border-[#45c4a0] group-hover:border-purple-400 transition-colors"></div>
                      )}

                      {/* ไอคอนวงกลม */}
                      <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-white border border-[#e1f6f0] rounded-lg shadow-sm flex items-center justify-center transition-transform group-hover:shadow-md">
                        {item.icon}
                      </div>

                      {/* เนื้อหาข้อความ */}
                      <div className="flex-grow pt-1">
                        <h3 className="!text-sm !font-medium text-[#343f52] !mb-1 leading-tight group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#60697b] !text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="!mt-0">
              <div className="flex gap-2 !items-center !mb-0">
                <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
                <h3 className="!mt-2 !text-lg !font-medium text-[#343f52]">
                  {t("clinic:system_functions.title", "ฟังก์ชันของระบบ")}
                </h3>
              </div>

              <div className="flex flex-wrap mx-[-15px]">
                {functionItems.map((item, index) => (
                  <div
                    key={item.id}
                    /* ปรับเป็น w-6/12 บนจอใหญ่เพื่อให้แบ่งเป็น 2 คอลัมน์ */
                    className="w-full  px-[15px]"
                  >
                    <div className="flex items-start p-1 bg-white border-[#e7eaf3] transition-all duration-300   group cursor-default">
                      {/* Icon Checkmark ที่เนียนตาขึ้น */}
                      <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                      <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] transition-colors duration-300 leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 !items-center !mt-6">
                <i className="uil uil-sliders-v-alt text-lg text-[#2bc29d]"></i>
                <h3 className="!mt-2 !text-lg !font-medium text-[#343f52] mb-2">
                  {t("clinic:all_reports.title", "รายงานทั้งหมด")}
                </h3>
              </div>

              <div className="flex flex-wrap mx-[-15px]">
                {reportItems.map((item, index) => (
                  <div key={item.id} className="w-full px-[15px] lg:w-1/2">
                    <div className="flex items-center p-1 transition-all duration-300 group h-full cursor-default">
                      <i className="uil uil-check text-[0.7rem] mr-2 text-[#2bc29d]"></i>
                      <span className="text-xs font-medium text-[#60697b] group-hover:text-[#343f52] leading-tight transition-colors duration-300">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
