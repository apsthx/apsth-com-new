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
      className="container wrapper !bg-[#ffffff] overflow-hidden"
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
            <h3 className="!text-[calc(1.285rem_+_0.42vw)] font-bold xl:!text-[1.6rem] !leading-[1.3] !mb-4">
              {t("home:faq.title", "มีคำถามอะไรไหม ? คำถามที่พบบ่อย")}
            </h3>
            <p className="lead text-[0.9rem] font-medium !leading-[1.65] !mb-6">
              {t(
                "home:faq.description",
                "มุ่งเน้นที่ธุรกิจของคุณให้ APS จัดการให้คุณมีธุรกิจที่ต้องดำเนินการเลิกกังวลเกี่ยวกับจุดบกพร่องปล่อยให้เป็นหน้าที่เราให้เราดูแลคุณ",
              )}
            </p>
            <div className="mt-9 flex flex-col md:flex-row justify-start items-center mb-6 px-4 gap-3 md:gap-3">
              {/* ปุ่ม Line ID - ขนาดกะทัดรัด */}
              <Button
                target="_blank"
                rounded="md"
                color="dark"
                href="https://page.line.me/gbc9405c"
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
                <div className="card accordion-item !mb-5" key={item.id}>
                  <div
                    className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                    id={`accordion-heading-3-${item.id}`}
                  >
                    <button
                      className="hover:!text-[#2bc2bb] collapsed !text-start"
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
                      <p className="!mb-0 text-[#64748b] leading-relaxed">
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
