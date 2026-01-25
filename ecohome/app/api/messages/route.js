import { connectDB } from "../../../lib/mongodb";
import Message from "../../models/messages";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const messages = await Message.find();
  return NextResponse.json(messages); // تأكد من هذا السطر
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Message.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newMessage = await Message.create(data);
    console.log("✅ Message saved:", newMessage);
    return NextResponse.json(newMessage, { status: 201 });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
