import React from "react";

import PlatformHighlights from "@/components/PlatformHighlights";
import Hero from "@/components/home/Hero";
// import WhyAPSX from "@/components/home/WhyAPSX";
import Package from "@/components/home/Package";
import OurCustomers from "@/components/home/OurCustomers";
import Teams from "@/components/home/Teams";
import Certification from "@/components/home/Certification";
import Questions from "@/components/home/Questions";
import ProductShowcase from "@/components/ProductShowcase";
import ProductOverview from "@/components/ProductOverview";
import ServiceExpansion from "@/components/ServiceExpansion";

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
    title: t("metadata:home.meta.title"),
    description: t("metadata:home.meta.description"),
    keywords: t("metadata:home.meta.keywords"),
    ogTitle: t("metadata:home.meta.og_title"),
    ogDesc: t("metadata:home.meta.og_description"),
    twTitle: t("metadata:home.meta.twitter_title"),
    twDesc: t("metadata:home.meta.twitter_description"),
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
export default async function HomePage({ params }) {
  const { lng } = await params;
  return (
    <div className="w-full relative bg-white">
      <Hero lng={lng} />
      <ProductOverview lng={lng} />
      <ProductShowcase lng={lng} />
      <ServiceExpansion lng={lng} />
      <PlatformHighlights lng={lng} />
      <Package lng={lng} />
      <OurCustomers lng={lng} />
      <Teams lng={lng} />
      <Certification lng={lng} />
      <Questions lng={lng} />
    </div>
  );
}
