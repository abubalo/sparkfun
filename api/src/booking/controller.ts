import { Request, Response } from "express";
import { validateBookingInput } from "../utils/validation/bookingValidation";
import BookingService from "./service";

interface ExtendedRequest extends Request {
  userId?: string;
  role?: string;
}

// Create a standardized response format
const sendResponse = <T>(res: Response, data: T, status = 200) => {
  res.status(status).json(data);
};

export const createBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const validateData = validateBookingInput(req.body);
    const { isValid, data, errors } = validateData;

    if (!isValid) {
      return sendResponse(
        res,
        { error: "Validation failed", details: errors },
        422
      );
    }

    if (!data) {
      return sendResponse(res, { error: "Data is missing" }, 422);
    }

    const {data:userData, error, success} = await BookingService.createBooking(data as any);

    if (!success) {
      return sendResponse(
        res,
        { error: "Error creating booking, please try again" },
        500
      );
    }

    sendResponse(res, userData, 201);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const getBookingById = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = req.params.id;
    const {data, error} = await BookingService.getBookingById(bookingId);

    if (!data) {
      return sendResponse(res, { error: "Booking not found" }, 404);
    }

    sendResponse(res, data, 200);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const getAllBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return sendResponse(res, { error: "User ID is missing" }, 422);
    }

    const {data, success} = await BookingService.getBookingsByUserId(userId);

    if (!success) {
      return sendResponse(
        res,
        { error: "User does not have any bookings" },
        404
      );
    }

    sendResponse(res, data, 200);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const deliverBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = req.params.id;
    const {data} = await BookingService.deliverBooking(bookingId);

    if (!data) {
      return sendResponse(res, { error: "Booking not found" }, 404);
    }

    sendResponse(res, { success: true }, 204);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const cancelBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = req.params.id;
    const {data} = await BookingService.cancelBooking(bookingId);

    if (!data) {
      return sendResponse(res, { error: "Booking not found" }, 404);
    }

    sendResponse(res, { success: true }, 204);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const modifyBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = req.params.id;
    const {data} = await BookingService.modifyBooking(bookingId);

    if (!data) {
      return sendResponse(res, { error: "Booking not found" }, 404);
    }

    sendResponse(res, { success: true }, 204);
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};

export const archiveBooking = async (
  req: ExtendedRequest,
  res: Response
): Promise<void> => {
  try {
    const bookingId = req.params.id;
  } catch (error) {
    sendResponse(res, { error: "Internal server error" }, 500);
  }
};
