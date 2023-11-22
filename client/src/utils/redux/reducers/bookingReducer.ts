import * as actionTypes from "../actions/actionTypes";
import { BookingDocument } from "../../../../../types";

type BookingAction = {
  type: string;
  payload: BookingDocument;
};

type BookingState = {
  bookings: BookingDocument[];
};

const initialState: BookingState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action: BookingAction) => {
  switch (action.type) {
    case actionTypes.ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case actionTypes.UPDATE_BOOKING_STATUS:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload.bookingId
            ? { ...booking, status: action.payload.status }
            : booking
        ),
      };
    default:
      return state;
  }
};

export default bookingReducer;
