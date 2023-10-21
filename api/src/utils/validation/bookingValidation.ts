import { z, ZodError, TypeOf } from "zod";
import { BookingDocument } from "../../../../types";

const createBookingSchema = z.object({
  user: z.string(),
  talent: z.string(),
  bookingDate: z.date(),
  occasion: z.string(),
  package: z.string(),
  message: z.string(),
  status: z.enum(["pending", "completed", "modification", "cancel"]),
  price: z.number(),
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
