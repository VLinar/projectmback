const Services = require("../services/goodsattributes");
const GoodsAttr = new Services();

exports.goodsattr = async function (request, response) {
  response.send(await GoodsAttr.getallgoodsattributes());
};

exports.onegoodsattr = async function (request, response) {
  response.send(await GoodsAttr.getonegoodsattributes(request.params.id));
};

exports.updategoodsattr = async function (request, response) {
  response.send(
    await GoodsAttr.updategoodsattributes(request.params.id, request.body)
  );
};

exports.creategoodsattr = async function (request, response) {
  response.send(await GoodsAttr.creategoodsattributes(request.body));
};

exports.deletegoodsattr = async function (request, response) {
  response.send(await GoodsAttr.delgoodsattributes(request.params.id));
};
