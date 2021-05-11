const express = require("express");
const Statuses = require("../controllers/statuses");
const statusRouter = express.Router();

statusRouter.get("/statuses", Statuses.statuses);
statusRouter.get("/statuses/:id", Statuses.onestatus);

statusRouter.put("/statuses/:id", Statuses.updatestatus);

statusRouter.post("/statuses", Statuses.createstatus);

statusRouter.delete("/statuses/:id", Statuses.deletestatus);

module.exports = statusRouter;
