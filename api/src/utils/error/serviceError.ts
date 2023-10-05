import { MongooseError } from "mongoose";
import logger from "../lib/logger";

/**
 * Handles service errors by logging them and throwing them up the call stack.
 * @param {unknown} error - The error object.
 */
export const handleServiceError = (error: unknown): void => {
  if (error instanceof MongooseError) {
    logger.error(`Service Error: ${error.message}`);
  } else {
    logger.error(`Service Error: ${error}`);
  }

  throw error; // Throw the error to be caught and handled at a higher level
};

const notFoundError = (id: string, message: string): void => {
  logger.error(`${message}: ${id}`);
  throw Error(`${message}: ${id}`);
};

export const bookingNotFoundError = (
  id: string,
  message = "Error! Unable to fetch booking data with ID"
) => notFoundError(id, message);


export const userNotFoundError = (
  id: string,
  message = "Error! Unable to fetch booking data with ID"
) => notFoundError(id, message);
