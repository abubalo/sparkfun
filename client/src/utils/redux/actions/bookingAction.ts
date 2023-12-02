import { BookingDocument } from "@types/index";
import {GET_BOOKING, ADD_BOOKING, UPDATE_BOOKING_STATUS} from "./actionTypes";

export const addBooking = (booking: BookingDocument) => ({
  type: ADD_BOOKING,
  payload: booking,
}) as const;

export const getBooking = (booking: BookingDocument) => ({
  type: GET_BOOKING,
  payload: booking,
}) as const;

export const updateBookingStatus = (
  bookingId: string,
  status: BookingDocument["status"]
) => ({
  type: UPDATE_BOOKING_STATUS,
  payload: { bookingId, status },
}) as const;
