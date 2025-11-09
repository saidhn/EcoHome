const Footer = () => {
  return (
    <footer className="bg-[#EEEAE2] text-gray-700 mt-5 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h4 className="font-bold mb-4">EcoHomes</h4>
          <p>منازل ذكية مستدامة وجاهزة للسكن</p>
        </div>

        
        <div>
          <h4 className="font-bold mb-4">الشركة</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C09059]">عن الشركة</a></li>
            <li><a href="#" className="hover:text-[#C09059]">منتجاتنا</a></li>
            <li><a href="#" className="hover:text-[#C09059]">المدونة</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold mb-4">دعم فني</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#C09059]">تواصل معنا</a></li>
            <li><a href="#" className="hover:text-[#C09059]">روابط سريعة</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-bold mb-4">تواصل معنا</h4>
          <p>شارع محمد يوسف، النصر - الشيخ رضوان</p>
          <p>+972 59-753-9554</p>
          <p>info@ecohomes.com</p>
        </div>
      </div>


      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 EcoHomes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
