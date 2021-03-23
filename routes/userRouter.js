const express = require("express");
const userController = require("../controllers/users.js");
const userRouter = express.Router();

userRouter.get("/users", userController.users);
userRouter.get("/users/:id", userController.oneusers);

module.exports = userRouter;
