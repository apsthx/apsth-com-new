import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function Questions({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] ">
      <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-180px]">
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !mb-0"
          >
            <h2 className="!text-[.75rem] uppercase !text-[#00B7B8] !tracking-[0.02rem] !leading-[1.35] !mb-3">
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
            <a
              target="_blank"
              href="https://page.line.me/gbc9405c"
              className="mr-2 btn btn-primary !text-white !font-medium !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0] active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              {t("home:hero.connect.line", "ID: @apsth")}
            </a>
            <a
              target="_blank"
              href={`/${lng}/calendar`}
              className="btn btn-primary !text-white !font-medium !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:bg-[#5eb9f0] hover:!border-[#5eb9f0] active:text-white active:bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
            >
              {t("home:hero.connect.book_a_demo", "Book a Demo")}
            </a>
          </div>
          {/*/column */}
          <div
            data-cues="slideInDown"
            data-delay={300}
            className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]"
          >
            <div id="accordion-3" className="accordion-wrapper">
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-1"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-1"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-1"
                  >
                    {t(
                      "home:faq.questions.list1.question",
                      "โปรแกรม APSX Platform คืออะไร",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-1"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-1"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list1.answer",
                        "เป็นระบบบริหารจัดการคลินิก ที่ช่วยให้คุณบริหารจัดการคลินิกของคุณได้สะดวกรวดเร็วและมีประสิทธิภาพสูงสุด เนื่องด้วยระบบใช้งานง่าย และครบครันใช้งานได้ทุกอุปกรณ์ ทุกที่ทุกเวลา ผ่านเครือข่ายอินเทอร์เน็ต เหมาะสำหรับ Hospital Clinic Spa Wellness ศูนย์ดูแลผู้สูงอายุ ธุรกิจความงาม คลินิกเฉพาะทาง คลินิกเวชกรรม คลินิกทั่วไป คลินิกพยาบาลผดุงครรภ์ คลินิกกายภาพบำบัด คลินิกแพทย์แผนไทย-จีน คลินิกอายุรกรรม คลินิกแม่และเด็ก คลินิกบําบัดยาเสพติด คลินิกสุขภาพจิต คลินิกตา",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-2"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-2"
                  >
                    {t(
                      "home:faq.questions.list2.question",
                      "ระบบคลาวด์ คืออะไร ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-2"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-2"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list2.answer",
                        "Cloud Computing คือ การที่เราใช้ซอฟต์แวร์, ระบบ, และทรัพยากรของเครื่องคอมพิวเตอร์ของผู้ให้บริการ ผ่านอินเทอร์เน็ต ดังนั้นไม่จำเป็นต้องติดตั้งโปรแกรมอะไรเลย และใช้ในอุปกรณ์อะไรก็ได้ที่ขอเพียงแค่มี Web Browser ติดตั้งอยู่เท่านั้น ซึ่งโดยปกติแล้วข้อมูลของผู้ใช้งานจะถูกเก็บอยู่บนเครือข่ายเครื่องเซิร์ฟเวอร์ขนาดใหญ่ที่มีการดูแลตลอด 24 ชม. และมีความปลอดภัยสูง จึงช่วยลดความเสี่ยงเรื่องข้อมูลสูญหายเนื่องจากเครื่องคอมพิวเตอร์พัง หรือถูกไวรัสโจมตี",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-3"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-3"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-3"
                  >
                    {t(
                      "home:faq.questions.list3.question",
                      "ระบบสามารถใช้งานบน Macbook, iMac, Notebook, PC และระบบปฏิบัติการ Linux ได้หรือไม่ ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-3"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-3"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list3.answer",
                        "ระบบสามารถทำงานร่วมกับ Macbook, iMac, Notebook, PC และระบบปฏิบัติการ Linux เพียงแค่ติดตั้ง Google Chrome บนอุปกรณ์ของคุณก็สามารถใช้งานได้แล้ว",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-4"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-4"
                  >
                    {t(
                      "home:faq.questions.list4.question",
                      "การ Update ระบบเพื่อใช้งานฟังก์ชันใหม่ต่างๆได้อย่างไร ต้องลงโปรแกรมเพิ่มหรือไม่ ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-4"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-4"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list4.answer",
                        "ในทุกครั้งที่มีการอัพเดทฟังก์ชันการใช้งานใหม่ๆ ระบบจะทำการอัพเดตฟังก์ชันเหล่านั้นให้โดยอัตโนมัติ ผู้ใช้สามารถเริ่มใช้งานฟังก์ชันใหม่เหล่านี้ได้ทันทีโดยที่ไม่ต้องเสียเวลาและค่าใช้จ่ายใดๆ รายการ Update ฟังก์ชันใหม่ จะแสดงในหน้าจอหลักของระบบ",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-4"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-4"
                  >
                    {t(
                      "home:faq.questions.list5.question",
                      "ถ้ามีข้อสงสัยเกี่ยวกับการใช้โปรแกรม ฉันสามารถสอบถามได้ที่ใด ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-4"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-4"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list5.answer",
                        "สามารถสอบถามเรื่องการใช้งานเพิ่มเติมได้ที่ LINE: @apsth หรือสามารถดู VDO สอนการใช้งานได้",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit "
                  id="accordion-heading-3-4"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-4"
                  >
                    {t(
                      "home:faq.questions.list6.question",
                      "มีการอบรมการใช้โปรแกรมหรือไม่ ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-4"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-4"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list6.answer",
                        "APSTH จะมีการอบรมการใช้งานคลินิกของคุณ 1 ครั้งในสอนการใช้งานโปรแกรมด้วยการรีโมททางไกล หากต้องการให้สอนเพิ่ม โปรดติดต่อเข้ามาเพื่อเป็นการนัดหมายจากทีมงานโดยไม่จำเป็นต้องเสียค่าใช้จ่ายใดๆทั้งสิ้น ใน กรณีที่ต้องการให้ไป สอนการใช้งานถึงคลินิก ทางคลินิกต้องเสียค่าใช้จ่ายในส่วนของค่าเดินทางและที่พักใน กรณีสอนหลายวัน",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
              <div className="card accordion-item !mb-5">
                <div
                  className="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit"
                  id="accordion-heading-3-4"
                >
                  <button
                    className="hover:!text-[#00B7B8] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-collapse-3-4"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-3-4"
                  >
                    {t(
                      "home:faq.questions.list7.question",
                      "การติดตั้งระบบ Clinic APSTH ใช้เวลานานไหม ?",
                    )}
                  </button>
                </div>
                {/* /.card-header */}
                <div
                  id="accordion-collapse-3-4"
                  className="collapse"
                  aria-labelledby="accordion-heading-3-4"
                  data-bs-target="#accordion-3"
                >
                  <div className="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                    <p>
                      {t(
                        "home:faq.questions.list7.answer",
                        "การติดตั้งระบบ ใช้เวลาไม่นานหลังจากทางลูกค้าแจ้งชำระเงินกับเจ้าหน้าที่ เรียบร้อยและส่งข้อมูลของคลินิกให้กับเจ้าหน้าที่ เพียงรอไม่เกิน 20 นาที ระบบก็จะพร้อมใช้งานได้ทันที",
                      )}
                    </p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.collapse */}
              </div>
              {/* /.card */}
            </div>
            {/* /.accordion-wrapper */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
