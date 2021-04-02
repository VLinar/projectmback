const Roles = require("../models/role");

module.exports = class Roleservices {
  getallrole = () => {
    return Roles.findAll()
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
  getonerole = (roleid) => {
    return Roles.findByPk(roleid)
      .then((res) => res)
      .catch((err) => err);
  };
  updaterole = (roleid, data) => {
    return Roles.update(data, {
      where: {
        id: roleid,
      },
    })
      .then(async (res) => {
        const result = await this.getonerole(roleid);
        return {
          status: "update",
          result: result,
        };
      })
      .catch((err) => err);
  };
  createrole = (data) => {
    return Roles.create(data)
      .then((res) => res)
      .catch((err) => err);
  };

  delstatus = (deleteid) => {
    return Roles.destroy({
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
