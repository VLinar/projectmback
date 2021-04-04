const express = require("express");
const productController = require("../controllers/products.js");
const productRouter = express.Router();

productRouter.get("/products", productController.products);

productRouter.get("/productscount", productController.productscount);

module.exports = productRouter;
