const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");
const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use("/", (req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
  //   res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(8000);
// const server = http.createServer(app);

// server.listen(8000);
