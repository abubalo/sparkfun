import axios from "axios";
import { BookingDocument } from "../../../../types";
import { makeApiRequest } from "../helpers/makeRequest";

const bookinApi = axios.create({
  baseURL: "http://localhost:5000/booking",
  withCredentials: true,
});

export type BookingData = BookingDocument
export const createBooking = (data: BookingData) => {
  makeApiRequest(() => bookinApi.post("/create", data));
};

export const getBooking = (bookingId: string) => {
  makeApiRequest(() => bookinApi.get(`/${bookingId}`));
};

export const deliverBooking = (bookingId: string) => {
  makeApiRequest(() => bookinApi.patch(`/${bookingId}`));
};

export const modifyBooking = (bookingId: string) => {
  makeApiRequest(() => bookinApi.patch(`/${bookingId}`));
};

export const cancelBooking = (bookingId: string) => {
  makeApiRequest(() => bookinApi.patch(`/${bookingId}`));
};
