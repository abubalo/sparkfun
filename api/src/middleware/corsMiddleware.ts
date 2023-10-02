import { Request, Response, NextFunction } from "express";

const whiteList =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://sparkfun.vercel.app";

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", whiteList);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }

  next();
};

export default corsMiddleware;
