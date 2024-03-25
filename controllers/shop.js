const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  products = Product.fetchAll((products) => {
    console.log("shop.js\n", products);
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll((products) => {
    console.log("shop.js\n", products);
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log("prodId", prodId);
  Product.findById(prodId, (product) => {
    console.log("productDetail", product);
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log("productDetail", prodId);
  res.redirect("/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};
