import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  images: [String],
  description: String,
  size: Number,
  rooms: Number,
  baths: Number,
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
