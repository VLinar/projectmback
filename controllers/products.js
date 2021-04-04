const Services = require("../services/productservices");
const Products = new Services();

exports.products = async function (request, response) {
  response.send(
    await Products.getallproducts(
      request.query.limit,
      request.query.page,
      request.query.order_by
    )
  );
};

exports.productscount = async function (request, response) {
  response.send(await Products.getproductscount());
};
