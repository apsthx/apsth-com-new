// import { cookies } from "next/headers";
import { useTranslation } from "@/app/i18n";
import NavClient from "./NavClient";
import { ourServices, ourCustomers, documents } from "@/data/menu";

export default async function Nav({ color = "#fab758", lng }) {
  // const cookieLng = await cookies().get("lng")?.value;
  // const finalLng = lng || cookieLng || "th";

  const { t } = await useTranslation(lng);
  // แปลงข้อมูล Services โดยเอา Key จาก label มาแปลภาษา
  const translatedServices = ourServices.map((service) => ({
    ...service,
    // t(service.label) จะไปดึงค่าจาก nav.json -> services -> clinic_software
    label: t(service.label),
  }));

  const translatedDocument = documents.map((document) => ({
    ...document,
    // t(service.label) จะไปดึงค่าจาก nav.json -> services -> clinic_software
    label: t(document.label),
    sub: t(document.sub),
  }));

  const translatedCustomers = ourCustomers.map((customer) => ({
    ...customer,
    // t(service.label) จะไปดึงค่าจาก nav.json -> services -> clinic_software
    label: t(customer.label),
    sub: t(customer.sub),
  }));

  return (
    <NavClient
      color={color}
      locale={lng}
      labels={{
        our_services: t("nav:our_services", "บริการของเรา"),
        our_customers: t("nav:our_customers", "ลูกค้าของเรา"),
        priicing: t("nav:priicing", "ราคา"),
        docs: t("nav:docs", "เอกสาร"),
        contact_us: t("nav:contact_us", "ติดต่อเรา"),
        login: t("nav:login", "เข้าสู่ระบบ"),
        free_trial: t("nav:free_trial", "สมัครใช้งาน"),
        free: t("nav:free", "ฟรี"),
        services: translatedServices,
        customers: translatedCustomers,
        documents: translatedDocument,
      }}
      badges={{ new: t("new", "New") }}
    />
  );
}
