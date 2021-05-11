const Sequelize = require("sequelize");
const db = require("../config/db");

const Optionatributes = require("./optionsattr");

const Optionattributevalues = db.define("optionattributesvalues", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Optionatributes.hasMany(Optionattributevalues);
Optionattributevalues.belongsTo(Optionatributes);

module.exports = Optionattributevalues;
