const Services = require("../services/orders");
const Orders = new Services();

exports.getallorders = async function (request, response) {
  response.send(await Orders.getallorders());
};

exports.getallorder = async function (request, response) {
  response.send(await Orders.getallorder(request.params.id));
};

exports.getoneorders = async function (request, response) {
  response.send(await Orders.getoneorders(request.params.id));
};

exports.updateorders = async function (request, response) {
  response.send(await Orders.updateorders(request.params.id, request.body));
};

exports.createorders = async function (request, response) {
  response.send(await Orders.createorders(request.body));
};

exports.delorders = async function (request, response) {
  response.send(await Orders.delorders(request.params.id));
};