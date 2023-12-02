import mongoose, { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  role: "talent" | "user";
  email: string;
  password: string;
}

type Profile = {
  availability: string;
};

declare const BookingStatus: {
  pending: "pending";
  completed: "completed";
  modification: "modification";
  cancel: "cancel";
};

export interface BookingDocument extends Document {
  user: ObjectId;
  gigId: ObjectId;
  celebrant: string;
  celebrant_age?: string;
  message?: string;
  occasion?: string;
  booking_date?: Date | string;
  attacthment?: string;
  plan?: string;
  price?: number;
  status?: (typeof BookingStatus)[keyof typeof BookingStatus];
}

export interface ReviewDocument extends Document {
  user: ObjectId | string; // Reference to the User model
  booking: ObjectId | string; // Reference to the Booking model
  rating: number; // Rating value (1 to 5)
  comment?: string; // Optional comment
}

export interface VideoDocument extends Document {
  booking: string | BookingDocument;
  talent: string | UserDocument;
  videoUrl: string;
  duration: number; // Duration in seconds
  thubnail: string;
  createdDate: Date;
}
export interface TopicDoc extends Document {
  orderId: string;
  status: string;
  timestamp: Date;
  deadline: Date;
}

type Temp = {
  user: ObjectId;
  talent: ObjectId;
  from: {
    name: string;
    pronoun: string;
  };
  to: {
    name: string;
    pronoun: string;
  };
  celebrant: string;
  type: string;
  birthdate?: string | Date;
  age?: string;
  activity: string;
  addtionalMessage: string;
  attachment: string;
};

export interface TokenDoc extends Document {
  email: string;
  token: string;
  expirationTimestamp: Date;
}

export type Response<T> = {
  success: boolean;
  error?: string;
  data?: T;
};
export interface ChatDocument extends Document {}