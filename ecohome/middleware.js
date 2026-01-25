// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // السماح بصفحة تسجيل الدخول
  if (pathname === "/dashboard/login") {
    return NextResponse.next();
  }

  // حماية صفحات dashboard
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("dashboard_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    // لا تستخدم jwt.verify هنا، فقط وجود التوكن يكفي
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
