import React from "react";
import { useTranslation } from "@/app/i18n";
import { getFaqList } from "@/data/features";
import Button from "../common/Button";

export default async function Questions({ lng }) {
  const { t } = await useTranslation(lng);
  const faqItems = getFaqList(t);

  return (
    <section
      id="snippet-2"
      className="container wrapper !bg-[#ffffff] overflow-hidden !px-[28px]"
    >
      <div className="pb-20 xl:pt-0 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !mb-0"
          >
            <h2 className="!text-[.75rem] uppercase !text-[#2bc2bb] !tracking-[0.02rem] !leading-[1.35] !mb-3">
              FAQ
            </h2>
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] !font-medium xl:!text-[1.2rem] !leading-[1.3] !mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 399"
                className="!w-[2.2rem] !h-[2.2rem] inline-block"
              >
                {/* ส่วนพื้นหลัง (Fill) - ใช้สีฟ้า/เขียวอ่อน */}
                <path
                  className="lineal-fill fill-[#edf9f6]"
                  d="M33.9 263.5C-9.5 180.2 22.9 77.4 106.2 34s186.1-11.1 229.6 72.3 11.1 186.1-72.3 229.6c-55.3 28.8-121.8 25.1-173.6-9.7l-73.8 16.6 17.8-79.3z"
                ></path>

                {/* ส่วนเส้นขอบและจุด (Stroke) - ใช้สีน้ำเงินเข้มหรือเขียวเข้ม */}
                <path
                  className="lineal-stroke fill-[#02b3b3]"
                  d="M184.9 369.7c-34.5.1-68.4-9.6-97.7-27.9L19.3 357c-7.9 1.8-15.7-3.2-17.5-11.1-.5-2.1-.5-4.3 0-6.5l16.7-74.1C6.3 240.3 0 212.7 0 184.9 0 82.9 82.9 0 184.9 0s184.9 82.9 184.9 184.9-83 184.8-184.9 184.8zm-95-58.2c2.9 0 5.8.9 8.2 2.5 25.6 17.3 55.8 26.5 86.7 26.4 85.8 0 155.5-69.8 155.5-155.5S270.6 29.3 184.9 29.3 29.3 99.1 29.3 184.9c-.1 25 6 49.7 17.6 71.9 1.6 3.1 2.1 6.6 1.3 10l-12.7 56.6 51.2-11.5c1.1-.3 2.2-.5 3.2-.4z"
                ></path>

                <path
                  className="lineal-stroke fill-[#02b3b3]"
                  d="M341.8 399c-9.9 0-19.8-.9-29.6-2.6-8-1.4-13.3-9-11.9-17 1.4-8 9-13.3 17-11.9 8.1 1.4 16.3 2.1 24.5 2.1 28 0 55.3-8.3 78.5-23.9 3.3-2.3 7.5-3 11.4-2.1l44.9 10.1-11.2-49.7c-.8-3.4-.3-6.9 1.3-10 36-69 9.1-154.1-59.9-190.1-4.5-2.3-9.1-4.4-13.8-6.3-7.5-2.9-11.3-11.5-8.3-19 2.9-7.5 11.5-11.3 19-8.3 87.6 34.3 130.8 133 96.6 220.6-1.6 4-3.3 7.9-5.1 11.7l15.1 67.3c1.8 7.9-3.2 15.7-11.1 17.5-2.1.5-4.3.5-6.5 0l-61.5-13.8c-26.7 16.7-57.8 25.5-89.4 25.4zm-67.9-195.6h-18.6c-8.1 0-14.7-6.6-14.7-14.7s6.6-14.7 14.7-14.7h18.6c8.1 0 14.7 6.6 14.7 14.7-.1 8.2-6.7 14.7-14.7 14.7zm-79 0h-18.6c-8.1 0-14.7-6.6-14.7-14.7s6.6-14.7 14.7-14.7h18.6c8.1 0 14.7 6.6 14.7 14.7 0 8.2-6.6 14.7-14.7 14.7zm-79 0H97.3c-8.1 0-14.7-6.6-14.7-14.7S89.2 174 97.3 174h18.6c8.1 0 14.7 6.6 14.7 14.7 0 8.2-6.6 14.7-14.7 14.7z"
                ></path>
              </svg>{" "}
              {t("home:faq.title", "มีคำถามอะไรไหม ? คำถามที่พบบ่อย")}
            </h3>
            <p className="lead text-[0.8rem] !font-light !leading-[1.65] !mb-6">
              {t(
                "home:faq.description",
                "มุ่งเน้นที่ธุรกิจของคุณให้ APS จัดการให้คุณมีธุรกิจที่ต้องดำเนินการเลิกกังวลเกี่ยวกับจุดบกพร่องปล่อยให้เป็นหน้าที่เราให้เราดูแลคุณ",
              )}
            </p>
            <div className="w-full mt-9 flex flex-col md:flex-row justify-start items-center mb-6 gap-3 md:gap-3">
              {/* ปุ่ม Line ID - ขนาดกะทัดรัด */}
              <Button
                target="_blank"
                rounded="md"
                color="dark"
                href="https://page.line.me/gbc9405c"
                className="w-full lg:w-[300px]"
              >
                <i
                  className="uil uil-line text-[1.3rem] leading-none mr-2"
                  style={{ color: "#ffffff" }}
                />
                <span className="!font-Kanit font-medium  text-[0.95rem]">
                  {t("home:hero.connect.line", "Line: @apsth")}
                </span>
              </Button>
              <Button
                target="_blank"
                rounded="md"
                color="gray"
                href={`/${lng}/calendar`}
                className="w-full lg:w-[300px]"
              >
                <i
                  className="uil uil-calendar-alt text-[1.3rem] leading-none mr-2"
                  style={{ color: "#343f52" }}
                />
                <span className="!font-Kanit font-medium text-[#343f52] text-[0.95rem]">
                  {t("home:hero.connect.book_a_demo", "Book a Demo")}
                </span>
              </Button>
              {/* ปุ่ม Book a Demo - ขนาดกะทัดรัด */}
            </div>
          </div>
          {/*/column */}
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]"
          >
            <div id="accordion-3" className="accordion-wrapper">
              {faqItems.map((item) => (
                <div className="card accordion-item !mb-2" key={item.id}>
                  <div
                    className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                    id={`accordion-heading-3-${item.id}`}
                  >
                    <button
                      className="hover:!text-[#2bc2bb] !text-xs collapsed !text-start !font-medium"
                      data-bs-toggle="collapse"
                      data-bs-target={`#accordion-collapse-3-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`accordion-collapse-3-${item.id}`}
                    >
                      {item.question}
                    </button>
                  </div>

                  <div
                    id={`accordion-collapse-3-${item.id}`}
                    className="collapse"
                    aria-labelledby={`accordion-heading-3-${item.id}`}
                    data-bs-parent="#accordion-3" /* เพิ่มตรงนี้เพื่อให้เวลาเปิดอันใหม่ อันเก่าจะปิดอัตโนมัติ */
                  >
                    <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                      <p className="!mb-0 text-[#303438] !font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /. */}

      {/* /. */}
    </section>
  );
}
