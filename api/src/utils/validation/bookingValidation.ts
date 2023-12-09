import mongoose from "mongoose";
import { z, ZodError, TypeOf } from "zod";
import { BookingDocument } from "../../../../types";

const createBookingSchema = z.object({
  user: z.custom<mongoose.Types.ObjectId>(),
  gigId: z.custom<mongoose.Types.ObjectId>(),
  celebrant: z.string(),
  celebrantAge: z.string(),
  message: z.string(),
  bookingDate: z.union([z.date(), z.string()]),
  occasion: z.string(),
  plan: z.string().optional(),
  price: z.number(),
  status: z.string().default('pending'),
});


export type CreateBookingType = TypeOf<typeof createBookingSchema>;

export const validateBookingInput = <CreateBookingType>(data: BookingDocument) => {
  try {
    const validData = createBookingSchema.parse(data);
    return { isValid: true, data: validData };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, errors: error.errors };
    }

    // Handle unexpected error
    throw error;
  }
};
