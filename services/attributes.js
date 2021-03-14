const Attributes = require("../models/attributes");

module.exports = class Attr {
  getallattributes = async () => {
    return Attributes.findAll()
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
