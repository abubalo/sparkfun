import { config } from "config/config";
import * as jwt from "jsonwebtoken";
import { UserDocument } from "../../../../types";

export default async function generateToken(user: Partial<UserDocument>) {
  try {
    const payload = {
      sub: user._id,
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    };

    const token = jwt.sign(payload, config.jwt.secret, {
      expiresIn: "24h",
    });

    return token;
  } catch (error) {
    throw new Error("Unable to generate token");
  }
}
