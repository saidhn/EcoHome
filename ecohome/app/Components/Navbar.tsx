import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap shadow-md items-center justify-around p-4 bg-gray-100">
      <div>
        <h3 className="text-xl font-bold text-[#C09059]">EcoHome</h3>
      </div>
      <div className="flex gap-6 text-[#C09059]">
        <Link href="/contact" className="hover:text-[#ddac73] transition-colors duration-200">تواصل</Link>
        <Link href="/about" className="hover:text-[#ddac73] transition-colors duration-200">عنا</Link>
        <Link href="#" className="hover:text-[#ddac73] transition-colors duration-200">خدماتنا</Link>
        <Link href="#" className="hover:text-[#ddac73] transition-colors duration-200">مشاريعنا</Link>
        <Link href="/" className="hover:text-[#ddac73] transition-colors duration-200">الرئيسية</Link>
      </div>
      <div>
        <button className="bg-[#C09059] hover:bg-[#ddac73] text-white px-4 py-2 rounded-lg transition-colors duration-200">
          عرض سعر
        </button>
      </div>
    </nav> 
  )
}

export default NavBar;
