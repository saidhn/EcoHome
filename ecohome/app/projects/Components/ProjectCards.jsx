"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 9;

  // جلب المنتجات من API
  const fetchProducts = async () => {
    try {
      const res = await fetch("/app/api/product");
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
    return <p className="text-center text-gray-500 mt-10">لا توجد منتجات حالياً.</p>;

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

              <p className="mb-1 font-semibold text-gray-700">السعر: {product.price} $</p>
              <p className="mb-1 font-semibold text-gray-700">الصنف: {product.category}</p>
              <p className="mb-1 text-gray-600">
                المساحة: {product.size} م² | الغرف: {product.rooms} | الحمامات: {product.baths}
              </p>

              <p className="mb-3 font-normal text-gray-700">{product.description}</p>

              {/* صور إضافية */}
              {/* {product.images?.length > 1 && (
                <div className="flex gap-2 flex-wrap mb-3">
                  {product.images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`img-${i}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              )} */}

              {/* زر عرض التفاصيل */}
              <Link
                href={`/models/${product._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                عرض التفاصيل
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
          السابق
        </button>

        <span className="px-3 py-2">
          صفحة {page} من {Math.ceil(products.length / limit)}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={end >= products.length}
          className="px-4 py-2 border rounded disabled:opacity-30"
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
