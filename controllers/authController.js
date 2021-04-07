const Services = require("../services/userservices");
const Users = new Services();
const jwt = require("jsonwebtoken");

require("dotenv").config();

const tokenKey = process.env.token;

exports.login = async function (request, response) {
  await Users.getfindusers(request.body.login, request.body.password)
    .then((res) => {
      if (res) {
        response.status(200).json({
          id: res.id,
          login: res.login,
          token: jwt.sign({ id: res.id }, tokenKey),
        });
      }
      response.status(404).json({ message: "User not found" });
    })
    .catch((err) => err);
};
