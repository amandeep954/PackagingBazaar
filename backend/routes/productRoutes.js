import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  getTopSellingProducts,
} from "../controllers/productController.js";

router.get("/products", getAllProducts);
router.get("/products/top-selling", getTopSellingProducts);
router.get("/products/:id", getProductById);


export default router;
