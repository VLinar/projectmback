const Services = require("../services/optionsattr");
const Optionattributes = new Services();

exports.optionattr = async function (request, response) {
  response.send(await Optionattributes.getalloptionattr());
};

exports.oneoptionattr = async function (request, response) {
  response.send(await Optionattributes.getoneoptionattr(request.params.id));
};

exports.updateoptionattr = async function (request, response) {
  response.send(await Optionattributes.updateoptionattr(request.params.id, request.body));
};

exports.createoptionattr = async function (request, response) {
  response.send(await Optionattributes.createoptionattr(request.body));
};

exports.deloptionattr = async function (request, response) {
  response.send(await Optionattributes.deloptionattr(request.params.id));
};