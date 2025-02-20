module.exports = (err, req, res, next) => {
  res.status(err.statusCode).json(err);
};

// module.exports = (err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const errorMessage = err.errorMessage || "Internal Server Error";
//   res.status(statusCode).json({ message: errorMessage });
// };
