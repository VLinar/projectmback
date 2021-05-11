const Optionattributesvalues = require("../models/optionattributesvalues");

module.exports = class Optionattributesvaluesservices {
  getalloptionattributesvalues = async () => {
    return Optionattributesvalues.findAll()
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
  getoneoptionattributesvalues = (Optionattributesvaluesid) => {
    return Optionattributesvalues.findByPk(Optionattributesvaluesid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateoptionattributesvalues = (Optionattributesvaluesid, data) => {
    return Optionattributesvalues.update(data, {
      where: {
        id: Optionattributesvaluesid,
      },
    })
      .then(async () => {
        const result = await this.getoneoptionattributesvalues(Optionattributesvaluesid);
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
  createoptionattributesvalues = (data) => {
    return Optionattributesvalues.create(data)
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
  deloptionattributesvalues = (deleteid) => {
    return Optionattributesvalues.destroy({
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
