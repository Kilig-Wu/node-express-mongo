import { Error as MongoServerError } from "mongoose";
import { NextFunction, Request, Response } from "express";
import createError, { isHttpError, HttpError } from "http-errors";

const errorHandler = (
  err: HttpError | MongoServerError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: HttpError;
  console.log(err);

  if (!isHttpError(err)) {
    //服务器端错误
    const statusCode =
      err.statusCode || err instanceof MongoServerError ? 400 : 500;
    error = createError(statusCode, err.message);
  } else {
    error = err;
  }
  let { statusCode, message } = error;
  res.sendError(message, statusCode);
};

export default errorHandler;
