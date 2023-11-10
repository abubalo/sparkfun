import logger from "../utils/lib/logger";
import { BookingDocument } from "../../../types";
import BookingModel from "./model";
import {
  bookingNotFoundError,
  handleServiceError,
} from "../utils/error/serviceError";

export default class BookingService {
  public static createBooking = async (
    data: BookingDocument
  ): Promise<BookingDocument | undefined> => {
    try {
      const newBooking = await BookingModel.create(data);
      console.log("New Booking: ", newBooking);

      logger.info(
        `Booking created by user: ${newBooking.user?.email} to Talent: ${newBooking.talent?.email}`
      );
      return newBooking;
    } catch (error) {
      handleServiceError(error);
    }
  };

  public static getBookingById = async (
    id: string
  ): Promise<BookingDocument | undefined> => {
    try {
      const bookingData = await BookingModel.findById(id);

      if (!bookingData) {
        return undefined;
      }

      // Populate the 'talent' and 'user' fields separately
      // this.populateBookingFields(bookingData);

      logger.info(`Get booking data for user with id: ${id}`);
      return bookingData;
    } catch (error) {
      handleServiceError(error);
    }
  };

  public static getBookingsByUserId = async (
    userId: string
  ): Promise<BookingDocument[] | undefined> => {
    try {
      const bookingData = await BookingModel.find({ userId });

      if (!bookingData) {
        bookingNotFoundError(userId);
      }

      logger.info(`Get booking data for user with id: ${userId}`);
      return bookingData;
    } catch (error) {
      handleServiceError(error);
    }
  };

  public static deliverBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        bookingNotFoundError(bookingId);
      }

      // Update the status to "completed"
      dataToUpdate.status = "completed";

      // Save the updated booking document
      await dataToUpdate.save();

      return dataToUpdate;
    } catch (error) {
      handleServiceError(error);
    }
  };
  public static modifyBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        bookingNotFoundError(bookingId);
      }

      // Update the status to "cancel"
      dataToUpdate.status = "modification";

      // Log cancellation message
      logger.info(
        `Cancelation: user with email:${dataToUpdate.user?.email} successfully canceled booking`
      );
      // Save the updated booking document
      await dataToUpdate.save();

      return dataToUpdate;
    } catch (error) {
      handleServiceError(error);
    }
  };

  public static cancelBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        bookingNotFoundError(bookingId);
      }

      // Update status to "cancel"
      dataToUpdate.status = "cancel";

      // Log cancellation message
      logger.info(
        `Cancelation: user with email:${dataToUpdate.user?.email} successfully canceled booking`
      );
      // Save the updated booking document
      await dataToUpdate.save();

      return dataToUpdate;
    } catch (error) {
      handleServiceError(error);
    }
  };

  // private static populateBookingFields = async (
  //   booking: BookingDocument
  // ): Promise<void> => {
  //   (await booking.populate("talent")).populate("user");
  // };
}
