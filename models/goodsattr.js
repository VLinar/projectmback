const Sequelize = require("sequelize");
const db = require("../config/db");

const Products = require("./products");
const AttributesValue = require("./attributesvalues");
const Atributes = require("./attributes");

const Goodattributes = db.define("goodattributes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

AttributesValue.hasMany(Goodattributes);
Goodattributes.belongsTo(AttributesValue);

Atributes.hasMany(Goodattributes);
Goodattributes.belongsTo(Atributes);

Products.hasMany(Goodattributes, { as: "Huita" });
Goodattributes.belongsTo(Products);

module.exports = Goodattributes;
