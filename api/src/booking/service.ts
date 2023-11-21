import logger from "../utils/lib/logger";
import { BookingDocument, Response } from "../../../types";
import BookingModel from "./model";

export default class BookingService {
  public static createBooking = async (
    data: BookingDocument
  ): Promise<Response<BookingDocument>> => {
    try {
      const newBooking = await BookingModel.create(data);
      console.log("New Booking: ", newBooking);

      logger.info(
        `Booking created by user: ${newBooking.user?.email} to Talent: ${newBooking.talent?.email}`
      );
      return { success: true, data: newBooking };
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}` };
    }
  };

  public static getBookingById = async (
    id: string
  ): Promise<Response<BookingDocument>> => {
    try {
      const bookingData = await BookingModel.findById(id);

      if (!bookingData) {
        logger.error(`No booking with the specified id: ${id}`);
        return { success: false, error: "No booking with the specified id" };
      }

      // Populate the 'talent' and 'user' fields separately
      // this.populateBookingFields(bookingData);

      logger.info(`Get booking data for user with id: ${id}`);
      return bookingData;
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}` };
    }
  };

  public static getBookingsByUserId = async (
    userId: string
  ): Promise<Response<BookingDocument[]>> => {
    try {
      const bookingData = await BookingModel.find({ userId });

      if (!bookingData) {
        return {
          success: false,
          error: `Error! Unable to fetch booking data with specified ID: ${userId}`,
        };
      }

      logger.info(`Get booking data for user with id: ${userId}`);
      return { data: bookingData, success: true };
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}`};
    }
  };

  public static deliverBooking = async (
    bookingId: string
  ): Promise<Response<BookingDocument>> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        return {
          success: false,
          error: `Error! Unable to fetch booking data with specified ID: ${bookingId}`,
        };
      }

      // Update the status to "completed"
      dataToUpdate.status = "completed";

      // Save the updated booking document
      await dataToUpdate.save();

      return dataToUpdate;
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}` };
    }
  };
  public static modifyBooking = async (
    bookingId: string
  ): Promise<Response<BookingDocument>> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        return {
          success: false,
          error: `Error! Unable to fetch booking data with specified ID: ${bookingId}`,
        };
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
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}` };
    }
  };

  public static cancelBooking = async (
    bookingId: string
  ): Promise<Response<BookingDocument>> => {
    try {
      // Find the booking by ID
      const dataToUpdate = await BookingModel.findById(bookingId);

      if (!dataToUpdate) {
        return {
          success: false,
          error: `Error! Unable to fetch booking data with specified ID: ${bookingId}`,
        };
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
    } catch (error: any) {
      return { success: false, error: `Service Error ${error.message}` };
    }
  };

  // private static populateBookingFields = async (
  //   booking: BookingDocument
  // ): Promise<void> => {
  //   (await booking.populate("talent")).populate("user");
  // };
}
