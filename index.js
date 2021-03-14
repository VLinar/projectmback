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
const goodsattrRouter = require("./routes/goodsattributes");
const attrRouter = require("./routes/attributes");
const attrValueRouter = require("./routes/attrvalues");

app.use("/", userRouter);
app.use("/", groupRouter);
app.use("/", productRouter);
app.use("/", attrRouter);
app.use("/", goodsattrRouter);
app.use("/", attrValueRouter);

sequelize
  .sync()
  .then((result) => console.log(result.modelManager.models))
  .catch((err) => console.log(err));

app.listen(serverport, () => {
  console.log("API started.\nPort " + serverport);
});
