const Sequelize = require("sequelize");
module.exports = new Sequelize("projectM", "postgres", "123456", {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});
