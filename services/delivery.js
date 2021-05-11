const Delivery = require("../models/delivery.js");

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
  getonedelivery = (deliveryid) => {
    return Delivery.findByPk(deliveryid)
      .then((res) => res)
      .catch((err) => err);
  };
  updatedelivery = (deliveryid, data) => {
    return Delivery.update(data, {
      where: {
        id: deliveryid,
      },
    })
      .then(async () => {
        const result = await this.getonedelivery(deliveryid);
        return {
          status: "updated",
          result: result,
        };
      })
      .catch((err) => {
        err.original.detail
          ? (err.errors = err.original.detail)
          : (err.errors = err.errors.map((error) => {
              return {
                type: error.type,
                message: error.message,
              };
            }));

        return {
          status: "error",
          errors_msg: err.errors,
        };
      });
  };
  createdelivery = (data) => {
    return Delivery.create(data)
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
  deldelivery = (deleteid) => {
    return Delivery.destroy({
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
