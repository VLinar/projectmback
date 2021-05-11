const Services = require("../services/optionsforgoods");
const Optionsforgoods = new Services();

exports.optionattr = async function (request, response) {
  response.send(await Optionsforgoods.getalloptionsforgoods());
};

exports.getoneoptionsforgoods = async function (request, response) {
  response.send(await Optionsforgoods.getoneoptionsforgoods(request.params.id));
};

exports.updateoptionsforgoods = async function (request, response) {
  response.send(await Optionsforgoods.updateoptionsforgoods(request.params.id, request.body));
};

exports.createoptionsforgoods = async function (request, response) {
  response.send(await Optionsforgoods.createoptionsforgoods(request.body));
};

exports.deloptionsforgoods = async function (request, response) {
  response.send(await Optionsforgoods.deloptionsforgoods(request.params.id));
};