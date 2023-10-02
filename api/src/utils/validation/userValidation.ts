import { z, ZodError } from "zod";
import { UserDocument } from "../../../../types";

const registrationSchema = z.object({
  firstName: z.string().min(3).max(100),
  lastName: z.string().min(3).max(100),
  email: z.string().email(),
  password: z.string().min(7).max(100),
});

export const validateRegistrationInput = (data: UserDocument) => {
  try {
    const validData = registrationSchema.parse(data);
    return { isValid: true, data: validData };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, errors: error.errors };
    } else {
      // Handle unexpected error (e.g., log or rethrow)
      throw error;
    }
  }
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(7),
});

export const validateLoginInput = (email: string, password: string) => {
  try {
    const validData = loginSchema.parse({ email, password });
    return { isValid: true, data: validData };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, errors: error.errors };
    } else {
      // Handle unexpected error (e.g., log or rethrow)
      throw error;
    }
  }
};
