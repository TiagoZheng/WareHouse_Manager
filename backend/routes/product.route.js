import express from "express";
import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updatedProduct);

export default router;
