const express = require("express");
const Ordersgoods = require("../controllers/ordersgoods");
const ordersgoodsRouter = express.Router();

ordersgoodsRouter.get("/ordersgoods", Ordersgoods.getallordersgoods);
ordersgoodsRouter.get("/ordersgoods/:id", Ordersgoods.getoneordersgoods);

ordersgoodsRouter.put("/ordersgoods/:id", Ordersgoods.updateordersgoods);

ordersgoodsRouter.post("/ordersgoods", Ordersgoods.createordersgoods);

ordersgoodsRouter.delete("/ordersgoods/:id", Ordersgoods.delordersgoods);

module.exports = ordersgoodsRouter;