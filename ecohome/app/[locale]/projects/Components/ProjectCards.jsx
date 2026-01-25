"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 9;
  const t = useTranslations('projects');

  // جلب المنتجات من API
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");
      if (!res.ok) throw new Error("فشل في جلب المنتجات");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء جلب المنتجات");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // حساب المنتجات المعروضة حسب الصفحة
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = products.slice(start, end);

  if (products.length === 0)
    return <p className="text-center text-gray-500 mt-10">{t('no_products')}</p>;

  return (
    <div className="w-full">
      {/* المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-6 p-5">
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-all duration-150 hover:shadow-md max-w-[300px]"
          >
            {/* صور المنتج */}
            {product.images?.[0] && (
              <img
                className="rounded-t-lg w-full h-56 object-cover"
                src={product.images[0]}
                alt={product.name}
              />
            )}

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#474747]">
                {product.name}
              </h5>

              <p className="mb-1 font-semibold text-gray-700">{t('price')}: {product.price} $</p>
              <p className="mb-1 font-semibold text-gray-700">{t('category')}: {product.category}</p>
              <p className="mb-1 text-gray-600">
                {t('size')}: {product.size} {t('sqm')} | {t('rooms')}: {product.rooms} | {t('baths')}: {product.baths}
              </p>

              <p className="mb-3 font-normal text-gray-700 line-clamp-2">{product.description}</p>

              {/* زر عرض التفاصيل */}
              <Link
                key={product._id}
                onClick={()=> setLoadingId(product._id)}
                href={`/models/${product._id}`}
                className="mt-4 inline-block bg-[#C09059] text-white px-4 py-2 rounded"
              >
                {loadingId === product._id ? t('loading') : t('details')}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التنقل */}
      <div className="flex justify-center gap-4 py-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          {t('prev')}
        </button>

        <span className="px-3 py-2">
          {t('page')} {page} {t('of')} {Math.ceil(products.length / limit)}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={end >= products.length}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
