"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/footer";

const ContactUs = () => {
     const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return "الاسم مطلوب";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "البريد غير صالح";
    if (!form.message.trim()) return "الرسالة فارغة";
    return null;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const error = validateForm();
  if (error) return alert(error);

  setLoading(true);
  try {
    const res = await fetch("/app/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("✅ تم إرسال الرسالة بنجاح!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert("❌ فشل في إرسال الرسالة، حاول مرة أخرى.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ حدث خطأ أثناء الإرسال.");
  } finally {
    setLoading(false);
  }
};


    return (
        <>
            <NavBar />
            <section>
                <div className="text-center bg-[#EEEAE2] py-5">
                    <h2 className="font-bold py-5 text-[#474747] text-3xl"> تواصل معنا </h2>
                    <p className="text-center text-[#606060] mb-5">
                        هل أنت مستعد لبدء رحلتك نحو حياة مستدامة؟ يسعدنا التواصل معك.
                    </p>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row gap-8 my-10">
                    {/* القسم الأول - الفورم */}
                    <div className="md:w-2/3 px-3 flex">
                        <form onSubmit={handleSubmit} className="bg-white border border-[#707070] p-6 rounded-xl shadow-md w-full flex flex-col justify-between space-y-4">
                            <h3 className="text-[#C09059] font-bold text-2xl mb-2">أطلب عرض أسعار</h3>

                            {/* الصف الأول */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex flex-col flex-1 min-w-[200px]">
                                    <label htmlFor="name" className="mb-1 text-gray-700 font-medium">
                                        الاسم الكامل
                                    </label>
                                    <input
                                        placeholder="الاسم"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 min-w-[200px]">
                                    <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                                        البريد الالكتروني
                                    </label>
                                    <input
                                        placeholder="البريد"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                </div>
                            </div>

                            {/* الصف الثاني */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex flex-col flex-1 min-w-[200px]">
                                    <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">
                                        رقم الهاتف
                                    </label>
                                    <input
                                        placeholder="رقم الهاتف"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        type="number"
                                        className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 min-w-[200px]">
                                    <label htmlFor="subject" className="mb-1 text-gray-700 font-medium">
                                        الموضوع
                                    </label>
                                    <input
                                        placeholder="الموضوع"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        type="text"
                                        className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                </div>
                            </div>

                            {/* الرسالة */}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="mb-1 text-gray-700 font-medium">
                                    الرسالة
                                </label>
                                <textarea
                                name="message"
                                    value={form.message}
                                        onChange={handleChange}
                                    placeholder="اكتب رسالتك هنا..."
                                    className="border border-[#707070] bg-[#EEEAE2] rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                                ></textarea>
                            </div>

                            {/* الزر */}
                            <button
                                type="submit" 
                                className="bg-[#C09059] text-white font-bold px-10 py-2 shadow-md cursor-pointer rounded-md hover:bg-[#ddac73] transition self-start"
                            >
                                إرسال
                            </button>
                        </form>
                    </div>

                    {/* القسم الثاني - كارت المعلومات */}
                    <div className="md:w-1/3 px-3 flex">
                        <div className="bg-white border border-[#707070] p-6 rounded-xl shadow-md w-full flex flex-col justify-center space-y-6">
                            {/* الموقع */}
                            <div className="flex gap-3 items-start">
                                <MapPin className="text-[#C09059]" size={36} />
                                <div>
                                    <h3 className="font-bold text-[#707070] text-xl">موقعنا</h3>
                                    <p className="text-[#707070] leading-snug">
                                        غزة - النصر - الشارع الثاني بجوار شركة الإتصالات
                                    </p>
                                </div>
                            </div>

                            {/* الاتصال */}
                            <div className="flex gap-3 items-start">
                                <Phone className="text-[#C09059]" size={36} />
                                <div>
                                    <h3 className="font-bold text-[#707070] text-xl">اتصال</h3>
                                    <p className="text-[#707070]">+972598700073</p>
                                    <p className="text-[#707070]">+972 59-753-9554</p>
                                </div>
                            </div>

                            {/* الإيميل */}
                            <div className="flex gap-3 items-start">
                                <Mail className="text-[#C09059]" size={36} />
                                <div>
                                    <h3 className="font-bold text-[#707070] text-xl">الإيميل</h3>
                                    <p className="text-[#707070]">baselher@gmail.com</p>
                                    <p className="text-[#707070]">info@ecohomes.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default ContactUs;
