const Services = require("../services/delivery");
const Delivery = new Services();

exports.delivery = async function (request, response) {
  response.send(await Delivery.getalldelivery());
};