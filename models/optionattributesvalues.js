const Sequelize = require("sequelize");
const db = require("../config/db");

const Optionatributes = require("./optionsattr");

const Optionattributevalues = db.define("optionattributevalues", {
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
    updated: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
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