const express = require("express");
const Statuses = require("../controllers/statuses");
const statusRouter = express.Router();

statusRouter.get("/payment", Statuses.statuses);

module.exports = statusRouter;