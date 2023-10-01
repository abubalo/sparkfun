import { config } from "config/config";
import * as jwt from "jsonwebtoken";
import UserModel from "user/model";

export default async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret) as { id: string };
    const userId = decoded.id;

    const user = await UserModel.findById(userId);

    if(!user){
      return;
    }

    return user;
  } catch (error) {
    throw new Error("Unable to verify token");
  }
}
