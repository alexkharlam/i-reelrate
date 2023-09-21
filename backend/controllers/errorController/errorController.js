import {
  validationError,
  dublicateFields,
  castError,
  jwtError,
  jwtExpiredError,
} from "./handleSpecificErrors.js";

const sendErrorDev = (err, req, res) => {
  console.log(err);
  res.status(+err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

const sendErrorProd = (err, req, res) => {
  console.log("🛑 Error log ⬇️");
  console.log(err);

  if (err.isOperational) {
    res.status(+err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  if (!err.isOperational) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong! Try again later",
    });
  }
};

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  const env = process.env.NODE_ENV;
  if (env === "development") return sendErrorDev(err, req, res);
  if (env === "production") {
    if (err.name === "CastError") err = castError(err);
    if (err.name === "ValidationError") err = validationError(err);
    if (err.code === 11000) err = dublicateFields(err);
    if (err.name === "JsonWebTokenError") err = jwtError(err);
    if (err.name === "TokenExpiredError") err = jwtExpiredError(err);

    return sendErrorProd(err, req, res);
  }
};
