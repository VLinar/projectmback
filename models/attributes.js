const Sequelize = require("sequelize");
const db = require("../config/db");

const goodsAttributes = require("./goodsattr");

const Atributes = db.define("atributes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

goodsAttributes.hasMany(Atributes);
Atributes.belongsTo(goodsAttributes);

Atributes.sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = Atributes;
