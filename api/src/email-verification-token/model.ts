import mongoose, { Schema } from "mongoose";
import { TokenDoc } from "../../../types";

const verificationSchema = new Schema(
  {
    id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
    expirationTimestamp: { type: Date, required: true },
  },
  {
    versionKey: false,
  }
);

const VerificationModel =
  mongoose.models.Verification ||
  mongoose.model<TokenDoc>("Verification", verificationSchema);

export default VerificationModel;
