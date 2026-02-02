import React from "react";
import { getApsxPartners } from "@/data/features";
import { useTranslation } from "@/app/i18n";
import CardGrid from "./common/CardGrid";

export default async function PartnerItems({ lng }) {
  const { t } = await useTranslation(lng);
  const partnersData = getApsxPartners(t);
  return (
    <div className="container flex flex-wrap mx-[-15px] !mt-[-30px]">
      <CardGrid
        partners={partnersData}
        readMoreText={t("home:read_more", "ดูรายละเอียด")}
        comingSoonText={t("home:coming_soon", "เร็วๆ นี้")}
      />
    </div>
  );
}
