const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("Add Product Page Requested");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("Add Product POST Request Triggered");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
