import { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  username: string;
  role: "talent" | "user";
  email: string;
  password: string;
}

declare const BookingStatus: {
  pending: "pending";
  completed: "completed";
  modification: "modification";
  cancel: "cancel";
};

export interface BookingDocument extends Document {
  user: ObjectId | UserDocument;
  talent: ObjectId | UserDocument;
  bookingDate: Date;
  occasion: string;
  plan?: string;
  message: string;
  price: number;
  status: (typeof BookingStatus)[keyof typeof BookingStatus];
}

export interface ReviewDocument extends Document {
  user: ObjectId | string; // Reference to the User model
  booking: ObjectId | string; // Reference to the Booking model
  rating: number; // Rating value (1 to 5)
  comment?: string; // Optional comment
}

export interface VideoDocument extends Document {
  booking: ObjectId | BookingDocument;
  talent: ObjectId | UserDocument;
  videoUrl: string;
  duration: number; // Duration in seconds
  thubnail: string;
  createdDate: Date;
}

export interface ChatDocument extends Document {}
