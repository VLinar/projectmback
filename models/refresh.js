const Sequelize = require("sequelize");
const db = require("../config/db");

const User = require("./users");

const Refresh = db.define("refreshtokens", {
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

User.hasMany(Refresh);
Refresh.belongsTo(User);

module.exports = Refresh;
