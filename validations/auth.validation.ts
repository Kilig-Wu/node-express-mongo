import Joi from "joi";
import { password, objectId } from "./custom.validation";

const loginValidate = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
export { loginValidate };
