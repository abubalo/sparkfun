import { Request, Response, NextFunction } from "express";
import { Logging } from "../utils/lib/Logging";
import verifyToken from "../utils/auth/verifyToken";

const authToken = async (
  req: Request & { userId?: string; role?: string },
  res: Response,
  next: NextFunction
) => {
  try {
    const cookies = req.headers.cookie; // Get the entire cookie string

    if (!cookies) {
      res.status(401).json({ message: "Unauthorized: Cookies are missing" });
      return;
    }

    // Split the cookie string into individual cookies
    const cookiePairs = cookies.split(";");

    // Find the cookie that starts with "token="
    const tokenPair = cookiePairs.find((pair) =>
      pair.trim().startsWith("token=")
    );

    if (!tokenPair) {
      res.status(401).json({ message: "Unauthorized: Token is missing" });
      return;
    }

    // Extract the token value after the "=" sign
    const token = tokenPair.split("=")[1];

    const { user, error, success } = await verifyToken(token.trim());

    if (!user) {
      res.status(401).json({ message: error });
      return;
    }

    // Attach user id and role to request body for use in route handlers
    req.userId = user.id;
    req.role = user.role;

    next();
  } catch (error) {
    Logging.error(`Error in user middleware: ${error}`);
    next(error);
  }
};

export default authToken;
