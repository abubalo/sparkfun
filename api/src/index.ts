import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import compression from "compression";
import session from "express-session";
import csrf from "csrf";
import 'tsconfig-paths/register'

import { config } from "./config/config";
import { Logging } from "./utils/lib/Logging";

import {
  authLimiter,
  userActionRateLimiter,
} from "./utils/limiter/rateLimiter";

import userRoutes from "./user/route";
import bookingRoutes from "./booking/route";
import videoRoutes from "./video/route";
import reviewRoutes from "./review/route";

import corsMiddleware from "./middleware/corsMiddleware";
import requestLog from "./middleware/requestLoggingMiddleware";
import authToken from "./middleware/authToken";

const app = express();

// Initiate MongoDB connection
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to MongoDB!");
  })
  .catch((error) => {
    Logging.error("Unable to establish Database connection!");
    Logging.error(error);
  });

// Middleware to parse JSON request body
app.use(express.json());
// Apply compression middleware
app.use(compression());
// Middleware to parse cookie request header
app.use(cookieParser());
// app.use(session({
//   secret: "3434vdvdsde23",
//   resave: false,
//   saveUninitialized: true
// }))
// app.use(csrf())
// Middleware for handling CORS
app.use(corsMiddleware);
// Middleware for handling request logs
app.use(requestLog);

// // API routes
app.use("/user", authLimiter, userRoutes);

app.use("/booking", userActionRateLimiter, authToken, bookingRoutes);

app.use("/video", userActionRateLimiter, authToken, videoRoutes);
app.use("/messages", userActionRateLimiter, authToken);
app.use("/review", reviewRoutes, authToken);

app.listen(config.server.port, () => {
  Logging.info(`Server is running on http://localhost:${config.server.port}`);
});
