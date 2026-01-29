import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

// components
import Badge from "@/components/common/Badges";

export default async function Features({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section className="wrapper overflow-hidden">
      <div className="container pb-[1rem] py-[0rem] xl:!py-[2rem] lg:!py-[2rem] md:!py-[2rem]">
        <div
          data-cue="fadeIn"
          data-delay={300}
          className="flex flex-wrap mx-[-15px]"
        >
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
            {/* 1. Modern Pill Badge: เพิ่ม Animation เล็กๆ (ถ้ามี Tailwind Config) */}
            <div className="flex justify-center mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] font-black uppercase rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-100 text-[#01a5a5]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full !bg-[#2bc29d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2bc29d]"></span>
                </span>
                Features
              </span>
            </div>

            <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center">
              {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
              <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] !mb-2 text-[#343f52] tracking-tighter">
                {t(
                  "home:features.title",
                  "ระบบที่ใช้งานง่ายมี ประสิทธิภาพและทันสมัย ที่สุดในตอนนี้",
                )}
              </h2>

              {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
              <div className="max-w-[850px] mx-auto">
                <p className="mt-0 text-[1rem] xl:text-[1.1rem] text-[#343f52]">
                  <strong className="font-bold text-[#343f52]">
                    APSX Platform
                  </strong>{" "}
                  {t(
                    "home:features.description",
                    "เป็นระบบที่ลงตัวมาพร้อมกับการใช้งานง่าย สะดวกสบาย และรันบน Cloud ด้วยเทคโนโลยีที่ทันสมัยในยุคนี้ ทำให้ไม่ต้องใช้แฟ้ม OPD Card แบบเก่าอีกต่อไป",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[10px] items-center !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div
            data-cue="fadeIn"
            data-delay={300}
            className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !relative xl:px-0 lg:px-0 !mt-[50px]"
          >
            <div
              className="absolute inset-0 z-0 opacity-[0.5]"
              style={{
                backgroundImage: `
                    linear-gradient(to right, #2bc29d 2px, transparent 1px),
                    linear-gradient(to bottom, #2bc29d 2px, transparent 1px)
                  `,
                backgroundSize: "80px 80px", // ปรับขนาดช่องตารางที่นี่
                maskImage:
                  "radial-gradient(ellipse at center, black, transparent 80%)", // ทำให้ขอบจางลง
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black, transparent 80%)",
              }}
            />

            {/* Main Container */}
            <div className="relative p-2 sm:p-6 lg:p-10">
              {/* 1. Responsive Website (ลอยด้านบนซ้าย) - ซ่อนบนมือถือขนาดเล็กมากหรือปรับตำแหน่ง */}
              <div className="absolute top-0 -left-2 sm:top-[10%] sm:-left-10 z-10">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl border border-white/50 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2bc29d] rounded-full"></span>
                  <span className="text-[0.7rem] sm:text-[0.85rem] font-bold text-[#343f52] whitespace-nowrap">
                    Responsive Website
                  </span>
                </div>
                <svg
                  className="hidden sm:block absolute rotate-180 top-6 left-1/2 w-12 h-10 opacity-30"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,0 Q50,50 100,60"
                    fill="none"
                    stroke="#343f52"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              {/* 2. AI Suggestion (ลอยด้านบนขวา) */}
              <div className="absolute -top-5 -right-2 sm:top-[-5%] sm:-right-5 z-10">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl border border-white/50 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f0a51b] rounded-full"></span>
                  <span className="text-[0.7rem] sm:text-[0.85rem] font-bold text-[#343f52] whitespace-nowrap">
                    AI Suggestion
                  </span>
                </div>
                <svg
                  className="hidden sm:block absolute top-full right-1/4 w-12 h-10 -scale-x-100 opacity-30"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,0 Q50,50 100,60"
                    fill="none"
                    stroke="#343f52"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              {/* 3. Customer Data Tools (ลอยด้านล่างขวา) */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-[10%] sm:-right-10 z-10">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl border border-white/50 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b73e1] rounded-full"></span>
                  <span className="text-[0.7rem] sm:text-[0.85rem] font-bold text-[#343f52] whitespace-nowrap">
                    Customer Data Tools
                  </span>
                </div>
                <svg
                  className="hidden sm:block absolute bottom-full right-1/3 w-12 h-10 opacity-30"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M100,100 Q50,50 0,40"
                    fill="none"
                    stroke="#343f52"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              {/* Main Glass Image Box */}
              <div className="p-2 sm:p-4 bg-white/20 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/30 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <figure className="m-0 p-0 overflow-hidden rounded-[1rem] sm:rounded-[1.2rem]">
                  <Image
                    className="h-auto w-full object-cover"
                    src="/assets/homes/features1.webp"
                    alt="APSX Platform Features"
                    width={752}
                    height={590}
                    priority
                  />
                </figure>
              </div>
            </div>
          </div>
          {/*/column */}
          <div
            data-cue="fadeIn"
            data-delay={300}
            className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto xl:px-0 lg:px-0 !mt-[50px]"
          >
            <h2 className="!text-[calc(1.35rem_+_0.5vw)] font-extrabold xl:!text-[2rem] !leading-[1.2] !mb-0 xxl:!mt-[-2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              {t(
                "home:features.features.title",
                "ฟังก์ชันการใช้งาน (Features)",
              )}
            </h2>

            <p className="!text-[1.1rem] !leading-[1.7] !mb-4 text-gray-600 max-w-[600px]">
              {t(
                "home:features.features.description",
                "ยกระดับการบริหารจัดการคลินิกด้วยเทคโนโลยี Cloud อัจฉริยะ ที่ออกแบบมาเพื่อความรวดเร็วและความปลอดภัยสูงสุดของข้อมูลคุณ",
              )}
            </p>
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="flex flex-row !mb-2 items-start group"
            >
              <div className="flex-shrink-0">
                {/* เพิ่ม transition และ hover effect ให้เหมือนกับชิ้นอื่นๆ ในชุด */}
                <div className="svg-bg bg-white opacity-100 !rounded-[0.8rem] shadow-xl !mr-5 p-3 flex items-center justify-center w-[60px] h-[60px] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-full h-full"
                  >
                    <g>
                      {/* ขอบนาฬิกาหลัก (Primary - สีเขียวแบรนด์) */}
                      <path
                        fill="#2bc29d"
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
                      />
                      {/* เข็มนาฬิกาสื่อถึงความเร็ว (Secondary - สีเหลืองทอง) */}
                      <path
                        fill="#f0a51b"
                        d="M128,72a8,8,0,0,0-8,8v44.69L98.34,146.34a8,8,0,0,0,11.32,11.32l24-24A8,8,0,0,0,136,128V80A8,8,0,0,0,128,72Z"
                      />
                      {/* ตกแต่งเงาภายในให้ดูมีมิติ */}
                      <circle
                        cx="128"
                        cy="128"
                        r="40"
                        fill="#2bc29d"
                        opacity="0.1"
                      />
                      <circle fill="#2bc29d" cx="128" cy="128" r="12" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="!mb-1 !text-[#02a353] !font-medium xl:!text-[1.1rem]">
                  {t("home:features.features.blog1.title", "Real Time Data")}
                </h4>
                <p className="!mb-0 text-[#60697b] leading-relaxed !text-[0.95rem]">
                  {t(
                    "home:features.features.blog1.description",
                    "การส่งข้อมูลสะดวกและรวดเร็ว อัปเดตทันที (Sync) ลดระยะเวลาและช่วยให้การตัดสินใจบริหารงานแม่นยำในทุกวินาที",
                  )}
                </p>
              </div>
            </div>
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="flex flex-row !mb-2 items-start group"
            >
              <div className="flex-shrink-0">
                <div className="svg-bg bg-white opacity-100 !rounded-[0.8rem] shadow-xl !mr-5 p-3 flex items-center justify-center w-[60px] h-[60px] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-full h-full"
                  >
                    <g>
                      {/* ฐานก้อนเมฆและส่วนโครงสร้าง (สีหลัก - Primary) */}
                      <path
                        fill="#3b73e1"
                        d="M160,216H80a72,72,0,0,1,0-144,71.07,71.07,0,0,1,16,1.83,88,88,0,1,1,133.56,92.68A64,64,0,0,1,160,216Z"
                      />
                      {/* ส่วนเงาหรือ Highlight เพื่อความมีมิติ (สีรอง - Secondary) */}
                      <path
                        fill="#5eb9f0"
                        opacity="0.65"
                        d="M160,88a63.26,63.26,0,0,1,64,64,64,64,0,0,1-10.44,34.68A88,88,0,0,0,80,72a72.1,72.1,0,0,0-4,0.11A88.11,88.11,0,0,1,160,88Z"
                      />
                      {/* จุดเชื่อมต่อสื่อถึงการประมวลผล (ถ้าต้องการเพิ่มความเท่) */}
                      <circle
                        fill="#ffffff"
                        cx="128"
                        cy="136"
                        r="8"
                        opacity="0.8"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="!mb-1 !text-[#3b73e1] !font-medium xl:!text-[1.1rem]">
                  {t("home:features.features.blog2.title", "AWS Cloud")}
                </h4>
                <p className="!mb-0 text-[#60697b] leading-relaxed !text-[0.95rem]">
                  {t(
                    "home:features.features.blog2.description",
                    "ข้อมูลคลินิกถูกรักษาไว้ที่ AWS Cloud ด้วยมาตรฐานความปลอดภัยที่ได้รับการยอมรับจากองค์กรชั้นนำทั่วโลก",
                  )}
                </p>
              </div>
            </div>
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="flex flex-row items-start !mb-6 group"
            >
              <div className="flex-shrink-0">
                <div className="svg-bg bg-white opacity-100 !rounded-[0.8rem] shadow-xl !mr-5 p-3 flex items-center justify-center w-[60px] h-[60px] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-full h-full"
                  >
                    <g>
                      {/* ตัวบอดี้แม่กุญแจ (สีหลัก - Primary) */}
                      <rect
                        x="40"
                        y="88"
                        width="176"
                        height="128"
                        rx="20"
                        fill="#d93d4d"
                      />
                      {/* ห่วงกุญแจ (สีรอง - Secondary) */}
                      <path
                        fill="#d93d4d"
                        opacity="0.65"
                        d="M80,88V56a48,48,0,0,1,96,0V88H152V56a24,24,0,0,0-48,0V88Z"
                      />
                      {/* รูกุญแจตรงกลางเพื่อความสวยงาม */}
                      <circle
                        cx="128"
                        cy="152"
                        r="12"
                        fill="#ffffff"
                        opacity="0.9"
                      />
                      <rect
                        x="124"
                        y="160"
                        width="8"
                        height="20"
                        fill="#ffffff"
                        opacity="0.9"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="!mb-1 !font-medium !text-[#d93d4d]">
                  {t("home:features.features.blog3.title", "Data Security")}
                </h4>
                <p className="!mb-0 text-[#60697b] leading-relaxed">
                  {t(
                    "home:features.features.blog3.description",
                    "Web Application Security เข้ารหัสแบบ SSL 256-bit ข้อมูลของคุณจะได้รับการป้องกันด้วยมาตรฐานความปลอดภัยระดับสูงสุด",
                  )}
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>

        <div className="w-full !mt-[0px]">
          {/* คอนเทนเนอร์หลัก: ใช้ flex-wrap เพื่อให้การ์ดตกลงมาเมื่อจอแคบลง */}
          <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-150px]">
            {/* รายการการ์ด: วนลูปหรือวางต่อกัน */}
            {[
              {
                id: "blog1",
                link: `/${lng}/clinic`,
                title: t(
                  "home:features.services.blog1.title",
                  "คลินิก / โรงพยาบาล",
                ),
                description: t(
                  "home:features.services.blog1.description",
                  "โปรแกรม คลินิก/โรงพยาบาล รองรับ ประเภทบริการ เช่น เฉพาะทาง เวชกรรม ตรวจโรคทั่วไป การผดุงครรภ์ กายภาพบำบัด แพทย์แผนไทย-จีน อายุรกรรม บําบัดยาเสพติด สุขภาพจิตและตา ความงาม และอื่นๆ",
                ),
                img: "/assets/homes/features_clinic.webp",
              },
              {
                id: "blog2",
                link: `/${lng}/wellness`,
                title: t(
                  "home:features.services.blog2.title",
                  "Wellness / ศูนย์ดูแลผู้สูงอายุ",
                ),
                description: t(
                  "home:features.services.blog3.description",
                  "โปรแกรม Wellness/ศูนย์ดูแลผู้สูงอายุ รองรับประเภทบริการ เช่น ศูนย์ดูแลผู้สูงอายุ ศูนย์ดูแลสุขภาพ Wellness ศูนย์ดูแลผู้ป่วยเฉพาะทาง ศูนย์ดูแลผู้ป่วยเรื้อรัง และอื่นๆ",
                ),
                img: "/assets/homes/features_wellnss.webp",
              },
              {
                id: "blog3",
                link: `/${lng}/spa`,
                title: t("home:features.services.blog3.title", "Spa / Beauty"),
                description: t(
                  "home:features.services.blog3.description",
                  "รองรับการจัดการ สปา/ธุรกิจความงาม ในแต่ละประเภทบริการ เช่น ร้านสปา ร้านทำเล็บ ร้านทำผม ร้านเสริมสวย ร้านสักลาย ร้านนวด ร้านออนเซ็น ร้านซาวน่า และอื่นๆ",
                ),
                img: "/assets/homes/features_spa_beauty.webp",
              },
            ].map((item, index) => (
              <div
                data-cues="slideInDown"
                data-delay={300}
                key={index}
                className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[40px]"
              >
                <div className="h-full rounded-xl bg-white border border-[#a4aec633] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <article className="post flex flex-col h-full">
                    {/* 1. ส่วนรูปภาพ พร้อม Overlay ที่ดูแพงขึ้น */}
                    <figure className="relative group overflow-hidden bg-gray-200 aspect-[4/3]">
                      <Link href={item.link}>
                        <Image
                          className="transition-transform duration-700 ease-out group-hover:scale-110 w-full h-full object-cover"
                          src={item.img}
                          alt={item.title}
                          width={400}
                          height={300}
                        />
                      </Link>
                      <figcaption className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <a
                          href={item.link}
                          className="bg-white/90 !text-[#343f52] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {t("home:read_more", "ดูรายละเอียด")}
                        </a>
                      </figcaption>
                    </figure>

                    {/* 2. ส่วนเนื้อหา */}
                    <div className="post-header p-6 flex flex-col flex-grow">
                      {/* หมวดหมู่: ใช้ตัวพิมพ์ใหญ่/Tracking กว้างขึ้นเพื่อความ Formal */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#00b6b6]">
                          {t("home:category", "หมวดหมู่")}
                        </span>
                        {item.id === "blog3" && (
                          <Badge
                            color="teal"
                            variant="softText"
                            className="!text-[12px] !px-2 !py-2 !font-medium !rounded-full uppercase tracking-tighter"
                          >
                            {t("home:coming_soon", "เร็วๆ นี้")}
                          </Badge>
                        )}
                      </div>

                      {/* ชื่อหัวข้อ: ปรับให้ใหญ่ขึ้นและเป็นทางการ */}
                      <h3 className="text-xl font-bold leading-snug mb-3">
                        <Link
                          className="!text-[#343f52] hover:!text-[#00b6b6] transition-colors duration-200"
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      </h3>

                      {/* รายละเอียด: ปรับ line-height ให้โปร่งขึ้น */}
                      <p className="text-[0.9rem] leading-relaxed text-[#60697b] line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
