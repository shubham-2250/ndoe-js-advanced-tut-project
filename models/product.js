const getDb = require("../utils/database").getDb;
class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    console.log("Entered Save");
    console.log(this);
    const db = getDb();
    return db.collection("products").insertOne(this);
  }
}

module.exports = Product;
