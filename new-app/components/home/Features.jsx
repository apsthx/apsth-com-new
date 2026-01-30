import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import { getFeedbackData, getFeatures } from "@/data/features";

// components
import Badge from "@/components/common/Badges";

export default async function Features({ lng }) {
  const { t } = await useTranslation(lng);
  const feedbackItems = getFeedbackData(t, lng);
  const features = getFeatures(t, lng);
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
              <span className="flex items-center gap-2 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] font-black uppercase rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-100 text-[#1bb59b]">
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
                    src="/assets/img/features/apsx_platform_features.webp"
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
            className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !ml-auto xl:px-0 lg:px-0 !mt-[60px]"
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
          </div>
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="flex flex-row !gap-4 !mb-4 !mt-4 items-start group"
          >
            {/*/column */}
            {features.map((item, index) => (
              <div
                key={item.id}
                data-cues="slideInDown"
                data-delay={300}
                className={`flex flex-row items-start group ${
                  index === features.length - 1 ? "!mb-6" : "!mb-2"
                }`}
              >
                {/* ส่วนของ Icon SVG */}
                <div className="flex-shrink-0">
                  <div className="svg-bg bg-white opacity-100 !rounded-[0.8rem] shadow-xl !mr-5 p-3 flex items-center justify-center w-[60px] h-[60px] transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* ส่วนของเนื้อหาข้อความ */}
                <div>
                  <h4
                    className="!mb-1 !font-medium xl:!text-[1.1rem]"
                    style={{ color: item.color }} // ดึงสีจาก Data มาใช้โดยตรง
                  >
                    {item.title}
                  </h4>
                  <p className="!mb-0 text-[#60697b] leading-relaxed !text-[0.95rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full !mt-[0px]">
          {/* คอนเทนเนอร์หลัก: ใช้ flex-wrap เพื่อให้การ์ดตกลงมาเมื่อจอแคบลง */}
          <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-150px]">
            {feedbackItems.map((item, index) => (
              <div
                data-cues="slideInDown"
                data-delay={300}
                key={item.id} // ใช้ item.id แทน index จะดีกว่าในเชิง Performance
                className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[40px]"
              >
                <div className="h-full rounded-xl bg-white border border-[#a4aec633] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <article className="post flex flex-col h-full">
                    {/* 1. ส่วนรูปภาพ */}
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
                        <Link
                          href={item.link}
                          className="bg-white/90 !text-[#343f52] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {t("home:read_more", "ดูรายละเอียด")}
                        </Link>
                      </figcaption>
                    </figure>

                    {/* 2. ส่วนเนื้อหา */}
                    <div className="post-header p-6 flex flex-col flex-grow">
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

                      <h3 className="text-xl font-bold leading-snug mb-3">
                        <Link
                          className="!text-[#343f52] hover:!text-[#00b6b6] transition-colors duration-200"
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      </h3>

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
