import { Request, Response, NextFunction } from "express";
import corsConfig from "../config/cors-config"



const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {allowedOrigins, allowedHeaders, allowedMethods} = corsConfig;

  res.header("Access-Control-Allow-Origin", allowedOrigins);
  
  res.header(
    "Access-Control-Allow-Headers",
    allowedHeaders
  );
  res.header(
    "Access-Control-Allow-Credentials",
    "true"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", allowedMethods);
    return res.status(200).json({});
  }
  

  next();
};

export default corsMiddleware;
