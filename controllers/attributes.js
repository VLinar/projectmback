const Services = require("../services/attributes");
const Attr = new Services();

exports.attributes = async function (request, response) {
  response.send(await Attr.getallproducts());
};
