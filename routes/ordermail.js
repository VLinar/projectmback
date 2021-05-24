const express = require("express");
const mailController = require("../controllers/ordermail");
const mailRouter = express.Router();

mailRouter.post("/ordermail/:id", mailController.ordermail);

module.exports = mailRouter;
