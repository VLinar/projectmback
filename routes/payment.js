const express = require("express");
const Payment = require("../controllers/payment");
const paymentRouter = express.Router();

paymentRouter.get("/payments", Payment.payments);
paymentRouter.get("/payments/:id", Payment.onepayment);

paymentRouter.put("/payments/:id", Payment.updatepayment);

paymentRouter.post("/payments", Payment.createpayment);

paymentRouter.delete("/payments/:id", Payment.delpayment);

module.exports = paymentRouter;
