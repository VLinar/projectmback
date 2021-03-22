const Services = require("../services/productgroupservisec");
const Groups = new Services();

exports.groups = async function (request, response) {
  response.send(await Groups.getallgroups());
};
