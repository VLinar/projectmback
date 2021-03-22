const express = require("express");
const GoodsAttributes = require("../controllers/groupsattr");
const GoodsAttrRouter = express.Router();

GoodsAttrRouter.get("/goodsattributes", GoodsAttributes.goodsattr);

module.exports = GoodsAttrRouter;
