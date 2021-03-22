const Sequelize = require("sequelize");
const db = require("../config/db");

const Statuses = db.define("statuses", {
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
    color: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    default: { 
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: false 
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

module.exports = Statuses;