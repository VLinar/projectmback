const express = require("express");
const Attributes = require("../controllers/attributes");
const AttrRouter = express.Router();

AttrRouter.get("/attributes", Attributes.attributes);

module.exports = AttrRouter;
