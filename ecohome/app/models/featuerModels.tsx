import Link from "next/link";
import { models } from "../db/db";

const FeaturedModels = () => {
  const featured = models.slice(0, 3); // عرض أول 3 نماذج فقط

  return (
    <section className="py-12 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-4  text-[#474747]">نماذج مميزة</h2>
      <p className="text-center text-gray-600 mb-8">
        اكتشف تصاميم منازلنا الجاهزة الأكثر شعبية، والتي تم تصميم كل منها باهتمام بالتفاصيل والاستدامة.
      </p>

      <div className="grid md:grid-cols-3 gap-6 item-center justify-around">
        {featured.map((model) => (
          <div key={model.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
              <img
                src={model.image}
                alt={model.name}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-2 right-2 bg-[#6AAF81] text-white px-2 py-1 rounded text-sm">
                {model.price}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{model.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{model.size}</p>
              <p className="text-gray-700 text-sm">{model.description}</p>
              <Link
                href={`/models/${model.id}`} // رابط صفحة التفاصيل
                className="mt-4 inline-block bg-[#C09059] text-white px-4 py-2 rounded"
              >
                تفــاصـيـل
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/models"
          className="px-6 py-1 border border-gray-400 rounded hover:bg-gray-100"
        >
          استكشف المزيد
        </Link>
      </div>
    </section>
  );
};

export default FeaturedModels;
