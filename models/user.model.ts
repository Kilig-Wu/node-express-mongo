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
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: Number,
      required: true,
      enum: [1, 2], //1-男 2-女
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
export type UserDocument = InferSchemaType<typeof UserSchema>;

let UserModel = model<UserDocument>("users", UserSchema);

export default UserModel;
