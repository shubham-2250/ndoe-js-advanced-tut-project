const express = require("express");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const pageNotFoundRoutes = require("./routes/page-not-found");
const sequelize = require("./utils/database");
const path = require("path");
const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

//registering routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(pageNotFoundRoutes);

sequelize
  .sync()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.listen(8000);
// const server = http.createServer(app);

// server.listen(8000);
