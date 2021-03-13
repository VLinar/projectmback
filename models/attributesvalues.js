const Sequelize = require("sequelize");
const db = require("../config/db");

const Attributes = require("./attributes");
const goodsAttributes = require("./goodsattr");

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

goodsAttributes.hasMany(Attrvalues);
Attrvalues.belongsTo(goodsAttributes);

Attrvalues.sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = Attrvalues;
