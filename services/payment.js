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
  getonepayment = (payid) => {
    return Payment.findByPk(payid)
      .then((res) => {
        return {
          status: "success",
          result: res,
        };
      })
      .catch((err) => err);
  };
  updatepayment = (payid, data) => {
    return Payment.update(data, {
      where: {
        id: payid,
      },
    })
      .then(async (res) => {
        const result = await this.getonepayment(payid);
        return {
          status: "updated",
          result: result.result,
        };
      })
      .catch((err) => {
        err.errors = err.errors.map((error) => {
          return {
            type: error.type,
            message: error.message,
          };
        });
        return {
          status: "error",
          errors_msg: err.errors,
        };
      });
  };

  createpayment = (data) => {
    return Payment.create(data)
      .then((res) => res)
      .catch((err) => {
        err.errors = err.errors.map((error) => {
          return {
            type: error.type,
            message: error.message,
          };
        });
        return err.errors;
      });
  };

  delpayment = (deleteid) => {
    return Payment.destroy({
      where: {
        id: deleteid,
      },
    })
      .then((res) => {
        return res != 0
          ? {
              status: "deleted",
            }
          : { status: "error", message: "элемент не найден" };
      })
      .catch((err) => err);
  };
};
