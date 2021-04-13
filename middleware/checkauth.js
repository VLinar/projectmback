module.exports = (req, res, next) => {
  req.method === "GET" &&
  (req._parsedUrl.pathname === "/groups" ||
    req._parsedUrl.pathname === "/products")
    ? next()
    : req.user
    ? next()
    : res.status(401).json({ status: "error", msg: "No Auth" });
};
