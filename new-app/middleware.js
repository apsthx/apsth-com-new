// middleware.js
import { NextResponse } from "next/server";

let locales = ["th", "en"]; // ภาษาที่รองรับ
let defaultLocale = "th"; // ภาษาเริ่มต้น

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. ตรวจสอบว่า URL มีภาษา (th/en) นำหน้าหรือยัง
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // 2. ถ้าไม่มีภาษา (เช่นอยู่ที่ / เฉยๆ) ให้ Redirect ไปที่ภาษาเริ่มต้น
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // กรองเฉพาะหน้าที่ต้องการทำ Redirect (ไม่รวมไฟล์รูปภาพ, api, _next)
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
