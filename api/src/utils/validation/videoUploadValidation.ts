import { z, ZodError } from "zod";
import { VideoDocument } from "../../../../types";

const videoSchema = z.object({
  booking: z.union([z.string(), z.objectId()]),
  talent: z.union([z.string(), z.objectId()]),
  videoUrl: z.string(),
  duration: z.union([z.string(), z.number()]), // Duration in seconds
  thubnail: z.string(),
  createdDate: z.date(),
});

export const validationVideoUpload = (data: VideoDocument) => {
  try {
    const validData = videoSchema.parse(data);
    return { isValid: true, data: validData };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, errors: error };
    }

    throw error;
  }
};
