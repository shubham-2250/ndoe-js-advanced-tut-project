const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();
const products = [];
router.get("/add-product", (req, res, next) => {
  console.log("Add Product Page Requested");
  res.render("add-product", { pageTitle: "Add Product" });
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("Add Product POST Request Triggered");
  products.push(req.body);
  console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
