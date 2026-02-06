import React from "react";
import { useTranslation } from "@/app/i18n";
import { Sparkles, Zap, Lock, BarChart3 } from "lucide-react";
import Button from "@/components/common/Button";
import Image from "next/image";
import SquareFeatureCard from "./common/SquareFeatureCard";
import {
  getHighLightsData,
  getBillData,
  getServicesData,
} from "@/data/features";

export default async function ProductOverview({ lng }) {
  const { t } = await useTranslation(lng);
  const HIGHLIGHTS_DATA = getHighLightsData(t, lng);
  const BillData = getBillData(t, lng);
  const Services = getServicesData(t, lng);

  return (
    <section
      id="product_overview"
      className="relative overflow-hidden pt-24 bg-[#ffff]"
    >
      <div className="flex flex-wrap items-center justify-start py-20 !mt-[-30px] !bg-[#f4fcfa] ">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="grid grid-cols-1 gap-2 pt-0 container "
        >
          <div className="flex flex-col-reverse lg:flex-row items-center !mt-10">
            <div className="w-full !space-y-2">
              <span className="text-[#343f52] text-xl font-medium py-1 rounded-full">
                {t("home:apsx_platform", "โปรแกรม คลินิก APSX Platform")}
              </span>
              <h2 className="text-3xl md:!text-lg !font-medium !text-[#1bb59b]">
                {t(
                  "home:features.title",
                  "ระบบที่ใช้งานง่ายมี ประสิทธิภาพและทันสมัย ที่สุดในตอนนี้",
                )}
              </h2>
              <p className="text-[#343f52] text-sm leading-relaxed">
                {t(
                  "home:features.description",
                  "เป็นระบบที่ลงตัวมาพร้อมกับการใช้งานง่าย สะดวกสบาย และรันบน Cloud ด้วยเทคโนโลยีที่ทันสมัยในยุคนี้ ทำให้ไม่ต้องใช้แฟ้ม OPD Card แบบเก่าอีกต่อไป",
                )}
              </p>

              <p className="text-[#343f52] text-sm leading-relaxed">
                {t(
                  "home:features.features.description",
                  "ยกระดับการบริหารจัดการคลินิกด้วยเทคโนโลยี Cloud อัจฉริยะ ที่ออกแบบมาเพื่อความรวดเร็วและความปลอดภัยสูงสุดของข้อมูลคุณ",
                )}
              </p>
            </div>
          </div>

          <div className="space-y-0 !mt-0 pb-8">
            <div className="flex items-center justify-start text-center gap-2 text-slate-800 !font-medium">
              <i className="uil uil-comments !text-xl text-[#1bb59b]" />
              <h4 className="!mt-2 !text-xl !font-medium space-x-1">
                <span>
                  {t(
                    "home:product_overview.hero.title",
                    "ระบบหลังบ้านที่ทำให้เรื่องคลินิกเป็นเรื่องง่าย",
                  )}
                </span>
                <strong className="text-[#1bb59b] font-medium">
                  {t("home:product_overview.hero.subtitle", "ครบจบในที่เดียว")}
                </strong>
              </h4>
            </div>
            <p className="!text-sm">
              {t(
                "home:product_overview.hero.description",
                "จัดการทุกกระบวนการของคลินิกให้มีประสิทธิภาพด้วยระบบบริหารจัดการที่ออกแบบมาเพื่อคุณโดยเฉพาะ",
              )}
            </p>
            <div className="!mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 max-w-6xl mx-auto px-6">
                {Services.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-start relative"
                  >
                    {/* ส่วนไอคอนและหัวข้อ */}
                    <div className="flex items-center gap-4 !mb-0">
                      <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#1bb59b] transition-all duration-300">
                        <i
                          className={`uil ${item.icon} text-xl text-white transition-colors`}
                        />
                      </div>
                      <h4 className="text-[19px] font-bold text-[#343f52] !mb-0 transition-colors group-hover:text-[#1bb59b]">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pl-14">
                      {item.subTitle && (
                        <span className="block text-[13px] font-bold text-[#1bb59b] mb-1 tracking-wider uppercase">
                          {item.subTitle}
                        </span>
                      )}
                      <p className="text-[15px] text-[#60697b] leading-relaxed !mb-0 font-light">
                        {item.desc}
                      </p>

                      {/* เส้นขีดด้านล่างตัวอักษร (แสดงเมื่อ Hover) */}
                      <div className="w-0 h-[2px] bg-[#1bb59b]/20 mt-4 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                ))}
              </div>
              <div data-cues="slideInDown" data-delay={300}>
                <div className="!mb-6 !mt-20">
                  <div className="flex items-center justify-start text-start gap-2 text-slate-800 font-medium">
                    <i className="uil uil-comments !text-xl text-[#1bb59b]" />
                    <h2 className="!text-xl !font-medium text-[#343f52]">
                      {t(
                        "home:product_overview.updates.header",
                        "จัดการทุกกระบวนการของคลินิกให้มีประสิทธิภาพด้วยระบบบริหารจัดการที่ออกแบบมาเพื่อคุณโดยเฉพาะ",
                      )}
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
                <div className="py-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                  {HIGHLIGHTS_DATA.map((item, index) => (
                    <SquareFeatureCard key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        data-cues="slideInDown"
        data-delay={300}
        className="container wrapper bg-[#ffff] !relative lg:!flex items-center"
      >
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
                {/* Icon Wrapper - เพิ่มพื้นหลังอ่อนๆ ให้ดูเด่นขึ้น */}
                <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full bg-[#1bb59b]/10 !mb-5">
                  <i className="uil uil-comments !text-4xl text-[#1bb59b]" />
                </div>

                <div className="grid items-center justify-start mb-6">
                  <h4 className="text-xl md:text-2xl font-bold !mb-2 space-x-1 !text-[#343f52] !leading-[1.3]">
                    <span>
                      {t(
                        "home:product_overview.hero.title",
                        "ระบบหลังบ้านที่ทำให้เรื่องคลินิกเป็นเรื่องง่าย",
                      )}
                    </span>
                    <strong className="text-[#1bb59b] font-medium">
                      {t(
                        "home:product_overview.hero.subtitle",
                        "ครบจบในที่เดียว",
                      )}
                    </strong>
                  </h4>
                  <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#343f52]">
                    {t(
                      "home:product_overview.workflow.title",
                      "ช่วยให้การทำงานของทีมงานลื่นไหลไม่มีสะดุด",
                    )}
                  </h5>
                </div>

                {/* ส่วนคำอธิบายที่เพิ่มเข้ามา */}
                <p className="text-[0.85rem] leading-relaxed text-[#60697b] space-x-1 !mb-6">
                  <strong className="!text-[#343f52]">
                    {t(
                      "home:product_overview.workflow.about1.vision_title",
                      "บอกลาความวุ่นวายของการจัดการเอกสาร",
                    )}
                  </strong>
                  <span>
                    {t(
                      "home:product_overview.workflow.about1.vision_desc",
                      "APSX Platform ถูกออกแบบมาเพื่อเชื่อมโยงทุกแผนกในคลินิกเข้าด้วยกัน ตั้งแต่การลงทะเบียนคนไข้หน้าเคาน์เตอร์ การบันทึกการรักษาของแพทย์ ไปจนถึงการจัดการคลังยาและบัญชีหลังบ้านอย่างแม่นยำ",
                    )}
                  </span>
                </p>

                <p className="text-[0.85rem] leading-relaxed text-[#60697b] space-x-1 !mb-6">
                  <strong className="!text-[#343f52]">
                    {t(
                      "home:product_overview.workflow.about2.vision_title",
                      "เทคโนโลยี Cloud Sync ที่ล้ำสมัย",
                    )}
                  </strong>
                  <span>
                    {t(
                      "home:product_overview.workflow.about2.vision_desc",
                      "ด้วยเทคโนโลยี Cloud Sync ที่ล้ำสมัย ข้อมูลจะถูกอัปเดตแบบ Real-time ช่วยให้เจ้าของคลินิกตรวจสอบภาพรวมธุรกิจได้ทุกที่ทุกเวลา ลดความผิดพลาดของบุคลากร และเพิ่มเวลาให้คุณได้โฟกัสกับการดูแลคนไข้และการขยายสาขาได้อย่างไร้กังวล",
                    )}
                  </span>
                </p>

                {/* ปุ่ม Call to Action (ตัวเลือกเสริมเพื่อให้จบสวย) */}
                <div className="flex items-center gap-4">
                  <Button
                    rounded="lg"
                    color="dark"
                    href={`/${lng}/#service_expansion`}
                  >
                    <span className="absolute top-1 right-1"></span>
                    <i className="uil uil-comment-search text-[0.8rem] mr-1"></i>
                    <span className="!font-medium !text-[14px]">
                      {t("read_more", "ดูรายละเอียดเพิ่มเติม")}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-cues="slideInDown"
        data-delay={300}
        id="snippet-5"
        className="wrapper !bg-[#f4fcfa] "
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] !mt-[-50px] items-center">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
              <div className="card xl:!mr-6 lg:!mr-6">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary  !bg-[#e1f6f0] !text-[#2bc29d] !border-none  pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.4rem] font-bold m-[0_auto]">
                          <i className="uil uil-file-edit-alt "></i>
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1 !font-medium">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.opd.title",
                        )}
                      </h4>
                      <p className="!mb-0">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.opd.desc",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>

              <div className="card !mt-6 xl:!ml-16 lg:!ml-16">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary !bg-[#e1f6f0] !text-[#2bc29d] !border-none pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.4rem] font-bold m-[0_auto]">
                          <i className="uil uil-hospital"></i>
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1 !font-medium">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.inventory.title",
                        )}
                      </h4>
                      <p className="!mb-0">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.inventory.desc",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>

              {/*/.card */}
              <div className="card !mt-6 xl:mx-6 lg:mx-6">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary  !bg-[#e1f6f0] !text-[#2bc29d] !border-none  pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.4rem] font-bold m-[0_auto]">
                          <i className="uil uil-file"></i>
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1 !font-medium">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.pdf.title",
                        )}
                      </h4>
                      <p className="!mb-0">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.pdf.desc",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              <div className="card !mt-6 xl:!ml-16 lg:!ml-16">
                <div className="card-body p-6">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary  !bg-[#e1f6f0] !text-[#2bc29d] !border-none  pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                        <span className="number table-cell text-center align-middle text-[1.4rem] font-bold m-[0_auto]">
                          <i className="uil uil-store"></i>
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1 !font-medium">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.marketplace.title",
                        )}
                      </h4>
                      <p className="!mb-0">
                        {t(
                          "home:product_overview.business_intelligence.quick_features.marketplace.desc",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
              <h2 className="!text-[calc(1.265rem_+_0.18vw)] !font-medium xl:!text-[1.2rem] !leading-[1.35] !mb-3">
                {t(
                  "home:product_overview.business_intelligence.title",
                  "ให้ APSX ช่วยดูแลหลังบ้าน ให้คุณจัดการธุรกิจได้ง่ายขึ้น",
                )}
              </h2>

              <p className="lead text-[0.85rem] xl:!pr-5 lg:!pr-5 !mb-4">
                {t(
                  "home:product_overview.business_intelligence.description",
                  "ยกระดับธุรกิจด้วยระบบ All-in-One Dashboard ที่เชื่อมโยงข้อมูลทุกแผนกแบบ Real-time ตั้งแต่การขายจนถึงการจัดการต้นทุนหลังบ้าน ช่วยลดความซับซ้อน เพิ่มความแม่นยำในการวิเคราะห์ และให้ความปลอดภัยสูงสุด เพื่อให้คุณจัดการงานเอกสารได้รวดเร็วและมีเวลาโฟกัสกับการขยายธุรกิจ (Scaling) ได้อย่างเต็มที่",
                )}
              </p>

              <div className="!space-y-1 !mt-4">
                {t("home:product_overview.business_intelligence.check_list", {
                  returnObjects: true,
                }).map((text, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1bb59b]/50 flex items-center justify-center transition-colors duration-300"></div>
                    </div>
                    <p className="!m-0 !p-0 text-[0.85rem] text-[#505358] leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="!mt-6">
                <Button
                  rounded="lg"
                  color="dark"
                  href={`/${lng}/#service_expansion`}
                >
                  <span className="absolute top-1 right-1"></span>
                  <i className="uil uil-comment-search text-[0.8rem] mr-1"></i>
                  <span className="!font-medium !text-[14px]">
                    {t("read_more", "ดูรายละเอียดเพิ่มเติม")}
                  </span>
                </Button>
              </div>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
      </section>

      <section
        data-cues="slideInDown"
        data-delay={300}
        id="snippet-2"
        className="wrapper !bg-[#ffffff]"
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-col items-start mb-12">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] space-x-2 !font-medium xl:!text-[1.3rem] !leading-[1.3] !mb-2 !text-[#343f52]">
              <i className="uil uil-comments text-[#2bc29d]"></i>
              <span>
                {t("home:product_overview.queue_system.title", "ระบบเรียกคิว")}
              </span>
            </h2>
            <p className="lead !mb-0 !text-[0.95rem] text-gray-500 font-light">
              {t(
                "home:product_overview.queue_system.description",
                "จัดการคิวผู้ป่วยได้อย่างเป็นระบบ ลดระยะเวลาการรอคอย เพื่อมอบบริการที่น่าประทับใจยิ่งขึ้น",
              )}
            </p>
          </div>

          {/* ส่วนแสดง 3 รูป */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/assets/img/photos/bp6.jpg",
                title: t(
                  "home:product_overview.queue_features.registration.title",
                  "หน้าจอลงทะเบียนคิว",
                ),
                desc: t(
                  "home:product_overview.queue_features.registration.desc",
                  "ออกคิวได้รวดเร็วทันใจผ่านระบบ Touch Screen",
                ),
              },
              {
                src: "/assets/img/photos/bp6.jpg",
                title: t(
                  "home:product_overview.queue_features.voice.title",
                  "ระบบเรียกคิวด้วยเสียง",
                ),
                desc: t(
                  "home:product_overview.queue_features.voice.desc",
                  "รองรับการเรียกคิวด้วยเสียงภาษาไทยอัตโนมัติ",
                ),
              },
              {
                src: "/assets/img/photos/bp6.jpg",
                title: t(
                  "home:product_overview.queue_features.dashboard.title",
                  "แดชบอร์ดติดตามคิว",
                ),
                desc: t(
                  "home:product_overview.queue_features.dashboard.desc",
                  "เช็กสถานะคิวรอตรวจได้แบบ Real-time ทุกนาที",
                ),
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <figure className="m-0 aspect-[4/3] bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </figure>
                </div>

                {/* Text Below Image */}
                <div className="!mt-5">
                  <h4 className="text-[1rem] !font-medium text-[#343f52] !mb-0 group-hover:text-[#1bb59b] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[0.85rem] text-gray-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div data-cues="slideInDown" data-delay={300} className="bg-[#f4fcfa]">
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
                      viewBox="0 0 256 256"
                      className="!w-[1.8rem] !h-[1.8rem]"
                    >
                      <path
                        className="fill-[#2bc29d]"
                        d="M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
                      />
                      <path
                        className="fill-[#45c4a0]"
                        d="M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
                      />
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "home:product_overview.medical_records.title",
                        "บันทึกและเข้าถึงประวัติคนไข้",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "home:product_overview.medical_records.subtitle",
                        "บันทึก OPD/IPD ผ่านระบบออนไลน์",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "home:product_overview.medical_records.description",
                        "บันทึกและเข้าถึงประวัติคนไข้ได้ทุกที่ทุกเวลา ผ่านระบบออนไลน์ที่มีความเสถียรและปลอดภัยสูง รองรับมาตรฐานการบันทึกข้อมูลสำหรับคลินิกหลากหลายสาขา",
                      )}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-[0.70rem] text-[#505a6d]">
                      {t("home:product_overview.medical_records.clinic_types", {
                        returnObjects: true,
                      }).map((text, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#45c4a0]/10 transition-all duration-300 group"
                        >
                          <span className="font-light">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        data-cues="slideInDown"
        data-delay={300}
        id="snippet-2"
        className="wrapper !bg-[#ffffff] "
      >
        <div className="container pt-20 xl:pt-10 lg:pt-10 md:pt-10 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <h2 className="space-x-2 !text-[calc(1.305rem_+_0.66vw)] !font-medium xl:!text-[1.3rem] !leading-[1.3] !mb-0">
            <i className="uil uil-comments text-[#2bc29d]"></i>
            <span>
              {t(
                "home:product_overview.billing_section.title_main",
                "สร้างใบเสร็จ",
              )}
            </span>
            <span className="text-[#45c4a0]">
              {t(
                "home:product_overview.billing_section.title_highlight",
                "ครบจบในหน้าเดียว",
              )}
            </span>
          </h2>

          <p className="lead !mb-12 !text-[0.95rem] text-gray-600">
            {t(
              "home:product_overview.billing_section.description",
              "เปลี่ยนการออกเอกสารที่ยุ่งยากให้เป็นเรื่อง",
            )}
            <span className="bg-[#45c4a0]/10 px-2 rounded-full text-[#45c4a0]">
              {t(
                "home:product_overview.billing_section.desc_highlight",
                "ง่ายและรวดเร็ว",
              )}
            </span>
          </p>
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line">
            {BillData &&
              BillData.map((column, index) => (
                <div
                  key={index}
                  className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative ${
                    !column.isLast
                      ? "after:w-[calc(100%-2rem)] after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.3)] after:border-t after:border-solid after:left-[4.5rem] after:top-6 lg:after:block after:hidden"
                      : ""
                  }`}
                >
                  {/* 1. เลข Step */}
                  <span
                    className={
                      index === 3
                        ? "icon btn btn-circle btn-lg btn-primary !text-white !bg-[#45c4a0] border-[#45c4a0] pointer-events-none !mb-5 !relative z-[2] w-12 h-12 inline-flex items-center justify-center !p-0 !rounded-full shadow-md"
                        : "icon btn btn-circle btn-lg btn-soft-primary !bg-[#e1f6f0] !border-[#e1f6f0] !text-[#45c4a0] pointer-events-none !mb-5 !relative z-[2] w-12 h-12 inline-flex items-center justify-center !p-0 !rounded-full"
                    }
                  >
                    <span className="number text-[1.1rem] font-bold leading-none">
                      {column.number}
                    </span>
                  </span>

                  {/* 2. เนื้อหา */}
                  <div className="relative z-[2]">
                    <h4 className="!mb-2 !font-bold !text-[0.9rem] text-[#343f52] transition-colors hover:text-[#45c4a0]">
                      {column.title}
                    </h4>
                    <p className="!mb-0 text-gray-500 text-[0.85rem] leading-relaxed">
                      {column.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}

        {/* /.container */}
      </section>
    </section>
  );
}
