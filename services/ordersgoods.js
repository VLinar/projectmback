const Ordersgoods = require("../models/ordersgoods");

module.exports = class Ordersgoodsservices {
  getallordersgoods = async () => {
    return Ordersgoods.findAll()
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
  getoneordersgoods = (ordersgoodsid) => {
    return Ordersgoods.findByPk(ordersgoodsid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateordersgoods = (ordersgoodsid, data) => {
    return Ordersgoods.update(data, {
      where: {
        id: ordersgoodsid,
      },
    })
      .then(async () => {
        const result = await this.getoneorders(ordersgoodsid);
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
  createordersgoods = (data) => {
    return Ordersgoods.create(data)
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
  delorders = (deleteid) => {
    return Ordersgoods.destroy({
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