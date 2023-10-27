import { MongooseError } from "mongoose";

export class CustomValidationError extends Error {
  message: string;
  statusCode: number;
  constructor(message: string) {
    super(message);

    this.name = "CustomValidationError";
    this.message = message;
    this.statusCode = 400;
  }
}

export class DatabaseError extends MongooseError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
    this.statusCode = 500;
  }
}

// Custom error classes
export class BookingNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BookingNotFoundError";
  }
}

export class BookingUpdateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BookingUpdateError";
  }
}

