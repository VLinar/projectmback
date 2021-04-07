const express = require("express");
const authController = require("../controllers/authController.js");
const authrRouter = express.Router();

authrRouter.post("/login", authController.login);

module.exports = authrRouter;
