const AttributesValue = require("../models/attributesvalues");

module.exports = class Attr {
  getallattributevalues = async () => {
    return AttributesValue.findAll()
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
  getoneattributevalues = (attrvalid) => {
    return AttributesValue.findByPk(attrvalid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateattributevalues = (attrvalid, data) => {
    return AttributesValue.update(data, {
      where: {
        id: attrvalid,
      },
    })
      .then(async () => {
        const result = await this.getoneattributevalues(attrvalid);
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
  createattributevalues = (data) => {
    return AttributesValue.create(data)
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
  delattributevalues = (deleteid) => {
    return AttributesValue.destroy({
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
