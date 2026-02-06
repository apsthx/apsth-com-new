import Image from "next/image";
import { useTranslation } from "@/app/i18n";

export default async function ProductShowcase({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section className=" wrapper overflow-hidden !relative mt-20">
      <div className="relative">
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
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "home:product_overview.medical_records.title",
                          "บันทึกและเข้าถึงประวัติคนไข้",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
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

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-[0.70rem] text-[#505a6d]">
                        {t(
                          "home:product_overview.medical_records.clinic_types",
                          {
                            returnObjects: true,
                          },
                        ).map((text, index) => (
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
                  {/* Icon Wrapper */}
                  <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 255.68 255.68"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/pie-chart.svg"
                      className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-mono  text-primary !text-[#3f78e0] "
                    >
                      <path
                        className="fill-[#8ef3da]"
                        d="M212.59 223.57A127.92 127.92 0 11120 0v53.55a74.61 74.61 0 1054.83 132.27z"
                      ></path>
                      <path
                        className="fill-[#2bc29d]"
                        d="M255.68 135.68a125.81 125.81 0 01-31.79 76.59l-37.76-37.76a73.4 73.4 0 0016-38.83zm0-16h-53.55A74.45 74.45 0 00136 53.55V0a127.85 127.85 0 01119.68 119.68z"
                      ></path>
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "clinic:product_showcase.dashborad.title",
                        "แดชบอร์ดสรุปภาพรวม",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "clinic:product_showcase.dashborad.subtitle",
                        "วิเคราะห์ธุรกิจแบบ Real-time",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[0.85rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "clinic:product_showcase.dashborad.description",
                        "เปลี่ยนข้อมูลหลังบ้านให้เป็นกราฟบริหารจัดการที่เข้าใจง่าย ช่วยให้คุณเห็นทิศทางธุรกิจและตัดสินใจเติบโตคลินิกได้อย่างแม่นยำ",
                      )}
                    </p>

                    {/* ส่วน Features เด่นของ Dashboard */}
                    <div className="space-y-3">
                      {t("clinic:product_showcase.dashborad.items", {
                        returnObjects: true,
                      }).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1bb59b]/10 flex items-center justify-center">
                            <i className="uil uil-check text-[#1bb59b] text-[14px] font-bold" />
                          </div>
                          <span className="text-[0.85rem] text-[#343f52] font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
                        viewBox="0 0 256 245.34"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/bar-chart.svg"
                        className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-mono  text-primary !text-[#3f78e0] "
                      >
                        <path
                          className="fill-[#1bb59b]"
                          d="M32 106.67A10.67 10.67 0 0124.91 88l48-42.67a10.62 10.62 0 018.37-2.61l83 10.07 47-44.56A10.66 10.66 0 01226 23.74l-50.67 48a10.73 10.73 0 01-8.61 2.85L83.49 64.5 39.09 104a10.61 10.61 0 01-7.09 2.7z"
                        ></path>
                        <path
                          className="fill-[#1bb59b]"
                          d="M226.67 53.34A8 8 0 01221 51l-37.32-37.34A8 8 0 01189.33 0h37.33a8 8 0 018 8v37.33a8 8 0 01-4.95 7.39 7.66 7.66 0 01-3.04.62z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M74.67 184v29.33h-64V184A13.33 13.33 0 0124 170.67h37.33A13.34 13.34 0 0174.67 184zM160 120v93.33H96V120a13.33 13.33 0 0113.33-13.33h37.33A13.33 13.33 0 01160 120zm85.33 21.34v72h-64v-72A13.32 13.32 0 01194.66 128H232a13.31 13.31 0 0113.33 13.34z"
                        ></path>
                        <path
                          className="fill-secondary"
                          d="M248 245.34H8a8 8 0 010-16h240a8 8 0 010 16z"
                        ></path>
                      </svg>
                    </div>

                    <div className="grid items-center justify-start mb-4">
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "clinic:product_showcase.business_analytics.title",
                          "วิเคราะห์ธุรกิจ",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
                        {t(
                          "clinic:product_showcase.business_analytics.subtitle",
                          "ช่วยให้คุณมองเห็นโอกาสในการเติบโต",
                        )}
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                        {t(
                          "clinic:product_showcase.business_analytics.description",
                          "เปลี่ยนข้อมูลหลังบ้านที่กระจัดกระจาย ให้เป็นภาพรวมผลการดำเนินงานที่ชัดเจน ช่วยให้คุณมองเห็นโอกาสในการเติบโตและจัดการต้นทุนได้อย่างมีประสิทธิภาพ",
                        )}
                      </p>

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 !text-sm text-[#343f52] mx-auto">
                        {t("clinic:product_showcase.business_analytics.items", {
                          returnObjects: true,
                        }).map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded bg-[#1bb59b]/10 flex items-center justify-center">
                              <i
                                className={`uil ${item.icon} text-[#1bb59b]`}
                              />
                            </div>
                            <span className="text-[0.90rem] text-[#343f52] font-medium">
                              {item.text}
                            </span>
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
                  {/* Icon Wrapper */}
                  <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/calendar.svg"
                      className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-mono  text-primary !text-[#3f78e0] "
                    >
                      <path
                        className="fill-[#8ef3da]"
                        d="M66.67 117.33H40a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64H40a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.66-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm0 64h-26.67a8 8 0 00-8 8V216a8 8 0 008 8h26.67a8 8 0 008-8v-26.67a8 8 0 00-8-8zm74.67-64h-26.67a8 8 0 00-8 8V152a8 8 0 008 8H216a8 8 0 008-8v-26.67a8 8 0 00-8-8z"
                      ></path>
                      <path
                        className="fill-[#2bc29d]"
                        d="M224 32H32A32 32 0 000 64v160a32 32 0 0032 32h192a32 32 0 0032-32V64a32 32 0 00-32-32zm10.67 192A10.67 10.67 0 01224 234.67H32A10.67 10.67 0 0121.33 224V107.09h213.33V224z"
                      ></path>
                      <path
                        className="fill-[#8ef3da]"
                        d="M64 0H53.33a10.67 10.67 0 00-10.67 10.67v42.67A10.68 10.68 0 0053.33 64H64a10.67 10.67 0 0010.67-10.66V10.67A10.67 10.67 0 0064 0zm138.67 0H192a10.67 10.67 0 00-10.67 10.67v42.67A10.67 10.67 0 00192 64h10.67a10.67 10.67 0 0010.67-10.67V10.67A10.67 10.67 0 00202.67 0z"
                      ></path>
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "clinic:product_showcase.appointment.title",
                        "ระบบจัดการนัดหมาย",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "clinic:product_showcase.appointment.subtitle",
                        "ช่วยให้การทำงานของทีมงานลื่นไหลไม่มีสะดุด",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "clinic:product_showcase.appointment.description",
                        "จัดการนัดหมายไข้ได้อย่างเป็นระเบียบ ลดความผิดพลาดในการลงนัด และช่วยให้การทำงานของทีมงานลื่นไหลไม่มีสะดุด",
                      )}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
                      {[
                        {
                          title: t(
                            "clinic:product_showcase.appointment.items.appointment.title",
                            "ปฏิทินนัดหมาย",
                          ),
                          desc: t(
                            "clinic:product_showcase.appointment.items.appointment.desc",
                            "จัดการนัดหมายอัจฉริยะ แยกสีตามประเภทเคส ดูง่ายไม่สับสน ช่วยให้คุณเห็นภาพรวมทั้งหมด",
                          ),
                        },
                        {
                          title: t(
                            "clinic:product_showcase.appointment.items.roster.title",
                            "ตารางเวรแพทย์",
                          ),
                          desc: t(
                            "clinic:product_showcase.appointment.items.roster.desc",
                            "จัดการตารางเวรและห้องตรวจอย่างเป็นระบบ ป้องกันการนัดหมายซ้อน บริหารทรัพยากรได้เต็มที่",
                          ),
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group bg-white transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                          {/* สลับซ้าย-ขวาภายใน Card โดยเช็คจาก Index (ถ้าเลขคี่ จะเอา Content ขึ้นก่อนรูป) */}
                          <div
                            className={`flex flex-col h-full ${index % 2 !== 0 ? "flex-col-reverse" : ""}`}
                          >
                            <div className=" py-1 flex flex-col flex-grow">
                              <div className="flex items-center gap-3 mb-0">
                                <h4 className="!text-sm !font-medium text-[#343f52]   transition-colors mb-0 leading-none">
                                  {item.title}
                                </h4>
                              </div>

                              <p className="text-xs leading-relaxed text-[#64748b] font-light flex-grow">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div data-cues="slideInDown" data-delay={300} className="bg-[#f4fcfa]">
          <section className="container wrapper    !relative lg:!flex items-center">
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
                        viewBox="0 0 255.98 256"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/alarm.svg"
                        className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-mono  text-primary !text-[#3f78e0] "
                      >
                        <path
                          className="fill-[#2bc29d]"
                          d="M26.64 256a10.66 10.66 0 01-8.26-17.4l23.33-28.67a10.67 10.67 0 1116.55 13.47l-23.33 28.67a10.65 10.65 0 01-8.29 3.93zm202.69 0a10.65 10.65 0 01-8.29-3.93l-23.33-28.67a10.67 10.67 0 0116.55-13.47l23.32 28.67a10.66 10.66 0 01-8.25 17.4zM10.66 72a10.66 10.66 0 01-7.54-18.2L53.79 3.13a10.67 10.67 0 0115.09 15.08L18.21 68.88A10.68 10.68 0 0110.66 72zm234.65 0a10.55 10.55 0 01-7.53-3.12L187.1 18.21a10.67 10.67 0 1115.09-15.08l50.67 50.67a10.66 10.66 0 01-7.55 18.2z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M128 32a112 112 0 10112 112A112.12 112.12 0 00128 32zm66.68 122.68H128A10.68 10.68 0 01117.31 144V80a10.68 10.68 0 0121.35 0v53.33h56a10.68 10.68 0 010 21.35z"
                        ></path>
                      </svg>
                    </div>

                    <div className="grid items-center justify-start mb-4">
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "clinic:product_showcase.queue.title",
                          "ระบบจัดการคิวตรวจ",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
                        {t(
                          "clinic:product_showcase.queue.subtitle",
                          "ช่วยให้พนักงานหน้าเคาน์เตอร์และแพทย์ทำงานประสานกันได้อย่างราบรื่น",
                        )}
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                        {t(
                          "clinic:product_showcase.queue.description",
                          "จัดลำดับการเข้าตรวจอย่างเป็นระบบ ช่วยให้พนักงานหน้าเคาน์เตอร์และแพทย์ทำงานประสานกันได้อย่างราบรื่น ลดระยะเวลาการรอคอยของคนไข้",
                        )}
                      </p>

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 !text-sm text-[#343f52] mx-auto">
                        {t("clinic:product_showcase.queue.items", {
                          returnObjects: true,
                        }).map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded bg-[#1bb59b]/10 flex items-center justify-center">
                              <i
                                className={`uil ${item.icon} text-[#1bb59b] text-lg`}
                              />
                            </div>
                            <span className="text-[0.85rem] text-[#343f52] font-medium">
                              {item.text}
                            </span>
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
          className="container wrapper !relative lg:!flex items-center"
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
                  {/* Icon Wrapper */}
                  <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 234.69 234.67"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/content.svg"
                      className="svg-inject icon-svg solid text-[#343f52] !w-[1.8rem] !h-[1.8rem] !mb-0"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path
                            className="fill-[#2bc29d]"
                            d="M224 64h-64a10.68 10.68 0 110-21.35h64A10.68 10.68 0 01224 64zm0-42.66h-64A10.67 10.67 0 11160 0h64a10.67 10.67 0 010 21.34zm0 85.33h-64a10.67 10.67 0 110-21.33h64a10.67 10.67 0 110 21.33zm0 42.67H10.67a10.67 10.67 0 010-21.34H224a10.67 10.67 0 010 21.34zm0 42.66H10.67a10.68 10.68 0 010-21.35H224a10.68 10.68 0 010 21.35zm0 42.67H10.67a10.67 10.67 0 110-21.33H224a10.67 10.67 0 010 21.33z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M112 0H16A16 16 0 000 16v74.69a16 16 0 0016 16h96a16 16 0 0016-16V16a16 16 0 00-16-16zm-5.35 21.32v43L91.52 50.75a10.69 10.69 0 00-14.85.56L59.34 69.47 51 61.58A10.66 10.66 0 0036 62L21.34 77.28V21.34z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "clinic:product_showcase.medical_certificate.title",
                        "ระบบออกใบรับรองแพทย์",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "clinic:product_showcase.medical_certificate.subtitle",
                        "ช่วยลดความซ้ำซ้อนในการทำงานเอกสาร",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "clinic:product_showcase.medical_certificate.description",
                        "สร้างเอกสารทางการแพทย์ที่ได้มาตรฐานอย่างรวดเร็ว พร้อมระบบจัดเก็บข้อมูลที่ค้นหาง่ายและปลอดภัย ช่วยลดความซ้ำซ้อนในการทำงานเอกสาร",
                      )}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {t("clinic:product_showcase.medical_certificate.items", {
                      returnObjects: true,
                    }).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1bb59b]/10 flex items-center justify-center">
                          <i className="uil uil-check text-[#1bb59b] text-[14px] font-bold" />
                        </div>
                        <span className="text-[0.85rem] text-[#343f52] font-medium leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                        viewBox="0 0 192 256"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/list.svg"
                        className="svg-inject icon-svg solid text-[#343f52] !w-[1.8rem] !h-[1.8rem] !mb-0"
                      >
                        <path
                          className="fill-[#2bc29d]"
                          d="M160 0H32A32 32 0 000 32v160a10.66 10.66 0 003.12 7.54l53.33 53.32A10.63 10.63 0 0064 256h96a32 32 0 0032-32V32a32 32 0 00-32-32zm10.67 224A10.67 10.67 0 01160 234.67H74.67v-24a29.36 29.36 0 00-29.33-29.33h-24V32A10.68 10.68 0 0132 21.33h128A10.68 10.68 0 01170.69 32v192z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M130.67 85.33H61.34a18.7 18.7 0 01-18.67-18.67v-5.33a18.69 18.69 0 0118.67-18.67h69.33a18.68 18.68 0 0118.67 18.67v5.33a18.7 18.7 0 01-18.67 18.67zm8 42.67H53.34a10.67 10.67 0 110-21.34h85.33a10.67 10.67 0 110 21.34zm0 42.67H53.34a10.67 10.67 0 010-21.34h85.33a10.67 10.67 0 110 21.34z"
                        ></path>
                      </svg>
                    </div>

                    <div className="grid items-center justify-start mb-4">
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "clinic:product_showcase.financial_doc.title",
                          "ระบบจัดการเอกสารการเงินครบวงจร",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
                        {t(
                          "clinic:product_showcase.financial_doc.subtitle",
                          "ออกใบเสร็จและใบกำกับภาษีได้รวดเร็ว",
                        )}
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                        {t(
                          "clinic:product_showcase.financial_doc.description",
                          "บริหารจัดการรายได้อย่างมืออาชีพ ออกใบเสร็จและใบกำกับภาษีได้รวดเร็ว ถูกต้องตามหลักบัญชี พร้อมระบบสรุปยอดเงินที่ตรวจสอบได้ทุกขั้นตอน",
                        )}
                      </p>

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="space-y-3">
                        {t("clinic:product_showcase.financial_doc.items", {
                          returnObjects: true,
                        }).map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1bb59b]/10 flex items-center justify-center">
                              <i className="uil uil-check text-[#1bb59b] text-[14px] font-bold" />
                            </div>
                            <span className="text-[0.85rem] text-[#343f52] font-medium leading-tight">
                              {feature}
                            </span>
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
                  {/* Icon Wrapper */}
                  <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/printer.svg"
                      className="svg-inject icon-svg solid text-[#343f52] !w-[1.8rem] !h-[1.8rem] !mb-0"
                    >
                      <path
                        className="fill-[#2bc29d]"
                        d="M181.33 0H74.66a32 32 0 00-32 32v42.67a10.67 10.67 0 0021.34 0V32a10.67 10.67 0 0110.67-10.67H182.4a9.6 9.6 0 019.6 9.6v43.73a10.67 10.67 0 0021.34 0V32a32 32 0 00-32.01-32z"
                      ></path>
                      <path
                        className="fill-[#1bb59b]"
                        d="M226.67 64H29.33A29.32 29.32 0 000 93.33v69.33A29.32 29.32 0 0029.33 192H64v-32h128v32h34.67A29.32 29.32 0 00256 162.67V93.34A29.32 29.32 0 00226.67 64z"
                      ></path>
                      <path
                        className="fill-[#2bc29d]"
                        d="M202.66 138.66H53.33a10.66 10.66 0 00-10.67 10.67V224a32 32 0 0032 32h106.67a32 32 0 0032-32v-74.67a10.68 10.68 0 00-10.67-10.67zm-40 85.34H93.34a8 8 0 010-16h69.33a8 8 0 010 16zm0-32H93.34a8 8 0 010-16h69.33a8 8 0 010 16z"
                      ></path>
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "clinic:product_showcase.drug_label.title",
                        "ระบบจัดการฉลากยาและคำแนะนำ",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "clinic:product_showcase.drug_label.subtitle",
                        "ระบบพิมพ์ฉลากยา เพิ่มความชัดเจนในการสื่อสารกับคนไข้",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "clinic:product_showcase.drug_label.description",
                        "ยกระดับมาตรฐานการจ่ายยาด้วยระบบพิมพ์ฉลากยา ที่ช่วยลดความผิดพลาดและเพิ่มความชัดเจนในการสื่อสารกับคนไข้",
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 !text-sm text-[#343f52] mx-auto">
                    {t("clinic:product_showcase.drug_label.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 
                            transition-all duration-300 transform group cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          <i
                            className={`${item.icon} text-md text-[#45c4a0]  transition-colors duration-300`}
                          />
                        </div>
                        <span className="!text-xs font-medium leading-relaxed text-[#505a6d] transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                        viewBox="0 0 255.99 255.98"
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/badge.svg"
                        className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-duo text-navy-sky text-[#343f52] "
                      >
                        <g data-name="Layer 2">
                          <path
                            className="fill-[#2bc29d]"
                            d="M88.75 256A32.88 32.88 0 0176 253.45a33.33 33.33 0 01-18.42-19l-7.92-21.12a12 12 0 00-7-7l-21.08-7.93A33.27 33.27 0 013 153.48l9.33-20.54a11.82 11.82 0 000-9.87L3 102.52a33.27 33.27 0 0118.56-44.91l21.12-7.92a12 12 0 007-7l7.92-21.12A33.25 33.25 0 01102.49 3L123 12.3a11.82 11.82 0 009.87 0l20.6-9.3a33.27 33.27 0 0144.91 18.59l7.92 21.12a12 12 0 007 7l21.12 7.92A33.25 33.25 0 01253 102.49L243.69 123a11.84 11.84 0 000 9.88l9.31 20.57a33.26 33.26 0 01-18.59 44.91l-21.12 7.92a12 12 0 00-7 7l-7.92 21.12A33.26 33.26 0 01153.5 253l-20.5-9.33a11.82 11.82 0 00-9.87 0L102.54 253a33.38 33.38 0 01-13.79 3zm0-234.66a12 12 0 00-11.19 7.76l-7.92 21.09a33.28 33.28 0 01-19.45 19.47l-21.12 7.92a11.92 11.92 0 00-6.67 16.11l9.32 20.55a33.15 33.15 0 010 27.53L22.4 162.3a11.92 11.92 0 006.67 16.11l21.1 7.92a33.3 33.3 0 0119.47 19.46l7.92 21.12a11.95 11.95 0 0016.12 6.67l20.54-9.33a33.25 33.25 0 0127.54 0l20.52 9.33a11.95 11.95 0 0016.12-6.67l7.92-21.11a33.28 33.28 0 0119.45-19.47l21.12-7.92a11.94 11.94 0 006.67-16.11l-9.33-20.54a33.25 33.25 0 010-27.54l9.33-20.53a11.94 11.94 0 00-6.67-16.11l-21.1-7.92a33.29 33.29 0 01-19.48-19.46l-7.92-21.12a11.93 11.93 0 00-16.11-6.67l-20.54 9.33a33.29 33.29 0 01-27.54 0l-20.53-9.33a11.82 11.82 0 00-4.92-1.09z"
                          ></path>
                          <path
                            className="fill-[#2bc29d]"
                            d="M96 117.32A21.33 21.33 0 11117.31 96 21.35 21.35 0 0196 117.32zm64 64A21.33 21.33 0 11181.31 160 21.35 21.35 0 01160 181.32zm-64 0a10.65 10.65 0 01-8.51-17l64-85.33a10.66 10.66 0 0117.06 12.8l-64 85.33a10.69 10.69 0 01-8.55 4.2z"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <div className="grid items-center justify-start mb-4">
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "clinic:product_showcase.coupon.title",
                          "ระบบจัดการคูปองและวงเงินคงเหลือ",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
                        {t(
                          "clinic:product_showcase.coupon.subtitle",
                          "ช่วยให้การบริหารโปรโมชั่นและแพ็กเกจเป็นเรื่องง่าย",
                        )}
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                        {t(
                          "clinic:product_showcase.coupon.description",
                          "ยกระดับการตลาดในคลินิกด้วยระบบจัดการสิทธิพิเศษและวงเงินล่วงหน้า ช่วยให้การบริหารโปรโมชั่นและแพ็กเกจเป็นเรื่องง่ายและตรวจสอบได้แม่นยำ",
                        )}
                      </p>

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="space-y-0">
                        {t("clinic:product_showcase.coupon.items", {
                          returnObjects: true,
                        }).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 py-1 rounded-2xl transition-all duration-300 group"
                          >
                            {/* Icon สไตล์ซอฟต์ๆ */}
                            <div className="flex-shrink-0 w-6 h-6 rounded-lg  flex items-center justify-center text-[#45c4a0] transition-all">
                              <i className={`uil ${feature.icon} !text-sm`} />
                            </div>

                            {/* ข้อความที่กระชับขึ้น */}
                            <span className="text-xs font-medium text-[#505a6d] transition-colors">
                              {feature.text}
                            </span>
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
                  {/* Icon Wrapper */}
                  <div className="!flex !items-center !justify-center text-center w-16 h-16 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/building.svg"
                      className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-duo text-navy-sky text-[#343f52] "
                    >
                      <g data-name="Layer 2">
                        <path
                          className="fill-[#2bc29d]"
                          d="M250.58 30.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.09 8.09 0 006.26 0c2.48-1.08 60.86-26.48 60.86-78.8V37.71a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19L187.82 86l22.47-28.57a10.66 10.66 0 0116.77 13.18z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M173.87 175.89c-2.56-1.28-5.23-2.67-8-4.37a20.31 20.31 0 018 4.37z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M192 234.67h-24v-22.93a21.33 21.33 0 10-16 0v22.93h-24V149a10.67 10.67 0 10-21.34 0v85.65H85.33V200a8 8 0 00-8-8H50.66a8 8 0 00-8 8v34.67H21.33V69.33H96a10.68 10.68 0 0010.67-10.67V40A18.7 18.7 0 0088 21.31H74.67V10.67a10.67 10.67 0 00-21.34 0v10.67H40A18.69 18.69 0 0021.33 40v8A21.36 21.36 0 000 69.33v176A10.66 10.66 0 0010.67 256H192a10.67 10.67 0 100-21.33z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M77.33 144H50.66a8 8 0 000 16h26.67a8 8 0 000-16zm0-64H50.66a8 8 0 000 16h26.67a8 8 0 000-16zm0 32H50.66a8 8 0 000 16h26.67a8 8 0 000-16z"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="grid items-center justify-start mb-4">
                    <h4 className="text-xl md:text-2xl font-bold !mb-0 !text-[#343f52]">
                      {t(
                        "clinic:product_showcase.eclaim.title",
                        "ระบบจัดการรายการเบิกจ่าย E-claim",
                      )}
                    </h4>
                    <h5 className="text-xl md:text-2xl !font-medium !mb-0 !text-[#1bb59b]">
                      {t(
                        "clinic:product_showcase.eclaim.subtitle",
                        "เชื่อมต่อการเบิกจ่ายประกันและสวัสดิการต่างๆ",
                      )}
                    </h5>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                      {t(
                        "clinic:product_showcase.eclaim.description",
                        "เชื่อมต่อการเบิกจ่ายประกันและสวัสดิการต่างๆ อย่างเป็นระบบ ลดขั้นตอนการคีย์ข้อมูลซ้ำซ้อน และเพิ่มโอกาสการอนุมัติเคลมที่รวดเร็วยิ่งขึ้น",
                      )}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 !text-sm text-[#343f52] mx-auto">
                    {t("clinic:product_showcase.eclaim.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 
                            transition-all duration-300 transform group cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          <i
                            className={`${item.icon} text-md text-[#45c4a0]  transition-colors duration-300`}
                          />
                        </div>
                        <span className="!text-xs font-medium leading-relaxed text-[#505a6d] transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                        data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/clipboard.svg"
                        className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem] inline-block  solid-duo text-navy-sky text-[#343f52] "
                      >
                        <path
                          className="fill-[#2bc29d]"
                          d="M130.67 64H61.34a18.7 18.7 0 01-18.67-18.67v-16a8 8 0 018-8h17.11a29.33 29.33 0 0156.44 0h17.11a8 8 0 018 8v16A18.68 18.68 0 01130.67 64zm104 160a5.35 5.35 0 01-4.77-2.94l-13.74-27.49a26.82 26.82 0 01-2.82-11.92V85.34a21.33 21.33 0 0142.66 0v96.3a26.82 26.82 0 01-2.82 11.92L239.44 221a5.33 5.33 0 01-4.77 3zm13.75-32.83z"
                        ></path>
                        <path
                          className="fill-[#2bc29d]"
                          d="M162.67 32H160v13.33a29.36 29.36 0 01-29.33 29.33H61.34A29.36 29.36 0 0132 45.33V32h-2.67A29.35 29.35 0 000 61.33v165.33A29.36 29.36 0 0029.33 256h133.33A29.36 29.36 0 00192 226.67V61.33A29.35 29.35 0 00162.67 32zM152 224H40a8 8 0 010-16h112a8 8 0 010 16zm0-32H40a8 8 0 010-16h112a8 8 0 010 16zm0-32H40a8 8 0 010-16h112a8 8 0 010 16zm0-32H40a8 8 0 010-16h112a8 8 0 010 16z"
                        ></path>
                      </svg>
                    </div>

                    <div className="grid items-center justify-start mb-4">
                      <h4 className="text-xl md:text-2xl font-bold !mb-0  !text-[#343f52]">
                        {t(
                          "clinic:product_showcase.report.title",
                          "ระบบรายงานเชิงลึกกว่า 45 รูปแบบ",
                        )}
                      </h4>
                      <h5 className="text-xl md:text-2xl !font-medium !mb-0  !text-[#1bb59b]">
                        {t(
                          "clinic:product_showcase.report.subtitle",
                          "ข้อมูลคลินิกได้ครบทุกมิติ ที่ช่วยให้คุณเห็นภาพรวมธุรกิจได้ชัดเจน",
                        )}
                      </h5>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[0.95rem] text-[#505358] leading-relaxed font-medium">
                        {t(
                          "clinic:product_showcase.report.description",
                          "วิเคราะห์ข้อมูลคลินิกได้ครบทุกมิติด้วยรายงานมาตรฐานและรายงานขั้นสูง ที่ช่วยให้คุณเห็นภาพรวมธุรกิจได้ชัดเจนในคลิกเดียว",
                        )}
                      </p>

                      {/* แยกเป็น 2 คอลัมน์เพื่อให้คนอ่านกวาดสายตาได้ง่าย */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {t("clinic:product_showcase.report.items", {
                          returnObjects: true,
                        }).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-1 rounded-2xl border border-transparent  transition-all duration-300 group"
                          >
                            {/* Icon Container */}
                            <i
                              className={`uil ${feature.icon} text-sm !text-[#2bc29d]`}
                            />

                            {/* Text Content */}
                            <div className="flex flex-col">
                              <span className="text-xs font-medium text-[#343f52] leading-tight mb-1  transition-colors">
                                {feature.title}
                              </span>
                              <span className="text-[0.7rem] text-[#64748b] leading-relaxed font-light">
                                {feature.desc}
                              </span>
                            </div>
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
      </div>
    </section>
  );
}
