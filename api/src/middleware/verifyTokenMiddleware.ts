import { Request, Response, NextFunction } from "express";
import verifyToken from "utils/auth/verifyToken";

const verifyTokenMiddleware = async (
  req: Request & { userId?: string },
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      res.status(401).json({ message: "Unauthorized: Tokon is missing" });
      return;
    }

    const decodedToken = await verifyToken(token);

    if (!decodedToken) {
      res.status(401).json("Unauthorized: token is invalid");
      return;
    }

    // Attach decodedToken.id to req for use in route handlers
    req.userId = decodedToken.id;

    next();
  } catch (error) {
    console.log("Error in user middleware: ", error);
    next(error);
  }
};

export default verifyTokenMiddleware;
