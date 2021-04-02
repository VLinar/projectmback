const User = require("../models/users.js");

module.exports = class Userservices {
  getalluser = async () => {
    return User.findAll()
      .then((res) => res)
      .catch((err) => err);
  };
  getoneusers = async (userid) => {
    return User.findByPk(userid)
      .then((res) => res)
      .catch((err) => err);
  };
  updateusers = async (userid, data) => {
    return User.update(data, {
      where: {
        id: userid,
      },
    })
      .then(async () => {
        const result = await this.getoneusers(userid);
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
      });
  };

  createusers = (data) => {
    return User.create(data)
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

  delusers = (deleteid) => {
    return User.destroy({
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
