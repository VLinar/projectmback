const Optionsforgoods = require("../models/optionsforgoods");

module.exports = class Optionsforgoodsservices {
  getalloptionsforgoods = async () => {
    return Optionsforgoods.findAll()
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
  getoneoptionsforgoods = (Optionsforgoodssid) => {
    return Optionsforgoods.findByPk(Optionsforgoodssid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateoptionsforgoods = (Optionsforgoodssid, data) => {
    return Optionsforgoods.update(data, {
      where: {
        id: Optionsforgoodssid,
      },
    })
      .then(async () => {
        const result = await this.getoneoptionsforgoods(Optionsforgoodssid);
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
  createoptionsforgoods = (data) => {
    return Optionsforgoods.create(data)
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
  deloptionsforgoods = (deleteid) => {
    return Optionsforgoods.destroy({
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