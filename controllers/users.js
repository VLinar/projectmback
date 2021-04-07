const Services = require("../services/userservices");
const Users = new Services();

exports.users = async function (request, response) {
  if (request.user) return response.send(await Users.getalluser());
  else return response.send("xfgf[f");
};

exports.oneusers = async function (request, response) {
  response.send(await Users.getoneusers(request.params.id));
};

exports.updateuser = async function (request, response) {
  response.send(await Users.updateusers(request.params.id, request.body));
};

exports.createusers = async function (request, response) {
  response.send(await Users.createusers(request.body));
};

exports.deleteusers = async function (request, response) {
  response.send(await Users.delusers(request.params.id));
};
