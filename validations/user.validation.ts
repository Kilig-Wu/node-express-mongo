import Joi from "joi";
import { password, objectId, phone } from "./custom.validation";

const createUserValidate = {
  body: Joi.object().keys({
    username: Joi.string().required().alphanum().min(3).max(30),
    password: Joi.string().required().custom(password),
    phone: Joi.string().required().custom(phone),
    email: Joi.string().email(),
    gender: Joi.number(),
    name: Joi.string(),
    // role: Joi.string().required().valid("user", "admin"),
  }),
};
export { createUserValidate };
