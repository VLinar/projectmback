const Services = require("../services/productgroupservisec");
const Groups = new Services();

exports.groups = async function (request, response) {
  response.send(await Groups.getallgroups());
};

exports.onegroup = async function (request, response) {
  response.send(await Groups.getonegroup(request.params.id));
};

exports.updategroups = async function (request, response) {
  response.send(await Groups.updategroups(request.params.id, request.body));
};

exports.creategroups = async function (request, response) {
  response.send(await Groups.creategroups(request.body));
};

exports.deletegroups = async function (request, response) {
  response.send(await Groups.delgroups(request.params.id));
};
