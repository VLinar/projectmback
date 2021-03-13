const Groups = require("../models/goodgroups.js");
const Products = require("../models/products.js");

module.exports = class Productservices {
  getallproducts = async () => {
    return Products.findAll({ include: Groups })
      .then((res) => {
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
