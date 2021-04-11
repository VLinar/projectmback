const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const authmiddleware = require("./middleware/auth");
const checkauthmiddlewear = require("./middleware/checkauth");

const cors = require("cors");

const sequelize = require("./config/db.js");
const serverport = 3012;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRouter = require("./routes/authRouter.js");

const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/products");
const groupRouter = require("./routes/groups");
const goodsattrRouter = require("./routes/goodsattributes");
const attrRouter = require("./routes/attributes");
const attrValueRouter = require("./routes/attrvalues");
const deliveryRouter = require("./routes/delivery");
const paymentRouter = require("./routes/payment");
const statusRouter = require("./routes/statuses");
const roleRouter = require("./routes/roles");
//404 ошибка при обращении к неизвестному пути
const errorRouter = require("./routes/404error");

app.use(cors());

app.use(authmiddleware);

app.use("/", authRouter);

app.use("/", checkauthmiddlewear, userRouter);
app.use("/", checkauthmiddlewear, groupRouter);
app.use("/", checkauthmiddlewear, productRouter);
app.use("/", checkauthmiddlewear, attrRouter);
app.use("/", checkauthmiddlewear, goodsattrRouter);
app.use("/", checkauthmiddlewear, attrValueRouter);
app.use("/", checkauthmiddlewear, deliveryRouter);
app.use("/", checkauthmiddlewear, paymentRouter);
app.use("/", checkauthmiddlewear, statusRouter);
app.use("/", checkauthmiddlewear, roleRouter);

app.use("/", checkauthmiddlewear, errorRouter);

sequelize
  .sync()
  .then((result) => console.log(result.modelManager.models))
  .catch((err) => console.log(err));

app.listen(serverport, () => {
  console.log("API started.\nPort " + serverport);
});
