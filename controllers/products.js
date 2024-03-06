const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll((products) => {
    console.log("shop.js\n", products);
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
