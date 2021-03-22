const Sequelize = require("sequelize");
const db = require("../config/db");

const Role = db.define("role", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { 
    type: Sequelize.STRING,
    allowNull: true 
},
});

module.exports = Role;