import { CustomHelpers } from "joi";
const objectId = (value: string, helpers: CustomHelpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value: string, helpers: CustomHelpers) => {
  if (value.length < 8) {
    return helpers.message("password must be at least 8 characters");
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message(
      "password must contain at least 1 letter and 1 number"
    );
  }
  return value;
};

const phone = (value: string, helpers: CustomHelpers) => {
  if (!value.match(/^1[3456789]\d{9}$/)) {
    return helpers.message("手机号码格式不正确");
  }
  return value;
};

export { objectId, password, phone };
