const Services = require("../services/roles");
const Roles = new Services();

exports.role = async function (request, response) {
  response.send(await Roles.getallrole());
};