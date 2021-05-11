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
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Поле name не может быть пустым",
      },
    },
  },
  color: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  default: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      isEven(value) {
        if (typeof value !== "boolean") {
          throw new Error("Поле deleted должно быть boolean");
        }
      },
    },
  },
});

module.exports = Statuses;
