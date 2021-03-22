const Statuses = require("../models/statuses");

module.exports = class Statuseservices {
  getalldelivery = async () => {
    return Statuses.findAll()
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