"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/dashboard/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push("/dashboard"); // تحويل للداشبورد بعد تسجيل الدخول
    } else {
      alert("اسم المستخدم أو كلمة المرور خطأ");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded space-y-4">
        <input name="username" placeholder="اسم المستخدم" value={form.username} onChange={handleChange} className="border p-2 rounded w-full" />
        <input name="password" type="password" placeholder="كلمة المرور" value={form.password} onChange={handleChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">تسجيل الدخول</button>
      </form>
    </div>
  );
};

export default LoginPage;
