const express = require("express");
const groupController = require("../controllers/groups.js");
const groupRouter = express.Router();

groupRouter.get("/groups", groupController.groups);
groupRouter.get("/groups/:id", groupController.onegroup);

groupRouter.put("/groups/:id", groupController.updategroups);

groupRouter.post("/groups", groupController.creategroups);

groupRouter.delete("/groups/:id", groupController.deletegroups);

module.exports = groupRouter;
