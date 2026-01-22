// import { cookies } from "next/headers";
import { useTranslation } from "@/app/i18n";
import NavClient from "./NavClient";

export default async function Nav({ color = "#fab758", lng }) {
  // const cookieLng = await cookies().get("lng")?.value;
  // const finalLng = lng || cookieLng || "th";

  const { t } = await useTranslation(lng);

  return (
    <NavClient
      color={color}
      labels={{
        our_services: t("nav:our_services", "บริการของเรา"),
        our_customers: t("nav:our_customers", "ลูกค้าของเรา"),
        priicing: t("nav:priicing", "ราคา"),
        docs: t("nav:docs", "เอกสาร"),
        contact_us: t("nav:contact_us", "ติดต่อเรา"),
      }}
    />
  );
}
