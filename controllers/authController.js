const Services = require("../services/userservices");
const Users = new Services();
const jwt = require("jsonwebtoken");

require("dotenv").config();

const tokenKey = process.env.token;

exports.login = async (request, response) => {
  await Users.getfindusers(request.body.login, request.body.password)
    .then((res) => {
      if (res) {
        return response.status(200).json({
          id: res.id,
          login: res.email,
          token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey),
        });
      }
      return response.status(404).json({ message: "User not found" });
    })
    .catch((err) => console.log(err));
};

exports.registrations = async (request, response) => {
  await Users.createusers(request.body)
    .then(async (res) => {
      if (res.status) {
        response.status(409).json(res);
      } else {
        return await Users.getfindusers(res.email, res.password)
          .then((res) => {
            if (res) {
              return response.status(200).json({
                id: res.id,
                login: res.email,
                token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey),
              });
            }
            return response.status(404).json({ message: "User not found" });
          })
          .catch((err) => err);
      }
    })
    .catch((err) => console.log(err));
};
