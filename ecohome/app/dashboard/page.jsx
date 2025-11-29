"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">لوحة التحكم</h2>

      {/* روابط التابات */}
      <div className="flex space-x-4 mb-6">
        <Link
          href="/dashboard/Products"
          className={`px-4 py-2 rounded ${
            pathname === "/dashboard/products" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"
          }`}
        >
          Products
        </Link>
        <Link
          href="/dashboard/messages"
          className={`px-4 py-2 rounded ${
            pathname === "/dashboard/messages" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"
          }`}
        >
          Messages
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
