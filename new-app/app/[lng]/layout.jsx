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
     <html lang={lng}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Anuphan:wght@300;400;500;600;700&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet"></link>
      
      </head>

      <body>
        <Providers>
          <MainHeader lng = {lng}/>
          {children}
          <MainFooter /> 
          <div className="xl:pb-6 lg:pb-6 md:pb-6" />
        </Providers>
      </body>
    </html>
   
  );
}
