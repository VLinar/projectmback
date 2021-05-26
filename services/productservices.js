const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Products = require("../models/products.js");
const Measures = require("../models/measures");
const Groups = require("../models/goodgroups.js");

const GoodsAttr = require("../models/goodsattr");
const Optionsforgoods = require("../models/optionsforgoods");
const Attributes = require("../models/attributes");
const Images = require("../models/image");
const Attributesvalue = require("../models/attributesvalues");
const Optionsattr = require("../models/optionsattr");
const Optionattributesvalue = require("../models/optionattributesvalues");

module.exports = class Productservices {
  search = (text) => {
    if (!text) {
      return {
        status: "success",
        response: [],
      };
    }
    return Products.findAll({
      where: {
        name: {
          [Op.like]: `%${text}%`,
        },
      },
    })
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

  getallproducts = (limits, pages, order_by) => {
    if (!limits) {
      limits = 250;
    }
    if (!pages) {
      pages = 1;
    }
    if (!order_by) {
      order_by = "ASC";
    }

    const page = parseInt(pages);
    const limit = parseInt(limits);

    const startIndex = (page - 1) * limit;

    return Products.findAll({
      include: [
        { model: Groups },
        { model: Measures },
        { model: Images },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
        // {
        //   model: Optionsforgoods,
        //   as: "params",
        //   attributes: ["optionattributesvalueId", "optionatributeId"],
        // },
      ],
      order: [["name", order_by]],
      offset: startIndex,
      limit: limits,
    })
      .then(async (res) => {
        let result = await this.getAttrGoods(res);
        return {
          status: "success",
          result: result,
        };
      })
      .catch((err) => {
        if (err.parent.code === "42703") {
          return {
            status: err.parent.routine,
            error: "Поле(я) содержат некорректные значения",
          };
        }
      });
  };

  getallproductsid = (limits, pages, order_by, groupsid) => {
    console.log(limits, pages);
    if (!limits) {
      limits = 250;
    }
    if (!pages) {
      pages = 1;
    }
    if (!order_by) {
      order_by = "ASC";
    }

    const page = parseInt(pages);
    const limit = parseInt(limits);

    const startIndex = (page - 1) * limit;

    console.log(startIndex);

    return Products.findAll({
      include: [
        { model: Groups },
        { model: Measures },
        { model: Images },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
        // {
        //   model: Optionsforgoods,
        //   as: "params",
        //   attributes: ["optionattributesvalueId", "optionatributeId"],
        // },
      ],
      order: [["name", order_by]],
      offset: startIndex,
      limit: limit,
      where: {
        groupId: groupsid,
      },
    })
      .then(async (res) => {
        let result = await this.getAttrGoods(res);
        return {
          status: "success",
          result: result,
        };
      })
      .catch((err) => {
        if (err.parent.code === "42703") {
          return {
            status: err.parent.routine,
            error: "Поле(я) содержат некорректные значения",
          };
        }
      });
  };

  getoneproduct = (id) => {
    let oneprodarray = [];
    return Products.findByPk(id, {
      include: [
        { model: Groups },
        { model: Measures },
        { model: Images },
        {
          model: GoodsAttr,
          as: "params",
          attributes: ["attrvalueId", "atributeId"],
        },
        // {
        //   model: Optionsforgoods,
        //   as: "params",
        //   attributes: ["optionattributesvalueId", "optionatributeId"],
        // },
      ],
    })
      .then(async (res) => {
        oneprodarray.push(res);
        let result = await this.getAttrGoods(oneprodarray);
        return {
          status: "success",
          result: result,
        };
      })
      .catch((err) => err);
  };

  getproductscount = (id) => {
    return Products.count({
      where: {
        groupId: id,
      },
    })
      .then((res) => {
        return {
          status: "success",
          count: res,
        };
      })
      .catch((err) => err);
  };

  getallproductscount = () => {
    return Products.count()
      .then((res) => {
        return {
          status: "success",
          count: res,
        };
      })
      .catch((err) => err);
  };

  createproduct = (data) => {
    return Products.create(data)
      .then((res) => res)
      .catch((err) => err);
  };

  updateproduct = (prodid, data) => {
    return Products.update(data, {
      where: {
        id: prodid,
      },
    })
      .then((res) => res)
      .catch((err) => err);
  };

  delproducts = (deleteid) => {
    return Products.destroy({
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

  // Метод для слияния атрибутов в основной объект
  getAttrGoods = async (obj) => {
    return Promise.all(
      obj.map(async (el) => {
        let newmass = [];

        for (let i = 0; i < el.params.length; i++) {
          newmass.push({
            name: await Attributes.findByPk(el.params[i].atributeId).then(
              (r) => r.name
            ),
            value: await Attributesvalue.findByPk(
              el.params[i].attrvalueId
            ).then((r) => r.value),
          });
        }

        el.setDataValue("paramsvalue", newmass);

        return el;
      })
    );
  };
};
