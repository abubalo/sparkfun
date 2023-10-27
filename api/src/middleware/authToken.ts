import { Request, Response, NextFunction } from "express";
import { Logging } from "../utils/lib/Logging";
import verifyToken from "../utils/auth/verifyToken";

const authToken = async (
  req: Request & { userId?: string, role?: string },
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.cookies.token;
    const token = req.header("Authorization")?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: "Unauthorized: Token is missing" });
      return;
    }


    const decodedToken = await verifyToken(token);

    if (!decodedToken) {
      res.status(401).json("Unauthorized: token is invalid");
      return;
    }

    // Attach user id and role to request body for use in route handlers
    req.userId = decodedToken.id;
    req.role = decodedToken.role;

    next();
  } catch (error: any) {
    Logging.error(`Error in user middleware: ", ${error.message}`);
    next(error);
  }
};

export default authToken;
