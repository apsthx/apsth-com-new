import React from "react";

import Hero from "@/components/services/customer/components/Hero";
import OurCustomersGroups from "@/components/services/customer/components/OurCustomersGroups";

import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return {
    title: t("metadata:home.meta.title"),
    description: t("metadata:home.meta.description"),
  };
}

export default async function CustomerPage({ params }) {
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
              <OurCustomersGroups />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
