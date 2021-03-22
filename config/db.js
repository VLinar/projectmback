const Sequelize = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  process.env.DB,
  process.env.DBLogin,
  process.env.DBpass,
  {
    dialect: "postgres",
    host: "localhost",
    logging: false,
  }
);
