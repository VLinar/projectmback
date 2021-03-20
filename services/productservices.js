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
          console.log(1);
          Promise.all(
            res.map(async (el) => {
              let id = el.params.map((e) => {
                return e.atributeId;
              });
              let ad = {
                name: await Attributes.findByPk(1).then((r) => r.name),
              };

              el.setDataValue("paramsvalue", ad);

              return el;
            })
          ).then(() => {
            resolve(res);
          });
        }).then((data) => {
          console.log(2);
          return data;
        });
        //   res.map(async (prod) => {
        //     Promise.all(
        //       await prod.params.map(async (el) => {
        //         el = {
        //           name: await Attributes.findByPk(el.atributeId).then(
        //             (resp) => resp.name
        //           ),
        //         };
        //         return el;
        //       })
        //     ).then((data) => {
        //       prod.setDataValue("paramsvalue", data);
        //       return prod;
        //     });
        //   });

        //   return res;
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
