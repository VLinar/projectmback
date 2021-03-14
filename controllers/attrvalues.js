const Services = require("../services/attrvalues");
const AttrValues = new Services();

exports.attributevalues = async function (request, response) {
  response.send(await AttrValues.getallattributevalues());
};
