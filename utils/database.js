const Sequelize = require("sequelize");

const sequelize = new Sequelize("sys", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
