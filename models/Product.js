// models/product.js

import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: { type: Number, required: true },
  images: [{ type: String }],
});

let Product;
//xxxxxxxxxxxxxxxx
try {
  Product = model("Product");
} catch (error) {
  Product = model("Product", ProductSchema);
}

export default Product;
