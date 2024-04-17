const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    editing: false,
    path: "/admin/add-product",
  });
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  product.save().then((cd) => {
    console.log(cd);
    console.log("Created Product");
    res.redirect("/admin/products");
  });
};

exports.postEditProducts = (req, res, next) => {
  Product.findByPk(req.body.productId)
    .then((product) => {
      product.title = req.body.title;
      product.imageUrl = req.body.imageUrl;
      product.description = req.body.description;
      product.price = req.body.price;
      return product.save();
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  Product.findByPk(req.body.productId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditProducts = (req, res, next) => {
  const editMode = req.query.edit === "true";
  const prodID = req.params.productId;
  req.user
    .getProducts({ where: { id: prodID } })
    .then((products) => {
      const product = products[0];
      res.render("admin/edit-product", {
        pageTitle: "All Products",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};
