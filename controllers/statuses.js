const Services = require("../services/statuses");
const Status = new Services();

exports.statuses = async function (request, response) {
  response.send(await Status.getallstatuses());
};

exports.onestatus = async function (request, response) {
  response.send(await Status.getonestatus(request.params.id));
};

exports.updatestatus = async (request, response) => {
  response.send(await Status.updatestatus(request.params.id, request.body));
};

exports.createstatus = async (request, response) => {
  response.send(await Status.createstatus(request.body));
};

exports.deletestatus = async (request, response) => {
  response.send(await Status.delstatus(request.params.id));
};
