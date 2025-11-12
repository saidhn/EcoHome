import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  const { username, password } = await req.json();

  // ✅ مثال بسيط للتحقق
  if (username === "Basel" && password === "Basel@32") {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
    const res = NextResponse.json({ message: "تم تسجيل الدخول" });
    // إضافة cookie
    res.cookies.set("dashboard_token", token, { httpOnly: true, path: "/" });
    return res;
  }

  return NextResponse.json({ message: "خطأ في تسجيل الدخول" }, { status: 401 });
}
