import React from "react";
import Hero from "@/components/services/customer/components/Hero";
import OurCustomersGroups from "@/components/services/customer/components/OurCustomersGroups";
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
    title: t("metadata:customer.meta.title"),
    description: t("metadata:customer.meta.description"),
    keywords: t("metadata:customer.meta.keywords"),
    ogTitle: t("metadata:customer.meta.og_title"),
    ogDesc: t("metadata:customer.meta.og_description"),
    twTitle: t("metadata:customer.meta.twitter_title"),
    twDesc: t("metadata:customer.meta.twitter_description"),
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

export default async function CustomerPage({ params }) {
  const { lng } = await params;

  return (
    <main className="bg-white min-h-screen">
      {/* 1. ส่วนของ Background ตกแต่งด้านหลัง (Optional: สร้าง Gradient จางๆ) */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] opacity-20 pointer-events-none" />

        {/* 2. เนื้อหาหลัก */}
        <div className="relative z-10">
          <section className="wrapper">
            {/* ปรับระยะห่างให้ Hero ดูเด่นขึ้น */}
            <div className="">
              <Hero lng={lng} />
            </div>

            <div className="container bg-[#29bbb4] p-4 xl:p-12 md:p-10 rounded-3xl">
              <OurCustomersGroups />
            </div>
          </section>
        </div>

        {/* 3. ส่วนท้ายหน้า (เพิ่มลูกเล่นเส้นสาย) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B7B8]/10 to-transparent" />
      </div>
    </main>
  );
}
