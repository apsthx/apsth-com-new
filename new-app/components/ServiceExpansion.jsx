import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import Button from "@/components/common/Button";
import { getApsxWhyFeatures, getFeedbackData } from "@/data/features";
import Link from "next/link";

export default async function ServiceExpansion({ lng }) {
  const { t } = await useTranslation(lng);
  const whyFeaturesItems = getApsxWhyFeatures(t);
  const feedbackItems = getFeedbackData(t, lng);

  return (
    <section
      data-cues="slideInDown"
      data-delay={300}
      id="service_expansion"
      className="relative overflow-hidden py-6 !mt-14 bg-[#ffff] "
    >
      <div className="container flex flex-wrap items-center justify-center">
        <section className="wrapper !bg-[#ffffff]">
          {/* ส่วนหัวข้อ (ถ้ามี) */}
          <div className="mb-6">
            <div className="flex items-center justify-start text-start gap-2 text-slate-800 font-medium">
              <i className="uil uil-comments !text-xl text-[#1bb59b]" />
              <h2 className="!text-xl !font-medium text-[#343f52]">
                {t("home:why_apsx.header.title", "APSX Platform มีอะไร?")}
              </h2>
            </div>
            <p className="!text-[#343f52] !text-[18px]">
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
      </div>
      <section className=" wrapper overflow-hidden !relative mt-20">
        <div className="relative">
          <div className="bg-[#f4fcfa]">
            <section className="container wrapper !relative lg:!flex items-center">
              <div className="lg:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full lg:!absolute top-0  !right-0 image-wrapper bg-image bg-cover !h-full">
                <div className="relative w-full h-full min-h-[350px] lg:min-h-full">
                  <Image
                    src="/assets/img/photos/bg1.jpg" // เปลี่ยนเป็น path รูปภาพของคุณ
                    alt="Dashboard Summary Overview"
                    fill
                    priority
                    className="object-center object-contain transition-transform duration-[2000ms]"
                  />{" "}
                </div>
              </div>
              <div className="container">
                <div className="row mx-0">
                  <div className="lg:w-7/12 flex-[0_0_auto] !px-[15px] max-w-full">
                    <div className="pt-[4.5rem] pb-20 xl:pb-28 lg:pb-28 md:pb-28 lg:!py-24 xl:!pr-20 lg:!pr-20 !relative">
                      {/* Icon Wrapper */}
                      <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 234.67"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/supermarket.svg"
                          className="svg-inject icon-svg solid text-[#343f52] w-[1.8rem] !h-[1.8rem] !mb-0"
                        >
                          <path
                            className="fill-[#2bc29d]"
                            d="M192 226.67h-53.33v-69.33a18.67 18.67 0 0118.67-18.67h16A18.67 18.67 0 01192 157.34v69.33z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M245.33 106.67H10.67a10.67 10.67 0 110-21.33h234.67a10.67 10.67 0 110 21.33z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M234.66 101.34a10.65 10.65 0 01-10.56-9.24l-8.2-61.49a10.73 10.73 0 00-10.57-9.27H50.69a10.72 10.72 0 00-10.58 9.27L31.92 92.1a10.67 10.67 0 01-21.15-2.82L19 27.79A32.08 32.08 0 0150.67 0h154.64A32.08 32.08 0 01237 27.79l8.2 61.49a10.66 10.66 0 01-9.17 12 12.81 12.81 0 01-1.39.08z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M69.34 101.34a11.52 11.52 0 01-1.42-.09 10.68 10.68 0 01-9.17-12l10.67-80a10.67 10.67 0 0121.16 2.82l-10.68 80a10.65 10.65 0 01-10.56 9.27zm58.66 0a10.67 10.67 0 01-10.67-10.67v-80a10.67 10.67 0 1121.34 0v80A10.67 10.67 0 01128 101.34zm58.66 0a10.65 10.65 0 01-10.56-9.24l-10.68-80a10.67 10.67 0 1121.16-2.82l10.67 80a10.66 10.66 0 01-9.17 12 13.83 13.83 0 01-1.42.06z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M202.67 234.67H53.34a32 32 0 01-32-32V96A10.64 10.64 0 0132 85.34h192A10.68 10.68 0 01234.67 96v106.69a32 32 0 01-32 31.98zm-160-128v96a10.68 10.68 0 0010.67 10.67h149.33a10.67 10.67 0 0010.67-10.67v-96z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M98.67 192h-16A18.7 18.7 0 0164 173.34v-16a18.7 18.7 0 0118.67-18.67h16a18.69 18.69 0 0118.67 18.67v16A18.71 18.71 0 0198.67 192z"
                          ></path>
                        </svg>
                      </div>

                      <div className="grid items-center justify-start mb-6">
                        <h4 className="!text-xl md:!text-2xl !font-medium !mb-0 !text-[#343f52]">
                          {t(
                            "home:product_overview.platform_func.title",
                            "ฟังก์ชันของระบบที่ออกแบบมาเพื่อคุณ",
                          )}
                        </h4>
                        <h5 className="!text-lg !font-medium !mb-0 !text-[#1bb59b]">
                          {t(
                            "home:product_overview.platform_func.subtitle",
                            "บริหารจัดการง่าย ครบถ้วนทุกกระบวนการในคลิกเดียว",
                          )}
                        </h5>
                      </div>

                      <div className="space-y-4">
                        <p className="!text-[0.95rem] text-[#343f52] leading-relaxed !font-medium">
                          {t(
                            "home:product_overview.platform_func.description",
                            "APSX Platform มาพร้อมกับชุดเครื่องมืออัจฉริยะที่ช่วยเปลี่ยนการทำงานอันซับซ้อนให้กลายเป็นเรื่องง่าย เราให้ความสำคัญกับการเชื่อมโยงข้อมูลตั้งแต่ระบบหน้าบ้านไปจนถึงการบริหารทรัพยากรหลังบ้าน เพื่อให้คุณมีเวลาเหลือไปโฟกัสกับการวางกลยุทธ์และการเติบโตของธุรกิจได้อย่างแท้จริง",
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          rounded="lg"
                          color="dark"
                          href={`/${lng}/#service_expansion`}
                        >
                          <span className="absolute top-1 right-1"></span>
                          <i className="uil uil-comment-search !text-[0.9rem] mr-1"></i>
                          <span className="!font-medium !text-[16px]">
                            {t("read_more", "ดูรายละเอียดเพิ่มเติม")}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="container wrapper bg-[#ffff] !relative lg:!flex items-center">
            {/* ส่วนรูปภาพ - ย้ายไปอยู่ด้านซ้ายมือ */}
            <div className="lg:w-5/12 flex-[0_0_auto] !px-[15px] max-w-full lg:!absolute top-0 !left-0 image-wrapper bg-image bg-cover !h-full">
              <div className="relative w-full h-full min-h-[350px] lg:min-h-full">
                <Image
                  src="/assets/img/photos/bg1.jpg" // เปลี่ยนเป็น path รูปภาพของคุณ
                  alt="Dashboard Summary Overview"
                  fill
                  priority
                  className="object-center object-contain transition-transform duration-[2000ms]"
                />{" "}
              </div>
            </div>

            <div className="container">
              <div className="row mx-0">
                {/* เนื้อหา - ย้ายไปอยู่ฝั่งขวา (ใช้ ms-auto หรือสลับตำแหน่งใน Row) */}
                <div className="lg:w-6/12 xl:w-7/12 !ms-auto flex-[0_0_auto] !px-[15px] max-w-full">
                  <div className="pt-[4.5rem] pb-20 xl:pb-28 lg:pb-28 md:pb-28 lg:!py-24 xl:!pl-10 lg:!pl-10 !relative">
                    {/* Icon Wrapper */}
                    <div className="!flex !items-center !justify-start text-center w-16 h-16 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/edit.svg"
                        className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-mono  text-primary !text-[#3f78e0] "
                      >
                        <path
                          className="fill-[#2bc29d]"
                          d="M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grid items-center justify-start mb-4">
                      <h4 className="!text-lg md:!text-2xl !font-medium !mb-0 !text-[#343f52]">
                        {t(
                          "home:product_overview.business_reports.title",
                          "รายงานสรุปผลภาพรวมธุรกิจ",
                        )}
                      </h4>
                      <h5 className="!text-lg !font-medium !mb-0 !text-[#1bb59b]">
                        {t(
                          "home:product_overview.business_reports.subtitle",
                          "วิเคราะห์ข้อมูลอย่างแม่นยำ เพื่อการตัดสินใจที่เหนือกว่า",
                        )}
                      </h5>
                    </div>
                    <div className="space-y-6">
                      <p className="!text-[0.95rem] text-[#343f52] leading-relaxed font-medium">
                        {t(
                          "home:product_overview.business_reports.description",
                          "เข้าถึงข้อมูลเชิงลึกของธุรกิจได้ทันทีด้วยระบบรายงานอัจฉริยะที่ครอบคลุมกว่า 40 รูปแบบ ไม่ว่าจะเป็นรายงานยอดขาย รายงานสต็อกสินค้า หรือรายงานพฤติกรรมลูกค้า ทุกข้อมูลถูกนำมาประมวลผลให้เข้าใจง่ายในรูปแบบกราฟและตารางที่ชัดเจน ช่วยให้คุณมองเห็นแนวโน้มของธุรกิจและวางแผนรับมือกับทุกสถานการณ์ได้อย่างรวดเร็ว",
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        rounded="lg"
                        color="dark"
                        href={`/${lng}/#service_expansion`}
                      >
                        <span className="absolute top-1 right-1"></span>
                        <i className="uil uil-comment-search text-[0.9rem] mr-1"></i>
                        <span className="!font-medium !text-[16px]">
                          {t("read_more", "ดูรายละเอียดเพิ่มเติม")}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="!mt-20 wrapper !bg-[#ffffff]">
        <div className="container">
          {/* หัวข้อส่วน Recent Projects */}
          <div className="mb-6 text-center md:text-left">
            <div className="flex gap-2 items-center">
              <i className="uil uil-location-arrow !text-xl text-[#1bb59b] " />
              <h4 className="!mt-2 !text-xl !font-medium">
                {t("home:features.services.hero.title", "บริการของเรา")}
              </h4>
            </div>
            <p>
              {t(
                "home:features.services.hero.description",
                "APSX Platform เป็นระบบที่ลงตัวมาพร้อมกับการใช้งานง่าย สะดวกสบาย และรันบน Cloud ด้วยเทคโนโลยีที่ทันสมัยในยุคนี้ ทำให้ไม่ต้องใช้แฟ้ม OPD Card แบบเก่าอีกต่อไป",
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbackItems.map((item, index) => (
              <div
                key={item.id || index}
                className="group bg-white transition-all duration-500 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl flex flex-col h-full"
              >
                <article className="post p-0 flex flex-col h-full">
                  {/* Image Section: รูปอยู่ด้านบนเต็มความกว้าง */}
                  <figure className="relative w-full !mb-0 overflow-hidden bg-slate-100 cursor-pointer aspect-[16/10]">
                    <Link
                      target="_blank"
                      href={item.link || "#"}
                      className="w-full h-full block"
                    >
                      <Image
                        className="!transition-all !duration-700 !ease-in-out group-hover:scale-110 group-hover:blur-[2px] !w-full !h-full !object-cover"
                        src={item.img || "/assets/img/placeholder.jpg"}
                        alt={item.title}
                        width={600}
                        height={450}
                        priority
                      />
                    </Link>

                    <figcaption className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 bg-slate-900/20 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center pointer-events-none">
                      <div className="bg-[#343f52] border border-[#343f52] px-5 py-2 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <span className="text-[#f5f5f6] font-medium text-[0.8rem]">
                          {t("home:read_more", "ดูรายละเอียด")}
                        </span>
                      </div>
                    </figcaption>
                  </figure>

                  {/* Content Section: ข้อความอยู่ด้านล่าง */}
                  <div className="post-header p-6 flex flex-col flex-grow w-full text-left items-start">
                    {item.status === "coming_soon" && (
                      <div className="mb-2">
                        <span className="bg-[#1bb59b]/10 text-[#1bb59b] text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                          {t("home:coming_soon", "เร็วๆ นี้")}
                        </span>
                      </div>
                    )}

                    <div className="post-title h4 !mb-2 inline-flex !tracking-[0.02rem] text-[0.8rem] font-bold !text-[#aab0bc] relative align-top">
                      <Link
                        target="_blank"
                        className="!text-[#343f52] hover:text-[#1bb59b] transition-colors text-lg !font-semibold"
                        href={item.link || "#"}
                      >
                        {item.title}
                      </Link>
                    </div>

                    <p className="!text-[0.85rem] !leading-relaxed text-[#64748b] !mb-0 font-light line-clamp-3">
                      {item.description || item.desc}
                    </p>
                  </div>
                </article>

                {/* เส้นประดับด้านล่าง */}
                <div className="h-[4px] w-0 bg-[#1bb59b] group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
