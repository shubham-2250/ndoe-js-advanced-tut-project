const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: Sequelize.STRING,
});

module.exports = User;
