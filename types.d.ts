import { Document, ObjectId } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  username: string;
  role: "talent" | "user";
  email: string;
  password: string;
}

export interface BookingDocument extends Document {
  user: ObjectId | UserDocument;
  talent: ObjectId | TalentDocument;
  bookingDate: Date;
  occasion: String;
  package: string;
  message: string;
  status: string;
  price: number;
}

export interface ReviewDocument extends Document{
  
}

export interface VideoDocument extends Document {
  booking: ObjectId | BookingDocument;
  talent: ObjectId | TalentDocument ; 
  videoUrl: string;
  duration: number; // Duration in seconds
  thubnail: string;
  createdDate: Date;

}

export interface ChatDocument extends Document {}
