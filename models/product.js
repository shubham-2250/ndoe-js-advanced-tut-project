const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const getProductsFromFile = (cb) => {
  const p = path.join(rootDir, "data", "products.json");
  let products = [];
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      products = JSON.parse(fileContent);
      return cb(products, p);
    }
    return cb([], p);
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products, p) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), { flag: "w" }, (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
