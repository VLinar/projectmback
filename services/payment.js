const Payment = require("../models/payment");

module.exports = class Paymentservices {
  getallpayment = async () => {
    return Payment.findAll()
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
