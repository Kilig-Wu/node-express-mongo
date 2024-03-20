import UserModel from "@/models/user.model";
import { UserDocument } from "@/models/user.model";
import { findUserService } from "./user.service";
import createError, { isHttpError, HttpError } from "http-errors";

export const loginService = async (
  userBody: Pick<UserDocument, "username" | "password">
) => {
  const user = await findUserService({ username: userBody.username.trim() });
  //TODO:解密后的密码和数据库能对上

  if (!user || user?.password !== userBody.password) {
    throw createError(400, "用户名/密码错误");
  }

  return user;
};
