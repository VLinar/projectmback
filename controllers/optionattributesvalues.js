const Services = require("../services/optionattributesvalues");
const Optionattributesvalues = new Services();

exports.optionattributesvalues = async function (request, response) {
  response.send(await Optionattributesvalues.getalloptionattributesvalues());
};

exports.oneoptionattributesvalues = async function (request, response) {
  response.send(await Optionattributesvalues.getoneoptionattributesvalues(request.params.id));
};

exports.updateoptionattributesvalues = async function (request, response) {
  response.send(await Optionattributesvalues.updateoptionattributesvalues(request.params.id, request.body));
};

exports.createoptionattributesvalues = async function (request, response) {
  response.send(await Optionattributesvalues.createoptionattributesvalues(request.body));
};

exports.deloptionattributesvalues = async function (request, response) {
  response.send(await Optionattributesvalues.deloptionattributesvalues(request.params.id));
};