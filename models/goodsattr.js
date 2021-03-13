const Sequelize = require("sequelize");
const db = require("../config/db");

const Products = require("./products");

const Goodattributes = db.define("goodattributes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

Products.hasMany(Goodattributes);
Goodattributes.belongsTo(Products);

Goodattributes.sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = Goodattributes;
