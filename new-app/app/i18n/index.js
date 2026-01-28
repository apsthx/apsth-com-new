import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

const initI18next = async (lng) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          // เปลี่ยนบรรทัดที่ 12 เป็น:
          import(`@/public/locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      supportedLngs: ["th", "en"],
      lng,
      fallbackLng: "th",
      defaultNS: "common", // เพิ่มบรรทัดนี้ถ้าไฟล์ชื่อ common.json
      ns: [
        "common",
        "nav",
        "home",
        "metadata",
        "clinic",
        "hospital",
        "wellness",
        "spa",
        "partner",
        "api",
        "docs",
        "update",
        "contact",
        "calendar",
        "term_of_use",
        "privacy_policy",
        "sitemap",
        "footer",
      ], // เพิ่มบรรทัดนี้
    });
  return i18nInstance;
};

export async function useTranslation(lng) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}
