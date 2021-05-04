const express = require("express");
const authController = require("../controllers/authController.js");
const authrRouter = express.Router();

authrRouter.post("/login", authController.login);

authrRouter.post("/reg", authController.registrations);
authrRouter.post("/guest", authController.guestreg);
authrRouter.post("/refreshtoken", authController.refresh);

module.exports = authrRouter;
