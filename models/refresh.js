const Sequelize = require("sequelize");
const db = require("../config/db");

const User = require("./users");

const Refresh = db.define("atributes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  refreshtoken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Refresh.hasMany(User);
User.belongsTo(Refresh);

module.exports = Refresh;
