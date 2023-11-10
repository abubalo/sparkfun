import mongoose from "mongoose";
import { UserDocument } from "../../../types";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, default: "user" },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
