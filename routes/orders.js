const express = require("express");
const Orders = require("../controllers/orders");
const ordersRouter = express.Router();

ordersRouter.get("/orders", Orders.getallorders);

ordersRouter.get("/myorders/:id", Orders.getallorder);

ordersRouter.get("/orders/:id", Orders.getoneorders);

ordersRouter.put("/orders/:id", Orders.updateorders);

ordersRouter.post("/orders", Orders.createorders);

ordersRouter.delete("/orders/:id", Orders.delorders);

module.exports = ordersRouter;
