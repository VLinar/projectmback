const Products = require("../models/products.js");
const Measures = require("../models/measures");
const Groups = require("../models/goodgroups.js");

const GoodsAttr = require("../models/goodsattr");
const Attributes = require("../models/attributes");
const Images = require("../models/image");
const Attributesvalue = require("../models/attributesvalues");

module.exports = class Productservices {
  getallproducts = (limits, pages, order_by) => {
    if (!limits) {
      limits = 250;
    }
    if (!pages) {
      pages = 1;
    }
    if (!order_by) {
      order_by = "ASC";
    }

    const page = parseInt(pages);
    const limit = parseInt(limits);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return Products.findAll({
      include: [
        { model: Groups },
        { model: Measures },
        { model: Images },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
      ],
      order: [["name", order_by]],
      offset: startIndex,
      limit: endIndex,
    })
      .then(async (res) => {
        let result = await this.getAttrGoods(res);
        return {
          status: "success",
          result: result,
        };
      })
      .catch((err) => {
        if (err.parent.code === "42703") {
          return {
            status: err.parent.routine,
            error: "Поле(я) содержат некорректные значения",
          };
        }
      });
  };

  getproductscount = () => {
    return Products.count()
      .then((res) => {
        return {
          status: "success",
          count: res,
        };
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
