// api/product/[id].js
import { connectDB } from "@/lib/mongodb";
import Product from "../../../models/Product";

export async function GET(req, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return new Response(JSON.stringify(product || {}), { status: 200 });
}

export async function PUT(req, { params }) {
  await connectDB();
  const data = await req.json();
  const updated = await Product.findByIdAndUpdate(params.id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return new Response(JSON.stringify({ message: "Deleted Successfully" }), { status: 200 });
}
