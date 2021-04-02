const Services = require("../services/productservices");
const Products = new Services();

exports.products = async function (request, response) {
  request.query.limit
    ? response.send(await Products.getlimits(request.query.limit))
    : response.send(await Products.getallproducts());
};
