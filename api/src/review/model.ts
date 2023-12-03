import mongoose from "mongoose";
import { ReviewDocument } from "../../../types";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking", // Reference to the Booking model
      required: true,
    },
    rating: {
      type: Number,
      min: 1, // Minimum rating value
      max: 5, // Maximum rating value
      required: true,
    },
    comment: String, // Optional comment from the user
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Create a compound unique index on user and booking
reviewSchema.index({ user: 1, booking: 1 }, { unique: true });

const ReviewModel =
  mongoose.models?.Rewiew ||
  mongoose.model<ReviewDocument>("Review", reviewSchema);

export default ReviewModel;
