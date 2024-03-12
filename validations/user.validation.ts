import Joi from "joi";
import { password, objectId } from "./custom.validation";

const createUserValidate = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    // role: Joi.string().required().valid("user", "admin"),
  }),
};
export { createUserValidate };
