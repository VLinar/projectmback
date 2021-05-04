const Services = require("../services/userservices");
const Users = new Services();
const jwt = require("jsonwebtoken");
const Mail = require("../services/mailer");
const uid = require("rand-token").uid;
const Refreshservices = require("../services/refreshservices");
const Refresh = new Refreshservices();

require("dotenv").config();

const tokenKey = process.env.token;

exports.login = async (request, response) => {
  await Users.getfindusers(request.body.login, request.body.password)
    .then(async (res) => {
      if (res) {
        let newrefresh = uid(16);
        await Refresh.addrefresh({
          userId: res.id,
          refreshtoken: newrefresh,
        });
        return response.status(200).json({
          id: res.id,
          login: res.email,
          token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey, {
            expiresIn: "2m",
          }),
          refreshtoken: newrefresh,
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
              let newrefresh = uid(16);

              await Refresh.addrefresh({
                userId: res.id,
                refreshtoken: newrefresh,
              });

              await Mail.send(res).then((resp) => {
                console.log(resp);
                return response.status(200).json({
                  status: "success",
                  msg: resp.accepted,
                  token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey, {
                    expiresIn: "2m",
                  }),
                  refreshtoken: newrefresh,
                });
              });
            }
            return response.status(404).json({ message: "User not found" });
          })
          .catch((err) => err);
      }
    })
    .catch((err) => console.log(err));
};

exports.refresh = async (request, response) => {
  if (!request.body.refreshtoken) {
    return response.status(400).send({
      status: "error",
      msg: "refreshtoken обязателен при запросе",
    });
  }
  await Refresh.findrefresh(request.body.refreshtoken)
    .then(async (res) => {
      if (res.status === "Not Found") {
        return response.status(404).send(res);
      }
      await Users.getoneusers(res.userId).then(async (resp) => {
        let newrefresh = uid(16);
        return await Refresh.deleterefresh(res.id)
          .then(async () => {
            return await Refresh.addrefresh({
              userId: resp.id,
              refreshtoken: newrefresh,
            })
              .then(() => {
                return response.status(200).json({
                  token: jwt.sign(
                    { id: resp.id, role: resp.roleId },
                    tokenKey,
                    {
                      expiresIn: "2m",
                    }
                  ),
                  refreshtoken: newrefresh,
                });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};

exports.guestreg = async (request, response) => {
  return await Users.createguestuser(request.body)
    .then(async (res) => {
      let newrefresh = uid(16);
      await Refresh.addrefresh({
        userId: res.id,
        refreshtoken: newrefresh,
      });
      return response.status(200).json({
        status: "success",
        token: jwt.sign({ id: res.id, role: res.roleId }, tokenKey, {
          expiresIn: "2m",
        }),
        refreshtoken: newrefresh,
      });
    })
    .catch((err) => console.log(err));
};
