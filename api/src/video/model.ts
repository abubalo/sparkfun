import mongoose from "mongoose";
import { BookingDocument } from "../../../types";

const videoSchema = new mongoose.Schema({
  booking: { type: mongoose.Types.ObjectId, required: true, ref: "Booking" },
  user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  talent: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  videoUrl: { type: String, required: true },
  duration: { type: Number, required: true }, // Duration in seconds
  createdDate: { type: Date, reuired: true },
  // Additional fields as needed
});

const VideoModel =
  mongoose.models?.Video ??
  mongoose.model<BookingDocument>("Video", videoSchema);

export default VideoModel;
