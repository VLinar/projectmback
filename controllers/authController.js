const Services = require("../services/userservices");
const Users = new Services();
const jwt = require("jsonwebtoken");
const Mail = require("../services/mailer");

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
        response.json(res);
      } else {
        return await Users.getfindusers(res.email, res.password)
          .then(async (res) => {
            if (res) {
              if (request.query.guest) {
                return response.status(200).json({
                  id: res.id,
                  login: res.email,
                  token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey),
                });
              } else {
                await Mail.send(res).then((resp) => {
                  console.log(resp);
                  return response
                    .status(200)
                    .json({ status: "success", msg: resp.accepted });
                });
              }
            }
            return response.status(404).json({ message: "User not found" });
          })
          .catch((err) => err);
      }
    })
    .catch((err) => console.log(err));
};
