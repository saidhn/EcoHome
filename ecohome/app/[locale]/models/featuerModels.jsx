
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const FeaturedModels = () => {
  const [products, setProducts] = useState([]);
  const [loadingId, setLoadingId] = useState(null)
  const t = useTranslations('models');


  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="py-12 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-4  text-[#474747]">
        {t('featured_title')}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {t('featured_subtitle')}
      </p>

      <div className="grid md:grid-cols-3 gap-6 item-center justify-around">
        {products.slice(0, 3).map((model) => (
          <div key={model._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
              <img
                src={model.images?.[0]}
                alt={model.name}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-2 right-2 bg-[#6AAF81] text-white px-2 py-1 rounded text-sm">
                ${model.price}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">{model.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{model.size} {t('sqm')}</p>
              <p className="text-gray-700 text-sm line-clamp-2">{model.description}</p>

              <Link
                key={model._id}
                onClick={()=> setLoadingId(model._id)}
                href={`/models/${model._id}`}
                className="mt-4 inline-block bg-[#C09059] text-white px-4 py-2 rounded"
              >
                {loadingId === model._id ? t('loading') : t('details')}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/projects"
          className="px-6 py-1 border border-gray-400 rounded hover:bg-gray-100"
        >
          {t('explore_more')}
        </Link>
      </div>
    </section>
  );
};

export default FeaturedModels;
