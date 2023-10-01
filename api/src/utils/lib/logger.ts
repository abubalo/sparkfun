import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "blue",
});

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),

  transports: [
    // Console transport with colored output
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),

    // Daily rotating file transport for combined logs
    new DailyRotateFile({
      filename: "logs/%DATE%-combined.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "info", // Log info level and above to this file
    }),

    // Error log file
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),

    // Success log file
    new winston.transports.File({
      filename: "logs/success.log",
      level: "info",
    }),

    // Store all logs in a single file
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],

  // Exit process after logging unhandled exceptions or rejections
  exitOnError: false,
});

// Log unhandled exceptions and promise rejections
logger.exceptions.handle(
  new winston.transports.File({ filename: "logs/exceptions.log" })
);
process.on("unhandledRejection", (ex) => {
  throw ex;
});

export default logger;
