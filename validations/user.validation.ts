import Joi from "joi";
import { password, objectId } from "./custom.validation";

const createUserValidate = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required().custom(password),
    email: Joi.string().required().email(),
    gender: Joi.number().required(),
    // role: Joi.string().required().valid("user", "admin"),
  }),
};
export { createUserValidate };
