const Sequelize = require("sequelize");
const db = require("../config/db");

const Delivery = db.define("delivery", {
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
    price: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    updated: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

module.exports = Delivery;