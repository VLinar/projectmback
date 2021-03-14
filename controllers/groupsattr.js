const Services = require("../services/goodsattributes");
const GoodsAttr = new Services();

exports.goodsattr = async function (request, response) {
  response.send(await GoodsAttr.getallproducts());
};
