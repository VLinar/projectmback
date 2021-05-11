const express = require("express");
const Optionattributes = require("../controllers/optionsattr");
const optionattributesRouter = express.Router();

optionattributesRouter.get("/optionsattr", Optionattributes.optionattr);
optionattributesRouter.get("/optionsattr/:id", Optionattributes.oneoptionattr);

optionattributesRouter.put("/optionsattr/:id", Optionattributes.updateoptionattr);

optionattributesRouter.post("/optionsattr", Optionattributes.createoptionattr);

optionattributesRouter.delete("/optionsattr/:id", Optionattributes.deloptionattr);

module.exports = optionattributesRouter;