const Measure = require("../models/measures");

module.exports = class Measureservices {
  getallmeasure = async () => {
    return Measure.findAll()
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
  getonemeasure = (measureid) => {
    return Measure.findByPk(measureid)
      .then((res) => res)
      .catch((err) => err);
  };
  updatemeasure = (measureid, data) => {
    return Measure.update(data, {
      where: {
        id: measureid,
      },
    })
      .then(async () => {
        const result = await this.getonemeasure(measureid);
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
  createmeasure = (data) => {
    return Measure.create(data)
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
  delmeasure = (deleteid) => {
    return Measure.destroy({
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
