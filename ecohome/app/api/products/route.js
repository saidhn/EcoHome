import { connectDB } from "@/lib/mongodb";
import Product from "../../models/Product"

// 🟢 GET - عرض كل المنتجات
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

// 🟠 POST - إضافة منتج
export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const product = await Product.create(data);
  return Response.json(product);
}