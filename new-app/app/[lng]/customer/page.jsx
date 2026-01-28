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
    <main className="bg-white min-h-screen">
      {/* 1. ส่วนของ Background ตกแต่งด้านหลัง (Optional: สร้าง Gradient จางๆ) */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] opacity-20 pointer-events-none" />

        {/* 2. เนื้อหาหลัก */}
        <div className="relative z-10">
          <section className="wrapper">
            {/* ปรับระยะห่างให้ Hero ดูเด่นขึ้น */}
            <div className="">
              <Hero lng={lng} />
            </div>

            {/* ส่วนรอยต่อระหว่าง Hero กับ Groups */}
            <div className="pb-16 md:pb-24">
              <OurCustomersGroups />
            </div>
          </section>
        </div>

        {/* 3. ส่วนท้ายหน้า (เพิ่มลูกเล่นเส้นสาย) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B7B8]/10 to-transparent" />
      </div>
    </main>
  );
}
