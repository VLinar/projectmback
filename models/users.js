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
  updated: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
},
  deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

// User.sync()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

Role.hasMany(User);
User.belongsTo(Role);

module.exports = User;
