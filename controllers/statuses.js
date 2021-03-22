const Services = require("../services/statuses");
const Status = new Services();

exports.statuses = async function (request, response) {
  response.send(await Status.getallstatuses());
};
