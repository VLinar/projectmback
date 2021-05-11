const Services = require("../services/measures");
const Measure = new Services();

exports.measure = async function (request, response) {
  response.send(await Measure.getallmeasure());
};

exports.onemeasure = async function (request, response) {
  response.send(await Measure.getonemeasure(request.params.id));
};

exports.updatemeasure = async function (request, response) {
  response.send(await Measure.updatemeasure(request.params.id, request.body));
};

exports.createmeasure = async function (request, response) {
  response.send(await Measure.createmeasure(request.body));
};

exports.delmeasure = async function (request, response) {
  response.send(await Measure.delmeasure(request.params.id));
};