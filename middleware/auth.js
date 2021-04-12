const UsersServices = require("../services/userservices");
const Users = new UsersServices();
const jwt = require("jsonwebtoken");

const tokenKey = process.env.token;

module.exports = function (req, res, next) {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      tokenKey,
      async (err, payload) => {
        if (err) next();
        else if (payload) {
          await Users.getoneusers(payload.id)
            .then((response) => {
              if (response.id) {
                req.user = response;
                next();
              }
            })
            .catch((err) => console.log(err));
        }

        if (!req.user) next();
      }
    );
  } else {
    next();
  }
};
