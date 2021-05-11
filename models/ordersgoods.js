const Sequelize = require("sequelize");
const db = require("../config/db");

const Orders = require("./orders");
const Products = require("./products");

const OrdersGoods = db.define("ordersgoods", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  amounts: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Количество не может быть null",
      },
    },
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Цена не может быть null",
      },
    },
  },
  sum: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
});

Orders.hasMany(OrdersGoods);
OrdersGoods.belongsTo(Orders);

Products.hasMany(OrdersGoods);
OrdersGoods.belongsTo(Products);

module.exports = OrdersGoods;
