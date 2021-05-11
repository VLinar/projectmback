const Optionattributes = require("../models/optionsattr");

module.exports = class Optionattributesservices {
  getalloptionattr = async () => {
    return Optionattributes.findAll()
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
  getoneoptionattr = (Optionattributesid) => {
    return Optionattributes.findByPk(Optionattributesid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateoptionattr = (Optionattributesid, data) => {
    return Optionattributes.update(data, {
      where: {
        id: Optionattributesid,
      },
    })
      .then(async () => {
        const result = await this.getoneoptionattributesvalues(Optionattributesid);
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
  createoptionattr = (data) => {
    return Optionattributes.create(data)
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
  deloptionattr = (deleteid) => {
    return Optionattributes.destroy({
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
