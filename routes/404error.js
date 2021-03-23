const express = require("express");
const ErrorServices = require("../controllers/404error");
const Error_404 = express.Router();

Error_404.get("/*", ErrorServices.geterror);
Error_404.delete("/*", ErrorServices.geterror);
Error_404.put("/*", ErrorServices.geterror);
Error_404.post("/*", ErrorServices.geterror);

module.exports = Error_404;
