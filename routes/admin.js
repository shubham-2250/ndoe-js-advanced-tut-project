const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const productController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProducts);

module.exports = router;
