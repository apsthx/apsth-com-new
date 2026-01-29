import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
// components
import Badge from "@/components/common/Badges";

export default async function Patner({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
      <div className="container pb-28 pt-10 xl:pt-[2rem] lg:pt-[2rem] md:pt-[2rem]">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px]">
          {[
            {
              id: "blog1",
              link: "/clinic",
              title: t("home:why_apsx.partner.blog1.title", "Pay Solutions"),
              description: t(
                "home:why_apsx.partner.blog1.description",
                "ระบบตัดบัตรออนไลน์ รองรับช่องทางชำระเงินออนไลน์ที่หลากหลาย",
              ),
              img: "/assets/homes/apsx8.webp",
            },
            {
              id: "blog2",
              link: "/wellness",
              title: t("home:why_apsx.partner.blog2.title", "Dietz.asia"),
              description: t(
                "home:why_apsx.partner.blog2.description",
                "ระบบ Telemedicine ครบวงจรสำหรับคลินิก พร้อมการขออนุญาต ช่วยดูแลผู้ป่วยออนไลน์ได้ตามกฎหมาย",
              ),
              img: "/assets/homes/apsx9.png",
            },
            {
              id: "blog3",
              link: "/spa",
              title: t("home:why_apsx.partner.blog3.title", "LIS/LAB Plus"),
              description: t(
                "home:why_apsx.partner.blog3.description",
                "ระบบดึงผล Lab/X-Ray ผ่านระบบ LIS มาแสดงผลในระบบ อัตโนมัติ",
              ),
              img: "/assets/homes/apsx10.webp",
            },
            {
              id: "blog4",
              link: "/spa",
              title: t(
                "home:why_apsx.partner.blog4.title",
                "ระบบแฟ้มเบิกค่าใช้จ่าย (e-Claim)",
              ),
              description: t(
                "home:why_apsx.partner.blog4.description",
                "รองรับการเบิกค่าใช้จ่าย สาธารณสุข (e-Claim) 16 แฟ้ม",
              ),
              img: "/assets/homes/apsx11.webp",
            },
            {
              id: "blog5",
              link: "/spa",
              title: t("home:why_apsx.partner.blog5.title", "PEAK)"),
              description: t(
                "home:why_apsx.partner.blog5.description",
                "โปรแกรมบัญชีออนไลน์ ที่ครอบคลุมการใช้งานที่สุดในไทย ให้เจ้าของธุรกิจรับรู้สภาพการเงินที่แท้จริง",
              ),
              img: "/assets/homes/apsx12.jpg",
            },
          ].map((item, index) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              key={index}
              className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
            >
              <div className="!rounded-[0.6rem] h-full shadow-lg bg-white overflow-hidden transition-all hover:-translate-y-1 flex flex-col group">
                <article className="post p-0 flex flex-col h-full">
                  <figure className="hover-scale rounded-t !mb-0 overflow-hidden relative aspect-[4/3] w-full bg-white">
                    <Link href={item.link} className="w-full h-full block">
                      <Image
                        /* เพิ่ม group-hover:blur-sm เพื่อให้รูปเบลอตอนเอาเมาส์วาง */
                        className="!transition-all !duration-500 !ease-in-out group-hover:scale-110 group-hover:blur-[3px] !w-full !h-full !max-w-none !object-cover"
                        src={item.img}
                        alt={item.title || "Feature Image"}
                        width={600}
                        height={450}
                        priority={true}
                      />
                    </Link>

                    {/* Overlay ดูรายละเอียด แบบกระจกขุ่น (Glassmorphism) */}
                    <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 inset-0 z-[5] pointer-events-none flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-all duration-300">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="bg-white/80 backdrop-blur-md text-[#343f52] px-6 py-2 rounded-full font-bold text-[0.85rem] shadow-2xl border border-white/50">
                          {t("home:read_more", "ดูรายละเอียด")}
                        </span>
                      </div>
                    </figcaption>
                  </figure>

                  <div className="post-header p-5 flex-grow">
                    <div className="post-title h4 !mb-2 inline-flex !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-50%] before:w-3 before:h-[2px] before:left-0 before:top-1/2 before:bg-[#1bb59b]">
                      <Link
                        className="!text-[#343f52] hover:!text-[#1bb59b] transition-colors"
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </div>

                    <div className="mb-2">
                      {item.id === "blog5" && (
                        <Badge
                          color="teal"
                          variant="softText"
                          className="!text-[0.55rem] !px-2 !py-[3px] !leading-tight !shadow-sm !rounded-md"
                        >
                          {t("home:coming_soon", "เร็วๆ นี้")}
                        </Badge>
                      )}
                    </div>

                    <p className="!text-[0.85rem] !leading-relaxed text-[#60697b] !mb-0 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
