const Services = require("../services/userservices");
const Users = new Services();

exports.users = async function (request, response) {
  response.send(await Users.getalluser());
};

exports.oneusers = async function (request, response) {
  response.send(await Users.getoneusers(request.params.id));
};
