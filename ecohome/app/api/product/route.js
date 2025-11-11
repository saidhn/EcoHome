// api/product/route.js
import { connectDB } from "@/lib/mongodb";
import Product from "../../models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const product = await Product.create(data);
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
