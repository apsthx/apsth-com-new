import React from "react";
import Contact from "@/components/services/contact/components/Contact";
import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return {
    title: t("metadata:home.meta.title"),
    description: t("metadata:home.meta.description"),
  };
}

export default async function ContactPage({ params }) {
  const { lng } = await params;

  return (
    <main className="relative min-h-screen bg-[#ffffff] overflow-hidden">
      {/* 1. สาดแสงสีแบรนด์จางๆ ไว้ที่มุมจอ (Branding Glow) */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "#00B7B8" }}
      />
      <div
        className="absolute bottom-[10%] -left-[10%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "#3f78e0" }} // แซมสีน้ำเงินนิดๆ ให้ดูมีมิติ
      />

      {/* 2. เนื้อหาหลัก */}
      <div className="relative z-10">
        <section className="wrapper">
          {/* จัดระยะห่างให้ดูหายใจออก (Spacious) */}
          <div className="pt-16 pb-20 md:pt-10 md:pb-16">
            <div className="container">
              <Contact lng={lng} />
            </div>
          </div>
        </section>
      </div>

      {/* 3. ตกแต่งพื้นหลังด้วยเส้น Grid จางๆ (เพิ่มความ Tech/Professional) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </main>
  );
}
