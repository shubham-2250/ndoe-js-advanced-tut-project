const express = require("express");
const bodyParser = require("body-parser");
// const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const pageNotFoundRoutes = require("./routes/page-not-found");
const mongoConnect = require("./utils/database").mongoConnect;
const path = require("path");
const rootDir = require("./utils/path");
// const Product = require("./models/product");
// const User = require("./models/user");
// const Cart = require("./models/cart");
// const Order = require("./models/order");
// const CartItem = require("./models/cart-item");
// const OrderItem = require("./models/order-item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  // User.findByPk(1).then((user) => {
  //   User.findByPk(1).then((user) => {
  //     req.user = user;
  //     next();
  //   });
  // });
  next();
});

//registering routes
app.use("/admin", adminRoutes);
// app.use(shopRoutes);
app.use(pageNotFoundRoutes);

mongoConnect().then((client) => {
  console.log(client);
  app.listen(8000);
});

//relations in database
// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);

// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   .sync()
//   // .sync({ force: true })
//   .then((result) => {
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({
//         name: "Shubh",
//         email: "shubhamverma2250@gmail.com",
//       });
//     }
//     return user;
//   })
//   .then((user) => {
//     return user.getCart().then((cart) => {
//       if (!cart) {
//         return user.createCart();
//       }
//       return cart;
//     });
//   })
//   .then((cart) => {
//     app.listen(8000);
//   })
//   .catch((err) => console.log(err));
