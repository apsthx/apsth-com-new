import React from "react";
import Contact from "@/components/contact/Contact";
import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // 1. ดึงข้อมูลส่วนกลาง (ใช้ซ้ำทุกหน้า)
  const common = {
    brand: t("metadata:common.application_name"),
    author: t("metadata:common.author"),
    baseUrl: t("metadata:common.base_url"),
    robots: t("metadata:common.robots"),
    themeColor: t("metadata:common.theme_color"),
    twitterSite: t("metadata:common.twitter_site"),
    twitterCreator: t("metadata:common.twitter_creator"),
    twitterImg: t("metadata:common.twitter_image"),
    copyright: t("metadata:common.copyright"),
  };

  // 2. ดึงข้อมูลเฉพาะหน้า (Home Page)
  const page = {
    title: t("metadata:contact_us.meta.title"),
    description: t("metadata:contact_us.meta.description"),
    keywords: t("metadata:contact_us.meta.keywords"),
    ogTitle: t("metadata:contact_us.meta.og_title"),
    ogDesc: t("metadata:contact_us.meta.og_description"),
    twTitle: t("metadata:contact_us.meta.twitter_title"),
    twDesc: t("metadata:contact_us.meta.twitter_description"),
  };

  return {
    // --- Standard Metadata ---
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: common.author }],
    creator: common.author,
    publisher: common.copyright,
    applicationName: common.brand,
    robots: common.robots,
    themeColor: common.themeColor,

    // --- Open Graph ---
    openGraph: {
      type: "website",
      url: `${common.baseUrl}/${lng}`,
      title: page.ogTitle,
      description: page.ogDesc,
      siteName: common.brand,
      locale: lng === "th" ? "th_TH" : "en_US",
      images: [
        {
          url: "/assets/img/logo/apsx_icon.png",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },

    // --- Twitter ---
    twitter: {
      card: "summary_large_image",
      title: page.twTitle,
      description: page.twDesc || page.description,
      site: common.twitterSite,
      creator: common.twitterCreator,
      images: [common.twitterImg],
    },

    // --- Alternates (Multi-language) ---
    alternates: {
      canonical: `${common.baseUrl}/${lng}`,
      languages: {
        th: `${common.baseUrl}/th`,
        en: `${common.baseUrl}/en`,
      },
    },

    // --- Apple & Icons ---
    appleWebApp: {
      capable: true,
      title: common.brand,
      statusBarStyle: "default",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/assets/img/logo/apsx_icon.png",
    },
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
          <div className="pt-0 pb-20 md:pt-10 md:pb-16">
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
