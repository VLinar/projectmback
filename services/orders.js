const Orders = require("../models/orders");
const Payment = require("../models/payment");
const Statuses = require("../models/statuses");
const Ordersgoodsservices = require("./ordersgoods");

const Ordergoods = new Ordersgoodsservices();

module.exports = class Ordersservices {
  getallorders = async () => {
    return Orders.findAll()
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

  getallorder = (userid) => {
    return Orders.findAll({
      where: {
        userId: userid,
      },
      include: [{ model: Statuses }, { model: Payment }],
    })
      .then((res) => {
        return Promise.all(
          res.map(async (e) => {
            await Ordergoods.getordergoodsonorderid(e.id).then((resp) => {
              e.setDataValue("products", resp);
            });
            return e;
          })
        );
      })
      .catch((err) => {
        return {
          status: "error",
          error_text: err,
        };
      });
  };

  getoneorders = (ordersid) => {
    return Orders.findByPk(ordersid)
      .then((res) => res)
      .catch((err) => err);
  };

  updateorders = (ordersid, data) => {
    return Orders.update(data, {
      where: {
        id: ordersid,
      },
    })
      .then(async () => {
        const result = await this.getoneorders(ordersid);
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
  createorders = (data) => {
    return Orders.create(data)
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
    return Orders.destroy({
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
