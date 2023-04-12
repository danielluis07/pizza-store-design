import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlenght: 60,
    },
    address: {
      type: String,
      required: true,
      maxlenght: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", ProductSchema);
