import crypto from "crypto";
import { Request, Response } from "express";
import VerificationModel from "./model";
import UserService from "@/user/service";
import { sendEmailVerification } from "./sendEmailVerification";

const generateVerificationToken = (email: string, expirationHours = 6) => {
  const token = crypto.randomBytes(15).toString("hex");
  const hoursInMillisecounds = 360000;
  const expirationTime = Date.now() + expirationHours * hoursInMillisecounds; //Set token expiration time to six hours

  return { email, token, expirationTime };
};

const handleSuccess = (res: Response, message: string, status?: number) => {
  return res.status(status ?? 200).json({ success: message });
};

const handleError = (res: Response, status: number, message: string) => {
  return res.status(status).json({ error: message });
};

const registerUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const tokenString = generateVerificationToken(email);

    const { token } = await VerificationModel.create(tokenString);
    await sendEmailVerification(email, token);
    handleSuccess(res, "Email verification sent");
  } catch (error) {
    handleError(res, 500, "Failed to register user");
  }
};

const verifyUser = async (req: Request, res: Response) => {
  try {
    const _token = req.params.id;
    const { token, expirationTime, email } = await VerificationModel.findOne({
      _token,
    });

    if (!token || expirationTime < Date.now()) {
      return handleError(res, 401, "Token is invalid or expired");
    }

    await UserService.updateVerificationStatus(email);

    handleSuccess(res, "User successfully verified");
  } catch (error) {
    handleError(res, 500, "Internal Server Error");
  }
};

export { registerUser, verifyUser };
