import React from "react";
import { useTranslation } from "@/app/i18n";
import { getDocPlaylists } from "@/data/docs";

export default async function Documentation({ lng }) {
  const { t } = await useTranslation(lng);
  const playlistItems = getDocPlaylists(t);
  const getYouTubePlaylistId = (url) => {
    const regExp = /[&?]list=([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] overflow-hidden">
      {/* Background Decor (Glow จางๆ ด้านข้าง) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2bc29d]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container pt-20 xl:pt-28 pb-16">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[0.7rem] font-bold tracking-[0.15em] text-[#2bc29d] uppercase bg-[#2bc29d]/10 rounded-lg">
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
          {playlistItems.map((item) => {
            const playlistId = getYouTubePlaylistId(item.link);

            return (
              <div
                key={item.id}
                className="w-full md:w-6/12 lg:w-5/12 px-[15px] mb-8"
              >
                <div className="group h-full bg-white rounded-[1.5rem] border border-[#a4aec633] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col">
                  {/* YouTube Player */}
                  <div className="relative aspect-video bg-slate-900">
                    {playlistId && (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:text-white"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        <i className={`uil ${item.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-[1.15rem] font-bold text-[#343f52] m-0 group-hover:text-[#1bb59b]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[0.9rem] text-[#60697b] font-light mb-6">
                      {item.description}
                    </p>
                    {/* ... ลิงก์เปิด YouTube ... */}
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
