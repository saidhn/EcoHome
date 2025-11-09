// pages/models/[id]/page.js أو app/models/[id]/page.js
import NavBar from '@/app/Components/Navbar';
import { models } from '../../db/db'; // تأكد من المسار
import Footer from '@/app/Components/footer';

const ModelDetail = async ({ params }) => {
  const { id } = await params;
  const model = models.find((m) => m.id === Number(id));

  if (!model) return <p>النموذج غير موجود</p>;

  return (
    <>
      <NavBar />
      <div className="p-8 space-y-8">
  {/* البنر */}
  <div className="w-full">
    <img
      src={model.image}
      alt={model.name}
      className="w-full h-96 md:h-[300px] object-cover rounded-lg shadow-md"
    />
  </div>

  {/* النص والسعر تحت البنر */}
  <div className="flex flex-col md:flex-row w-full gap-8">
    <div className="w-full md:w-2/3 flex flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold text-[#474747]">{model.name}</h1>
      <p className="text-gray-500 text-lg">المساحة: {model.size}</p>
      <p className="text-gray-700 text-xl">{model.description}</p>
    </div>

    <div className="w-full md:w-1/3 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-[#474747] font-bold text-3xl">تبدأ الأسعار من :</h3>
        <p className="text-[#C09059] font-bold text-3xl mt-2">
          {model.price} <span className="text-[#474747] font-bold text-3xl">$</span>
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
