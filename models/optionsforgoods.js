const Sequelize = require("sequelize");
const db = require("../config/db");

const Optionattributevalues = require("./optionattributevalues");
const Optionattributes = require("./optionattributes");

const Optionforgoods = db.define("optionforgoods", {
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

Image.hasMany(Goodsoptions);
Goodsoptions.belongsTo(Image);

Products.hasMany(Goodsoptions);
Goodsoptions.belongsTo(Products);

Optionattributes.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Optionattributes);

module.exports = Optionforgoods;
