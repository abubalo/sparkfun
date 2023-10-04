import axios from "axios";
import { BookingDocument } from "../../../types";
import { makeApiRequest } from "./makeRequest";

const bookinApi = axios.create({
  baseURL: "http:localhost:3300/booking",
  withCredentials: true,
});

export const createBooking = (data: BookingDocument) => {
  makeApiRequest(() => bookinApi.post("/create", data));
};

export const getBooking = (bookingId) => {
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
