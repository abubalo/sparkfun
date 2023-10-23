import mongoose from "mongoose";
import { BookingDocument } from "../../../types";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  talent: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  bookingDate: { type: Date, required: true },
  occasion: { type: String, required: true },
  plan: { type: String},
  message: { type: String, required: true },
  status: { type: String, default: "pending", required: true },
  price: { type: Number, required: true },
},{
  versionKey: false
});

const BookingModel =
  mongoose.models.Booking ??
  mongoose.model<BookingDocument>("Booking", bookingSchema);

export default BookingModel;
