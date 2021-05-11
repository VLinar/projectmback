const Refresh = require("../models/refresh");

module.exports = class Refreshservices {
  addrefresh = (newref) => {
    return Refresh.create(newref)
      .then((res) => res)
      .catch((err) => err);
  };
  findrefresh = async (refr) => {
    return await Refresh.findOne({
      where: {
        refreshtoken: refr,
      },
    })
      .then((res) => {
        return !res ? { status: "Not Found" } : res;
      })
      .catch((err) => err);
  };
  deleterefresh = (delid) => {
    return Refresh.destroy({
      where: {
        id: delid,
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
