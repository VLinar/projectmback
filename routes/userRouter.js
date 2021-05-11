const express = require("express");
const userController = require("../controllers/users.js");
const userRouter = express.Router();

userRouter.get("/users", userController.users);
userRouter.get("/users/:id", userController.oneusers);

userRouter.put("/users/:id", userController.updateuser);

userRouter.post("/users", userController.createusers);

userRouter.delete("/users/:id", userController.deleteusers);

module.exports = userRouter;
