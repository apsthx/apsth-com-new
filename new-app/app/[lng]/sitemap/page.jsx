import React from "react";
import Link from "next/link";
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
    title: t("metadata:site_map.meta.title"),
    description: t("metadata:site_map.meta.description"),
    keywords: t("metadata:site_map.meta.keywords"),
    ogTitle: t("metadata:site_map.meta.og_title"),
    ogDesc: t("metadata:site_map.meta.og_description"),
    twTitle: t("metadata:site_map.meta.twitter_title"),
    twDesc: t("metadata:site_map.meta.twitter_description"),
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
export default async function SiteMap({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "sitemap");

  // กำหนดจำนวนรายการตาม JSON (item1 - item15)
  const totalItems = 15;

  // กำหนดเส้นทาง URL ให้ตรงกับลำดับรายการ 1-15 (ปรับเปลี่ยนได้ตามจริง)
  const sitemapLinks = [
    `/`, // 1. โปรแกรม คลินิก APSX Platform...
    `/clinic`, // 2. โปรแกรม คลินิก
    `/hospital`, // 3. ระบบ โรงพยาบาล
    `/wellness`, // 4. โปรแกรม Wellness/ศูนย์ดูแลผู้สูงอายุ
    `/spa`, // 5. โปรแกรม Spa/Beauty
    `/customer`, // 6. ลูกค้าของเรา
    `/partner`, // 7. Partner ของเรา
    `/api`, // 8. คู่มือการใช้งาน API
    `/docs`, // 9. คู่มือการใช้งาน
    `/update`, // 10. อัพเดทเวอร์ชั่น
    `/calendar`, // 11. นัดหมายชม Demo
    `/term-of-use`, // 12. เงื่อนไขการใช้บริการ
    `/privacy-policy`, // 13. นโยบายความเป็นส่วนตัวสำหรับลูกค้า
    `/contact`, // 14. ติดต่อเรา
    `/sitemap`, // 15. Site Map
  ];

  return (
    <section className="wrapper  overflow-hidden">
      <div className="container py-14 md:py-20">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            {/* --- Header --- */}
            <div className="mb-8 text-center">
              <h1 className="display-5 mb-3 font-black text-[#343f52]">
                {t("sitemap:sitemap.title")}
              </h1>
            </div>

            {/* --- Site Map List --- */}
            <div className="card shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="card-body p-8 md:p-12 !bg-white">
                <ul className="list-unstyled mb-0">
                  {[...Array(totalItems)].map((_, i) => {
                    const itemKey = `item${i + 1}`;
                    const content = t(`sitemap:sitemap.items.${itemKey}`);
                    const href = sitemapLinks[i] || "#";

                    return (
                      <li key={itemKey} className="group">
                        {/* เพิ่ม Link ครอบเพื่อให้กดได้ */}
                        <Link
                          target="_blank"
                          href={`/${lng}${href}`}
                          className="flex items-start no-underline hover:no-underline"
                        >
                          {/* จัดวางจุดวงกลมให้อยู่ตรงกลางบรรทัดแรกของข้อความ */}
                          <div className="flex items-center justify-center h-[24px] w-6 flex-shrink-0 me-2">
                            <div className="w-2 h-2 bg-[#9499a3] group-hover:bg-[#00B7B8] rounded-full transition-colors duration-200"></div>
                          </div>

                          {/* ข้อความ Site Map */}
                          <p className="mb-0 font-medium text-[#60697b] group-hover:text-[#00B7B8] transition-colors duration-200 leading-[24px]">
                            {content}
                          </p>

                          {/* ไอคอนลูกศรด้านหลัง */}
                          <span className="ms-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center h-[24px]">
                            <i className="uil uil-arrow-right text-[#00B7B8]"></i>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
