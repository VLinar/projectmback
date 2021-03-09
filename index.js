const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const sequelize = require("./config/db.js");
const serverport = 3012;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const userRouter = require("./routes/userRouter.js");

app.use("/", userRouter);

// sequelize
//   .sync()
//   .then(() => {
//     app.listen(serverport, () => {
//       console.log("API started. Port" + serverport);
//     });
//   })
//   .catch((err) => console.log(err));

app.listen(serverport, () => {
  console.log("API started. Port" + serverport);
});
