const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const productController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", productController.getAddProduct);

router.get("/edit-product", productController.getEditProducts);

router.post("/add-product", productController.postAddProducts);

router.get("/products", productController.getProducts);

module.exports = router;
