const rootDir = require("../utils/path");
const Cart = require("./cart");
const db = require("../utils/database");

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

  save() {}

  remove() {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById() {}
  static deleteById() {}
};
