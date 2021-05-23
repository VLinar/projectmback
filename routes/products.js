const express = require("express");
const productController = require("../controllers/products.js");
const productRouter = express.Router();

productRouter.get("/products", productController.products);
productRouter.get("/products/:id", productController.product);

productRouter.get("/productscount/:id", productController.productscount);

productRouter.get("/search", productController.searc);
productRouter.get("/productsid/:id", productController.productsid);

module.exports = productRouter;
