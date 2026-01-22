// // middleware.js
// import { NextResponse } from "next/server";

// let locales = ["th", "en"]; // ภาษาที่รองรับ
// let defaultLocale = "th"; // ภาษาเริ่มต้น

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // 1. ตรวจสอบว่า URL มีภาษา (th/en) นำหน้าหรือยัง
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
//   );

//   if (pathnameHasLocale) return;

//   // 2. ถ้าไม่มีภาษา (เช่นอยู่ที่ / เฉยๆ) ให้ Redirect ไปที่ภาษาเริ่มต้น
//   request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   // กรองเฉพาะหน้าที่ต้องการทำ Redirect (ไม่รวมไฟล์รูปภาพ, api, _next)
//   matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
// };

// import { NextResponse } from "next/server";

// const locales = ["th", "en"];
// const defaultLocale = "th";

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // ข้ามไฟล์ระบบ
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.includes(".")
//   ) {
//     return NextResponse.next();
//   }

//   const pathnameHasLocale = locales.some(
//     (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
//   );

//   // ❌ ไม่มี locale → redirect
//   if (!pathnameHasLocale) {
//     const url = request.nextUrl.clone();
//     url.pathname = `/${defaultLocale}${pathname}`;
//     return NextResponse.redirect(url);
//   }

//   // ✅ มี locale → set cookie
//   const lng = pathname.split("/")[1];

//   const response = NextResponse.next();
//   response.cookies.set("lng", lng, {
//     path: "/",
//     sameSite: "lax",
//   });

//   return response;
// }

// export const config = {
//   matcher: ["/((?!_next|api|assets|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";

const locales = ["th", "en"]; // ✅ ต้องประกาศ
const defaultLocale = "th";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ข้ามไฟล์ระบบ
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  // ❌ ถ้า segment แรกไม่ใช่ locale → ปล่อยให้ App Router จัดการ (404)
  if (firstSegment && !locales.includes(firstSegment)) {
    return NextResponse.next();
  }

  // ❌ ไม่มี locale เลย → redirect
  if (!firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // ✅ มี locale → set cookie
  const lng = firstSegment;
  const response = NextResponse.next();
  response.cookies.set("lng", lng, {
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|assets|favicon.ico).*)"],
};
