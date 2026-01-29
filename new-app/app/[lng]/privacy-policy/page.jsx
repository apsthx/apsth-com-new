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
    title: t("metadata:privacy_policy.meta.title"),
    description: t("metadata:privacy_policy.meta.description"),
    keywords: t("metadata:privacy_policy.meta.keywords"),
    ogTitle: t("metadata:privacy_policy.meta.og_title"),
    ogDesc: t("metadata:privacy_policy.meta.og_description"),
    twTitle: t("metadata:privacy_policy.meta.twitter_title"),
    twDesc: t("metadata:privacy_policy.meta.twitter_description"),
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

export default async function PrivacyPolicy({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // รายการ Section ทั้งหมด 1-14 ตามที่กำหนดในนโยบายล่าสุด
  const sections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "section11",
    "section12",
    "section13",
    "section14",
  ];

  return (
    <section className="wrapper overflow-hidden">
      <div className="container pt-20 ">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            {/* --- Header Section --- */}
            <div className="rounded-2xl mb-0">
              <div className="card-body p-2 text-center">
                <h1 className="display-5 mb-4 font-black text-[#343f52]">
                  {t(
                    "privacy_policy:privacy_policy.title",
                    "นโยบายความเป็นส่วนตัวสำหรับลูกค้า (Privacy Policy)",
                  )}
                </h1>
                <p className="text-[#60697b] mb-4 leading-relaxed">
                  {t(
                    "privacy_policy:privacy_policy.description",
                    "บริษัท เอพีเอส ทีเอช จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ...",
                  )}
                </p>
              </div>
            </div>

            {/* --- Content Body --- */}
            <div className="card shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="card-body p-8 md:p-12 !bg-white">
                {sections.map((sectionKey, index) => (
                  <div key={sectionKey} className={index !== 0 ? "mt-12" : ""}>
                    <h2 className="h4 mb-4 text-[#343f52] font-bold flex items-center">
                      <span className="w-1 h-6 bg-[#2bc29d]  me-3"></span>
                      {t(
                        `privacy_policy:privacy_policy.items.${sectionKey}.title`,
                        "",
                      )}
                    </h2>

                    <div className="space-y-4 ps-5">
                      {/* Loop รองรับรายการย่อย list1 ถึง list10 (ตาม JSON) */}
                      {[...Array(10)].map((_, i) => {
                        const listKey = `list${i + 1}`;
                        const content = t(
                          `privacy_policy:privacy_policy.items.${sectionKey}.${listKey}`,
                          "",
                        );

                        return content ? (
                          <p
                            key={listKey}
                            className="text-[#60697b] leading-relaxed mb-2"
                          >
                            {content}
                          </p>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}

                <hr className="my-12 opacity-10" />

                {/* --- Contact Details Section --- */}
                <div className="bg-[#f0f8f8] p-8 rounded-2xl">
                  <h3 className="h4 mb-6 text-[#343f52] font-bold">
                    {t(
                      "privacy_policy:privacy_policy.items.contact.title",
                      "รายละเอียดการติดต่อ",
                    )}
                  </h3>
                  <div className="row gy-4 text-[#60697b]">
                    {/* บริษัท / Data Controller */}
                    <div className="col-md-6">
                      <p className="mb-1 font-bold text-[#343f52]">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.controller_label",
                          "ผู้ควบคุมข้อมูลส่วนบุคคล",
                        )}
                      </p>
                      <p className="mb-1">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.company",
                          "บริษัท เอพีเอส ทีเอช จำกัด",
                        )}
                      </p>
                      <p className="text-sm">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.address",
                          "I-CONNECT เลขที่ 888/8 หมู่ 13 บ้านเป็ด เมืองขอนแก่น 40000",
                        )}
                      </p>
                      <p className="mt-2 text-sm">
                        Email:{" "}
                        <span className="text-[#2bc29d]">
                          {t(
                            "privacy_policy:privacy_policy.items.contact.email",
                            "apsth456@gmail.com",
                          )}
                        </span>
                      </p>
                      <p className="text-sm">
                        Tel:{" "}
                        {t(
                          "privacy_policy:privacy_policy.items.contact.tel",
                          "0981816769",
                        )}
                      </p>
                    </div>

                    {/* DPO */}
                    <div className="col-md-6 border-start-md border-[#2bc29d]/10">
                      <p className="mb-1 font-bold text-[#343f52] underline decoration-[#2bc29d]">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_label",
                          "เจ้าหน้าที่คุ้มครองข้อมูล (DPO)",
                        )}
                      </p>
                      <p className="mb-1 font-bold">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_name",
                          "ประสาน ศรีโสภา",
                        )}
                      </p>
                      <p className="text-sm italic mb-2">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_title",
                          "DPO (PDPA)",
                        )}
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="text-[#2bc29d]">
                          {t(
                            "privacy_policy:privacy_policy.items.contact.email",
                            "apsth456@gmail.com",
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Footer Note --- */}
            <p className="text-center !mt-4 text-[#aab0bc] text-sm">
              {t(
                "privacy_policy:privacy_policy.last_updated",
                "แก้ไขครั้งล่าสุดเมื่อวันที่ 25 พฤษภาคม 2565",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
