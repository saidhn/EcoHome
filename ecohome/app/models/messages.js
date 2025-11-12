import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
});

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
