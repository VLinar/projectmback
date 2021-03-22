const Delivery = require("../models/delivery");

module.exports = class Deliveryservices {
  getalldelivery = async () => {
    return Delivery.findAll()
      .then((res) => {
        return {
          status: "success",
          response: res,
        };
      })
      .catch((err) => {
        return {
          status: "error",
          error_text: err,
        };
      });
  };
};
