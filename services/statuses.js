const Statuses = require("../models/statuses");

module.exports = class Statuseservices {
  getallstatuses = async () => {
    return Statuses.findAll()
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
  getonestatus = (id) => {
    return Statuses.findByPk(id)
      .then((res) => res)
      .catch((err) => err);
  };
  updatestatus = (id, data) => {
    return Statuses.update(data, {
      where: {
        id: id,
      },
    })
      .then(async () => {
        const result = await this.getonestatus(id);
        return {
          status: "update",
          result: result,
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
  createstatus = (data) => {
    return Statuses.create(data)
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

  delstatus = (deleteid) => {
    return Statuses.destroy({
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
