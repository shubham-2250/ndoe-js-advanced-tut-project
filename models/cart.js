const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const getCart = (cb) => {
  const p = path.join(rootDir, "data", "cart.json");
  fs.readFile(p, (err, fileContent) => {
    let cart = { products: [], totalPrice: 0 };
    if (!err) {
      cart = JSON.parse(fileContent);
    }
    cb(cart, p);
  });
};

module.exports = class Cart {
  static addProduct(id, productPrice, cb) {
    getCart((cart, p) => {
      const exsistingProduc = cart.products.find((prod) => prod.id === id);
      let updatedProduct;
      if (exsistingProduc) {
        updatedProduct = { ...exsistingProduc };
        updatedProduct.qty = updatedProduct.qty + 1;
        const ind = cart.products.findIndex(
          (prod) => exsistingProduc.id == prod.id
        );
        cart.products[ind] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
        cb();
      });
    });
  }

  static deleteProduct(id, productPrice, cb) {
    getCart((cart, p) => {
      const indx = cart.products.findIndex((item) => item.id === id);
      if (indx != -1) {
        cart.totalPrice =
          cart.totalPrice - productPrice * cart.products[indx].qty;
        cart.products = cart.products.filter((item) => item.id !== id);

        fs.writeFile(p, JSON.stringify(cart), (err) => {
          console.log(err);
          cb();
        });
      }
    });
  }
};
