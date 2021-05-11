const express = require("express");
const Roles = require("../controllers/roles");
const roleRouter = express.Router();

roleRouter.get("/roles", Roles.role);
roleRouter.get("/roles/:id", Roles.oneroles);

roleRouter.put("/roles/:id", Roles.updateroles);

roleRouter.post("/roles", Roles.createroles);

roleRouter.delete("/roles/:id", Roles.deleteroles);

module.exports = roleRouter;
