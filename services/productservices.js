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
      .then((res) => {
        return new Promise(async (resolve) => {
          Promise.all(
            res.map(async (el) => {
              let newmass = [];
              let id = el.params.map((e) => {
                return e.atributeId;
              });

              for (let i = 0; i < id.length; i++) {
                newmass.push({
                  name: await Attributes.findByPk(id[i]).then((r) => r.name),
                  value: await Attributesvalue.findByPk(id[i]).then(
                    (r) => r.value
                  ),
                });
              }

              el.setDataValue("paramsvalue", newmass);

              return el;
            })
          ).then(() => {
            resolve(res);
          });
        }).then((data) => {
          return data;
        });
      })
      .catch((err) => {
        console.log(err);
        return {
          status: "error",
          error_text: err,
        };
      });
  };
};
