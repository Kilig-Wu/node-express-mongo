import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { pick } from "lodash";

const validate =
  (schema: Record<string, any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object);
    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
      return next(createError(400, errorMessage));
    }
    Object.assign(req, value);
    return next();
  };

export default validate;
