import { config } from "../../config/config";
import * as jwt from "jsonwebtoken";
import { UserDocument, Response } from "../../../../types";

export default async function generateToken(
  user: Partial<UserDocument>
): Promise<Response<string>> {
  try {
    const payload = {
      sub: user._id,
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
      username: user.username,
    };

    const token = jwt.sign(payload, config.jwt.secret, {
      expiresIn: "24h",
    });

    return { success: true, data: token };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
