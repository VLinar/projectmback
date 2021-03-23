const Sequelize = require("sequelize");
const db = require("../config/db");

const Role = require("./role");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
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
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

Role.hasMany(User);
User.belongsTo(Role);

module.exports = User;
