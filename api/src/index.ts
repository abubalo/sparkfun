import express from "express";
import mongoose from "mongoose";

import { config } from "./config/config";
import { Logging } from "./utils/lib/Logging";

import { authLimiter, userActionRateLimiter } from "./utils/limiter/rateLimiter";

import userRoutes from "./user/route";
import bookingRoutes from "./booking/route";
import videoRoutes from "./video/route";
import reviewRoutes from "./review/route";

import corsMiddleware from "./middleware/corsMiddleware";
import requestLog from "./middleware/requestLoggingMiddleware";
import verifyTokenMiddleware from "./middleware/verifyTokenMiddleware";

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

// Middleware for handling CORS
app.use(corsMiddleware);
// Middleware for handling request logs
app.use(requestLog);

// API routes
app.use("/user", authLimiter, userRoutes);
app.use(
  "/bookings",
  userActionRateLimiter,
  verifyTokenMiddleware,
  bookingRoutes
);

app.use("/video", userActionRateLimiter, videoRoutes);
app.use("/messages", userActionRateLimiter);
app.use("/review", reviewRoutes);

// Start the server if mongodb is connected
const startServer = () => {
  app.listen(config.server.port, () => {
    Logging.info(`Server is running on http://localhost:${config.server.port}`);
  });
};
