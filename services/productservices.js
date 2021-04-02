const Products = require("../models/products.js");
const Measures = require("../models/measures");
const Groups = require("../models/goodgroups.js");

const GoodsAttr = require("../models/goodsattr");
const Attributes = require("../models/attributes");
const Attributesvalue = require("../models/attributesvalues");

module.exports = class Productservices {
  getallproducts = async () => {
    return Products.findAll({
      include: [
        { model: Groups },
        { model: Measures },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
      ],
    })
      .then(async (res) => {
        return await this.getAttrGoods(res);
      })
      .catch((err) => {
        console.log(err);
        return {
          status: "error",
          error_text: err,
        };
      });
  };
  getlimits = (limitvalue) => {
    return Products.findAll({
      include: [
        { model: Groups },
        { model: Measures },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
      ],
      limit: limitvalue,
    })
      .then(async (res) => {
        return await this.getAttrGoods(res);
      })
      .catch((err) => err);
  };
  // Метод для слияния атрибутов в основной объект
  getAttrGoods = async (obj) => {
    return Promise.all(
      obj.map(async (el) => {
        let newmass = [];

        for (let i = 0; i < el.params.length; i++) {
          newmass.push({
            name: await Attributes.findByPk(el.params[i].atributeId).then(
              (r) => r.name
            ),
            value: await Attributesvalue.findByPk(
              el.params[i].attrvalueId
            ).then((r) => r.value),
          });
        }

        el.setDataValue("paramsvalue", newmass);

        return el;
      })
    );
  };
};
