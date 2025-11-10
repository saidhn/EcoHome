'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

 const DashboardPage() => {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin");
    if (!loggedIn) router.push("/"); // توجيه المستخدم العادي
  }, []);

  return (
    <div>
      <h1>لوحة التحكم</h1>
    </div>
  );
}
export default DashboardPage
