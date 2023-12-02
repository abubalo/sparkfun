import apiClient from "@utils/helpers/apiClient";
import { BookingDocument } from "../../../../types";
import { makeApiRequest } from "../helpers/makeRequest";

export type BookingData = BookingDocument
export const createBooking = (data: BookingData) => {
  makeApiRequest(() => apiClient.post("/booking/create", data));
};

export const getBooking = (bookingId: string) => {
  makeApiRequest(() => apiClient.get(`/booking/${bookingId}`));
};

export const deliverBooking = (bookingId: string) => {
  makeApiRequest(() => apiClient.patch(`/booking/${bookingId}`));
};

export const modifyBooking = (bookingId: string) => {
  makeApiRequest(() => apiClient.patch(`/booking/${bookingId}`));
};

export const cancelBooking = (bookingId: string) => {
  makeApiRequest(() => apiClient.patch(`/booking/${bookingId}`));
};
