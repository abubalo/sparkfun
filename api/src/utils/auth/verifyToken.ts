import { config } from "../../config/config";
import * as jwt from "jsonwebtoken";
import UserModel from "../../user/model";
import { UserDocument, Response } from "../../../../types";

export default async function verifyToken(token: string): Promise<Response<Partial<UserDocument>>> {
  try {
    const decoded = jwt.verify(token, config.jwt.secret) as { id: string };
    const userId = decoded.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return { error: "User does not exist", success: false };
    }

    return { data:user, success: true };
  } catch (error) {
    return { error: "Unable to verify token", success: false };
  }
}
