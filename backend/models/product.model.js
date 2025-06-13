import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true } // <-- Correct way to enable timestamps
);

const Product = mongoose.model("Product", productSchema);

export default Product;
