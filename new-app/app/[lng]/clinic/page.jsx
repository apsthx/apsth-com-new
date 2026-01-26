import React from "react";

import PlatformHighlights from "@/components/services/homes/componemts/PlatformHighlights";
import Hero from "@/components/services/Clinics/components/Hero";
import WhyAPSX from "@/components/services/Clinics/components/WhyAPSX";

import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return {
    title: t("metadata:home.meta.title"),
    description: t("metadata:home.meta.description"),
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
