const User = require("../models/users.js");

exports.users = async function (request, response) {
  response.send(
    await User.findAll({ raw: true })
      .then((res) => res)
      .catch((err) => err)
  );
};
