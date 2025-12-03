import { connectDB } from "@/lib/mongodb";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const product = await Product.findById(params.id);
  return NextResponse.json(product || {}, { status: 200 });
}

export async function PUT(req, { params }) {
  await connectDB();
  const data = await req.json();
  const updated = await Product.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted Successfully" }, { status: 200 });
}
