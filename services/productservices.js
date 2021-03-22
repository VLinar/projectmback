const Products = require("../models/products.js");
const Measures = require("../models/measures");
const Groups = require("../models/goodgroups.js");

const GoodsAttr = require("../models/goodsattr");

module.exports = class Productservices {
  getallproducts = async () => {
    return Products.findAll({
      include: [{ model: Groups }, { model: Measures }],
    })
      .then((res) => {
        // await GoodsAttr.findAll({
        //   where: { productId: res[0].dataValues.id },
        //   raw: true,
        // })
        //   .then((responce) => {
        //     res[0].dataValues.params = responce;
        //   })
        //   .catch(() => {
        //     res.params = [];
        //   });

        return {
          status: "success",
          response: res,
        };
      })
      .catch((err) => {
        return {
          status: "error",
          error_text: err,
        };
      });
  };
};
