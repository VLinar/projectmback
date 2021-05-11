const Services = require("../services/payment");
const Payment = new Services();

exports.payments = async function (request, response) {
  response.send(await Payment.getallpayment());
};

exports.onepayment = async function (request, response) {
  response.send(await Payment.getonepayment(request.params.id));
};

exports.updatepayment = async function (request, response) {
  response.send(await Payment.updatepayment(request.params.id, request.body));
};

exports.createpayment = async function (request, response) {
  response.send(await Payment.createpayment(request.body));
};

exports.delpayment = async function (request, response) {
  response.send(await Payment.delpayment(request.params.id));
};
