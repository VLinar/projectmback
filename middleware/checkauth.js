module.exports = (req, res, next) => {
  req.user ? next() : res.status(401).json({ status: "error", msg: "No Auth" });
};