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
const productRouter = require("./routes/products");
const groupRouter = require("./routes/groups");

app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", groupRouter);

app.listen(serverport, () => {
  console.log("API started.\nPort " + serverport);
});
