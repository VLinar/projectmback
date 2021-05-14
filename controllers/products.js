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

exports.product = async function (request, response) {
  response.send(await Products.getoneproduct(request.params.id));
};

exports.productsid = async function (request, response) {
  response.send(
    await Products.getallproductsid(
      request.query.limit,
      request.query.page,
      request.query.order_by,
      request.params.id
    )
  );
};

exports.productscount = async function (request, response) {
  response.send(await Products.getproductscount());
};

exports.searc = async function (request, response) {
  response.send(await Products.search(request.query.text));
};
