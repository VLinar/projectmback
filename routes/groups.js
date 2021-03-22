const express = require("express");
const groupController = require("../controllers/groups.js");
const groupRouter = express.Router();

groupRouter.get("/groups", groupController.groups);

module.exports = groupRouter;
