import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String,
    images: [String],
    description: String,
    size: Number,
    rooms: Number,
    baths: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
