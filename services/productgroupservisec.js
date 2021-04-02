const Groups = require("../models/goodgroups.js");

module.exports = class Groupservices {
  getallgroups = async () => {
    return Groups.findAll()
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
  getonegroup = (groupid) => {
    return Groups.findByPk(groupid)
      .then((res) => res)
      .catch((err) => err);
  };

  updategroups = (groupid, data) => {
    return Groups.update(data, {
      where: {
        id: groupid,
      },
    })
      .then(async (res) => {
        const result = await this.getonegroup(groupid);
        return {
          status: "updated",
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
        s;
      });
  };
  creategroups = (data) => {
    return Groups.create(data)
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

  delgroups = (deleteid) => {
    return Groups.destroy({
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
