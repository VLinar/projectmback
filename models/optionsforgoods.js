const Sequelize = require("sequelize");
const db = require("../config/db");

const Optionattributevalues = require("./optionattributevalues");
const Optionattributes = require("./optionattributes");

const Optionforgoods = db.define("optionforgoods", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
});

Optionattributevalues.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Optionattributevalues);

Optionattributes.hasMany(Optionforgoods);
Optionforgoods.belongsTo(Optionattributes);

module.exports = Optionforgoods;