const Sequelize = require("sequelize");
const db = require("../config/db");

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
  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

// User.sync()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

module.exports = User;
