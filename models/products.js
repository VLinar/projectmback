const Sequelize = require("sequelize");
const db = require("../config/db");

const Groups = require("./goodgroups");

const Products = db.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  weight: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  description: {
    type: Sequelize.STRING,
  },
  measure_id: {
    type: Sequelize.STRING,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Groups.hasMany(Products);
Products.belongsTo(Groups);

Products.sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = Products;
