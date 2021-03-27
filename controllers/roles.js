const Services = require("../services/roles");
const Roles = new Services();

exports.role = async function (request, response) {
  response.send(await Roles.getallrole());
};

exports.oneroles = async function (request, response) {
  response.send(await Roles.getonerole(request.params.id));
};

exports.updateroles = async (request, response) => {
  response.send(await Roles.updaterole(request.params.id, request.body));
};

exports.createroles = async (request, response) => {
  response.send(await Roles.createrole(request.body));
};

exports.deleteroles = async (request, response) => {
  response.send(await Roles.delstatus(request.params.id));
};
