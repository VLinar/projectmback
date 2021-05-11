const GoodsAttributes = require("../models/goodsattr");

module.exports = class GoodsAttr {
  getallgoodsattributes = async () => {
    return GoodsAttributes.findAll()
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
  getonegoodsattributes = (goodattrid) => {
    return GoodsAttributes.findByPk(goodattrid)
      .then((res) => res)
      .catch((err) => err);
  };
  updategoodsattributes = (goodattrid, data) => {
    return GoodsAttributes.update(data, {
      where: {
        id: goodattrid,
      },
    })
      .then(async () => {
        const result = await this.getonegoodsattributes(goodattrid);
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
  creategoodsattributes = (data) => {
    return GoodsAttributes.create(data)
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
  delgoodsattributes = (delid) => {
    return GoodsAttributes.destroy({
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
