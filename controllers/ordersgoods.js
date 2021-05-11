const Services = require("../services/ordersgoods");
const Ordersgoods = new Services();

exports.getallordersgoods = async function (request, response) {
  response.send(await Ordersgoods.getallordersgoods());
};

exports.getoneordersgoods = async function (request, response) {
  response.send(await Ordersgoods.getoneordersgoods(request.params.id));
};

exports.updateordersgoods = async function (request, response) {
  response.send(await Ordersgoods.updateordersgoods(request.params.id, request.body));
};

exports.createordersgoods = async function (request, response) {
  response.send(await Ordersgoods.createordersgoods(request.body));
};

exports.delordersgoods = async function (request, response) {
  response.send(await Ordersgoods.delordersgoods(request.params.id));
};