import BookingModel from "booking/model";
import {
  bookingNotFoundError,
  handleServiceError,
} from "../utils/error/serviceError";
import logger from "../utils/lib/logger";
import { ReviewDocument } from "../../../types";
import ReviewModel from "./model";

export const writeReview = async (
  userId: string,
  bookingId: string,
  data: ReviewDocument
) => {
  try {
    const isBookingExist = await BookingModel.findById(bookingId);

    if (!isBookingExist) {
      bookingNotFoundError(bookingId);
    }
    const newReview = await ReviewModel.create(data);

    logger.info(`Review created by user with ${userId}.`);
    return newReview;
  } catch (error) {
    handleServiceError(error);
  }
};
