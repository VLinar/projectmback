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
        console.log(res);

        return new Promise((resolve, reject) => {
          let newmass = [];

          res.map((elem) => {
            let test = elem.params.map((el) => {
              el.dataValues = {
                name: "opa",
                value: "test",
              };
              return el;
            });
            elem.params = test;

            newmass.push(elem);
          });

          resolve(newmass);
        });
      })
      .catch((err) => {
        return {
          status: "error",
          error_text: err,
        };
      });
  };
};
