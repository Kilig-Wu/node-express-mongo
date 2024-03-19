import UserModel from "@/models/user.model";
import { UserDocument } from "@/models/user.model";
import { findUserService } from "./user.service";
import createError, { isHttpError, HttpError } from "http-errors";

export const loginService = async (
  userBody: Pick<UserDocument, "username" | "password">
) => {
  const user = await findUserService({ username: userBody.username.trim() });
  console.log(user);

  if (user) {
    return user;
  } else {
    throw createError(400, "用户不存在");
  }
};
