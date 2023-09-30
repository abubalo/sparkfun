import { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

export interface BookingDocument extends Document {
  fan: ObjectId; // Reference to the fan (User)
  celebrity: ObjectId; // Reference to the celebrity (User)
  bookingDate: Date;
  occasion: String;
  message: String;
  status: String;
  price: Number;
}

export interface VideoDocument extends Document {
  booking: ObjectId; // Reference to the booking
  celebrity: ObjectId; // Reference to the celebrity (User)
  videoUrl: String;
  duration: Number; // Duration in seconds
  createdDate: Date;
  // Additional fields as needed
}
