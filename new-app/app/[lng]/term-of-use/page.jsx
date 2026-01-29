import React from "react";
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
    title: t("metadata:term_of_use.meta.title"),
    description: t("metadata:term_of_use.meta.description"),
    keywords: t("metadata:term_of_use.meta.keywords"),
    ogTitle: t("metadata:term_of_use.meta.og_title"),
    ogDesc: t("metadata:term_of_use.meta.og_description"),
    twTitle: t("metadata:term_of_use.meta.twitter_title"),
    twDesc: t("metadata:term_of_use.meta.twitter_description"),
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

export default async function TermsOfService({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // แปลง Object ของ items ให้เป็น Array เพื่อให้ง่ายต่อการ Loop
  const sections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
  ];

  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-14 md:py-20">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            {/* --- Header --- */}
            <div className="text-center mb-4">
              <h1 className="display-4 mb-4 font-black text-[#343f52]">
                {t(
                  "term_of_use:title",
                  "เงื่อนไขการใช้บริการ (Terms of Service)",
                )}
              </h1>
              <p className="lead px-md-12 px-lg-0 text-[#60697b]">
                {t(
                  "term_of_use:description",
                  "เงื่อนไขการใช้บริการฉบับนี้มีวัตถุประสงค์เพื่อแจ้งถึงสิทธิและหน้าที่...",
                )}
              </p>
            </div>

            {/* --- Content Sections --- */}
            <div className="card shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="card-body p-8 md:p-12">
                {sections.map((sectionKey, index) => (
                  <div key={sectionKey} className={index !== 0 ? "mt-10" : ""}>
                    <h3 className="h4 mb-4 text-[#343f52] font-bold border-s-4 border-[#00b8b8] ps-3">
                      {t(`term_of_use:items.${sectionKey}.title`, "")}
                    </h3>

                    <ul className="list-unstyled space-y-3">
                      {/* Loop ดึง list1 ถึง list10 (ถ้ามี) */}
                      {[...Array(10)].map((_, i) => {
                        const listKey = `list${i + 1}`;
                        const content = t(
                          `term_of_use:items.${sectionKey}.${listKey}`,
                          "",
                        );

                        // แสดงผลเฉพาะที่มีข้อมูลเท่านั้น
                        return content ? (
                          <li
                            key={listKey}
                            className="flex items-start mb-3 text-[#60697b] leading-relaxed"
                          >
                            <span className="me-2 text-[#00b8b8]">•</span>
                            <span>{content}</span>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Footer Note --- */}
            <div className="text-center !mt-4 text-slate-400 text-sm italic">
              {t(
                "term_of_use:update_at",
                "แก้ไขครั้งล่าสุดเมื่อวันที่ 25 พฤษภาคม 2565",
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
