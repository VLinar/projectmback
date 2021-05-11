const Sequelize = require("sequelize");
const db = require("../config/db");

const Optionattributevalues = require("./optionattributesvalues");
const Optionattributes = require("./optionsattr");

const Image=require("./image");
const Products=require("./products");

const Optionforgoods = db.define("optionsforgoods", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
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

Optionattributevalues.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Optionattributevalues);

Image.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Image);

Products.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Products);

Optionattributes.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Optionattributes);

module.exports = Optionforgoods;
