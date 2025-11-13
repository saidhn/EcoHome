// app/models/[id]/page.jsx
import NavBar from '@/app/Components/Navbar';
import Footer from '@/app/Components/footer';
import {connectDB} from '../../../lib/mongodb'; // دالة الاتصال بالـ MongoDB
import Product from '../../models/Product'; // موديل Mongoose للمنتجات

const ModelDetail = async ({ params }) => {
  const { id } = await params; // id المنتج من الرابط
  await connectDB(); // نتأكد من الاتصال بالقاعدة

  // جلب المنتج من MongoDB
  const product = await Product.findById(id).lean(); // lean() لجعل الناتج object عادي

  if (!product) return <p className="text-center mt-10">المنتج غير موجود</p>;

  return (
    <>
      <NavBar />
      <div className="p-8 space-y-8">
        {/* البنر */}
        <div className="w-full">
          <img
            src={product.images?.[0]} // صورة واحدة كبنر
            alt={product.name}
            className="w-full h-96 md:h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* النص والسعر تحت البنر */}
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="w-full md:w-2/3 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold text-[#474747]">{product.name}</h1>
            <p className="text-gray-500 text-lg">المساحة: {product.size} م²</p>
            <p className="text-gray-700 text-xl">{product.description}</p>
            <p className="text-gray-700">الغرف: {product.rooms} | الحمامات: {product.baths}</p>
            <p className="text-gray-700">الصنف: {product.category}</p>
          </div>

          <div className="w-full md:w-1/3 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-[#474747] font-bold text-3xl">تبدأ الأسعار من :</h3>
              <p className="text-[#C09059] font-bold text-3xl mt-2">
                {product.price} <span className="text-[#474747] font-bold text-3xl">$</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModelDetail;
