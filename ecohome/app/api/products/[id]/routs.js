import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// 🔵 GET - عرض منتج محدد (اختياري)
export async function GET(req, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return Response.json(product);
}

// 🟣 PUT - تعديل منتج
export async function PUT(req, { params }) {
  await connectDB();
  const data = await req.json();
  const updated = await Product.findByIdAndUpdate(params.id, data, { new: true });
  return Response.json(updated);
}

// 🔴 DELETE - حذف منتج
export async function DELETE(req, { params }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return Response.json({ message: "Deleted Successfully" });
}
