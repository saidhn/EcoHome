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
    description: "",
    size: "",
    rooms: "",
    baths: "",
  });

  const [loading, setLoading] = useState(false);

  // جلب المنتجات من API
  const fetchProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // التعامل مع الفورم
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setForm({ ...form, images: urls });
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      images: product.images,
      description: product.description,
      size: product.size,
      rooms: product.rooms,
      baths: product.baths,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const method = editingId ? "PATCH" : "POST";
      const bodyData = editingId ? { id: editingId, ...form } : form;

      const res = await fetch("/api/product", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (res.ok) {
        setForm({
          name: "",
          price: "",
          category: "",
          images: [],
          description: "",
          size: "",
          rooms: "",
          baths: "",
        });
        setEditingId(null);
        fetchProducts();
      } else {
        alert("فشل العملية");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  // حذف منتج
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

      {/* فورم الإضافة / التعديل */}
      <form onSubmit={handleSubmit} className="border p-4 rounded mb-6 space-y-4 bg-white shadow">
        <input name="name" placeholder="اسم المنتج" value={form.name} onChange={handleChange} className="border p-2 rounded w-full" />
        <input name="price" placeholder="السعر" value={form.price} onChange={handleChange} className="border p-2 rounded w-full" type="number" />
        <input name="category" placeholder="الصنف" value={form.category} onChange={handleChange} className="border p-2 rounded w-full" />
        <textarea name="description" placeholder="الوصف" value={form.description} onChange={handleChange} className="border p-2 rounded w-full"></textarea>
        <input name="size" placeholder="المساحة" value={form.size} onChange={handleChange} className="border p-2 rounded w-full" type="number" />
        <input name="rooms" placeholder="عدد الغرف" value={form.rooms} onChange={handleChange} className="border p-2 rounded w-full" type="number" />
        <input name="baths" placeholder="عدد الحمامات" value={form.baths} onChange={handleChange} className="border p-2 rounded w-full" type="number" />
        <input type="file" multiple onChange={handleImagesChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? "تعديل المنتج" : "إضافة المنتج"}
        </button>
      </form>

      {/* جدول المنتجات */}
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">الاسم</th>
            <th className="py-2 px-4">السعر</th>
            <th className="py-2 px-4">الصنف</th>
            <th className="py-2 px-4">الصور</th>
            <th className="py-2 px-4">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="text-center border-t">
              <td className="py-2 px-4">{p.name}</td>
              <td className="py-2 px-4">{p.price}</td>
              <td className="py-2 px-4">{p.category}</td>
              <td className="py-2 px-4">
                {p.images?.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-16 h-16 object-cover inline-block mx-1" />
                ))}
              </td>
              <td className="py-2 px-4 space-x-1">
                <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-2 py-1 rounded">تعديل</button>
                <button onClick={() => handleDelete(p._id)} className="bg-red-500 text-white px-2 py-1 rounded">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsDashboard;
