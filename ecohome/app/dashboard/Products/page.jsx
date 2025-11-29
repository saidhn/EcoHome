"use client";
import { useState, useEffect } from "react";

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    images: [],
    video: null,
    description: "",
    size: "",
    rooms: "",
    baths: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, images: files });
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({ ...product, video: null }); // video file input جديد
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedVideo = form.video; // في حال لم يتم رفع جديد

      // رفع الفيديو إذا تم اختيار ملف جديد
      if (form.video && typeof form.video !== "string") {
        const videoData = new FormData();
        videoData.append("file", form.video);
        videoData.append("upload_preset", "products_upload");

        const videoRes = await fetch(
          `https://api.cloudinary.com/v1_1/do1j98mlk/video/upload`,
          { method: "POST", body: videoData }
        );
        const videoJson = await videoRes.json();
        uploadedVideo = videoJson.secure_url;
      }

      const uploadedImages = [];
      for (const file of form.images) {
        if (typeof file === "string") {
          uploadedImages.push(file); // إذا صورة موجودة مسبقاً
        } else {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "products_upload");
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/do1j98mlk/image/upload`,
            { method: "POST", body: formData }
          );
          const data = await res.json();
          uploadedImages.push(data.secure_url);
        }
      }

      const productData = { ...form, images: uploadedImages, video: uploadedVideo };
      const method = editingId ? "PATCH" : "POST";

      const apiRes = await fetch("/api/product", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingId ? { id: editingId, ...productData } : productData),
      });

      if (apiRes.ok) {
        setForm({
          name: "",
          price: "",
          category: "",
          images: [],
          video: null,
          description: "",
          size: "",
          rooms: "",
          baths: "",
        });
        setEditingId(null);
        fetchProducts();
      } else alert("فشل العملية");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد من حذف المنتج؟")) return;
    await fetch("/api/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إدارة المنتجات</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {editingId ? "تعديل المنتج" : "إضافة منتج جديد"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="name" placeholder="اسم المنتج" value={form.name} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="price" type="number" placeholder="السعر" value={form.price} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="category" placeholder="الصنف" value={form.category} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="size" type="number" placeholder="المساحة" value={form.size} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="rooms" type="number" placeholder="عدد الغرف" value={form.rooms} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="baths" type="number" placeholder="عدد الحمامات" value={form.baths} onChange={handleChange} className="border p-3 rounded-lg" />
        </div>

        <textarea name="description" placeholder="الوصف" value={form.description} onChange={handleChange} className="border p-3 rounded-lg w-full"></textarea>

        <input type="file" multiple onChange={handleImagesChange} className="border p-3 rounded-lg w-full" />
        <input type="file" accept="video/*" onChange={(e) => setForm({ ...form, video: e.target.files[0] })} className="border p-3 rounded-lg w-full" />

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">
          {editingId ? "تعديل المنتج" : "إضافة المنتج"}
        </button>
      </form>

      <div className="overflow-x-auto overflow-y-auto max-h-[500px] shadow rounded-lg bg-white mt-6">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">الاسم</th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">الفيديو الدعائي</th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">السعر</th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">الصنف</th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">الصور</th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium">إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="text-center border-t hover:bg-gray-50">
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">
                  {p.video ? (
                    <a href={p.video} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      مشاهدة الفيديو
                    </a>
                  ) : (
                    "لا يوجد"
                  )}
                </td>
                <td className="py-2 px-4">{p.price}</td>
                <td className="py-2 px-4">{p.category}</td>
                <td className="py-2 px-4">
                  {p.images?.map((img, i) => (
                    <img key={i} src={img} className="w-16 h-16 object-cover inline-block mx-1 rounded border" />
                  ))}
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-3 py-1 rounded">تعديل</button>
                  <button onClick={() => handleDelete(p._id)} className="bg-red-500 text-white px-3 py-1 rounded">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsDashboard;
