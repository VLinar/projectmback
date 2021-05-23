const Sequelize = require("sequelize");
const db = require("../config/db");

const Delivery = require("./delivery");
const Payment = require("./payment");
const User = require("./users");
const Statuses = require("./statuses");

const Orders = db.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  sum: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  delivery_address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone_contact_inform_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email_contact_inform_id: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: {
        msg: "Не валидное значение поля email",
      },
    },
  },
  pay: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Delivery.hasMany(Orders);
Orders.belongsTo(Delivery);

Payment.hasMany(Orders);
Orders.belongsTo(Payment);

User.hasMany(Orders);
Orders.belongsTo(User);

Statuses.hasMany(Orders);
Orders.belongsTo(Statuses);

module.exports = Orders;
