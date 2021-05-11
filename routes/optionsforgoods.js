const express = require("express");
const Optionsforgoods = require("../controllers/optionsforgoods");
const optionsforgoodsRouter = express.Router();

optionsforgoodsRouter.get("/optionsforgoods", Optionsforgoods.optionattr);
optionsforgoodsRouter.get("/optionsforgoods/:id", Optionsforgoods.getoneoptionsforgoods);

optionsforgoodsRouter.put("/optionsforgoods/:id", Optionsforgoods.updateoptionsforgoods);

optionsforgoodsRouter.post("/optionsforgoods", Optionsforgoods.createoptionsforgoods);

optionsforgoodsRouter.delete("/optionsforgoods/:id", Optionsforgoods.deloptionsforgoods);

module.exports = optionsforgoodsRouter;