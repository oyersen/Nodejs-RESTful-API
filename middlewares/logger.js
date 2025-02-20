module.exports = (req, res, next) => {
  console.log(
    `${new Date().toUTCString()} - ${req.method} - ${req.hostname} - ${
      req.path
    }`
  );
  next();
};
