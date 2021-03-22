const Sequelize = require("sequelize");
const db = require("../config/db");

const Measures = db.define("measures", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  shortname: { type: Sequelize.STRING, allowNull: false },
  default: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  deleted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

module.exports = Measures;
