const express = require("express");
const Payment = require("../controllers/payment");
const paymentRouter = express.Router();

paymentRouter.get("/payment", Payment.payment);

module.exports = paymentRouter;