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
        if (err) {
          return res.status(401).json({ status: "error", msg: "No Auth" });
        } else if (payload) {
          await Users.getoneusers(payload.id)
            .then((response) => {
              if (response.id) {
                req.user = response;
                next();
              }
            })
            .catch((err) => console.log(err));
        }
      }
    );
  } else {
    (req.method === "GET" && req._parsedUrl.pathname === "/groups") ||
    (req.method === "GET" && req._parsedUrl.pathname === "/products") ||
    (req.method === "POST" && req._parsedUrl.pathname === "/login") ||
    (req.method === "POST" && req._parsedUrl.pathname === "/reg") ||
    (req.method === "POST" && req._parsedUrl.pathname === "/refreshtoken") ||
    (req.method === "POST" && req._parsedUrl.pathname === "/guest")
      ? next()
      : res.status(401).json({ status: "error", msg: "No Auth" });
  }
};
