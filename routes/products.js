const express = require("express");
const productController = require("../controllers/products.js");
const productRouter = express.Router();

productRouter.get("/products", productController.products);
productRouter.get("/products/:id", productController.product);

productRouter.get("/productscount/:id", productController.productscount);

productRouter.get("/search", productController.searc);
productRouter.get("/productsid/:id", productController.productsid);

productRouter.get("/productscount", productController.allproductscount);

productRouter.post("/product", productController.createprod);

productRouter.put("/product/:id", productController.updateproduct);

productRouter.delete("/product/:id", productController.delproduct);

module.exports = productRouter;
