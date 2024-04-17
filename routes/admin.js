const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

// router.get("/edit-product/:productId", adminController.getEditProducts);

router.post("/add-product", adminController.postAddProducts);

// router.post("/edit-product/", adminController.postEditProducts);

// router.post("/delete-product/", adminController.postDeleteProduct);

// router.get("/products", adminController.getProducts);

module.exports = router;
