import UserModel from "../models/user.model";
export const createUserService = async (userBody) => {
  return UserModel.create(userBody);
};
