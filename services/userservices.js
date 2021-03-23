const User = require("../models/users.js");

module.exports = class Userservices {
  getalluser = async () => {
    return User.findAll()
      .then((res) => res)
      .catch((err) => err);
  };
  getoneusers = async (userid) => {
    return User.findByPk(userid)
      .then((res) => res)
      .catch((err) => err);
  };
};
