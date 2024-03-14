import UserModel from "../models/user.model";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { UserDocument } from "../models/user.model";

export const createUserService = async (
  userBody: Omit<UserDocument, "createdAt" | "updatedAt">
) => {
  return UserModel.create(userBody);
};
