const logger = (req, res, next) => {
  console.log("Middleware bna");
  req.miniiName = "Azures";
  next();
};
module.exports = logger;
