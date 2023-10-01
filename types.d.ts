import { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  role: "talent" | "user";
  email: string;
  password: string;
}

export interface BookingDocument extends Document {
  user: ObjectId;
  talent: ObjectId;
  bookingDate: Date;
  occasion: String;
  package: string;
  message: string;
  status: string;
  price: number;
}

export interface VideoDocument extends Document {
  booking: ObjectId; // Reference to the booking
  celebrity: ObjectId; // Reference to the celebrity (User)
  videoUrl: string;
  duration: number; // Duration in seconds
  thubnail: string;
  createdDate: Date;
  // Additional fields as needed
}

export interface ChatDocument extends Document {}
