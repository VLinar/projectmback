const Roles = require("../models/role");

module.exports = class Roleservices {
  getallrole = async () => {
    return Roles.findAll()
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
