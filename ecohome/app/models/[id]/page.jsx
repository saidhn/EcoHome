import NavBar from '@/app/Components/Navbar';
import Footer from '@/app/Components/footer';
import { connectDB } from '../../../lib/mongodb';
import Product from '../../models/Product';
import ClientSlider from './Components/slider-client';
import VideoModal from './Components/VideoToggle'; // استدعاء الزر الجديد

const ModelDetail = async ({ params }) => {
  const { id } = await params;
  await connectDB();

  const product = await Product.findById(id).lean();
  if (!product) return <p className="text-center mt-10">المنتج غير موجود</p>;

  return (
    <>
      <NavBar />

      <div className="p-8 space-y-8">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <ClientSlider images={product.images} name={product.name} />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold text-[#474747]">{product.name}</h1>
            <p className="text-gray-500 text-lg">المساحة: {product.size} م²</p>
            <p className="text-gray-700 text-xl leading-relaxed">{product.description}</p>
            <p className="text-gray-700">الغرف: {product.rooms} | الحمامات: {product.baths}</p>
            <p className="text-gray-700">الصنف: {product.category}</p>

            <div className="mt-3 p-4 bg-gray-50 rounded-lg shadow-inner text-center">
              <h3 className="text-[#474747] font-bold text-2xl">تبدأ الأسعار من :</h3>
              <p className="text-[#C09059] font-bold text-3xl mt-1">
                {product.price}<span className="text-[#474747] text-2xl"> $</span>
              </p>
            </div>

            {/* زر الفيديو */}
            <VideoModal videoUrl={product.video} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ModelDetail;
