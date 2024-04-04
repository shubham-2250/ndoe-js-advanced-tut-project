const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const pageNotFoundRoutes = require("./routes/page-not-found");
const db = require("./utils/database");
const path = require("path");
const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//registering routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(pageNotFoundRoutes);

app.listen(8000);
// const server = http.createServer(app);

// server.listen(8000);
