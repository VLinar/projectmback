const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const authmiddleware = require("./middleware/auth");

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
const measureRouter = require("./routes/measures");
const optionAttrValuesRouter = require("./routes/optionattributesvalues");
const optionsAttrRouter = require("./routes/optionsattr");
const optionsForGoodsRouter = require("./routes/optionsforgoods");
const ordersRouter = require("./routes/orders");
const ordersgoodsRouter = require("./routes/ordersgoods");
//404 ошибка при обращении к неизвестному пути
const errorRouter = require("./routes/404error");

app.use(cors());

app.use(authmiddleware);

app.use("/", authRouter);
app.use("/", userRouter);
app.use("/", groupRouter);
app.use("/", productRouter);
app.use("/", attrRouter);
app.use("/", goodsattrRouter);
app.use("/", attrValueRouter);
app.use("/", deliveryRouter);
app.use("/", paymentRouter);
app.use("/", statusRouter);
app.use("/", roleRouter);
app.use("/", measureRouter);
app.use("/", optionAttrValuesRouter);
app.use("/", optionsAttrRouter);
app.use("/", optionsForGoodsRouter);
app.use("/", ordersRouter);
app.use("/", ordersgoodsRouter);
app.use("/", errorRouter);

sequelize
  .sync()
  .then((result) => console.log(result.modelManager.models))
  .catch((err) => console.log(err));

app.listen(serverport, () => {
  console.log("API started.\nPort " + serverport);
});
