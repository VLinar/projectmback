const Mail = require("../services/mailer");

exports.ordermail = async function (request, response) {
  response.send(await Mail.ordersend(request.params.id));
};
