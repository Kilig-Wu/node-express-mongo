import { Schema, model, Document, InferSchemaType } from "mongoose";

// export interface UserDocument extends Document {
//   name: string;
//   password: string;
//   gender: number;
//   createdAt: Date;
//   updatedAt: Date;
// }

let UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // 删除左右两边的空格
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: Number,
      enum: [1, 2], //1-男 2-女
    },
  },
  {
    timestamps: true,
  }
);
export type UserDocument = InferSchemaType<typeof UserSchema>;

let UserModel = model<UserDocument>("users", UserSchema);

export default UserModel;
