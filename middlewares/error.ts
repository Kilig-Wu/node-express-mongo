import { Error as MongooseError } from "mongoose";
import { NextFunction, Request, Response, Router } from "express";
import createError, { isHttpError, HttpError } from "http-errors";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: HttpError;
  if (!isHttpError(err)) {
    const statusCode =
      err.statusCode || err instanceof MongooseError ? 400 : 500;
    error = createError(statusCode, err.message);
  } else {
    error = err;
  }
  let { statusCode, message } = err;

  res.status(statusCode).send({
    code: statusCode,
    message,
  });
};

export default errorHandler;
