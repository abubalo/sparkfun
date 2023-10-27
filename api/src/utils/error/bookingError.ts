import { MongooseError } from "mongoose";
import logger from "../../utils/lib/logger";
import { BookingNotFoundError, BookingUpdateError } from "./ErrorHandler";

// Handle booking-related errors and log them
export const handleBookingError = (error: Error) => {
  if (error instanceof MongooseError) {
    logger.error(`Mongoose Error: ${error.message}`);
  } else if (error instanceof BookingNotFoundError) {
    logger.error(error.message);
  } else if (error instanceof BookingUpdateError) {
    logger.error(error.message);
  } else {
    logger.error(`Unhandled booking error: ${error.message}`);
  }
};
