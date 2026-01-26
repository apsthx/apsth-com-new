// ❌ ไม่มี "use client"

// import "./globals.css";
import Providers from "./providers";
import MainFooter from "@/components/common/footers/MainFooter";
import MainHeader from "@/components/common/headers/MainHeader";
import { notFound } from "next/navigation";

const locales = ["th", "en"];
export default async function RootLayout({ children, params }) {
  const { lng } = await params;
  if (!locales.includes(lng)) {
    notFound();
  }

  return (
    <html lang={lng} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Anuphan:wght@300;400;500;600;700&family=Manrope:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className="bg-site-bg text-body-text transition-colors duration-300">
        <Providers>
          <MainHeader lng={lng} />

          {/* ส่วนเนื้อหาหลัก */}
          <main className="flex-grow">{children}</main>

          <div className="xl:pb-52 lg:pb-96 md:pb-96" />
          <MainFooter lng={lng} />

          {/* Spacer */}
        </Providers>
      </body>
    </html>
  );
}
