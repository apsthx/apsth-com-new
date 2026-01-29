import React from "react";

import PlatformHighlights from "@/components/services/homes/componemts/PlatformHighlights";
import Hero from "@/components/services/Clinics/components/Hero";
import WhyAPSX from "@/components/services/Clinics/components/WhyAPSX";

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
    title: t("metadata:clinic.meta.title"),
    description: t("metadata:clinic.meta.description"),
    keywords: t("metadata:clinic.meta.keywords"),
    ogTitle: t("metadata:clinic.meta.og_title"),
    ogDesc: t("metadata:clinic.meta.og_description"),
    twTitle: t("metadata:clinic.meta.twitter_title"),
    twDesc: t("metadata:clinic.meta.twitter_description"),
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

export default async function ClinicPage({ params }) {
  const { lng } = await params;
  return (
    <>
      <div className="color-grape font-space demo30 ">
        {/* className="!bg-[#f0f0f8]" */}
        <div>
          <div className="grow shrink-0">
            <section className="wrapper overflow-hidden">
              <div className="mt-10" />
              <Hero lng={lng} />
              <PlatformHighlights lng={lng} />
              <WhyAPSX lng={lng} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
