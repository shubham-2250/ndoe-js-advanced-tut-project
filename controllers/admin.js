const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.imageURL,
    req.body.description,
    req.body.price
  );
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.getEditProducts = (req, res, next) => {
  res.render("admin/edit-products", {
    prods: products,
    pageTitle: "All Products",
    path: "/admin/edit-products",
  });
};
