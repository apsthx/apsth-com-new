import React from "react";

import Features from "@/components/services/homes/componemts/Features";
import PlatformHighlights from "@/components/services/homes/componemts/PlatformHighlights";
import Hero from "@/components/services/homes/componemts/Hero";
import WhyAPSX from "@/components/services/homes/componemts/WhyAPSX";
import Package from "@/components/services/homes/componemts/Package";
import OurCustomers from "@/components/services/homes/componemts/OurCustomers";
import Teams from "@/components/services/homes/componemts/Teams";
import Certification from "@/components/services/homes/componemts/Certification";
import Questions from "@/components/services/homes/componemts/Questions";

import { useTranslation } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return {
    title: t("metadata:home.meta.title"),
    description: t("metadata:home.meta.description"),
  };
}

export default async function HomePage({ params }) {
  const { lng } = await params;
  return (
    <>
      <div className="color-grape font-space demo30 ">
        {/* className="!bg-[#f0f0f8]" */}
        <div>
          <div className="grow shrink-0">
            <section className="wrapper overflow-hidden">
              <Hero lng={lng} />
              {/* /.container */}
              <Features lng={lng} />
              <PlatformHighlights lng={lng} />
              <WhyAPSX lng={lng} />
              <Package lng={lng} />
              <OurCustomers lng={lng} />
              <Teams lng={lng} />
              <Certification lng={lng} />
              <Questions lng={lng} />
              {/* /.container */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
