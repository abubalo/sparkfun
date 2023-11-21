import { Request, Response, NextFunction } from "express";
import { Logging } from "../utils/lib/Logging";

// Middleware for request logging
const requestLog = (req: Request, res: Response, next: NextFunction) => {
  // Log the Request
  Logging.info(
    `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    // Log the Response
    Logging.info(
      `Outgoing -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });

  next();
};

export default requestLog;
