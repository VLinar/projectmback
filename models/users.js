const { BOOLEAN } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../config/db");

const Role = require("./role");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Не валидное поле",
      },
      notEmpty: {
        msg: "Поле password не может быть пустым",
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Поле password не может быть null",
      },
      notEmpty: {
        msg: "Поле password не может быть пустым",
      },
    },
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Поле roleId должно быть с типом Integer",
      },
    },
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      isEven(value) {
        if (typeof value !== "boolean") {
          throw new Error("Поле deleted - boolean");
        }
      },
    },
  },
});

Role.hasMany(User);
User.belongsTo(Role);

module.exports = User;
