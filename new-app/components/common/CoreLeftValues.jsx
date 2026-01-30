import React from "react";
import Image from "next/image";

export default function CoreLeftValues({
  title = "Insert Title Here",
  description = "Insert Description Here",
  imageSrc = "/assets/img/illustrations/i7.png",
  imageAlt = "Core Values Illustration",
  features = [],
  imageRight = true,
  bgColor = "!bg-white", // 👈 เพิ่ม Prop สำหรับเลือกสีพื้นหลัง (Default เป็นสีขาว)
  children, // 👈 เพิ่มไว้สำหรับใส่ GridBackground หรือ Component อื่นๆ แทรกด้านหลัง
}) {
  return (
    <section className={`wrapper relative overflow-hidden ${bgColor}`}>
      {/* ถ้ามี Component อย่าง GridBackground ส่งมา จะมาโผล่ตรงนี้ */}
      {children}

      <div className="container relative z-10 pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          {/* ส่วนรูปภาพประกอบ */}
          <div
            className={`xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full ${
              imageRight ? "xl:!order-2 lg:!order-2" : ""
            }`}
          >
            <figure className="m-0 p-0">
              <Image
                className="w-auto h-auto"
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={621}
                priority
              />
            </figure>
          </div>

          {/* ส่วนเนื้อหาข้อความ */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
              {title}
            </h3>
            <p className="!mb-6 text-gray-600">{description}</p>

            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              {/* คอลัมน์ที่ 1 */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  {features
                    .slice(0, Math.ceil(features.length / 2))
                    .map((text, idx) => (
                      <li key={idx} className="relative !pl-6 !mt-3 first:mt-0">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] absolute left-0 top-[0.2rem]" />
                        </span>
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* คอลัมน์ที่ 2 */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] !mt-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  {features
                    .slice(Math.ceil(features.length / 2))
                    .map((text, idx) => (
                      <li key={idx} className="relative !pl-6 !mt-3 first:mt-0">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none flex justify-center items-center bg-[#dce7f9] !text-[#3f78e0] rounded-[100%] absolute left-0 top-[0.2rem]" />
                        </span>
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
