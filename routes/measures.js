const express = require("express");
const MeasureController = require("../controllers/measures");
const measureRouter = express.Router();

measureRouter.get("/measure", MeasureController.measure);
measureRouter.get("/measure/:id", MeasureController.onemeasure);

measureRouter.put("/measure/:id", MeasureController.updatemeasure);

measureRouter.post("/measure", MeasureController.createmeasure);

measureRouter.delete("/measure/:id", MeasureController.delmeasure);

module.exports = measureRouter;
