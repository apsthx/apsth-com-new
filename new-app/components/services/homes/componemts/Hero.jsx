import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="pt-36 xl:pt-[3rem] lg:pt-[1rem] md:pt-[1rem] !text-center !relative">
      <div
        className="absolute"
        style={{
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        data-cue="fadeIn"
      >
        <Image
          className="!rounded-[0.8rem]"
          alt="image"
          src="/assets/img/photos/blurry.png"
          width={1400}
          height={1080}
        />
      </div>
      <div className="flex flex-wrap mx-[-15px] !relative px-4">
        <section id="snippet-1" className="wrapper !bg-transparent  w-screen">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div
                data-cue="fadeIn"
                data-delay={500}
                className="bg-[#a4aec633] border border-[#d3d5da9c] p-4 rounded-2xl md:w-8/12 lg:w-6/12 xl:w-7/12 w-full flex-[0_0_auto] max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative"
              >
                <figure
                  // data-cue="fadeIn"
                  data-cues="slideInDown"
                  data-delay={300}
                  className="!rounded-[.4rem] z-[2] relative overflow-visible"
                >
                  <Image
                    className="!rounded-[.4rem] h-auto w-full shadow-lg"
                    src="/assets/homes/blog1.webp"
                    alt="image"
                    width={1200} // เพิ่มความกว้างเพื่อให้รูปชัดขึ้น
                    height={800}
                    priority
                  />

                  {/* --- ส่วนของลูกศร (Arrows) --- */}

                  {/* 1. เจ้าของกิจการ (ชี้จากซ้าย) */}
                  <div className="absolute top-[20%] -left-[70px] hidden md:flex items-center animate-bounce-horizontal">
                    <div className="bg-[#00aeef] text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-lg whitespace-nowrap">
                      เจ้าของกิจการ
                    </div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#00aeef] border-b-[6px] border-b-transparent ml-[-1px]"></div>
                  </div>

                  {/* 2. แพทย์/พยาบาล (ชี้จากบนลงล่าง) */}
                  <div className="absolute top-[-0px] right-[20%] hidden md:flex flex-col items-center">
                    <div className="bg-[#facc15] text-black px-3 py-1 rounded-full text-[12px] font-bold shadow-lg whitespace-nowrap">
                      แพทย์/นักกายภาพบำบัด/พยาบาล
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#facc15] mt-[-1px]"></div>
                  </div>

                  {/* 3. ผู้จัดการ (ชี้จากซ้ายล่าง) */}
                  <div className="absolute bottom-[40%] -left-[40px] hidden md:flex items-center">
                    <div className="bg-[#008000] text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-lg whitespace-nowrap">
                      ผู้จัดการ
                    </div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#008000] border-b-[6px] border-b-transparent ml-[-1px]"></div>
                  </div>

                  {/* 4. พนักงาน (ชี้จากล่างขวา) */}
                  <div className="absolute bottom-10 -right-14 hidden md:flex items-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-[#ed1c24] border-b-[6px] border-b-transparent mr-[-1px]"></div>
                    <div className="bg-[#ed1c24] text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-lg whitespace-nowrap">
                      พนักงาน
                    </div>
                  </div>
                </figure>
              </div>

              {/*/column */}
              <div className="xl:w-5/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
                <h2
                  data-cues="slideInDown"
                  data-delay={100}
                  className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3"
                >
                  Who Are We?
                </h2>
                <p
                  data-cues="slideInDown"
                  data-delay={100}
                  className="lead !text-[1.05rem] !leading-[1.6] font-medium"
                >
                  We are a digital and branding company that believes in the
                  power of creative strategy and along with great design.
                </p>
                <p data-cues="slideInDown" data-delay={100} className="!mb-6">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et.
                </p>
                <div
                  className="flex justify-center mb-6"
                  data-cues="slideInDown"
                  data-delay={100}
                >
                  <span>
                    <Link
                      href={`/projects`}
                      className="btn btn-lg btn-grape !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[0.8rem] mx-1"
                    >
                      See Projects
                    </Link>
                  </span>
                  <span>
                    <Link
                      href={`/contact`}
                      className="btn btn-lg btn-fuchsia !text-white !bg-[#e668b3] border-[#e668b3] hover:text-white hover:bg-[#e668b3] hover:!border-[#e668b3] active:text-white active:bg-[#e668b3] active:border-[#e668b3] disabled:text-white disabled:bg-[#e668b3] disabled:border-[#e668b3] !rounded-[0.8rem] mx-1"
                    >
                      Contact Us
                    </Link>
                  </span>
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-row">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/target.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4"
                        >
                          <circle
                            className="lineal-fill"
                            cx="283.8"
                            cy="283.8"
                            r={143}
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
                          />
                          <path
                            className="lineal-fill"
                            d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
                          />
                          <path
                            className="lineal-fill"
                            d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="!mb-1">Our Mission</h4>
                        <p className="!mb-0">
                          Dapibus eu leo quam ornare curabitur blandit tempus.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/column */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!px-[25px] !px-[15px] max-w-full !mt-[30px]">
                    <div className="flex flex-row">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 409.6 404.7"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/award-2.svg"
                          className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  !mr-4"
                        >
                          <path
                            className="lineal-stroke"
                            d="M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z"
                          />
                          <path
                            className="lineal-fill"
                            d="M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z"
                          />
                          <path
                            className="lineal-stroke"
                            d="M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="!mb-1">Our Values</h4>
                        <p className="!mb-0">
                          Aenean lacinia bibendum nulla sed consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}

          {/* /.container */}
        </section>
        <div className="lg:w-8/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !relative">
          <div
            className="absolute shape grape w-5 hidden xl:block lg:block"
            style={{ top: "-5%", left: "-15%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219.5 219.5"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/pie.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M219.5 219.5H0c0-58.19 23.14-114.06 64.29-155.21A219.561 219.561 0 01219.5 0v219.5z"
              />
            </svg>
          </div>
          <div
            className="absolute shape violet !w-[2.5rem] hidden xl:block lg:block"
            style={{ bottom: "30%", left: "-20%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 457.71 446.45"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/scribble.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <path
                className="svg-fill"
                d="M205.62 442.54c-.51-.41-.99-.84-1.46-1.31-10.4-10.39-3.61-27.12 11.63-52.5 11.72-19.51 28.48-43.74 46.22-69.39 17.53-25.34 35.66-51.54 49.01-73.47 14.73-24.19 18.57-35.01 19.51-39.48-3.86-.28-13.15.3-33.78 6.52-19.71 5.94-43.09 14.92-65.7 23.6-63.8 24.49-85.35 31.41-96.51 19.5-3.21-3.43-7.62-11.04-1.12-23.54 2.49-4.79 6.64-10.51 12.68-17.5 10.4-12.03 25.04-26.34 40.55-41.49 14.02-13.7 28.53-27.87 39.53-40.11 9.93-11.04 14.15-17.43 15.94-20.82-3.43-.75-10.24-1.51-23.25-.92-14.99.68-33.44 2.89-51.28 5.02-46.92 5.61-74.09 8.33-86.81-.99-4.78-3.5-7.67-8.42-8.41-14.24-1.97-15.58 12.45-33.15 29.14-53.5 5.31-6.47 13.31-16.22 17.36-22.68-4.51-.38-12.43-.4-25.97 1.1-16.54 1.82-35.62 5.22-50.95 7.96-12.62 2.25-22.6 4.03-28.48 4.49C6.6 39.3.58 34.17.04 27.28c-.54-6.88 4.6-12.9 11.48-13.44 4.66-.37 14.58-2.13 26.06-4.18C54.56 6.63 75.7 2.86 94 1.07c26.41-2.6 40.16-.54 47.48 7.13 7.01 7.34 6.45 17.66-1.68 30.66-4.72 7.55-11.63 15.98-18.95 24.9-6.18 7.53-12.57 15.31-17.24 22.19-3.35 4.92-4.95 8.13-5.71 10.07 3 .54 9.09 1.08 20.87.43 13.21-.73 29.07-2.63 45.86-4.64 59.99-7.17 94.33-10.22 102.49 10.62 7.4 18.93-16.51 43.51-62.99 88.92-12.69 12.4-24.68 24.11-34.04 34.28-3.17 3.45-5.68 6.34-7.67 8.75 15.88-4.42 41.18-14.13 59.67-21.22 62.4-23.96 101.69-37.87 121.09-29.14 5.38 2.42 9.26 6.47 11.23 11.72 7.48 19.95-16.15 57.31-71.83 137.82-15.49 22.39-30.12 43.55-41.18 61.25-7.13 11.4-11.3 19.11-13.75 24.25 8.97-3.3 25.58-11 55.73-28.8 32.68-19.29 70.61-44.04 101.09-63.94 24.62-16.07 44.07-28.76 54.65-34.68 6.03-3.37 13.64-1.22 17.01 4.81 3.37 6.03 1.22 13.64-4.81 17.01-9.83 5.5-29.92 18.61-53.18 33.79-33.46 21.84-75.1 49.01-110.05 69.21-49.35 28.51-70.85 35.44-82.46 26.07z"
              />
            </svg>
          </div>
          <div
            className="absolute shape fuchsia w-6 hidden xl:block lg:block"
            style={{
              top: "0%",
              right: "-25%",
              transform: "rotate(70deg)",
            }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 411.42 329.24"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/tri.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M164.34 21.92L8.72 251.15c-22.54 33.2 1.24 78.09 41.37 78.09h311.24c40.13 0 63.91-44.89 41.37-78.09L247.08 21.92a50 50 0 00-82.74 0z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute shape yellow w-6 hidden xl:block lg:block"
            style={{ bottom: "25%", right: "-17%" }}
            data-cue="fadeIn"
            data-delay={1500}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/svg/circle.svg"
              className="svg-inject icon-svg !w-full !h-full"
            >
              <g data-name="Layer 2">
                <path
                  className="svg-fill"
                  d="M250 0C111.93 0 0 111.93 0 250s111.93 250 250 250 250-111.93 250-250S388.07 0 250 0zm0 425a175 175 0 11175-175 175 175 0 01-175 175z"
                  data-name="Layer 1"
                />
              </g>
            </svg>
          </div>

          {/* /div */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
  );
}
