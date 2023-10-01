import { z, ZodError } from "zod";
import { BookingDocument } from "../../../../types";

const createBookingSchema = z.object({
  user: z.string(),
  talent: z.string(),
  bookingDate: z.date(),
  occasion: z.string(),
  package: z.string(),
  message: z.string(),
  status: z.string(),
  price: z.number(),
});

export const validateBookingInput = (data: BookingDocument) => {
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
