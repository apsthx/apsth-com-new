import React from "react";
import { useTranslation } from "@/app/i18n";
import TeamGroups from "./TeamGroups";

export default async function Teams({ lng }) {
  const { t } = await useTranslation(lng);

  const Teamsdata = [
    {
      id: 1,
      imageSrc: "/assets/homes/teams/prasan_srisopa.webp",
      imageSrcSet: "/assets/homes/teams/prasan_srisopa.webp",
      name: "Prasan Srisopa",
      description: "Co-Founder & CEO Programmer Team Leader",
      socials: [
        {
          icon: "uil-facebook-f",
          unicode: "'\\eae2'",
          color: "#3f78e0",
          href: "https://www.facebook.com/apsth456",
        },
        {
          icon: "uil-linkedin",
          unicode: "'\\ebac'",
          color: "#0077b5", // สีแบรนด์ LinkedIn
          href: "https://www.linkedin.com/in/apsth456",
        },
      ],
    },
    {
      id: 2,
      imageSrc: "/assets/homes/teams/pawoot_pongvitayapanu.webp",
      imageSrcSet: "/assets/homes/teams/pawoot_pongvitayapanu.webp",
      name: "Pawoot Pongvitayapanu",
      description: "Investor CEO & Founder of e-commerce In Thailand",
      socials: [
        {
          icon: "uil-linkedin",
          unicode: "'\\ebac'",
          color: "#0077b5", // สีแบรนด์ LinkedIn
          href: "https://www.linkedin.com/in/pawoot/",
        },
      ],
    },
    {
      id: 3,
      imageSrc: "/assets/homes/teams/thanwaphisit_promkammul.webp",
      imageSrcSet: "/assets/homes/teams/thanwaphisit_promkammul.webp",
      name: "Thanwaphisit Promkammul",
      description: "Support & Sales Manager",
    },
    {
      id: 4,
      imageSrc: "/assets/homes/teams/waranya_chainikom.webp",
      imageSrcSet: "/assets/homes/teams/waranya_chainikom.webp",
      name: "Waranya Chainikom",
      description: "Support & Sales",
    },
    {
      id: 5,
      imageSrc: "/assets/homes/teams/sukanya_nadee.webp",
      imageSrcSet: "/assets/homes/teams/sukanya_nadee.webp",
      name: "Sukanya Nadee",
      description: "Accountant",
    },
    {
      id: 6,
      imageSrc: "/assets/homes/teams/pinuma_noinonmuang.webp",
      imageSrcSet: "/assets/homes/teams/pinuma_noinonmuang.webp",
      name: "Pinuma Noinonmuang",
      description: "Graphic Design",
    },
    {
      id: 7,
      imageSrc: "/assets/homes/teams/nattapon_aiyawan.webp",
      imageSrcSet: "/assets/homes/teams/nattapon_aiyawan.webp",
      name: "Nattapon Aiyawan",
      description: "Full Stack Developer",
    },
    {
      id: 8,
      imageSrc: "/assets/homes/teams/wachirawit_suebjaknoi.webp",
      imageSrcSet: "/assets/homes/teams/wachirawit_suebjaknoi.webp",
      name: "Wachirawit Suebjaknoi",
      description: "Full Stack Developer",
    },
    {
      id: 9,
      imageSrc: "/assets/homes/teams/tawatchai_sunanta.webp",
      imageSrcSet: "/assets/homes/teams/tawatchai_sunanta.webp",
      name: "Tawatchai Sunanta",
      description: "Full Stack Developer",
    },
    {
      id: 10,
      imageSrc: "/assets/homes/teams/rapeepong_boongsri.webp",
      imageSrcSet: "/assets/homes/teams/rapeepong_boongsri.webp",
      name: "Rapeepong Boongsri",
      description: "Full Stack Developer",
    },
  ];

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff]  ">
      <div className="container  pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
        >
          {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
          <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] !mb-2 text-[#343f52] tracking-tighter">
            {t("home:teams.title", "ทีมงานของเรา")}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[1rem] xl:text-[1.1rem] text-[#343f52] opacity-70">
              <strong className="font-bold text-[#343f52]">
                APSX Platform
              </strong>{" "}
              {t(
                "home:teams.description",
                "ทีมงานของเรามีประสบการณ์และความเชี่ยวชาญในการพัฒนาพร้อมให้คำปรึกษาและบริการลูกค้าอย่างมืออาชีพ",
              )}
            </p>
          </div>
        </div>
        <TeamGroups Teamsdata={Teamsdata} />
      </div>
    </section>
  );
}
