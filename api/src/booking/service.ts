import { MongooseError } from "mongoose";
import logger from "../utils/lib/logger";
import { BookingDocument } from "../../../types";
import BookingModel from "./model";

export default class BookingService {
  /**
   * Handles service errors by logging them and throwing them up the call stack.
   * @param {unknown} error - The error object.
   */
  private static handleServiceError = (error: unknown): void => {
    if (error instanceof MongooseError) {
      logger.error(`Service Error: ${error.message}`);
    } else {
      logger.error(`Service Error: ${error}`);
    }

    throw error; // Throw the error to be caught and handled at a higher level
  };

  private static bookingNotFoundError = (id: string): void => {
    logger.error(`Error! Unable to fetch booking data with ID: ${id}`);
    throw Error(`Error! Unable to fetch booking data with ID: ${id}`);
  };

  public static createBooking = async (
    data: BookingDocument
  ): Promise<BookingDocument | undefined> => {
    try {
      const newBooking = await BookingModel.create(data);

      this.populateBookingFields(newBooking);

      logger.info(
        `Booking created by user: ${newBooking.user?.email} to Talent: ${newBooking.talent?.email}`
      );
      return newBooking;
    } catch (error) {
      this.handleServiceError(error);
    }
  };

  public static getBookingById = async (
    id: string
  ): Promise<BookingDocument | undefined> => {
    try {
      const bookingData = await BookingModel.findById(id);

      if (!bookingData) {
        this.bookingNotFoundError(id);
      }

      // Populate the 'talent' and 'user' fields separately
      this.populateBookingFields(bookingData);

      logger.info(`Get booking data for user with id: ${id}`);
      return bookingData;
    } catch (error) {
      this.handleServiceError(error);
    }
  };

  public static getBookingsByUserId = async (
    userId: string
  ): Promise<BookingDocument[] | undefined> => {
    try {
      const bookingData = await BookingModel.find({ userId });

      if (!bookingData) {
        this.bookingNotFoundError(userId);
      }

      logger.info(`Get booking data for user with id: ${userId}`);
      return bookingData;
    } catch (error) {
      this.handleServiceError(error);
    }
  };

  public static deliverBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        this.bookingNotFoundError(bookingId);
      }

      // Update the status to "completed"
      dataToUpdate.status = "completed";

      // Save the updated booking document
      await dataToUpdate.save();

      return dataToUpdate;
    } catch (error) {
      this.handleServiceError(error);
    }
  };
  public static modifyBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        this.bookingNotFoundError(bookingId);
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
      this.handleServiceError(error);
    }
  };

  public static cancelBooking = async (
    bookingId: string
  ): Promise<BookingDocument | undefined> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        this.bookingNotFoundError(bookingId);
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
      this.handleServiceError(error);
    }
  };

  private static populateBookingFields = async (
    booking: BookingDocument
  ): Promise<void> => {
    (await booking.populate("talent")).populate("user");
  };
}
