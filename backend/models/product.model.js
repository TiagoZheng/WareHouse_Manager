import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    barcode: {
      type: Number,
      required: true,
    },

    img: {
      type: String,
    },

    location: {
      type: String,
    },

    categoty: {
      type: String,
    },

    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
