const Groups = require("../models/goodgroups.js");

module.exports = class Groupservices {
  getallgroups = async () => {
    return Groups.findAll()
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
