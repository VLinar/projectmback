const AttributesValue = require("../models/attributesvalues");

module.exports = class Attr {
  getallattributevalues = async () => {
    return AttributesValue.findAll()
      .then((res) => {
        return {
          status: "success",
          response: res,
        };
      })
      .catch((err) => {
        return {
          status: "error",
          error_text: err,
        };
      });
  };
};
