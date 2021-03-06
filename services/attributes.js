const Attributes = require("../models/attributes");

module.exports = class Attr {
  getallattributes = async () => {
    return Attributes.findAll()
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
  getoneattributes = (attrid) => {
    return Attributes.findByPk(attrid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateattributes = (attrid, data) => {
    return Attributes.update(data, {
      where: {
        id: attrid,
      },
    })
      .then(async () => {
        const result = await this.getoneattributes(attrid);
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
  createattributes = (data) => {
    return Attributes.create(data)
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
  delattributes = (deleteid) => {
    return Attributes.destroy({
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
