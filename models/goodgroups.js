const Sequelize = require("sequelize");
const db = require("../config/db");

const Groups = db.define("groups", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  maingroup: { type: Sequelize.INTEGER, allowNull: true },
  url: { type: Sequelize.STRING, allowNull: false },
  deleted: { type: Sequelize.BOOLEAN, allowNull: false },
});

Groups.sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = Groups;
