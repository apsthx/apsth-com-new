import React from "react";
import Image from "next/image";

export default function ModernServiceShowcase({
  title = "What We Do?",
  subtitle = "The full service we are offering is specifically designed to meet your business needs.",
  description = "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
  buttonText = "More Details",
  buttonLink = "#",
  items = [], // ข้อมูล Card และ รูปภาพ
}) {
  return (
    <section id="features-zigzag" className="wrapper !bg-[#ffffff]">
      <div className="container pt-0 xl:pt-0 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-50px] items-center">
          {/* ฝั่งซ้าย: Grid ของรูปภาพและ Card */}
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-0 lg:px-0 !px-[15px] max-w-full !mt-[50px]">
            <div className="flex flex-wrap mx-[-15px] !mt-[-30px] !text-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                >
                  <div className="flex flex-wrap mx-[-15px]">
                    {/* รูปภาพ (สลับลำดับได้ด้วย order-2 ในตัวที่สอง) */}
                    <div
                      className={`w-full flex-[0_0_auto] !px-[15px] max-w-full ${index === 1 ? "xl:!order-2 lg:!order-2 md:!order-2" : ""}`}
                    >
                      <figure className="!rounded-[.4rem] !mb-6">
                        <Image
                          className="!rounded-[.4rem] object-cover"
                          src={item.imageSrc}
                          alt={item.title}
                          width={340}
                          height={325}
                        />
                      </figure>
                    </div>

                    {/* Card เนื้อหา */}
                    <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                      <div
                        className={`card ${index === 1 ? "xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!mt-6 xl:!mt-6" : ""}`}
                      >
                        <div className="card-body flex-[1_1_auto] p-[40px]">
                          <div
                            className={`icon btn btn-circle btn-lg pointer-events-none !mb-3 w-12 h-12 !inline-flex !items-center !justify-center !rounded-[100%] ${item.iconBgClass || "btn-soft-purple"}`}
                          >
                            <i
                              className={`${item.iconClass} xl:!text-[1.3rem]`}
                            />
                          </div>
                          <h4>{item.title}</h4>
                          <p className="!mb-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ฝั่งขวา: ข้อความอธิบายหลัก */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] !mt-[50px]">
            <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
              {title}
            </h2>
            <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !mb-4">
              {subtitle}
            </p>
            <p className="!mb-6">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
