import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function Documentation({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] overflow-hidden">
      {/* Background Decor (Glow จางๆ ด้านข้าง) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00B7B8]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container pt-20 xl:pt-28 pb-16">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[0.7rem] font-bold tracking-[0.15em] text-[#00B7B8] uppercase bg-[#00B7B8]/10 rounded-lg">
            Learning Center
          </div>
          <h2 className="text-[2.2rem] xl:text-[2.6rem] font-black text-[#343f52] !leading-[1.2] mb-4">
            {t("docs:hero.title", "คู่มือการใช้งาน (Documentation)")}
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-[1.05rem] text-[#60697b] leading-relaxed opacity-80 font-light">
              {t(
                "docs:hero.description",
                "เรียนรู้วิธีการใช้งานระบบ APSX อย่างละเอียด เพื่อประสิทธิภาพสูงสุดในการบริหารจัดการธุรกิจของคุณ",
              )}
            </p>
          </div>
        </div>

        {/* --- Documentation Grid --- */}
        <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-20px]">
          {[
            {
              id: "list1",
              link: "https://youtube.com/playlist?list=PLMNmwfPqdKEp82IPrpirPNVnGB6T_fzIj&si=wxROFkRhnhvWL1H_",
              title: t("docs:documentation.list1.title", "คู่มือตั้งค่าระบบ"),
              description: t(
                "docs:documentation.list1.description",
                "รายละเอียดการตั้งค่าระบบเบื้องต้นสำหรับผู้เริ่มต้น",
              ),
              icon: "uil-setting",
            },
            {
              id: "list2",
              link: "https://youtube.com/playlist?list=PLMNmwfPqdKEpe_Sv71sdutQyf5ZKD5ode&si=w-jUW7uUjXRGG2Ux",
              title: t("docs:documentation.list2.title", "คู่มือการใช้งาน"),
              description: t(
                "docs:documentation.list2.description",
                "เจาะลึกฟังก์ชันการทำงานต่างๆ ของ APSX Platform",
              ),
              icon: "uil-book-open",
            },
          ].map((item, index) => {
            const getYouTubePlaylistId = (url) => {
              const regExp = /[&?]list=([^&]+)/;
              const match = url.match(regExp);
              return match ? match[1] : null;
            };

            const playlistId = getYouTubePlaylistId(item.link);

            return (
              <div
                key={index}
                className="w-full md:w-6/12 lg:w-5/12 px-[15px] mb-8"
              >
                <div className="group h-full bg-white rounded-[1.5rem] border border-[#a4aec633] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col">
                  {/* YouTube Player Container */}
                  <div className="relative overflow-hidden aspect-video bg-slate-900 group-hover:brightness-110 transition-all duration-500">
                    {playlistId ? (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full scale-[1.01]"
                        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <i className="uil uil-video-slash text-2xl text-slate-300"></i>
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00B7B8]/10 text-[#00B7B8] flex items-center justify-center transition-all group-hover:bg-[#00B7B8] group-hover:text-white">
                        <i className={`uil ${item.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-[1.15rem] font-bold text-[#343f52] m-0 group-hover:text-[#00B7B8] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[0.9rem] text-[#60697b] leading-[1.6] mb-6 font-light">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[0.85rem] font-medium !text-[#343f52] hover:!text-[#00B7B8] group/link"
                      >
                        {t("docs:open_with_yt", "เปิดดูใน YouTube")}
                        <i className="uil uil-arrow-right text-lg transition-transform group-hover/link:translate-x-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
