module.exports = function (req, res, next) {
  //добавить обработку для разных ролей
  //1 - гость, 2 - авторизован, 3 - админ

  if (req.headers.authorization) {
    if (
      req.method === "POST" &&
      (req._parsedUrl.pathname === "/orders" ||
        req._parsedUrl.pathname === "/ordergoods") &&
      req.user.roleId === 1
    ) {
      next();
    }
    if (
      req.method === "POST" ||
      req.method === "GET" ||
      (req.method === "PUT" &&
        (req._parsedUrl.pathname === "/orders" ||
          req._parsedUrl.pathname === "/ordergoods/*" ||
          req._parsedUrl.pathname === "/user") &&
        req.user.roleId === 2)
    ) {
      next();
    }
    req.user.roleId === 3; //полные права
  }
};
