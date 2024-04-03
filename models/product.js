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
  constructor(id, title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  save() {
    getProductsFromFile((products, p) => {
      if (this.id) {
        const index = products.findIndex((item) => item.id === this.id);
        products[index] = { ...this };
      } else {
        this.id = Math.random().toString();
        products.push(this);
      }

      fs.writeFile(p, JSON.stringify(products), { flag: "w" }, (err) => {
        console.log(err);
      });
    });
  }

  remove() {
    getProductsFromFile((products, p) => {
      products.delete((item) => this.id !== item.id);
      fs.writeFile(p, JSON.stringify(products), { flag: "w" }, (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
  static deleteById(id, cb) {
    getProductsFromFile((products, p) => {
      products = products.filter((p) => p.id !== id);
      fs.writeFile(p, JSON.stringify(products), { flag: "w" }, (err) => {
        console.log(err);
        cb();
      });
    });
  }
};
