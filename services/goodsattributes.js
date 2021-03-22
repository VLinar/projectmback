const GoodsAttributes = require("../models/goodsattr");

module.exports = class GoodsAttr {
  getallgoodsattributes = async () => {
    return GoodsAttributes.findAll()
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
