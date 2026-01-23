import React from "react";

import Testimonials from "@/components/services/homes/componemts/Testimonials";
import Banner from "@/components/services/homes/componemts/Banner";
import Demos from "@/components/services/homes/componemts/Demos";
import Features from "@/components/services/homes/componemts/Features";
import PlatformHighlights from "@/components/services/homes/componemts/PlatformHighlights";
import Hero from "@/components/services/homes/componemts/Hero";
import Pricing from "@/components/services/homes/componemts/Pricing";
import Process from "@/components/services/homes/componemts/Process";
import Services from "@/components/services/homes/componemts/Services";

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
              <Demos />
              {/* /.container */}
              <Services />
              {/* /.container */}
            </section>
            {/* /section */}
            <Process />
            {/* /section */}
            {/* /section */}
            <Banner />
            {/* /section */}
            <section className="overflow-hidden">
              <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-40 xl:pb-60 lg:pb-60 md:pb-60">
                <Testimonials />
                {/*/.row */}
                <Pricing />
                {/*/.row */}
              </div>
              {/* /.container */}
            </section>
            {/* /section */}
          </div>
        </div>
      </div>
    </>
  );
}
