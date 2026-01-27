import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

export default async function Documentation({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] d">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center">
          {t("docs:hero.title", "คู่มือการใช้งาน (Documentation)")}
        </h2>
        <p className="lead text-[1rem] !mb-10 !text-center md:!px-24 lg:!px-[12.5rem] xl:!px-0">
          {t(
            "docs:hero.description",
            "คู่มือการใช้งาน (Documentation) ของโปรแกรม คลินิก APSX Platform รองรับธุรกิจประเภท Clinic, Spa, Wellness, Hospital, Beauty, ศูนย์ดูแลผู้สูงอายุ, คลินิกสุขภาพจิต, คลินิกตา, ทุกประเภทคลินิก",
          )}
        </p>
        <div className="flex flex-wrap justify-center mx-[-15px] !mt-[-50px]">
          {[
            {
              id: "list1",
              link: "https://youtube.com/playlist?list=PLMNmwfPqdKEp82IPrpirPNVnGB6T_fzIj&si=wxROFkRhnhvWL1H_",
              title: t("docs:documentation.list1.title", "คู่มือตั้งค่าระบบ"),
              description: t(
                "docs:documentation.list1.description",
                "รายละเอียดการตั้งค่าระบบเบื้องต้น",
              ),
            },
            {
              id: "list2",
              link: "https://youtube.com/playlist?list=PLMNmwfPqdKEpe_Sv71sdutQyf5ZKD5ode&si=w-jUW7uUjXRGG2Ux",
              title: t("docs:documentation.list2.title", "คู่มือการใช้งาน"),
              description: t(
                "docs:documentation.list2.description",
                "สอนการใช้งานฟังก์ชันต่างๆ ในระบบ",
              ),
            },
          ].map((item, index) => {
            // --- แก้ไขฟังก์ชันให้ดึง Playlist ID แทน ---
            const getYouTubePlaylistId = (url) => {
              const regExp = /[&?]list=([^&]+)/;
              const match = url.match(regExp);
              return match ? match[1] : null;
            };

            const playlistId = getYouTubePlaylistId(item.link);

            return (
              <div
                key={index}
                className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
              >
                <div className="!rounded-[0.6rem] h-full shadow-lg bg-white overflow-hidden transition-all hover:-translate-y-1 ">
                  <article className="post p-0">
                    <figure
                      className="relative !mb-0 overflow-hidden bg-black"
                      style={{ paddingTop: "56.25%" }}
                    >
                      {playlistId ? (
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          // --- ใช้ /videoseries?list= เพื่อแสดงผลแบบ Playlist ---
                          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-200 flex items-center justify-center text-center p-4">
                          <span className="text-xs text-slate-400">
                            Not-fond
                          </span>
                        </div>
                      )}
                    </figure>

                    <div className="post-header p-5">
                      <div className="post-title h4 !mb-2 inline-flex !tracking-[0.02rem] text-[0.9rem] font-bold relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[2px] before:left-0 before:top-1/4 before:bg-[#00B7B8]">
                        <h2 className="m-0 p-0 text-[0.9rem]">
                          <a
                            className="!text-[#343f52] hover:!text-[#00B7B8]"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.title}
                          </a>
                        </h2>
                      </div>

                      <p className="!text-[0.8rem] !leading-relaxed text-[#60697b] !mb-0 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}
