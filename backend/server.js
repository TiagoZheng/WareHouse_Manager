import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows us to accept JSON data in the req.body

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.barcode) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    conseole.error(`Error in Creating product: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started");
});
