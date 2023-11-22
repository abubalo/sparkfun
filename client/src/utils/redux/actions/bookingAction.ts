import { BookingDocument } from "@types/index";
import * as actionTypes from "./actionTypes";

export const addBooking = (booking: BookingDocument) => ({
  type: actionTypes.ADD_BOOKING,
  payload: booking,
});

export const getBooking = (booking: BookingDocument) => ({
  type: actionTypes.GET_BOOKING,
  payload: booking,
});

export const updateBookingStatus = (
  bookingId: string,
  status: BookingDocument["status"]
) => ({
  type: actionTypes.UPDATE_BOOKING_STATUS,
  payload: { bookingId, status },
});
