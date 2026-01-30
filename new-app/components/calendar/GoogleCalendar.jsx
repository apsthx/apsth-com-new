import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function GoogleCalendar({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="snippet-2" className="wrapper !bg-[#ffffff] overflow-hidden">
      <div className="container pb-10 !text-center !relative !font-medium !text-[#464c58] !tracking-wide overflow-hidden">
        {/* --- Grid Background Layer --- */}
        <div
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{
            backgroundImage: `
                linear-gradient(to right, #00B7B8 1px, transparent 1px),
                linear-gradient(to bottom, #00B7B8 1px, transparent 1px)
              `,
            backgroundSize: "80px 80px", // ปรับขนาดช่องตารางที่นี่
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)", // ทำให้ขอบจางลง
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
        <div className="card !bg-white shadow-xl rounded-2xl overflow-hidden p-0 w-full max-w-[1000px] mx-auto min-h-[700px]">
          <iframe
            src="https://calendar.app.google/QRa7iq8wzxXzr9rc7?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
