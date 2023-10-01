import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { config } from "../src/config/config";
import { Logging } from "./utils/lib/Logging";

const app = express();

// Initiate MongoDB connection
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to MongoDB!");
    startServer();
  })
  .catch((error) => {
    Logging.error("Unable to establish Database connection!");
    Logging.error(error);
  });

// Middleware for request logging
app.use((req: Request, res: Response, next: NextFunction) => {
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
});

// Middleware for handling CORS
const whiteList =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://sparkfun.vercel.app";

app.use((req: Request, res: Response, next: NextFunction) => {
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
});

// Define routes and other middleware
app.use("/user");
app.use("/booking");
app.use("/video");

// Start the server
const startServer = () => {
  app.listen(config.server.port, () => {
    Logging.info(`Server is running on http://localhost:${config.server.port}`);
  });
};
