const express = require("express");
const Delivery = require("../controllers/delivery");
const deliveryRouter = express.Router();

deliveryRouter.get("/delivery", Delivery.delivery);

module.exports = deliveryRouter;