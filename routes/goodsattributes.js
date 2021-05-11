const express = require("express");
const GoodsAttributes = require("../controllers/goodsattr");
const GoodsAttrRouter = express.Router();

GoodsAttrRouter.get("/goodsattributes", GoodsAttributes.goodsattr);
GoodsAttrRouter.get("/goodsattributes/:id", GoodsAttributes.onegoodsattr);

GoodsAttrRouter.put("/goodsattributes/:id", GoodsAttributes.updategoodsattr);

GoodsAttrRouter.post("/goodsattributes", GoodsAttributes.creategoodsattr);

GoodsAttrRouter.delete("/goodsattributes/:id", GoodsAttributes.deletegoodsattr);

module.exports = GoodsAttrRouter;
