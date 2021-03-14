const express = require("express");
const Attributvalues = require("../controllers/attrvalues");
const AttrValueRouter = express.Router();

AttrValueRouter.get("/attributes", Attributvalues.attributevalues);

module.exports = AttrValueRouter;
