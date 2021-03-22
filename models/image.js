const Sequelize = require("sequelize");
const db = require("../config/db");

const Products = require("./products");

const Image = db.define("image", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
});

Products.hasMany(Image);
Image.belongsTo(Products);

module.exports = Image;