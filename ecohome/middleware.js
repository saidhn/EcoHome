import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // حماية جميع صفحات dashboard ما عدا login
  if (pathname.startsWith("/dashboard") && pathname !== "/dashboard/login") {
    const token = req.cookies.get("dashboard_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    try {
      jwt.verify(token, SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
