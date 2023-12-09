import { z, ZodError, TypeOf } from "zod";
import { UserDocument } from "../../../../types";

const registrationSchema = z.object({
  firstName: z.string().min(3).max(100),
  lastName: z.string().min(3).max(100),
  role: z.enum(["user", "talent"]).optional(),
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(7).max(100),
});


type RegistrationType = TypeOf<typeof registrationSchema>;

export const validateRegistrationInput = <RegistrationType>(data: UserDocument) => {
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


type LoginTypes = TypeOf<typeof loginSchema>;

export const validateLoginInput = <LoginTypes>(email: string, password: string) => {
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
