const Services = require("../services/productservices");
const Products = new Services();

exports.products = async function (request, response) {
  response.send(await Products.getallproducts());
};
