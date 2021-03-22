const Services = require("../services/payment");
const Payment = new Services();

exports.payment = async function (request, response) {
  response.send(await Payment.getallpayment());
};