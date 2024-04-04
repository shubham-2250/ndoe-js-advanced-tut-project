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
    null,
    req.body.title,
    req.body.imageURL,
    req.body.description,
    req.body.price
  );
  product
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProducts = (req, res, next) => {
  const productNew = new Product(
    req.body.productId,
    req.body.title,
    req.body.imageURL,
    req.body.description,
    req.body.price
  );

  productNew.save();
  res.redirect("/admin/products");
};

exports.postDeleteProduct = (req, res, next) => {
  Product.deleteById(req.body.productId, () => {
    res.redirect("/admin/products");
  });
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll()
    .then(([rows, f]) => {
      res.render("admin/products", {
        prods: rows,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditProducts = (req, res, next) => {
  const editMode = req.query.edit === "true";
  const prodID = req.params.productId;
  Product.findById(prodID, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "All Products",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};
