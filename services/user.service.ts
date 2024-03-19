import UserModel from "@/models/user.model";
import { Document, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { UserDocument } from "@/models/user.model";

export const findUserService = async (query: FilterQuery<UserDocument>) => {
  return UserModel.findOne(query).lean().exec();
};

export const createUserService = async (
  input: Document<Omit<UserDocument, "createdAt" | "updatedAt">>
) => {
  return UserModel.create(input);
};
