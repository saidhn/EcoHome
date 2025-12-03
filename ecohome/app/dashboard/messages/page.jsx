"use client";
import { useState, useEffect } from "react";

const MessagesDashboard = () => {
  const [messages, setMessages] = useState([]);

  // جلب الرسائل من MongoDB
  const fetchMessages = async () => {
    try {
      const res = await fetch("/app/api/messages");
      if (!res.ok) throw new Error("فشل في جلب الرسائل");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء جلب الرسائل");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // حذف رسالة
  const handleDelete = async (id) => {
    if (!confirm("هل تريد حذف الرسالة؟")) return;
    try {
      const res = await fetch("/app/api/messages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("فشل في حذف الرسالة");
      fetchMessages(); // تحديث الجدول
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الحذف");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">رسائل العملاء</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">لا توجد رسائل حالياً.</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">الاسم</th>
              <th className="py-2 px-4">البريد</th>
              <th className="py-2 px-4">الهاتف</th>
              <th className="py-2 px-4">الموضوع</th>
              <th className="py-2 px-4">الرسالة</th>
              <th className="py-2 px-4">حذف</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m._id} className="text-center border-t">
                <td className="py-2 px-4">{m.name}</td>
                <td className="py-2 px-4">{m.email}</td>
                <td className="py-2 px-4">{m.phone}</td>
                <td className="py-2 px-4">{m.subject}</td>
                <td className="py-2 px-4">{m.message}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(m._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MessagesDashboard;
