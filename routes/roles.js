const express = require("express");
const Roles = require("../controllers/roles");
const roleRouter = express.Router();

roleRouter.get("/payment", Roles.role);

module.exports = roleRouter;