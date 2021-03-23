const Sequelize = require("sequelize");
const db = require("../config/db");

const Image = require("./image");
const Products = require("./products");

const Goodsoptions = db.define("goodsoptions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  article: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Image.hasMany(Goodsoptions);
Goodsoptions.belongsTo(Image);

Products.hasMany(Goodsoptions);
Goodsoptions.belongsTo(Products);

module.exports = Goodsoptions;
