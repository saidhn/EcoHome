import { connectDB } from "../../../lib/mongodb";
import Product from "../../models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const product = await Product.create(data);
  return NextResponse.json(product);
}

export async function PUT(req) {
  await connectDB();
  const { _id, ...rest } = await req.json();
  const updated = await Product.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json(updated);
}
// ✅ إضافة PATCH لتعديل المنتج
export async function PATCH(req) {
  await connectDB();
  const { id, ...updateData } = await req.json();
  const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
  return NextResponse.json(updatedProduct);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
