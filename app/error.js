const notFoundHandler = (req, res, next) => {
  const error = new Error("Resource Not Found !!!");
  error.status = 404;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "Something went Wrong !!!" });
};

module.exports = { notFoundHandler, errorHandler };
