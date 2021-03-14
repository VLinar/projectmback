const Sequelize = require("sequelize");
const db = require("../config/db");

const Attributes = require("./attributes");

const Attrvalues = db.define("attrvalues", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Attributes.hasMany(Attrvalues);
Attrvalues.belongsTo(Attributes);

module.exports = Attrvalues;
