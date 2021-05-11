const express = require("express");
const Optionattributesvalues = require("../controllers/optionattributesvalues");
const optionattributesvaluesRouter = express.Router();

optionattributesvaluesRouter.get("/optionattributesvalues", Optionattributesvalues.optionattributesvalues);
optionattributesvaluesRouter.get("/optionattributesvalues/:id", Optionattributesvalues.oneoptionattributesvalues);

optionattributesvaluesRouter.put("/optionattributesvalues/:id", Optionattributesvalues.updateoptionattributesvalues);

optionattributesvaluesRouter.post("/optionattributesvalues", Optionattributesvalues.createoptionattributesvalues);

optionattributesvaluesRouter.delete("/optionattributesvalues/:id", Optionattributesvalues.deloptionattributesvalues);

module.exports = optionattributesvaluesRouter;