import { useMutation } from "react-query";
import { BookingData, createBooking } from "../queries/bookingQueries";

type Options = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

export function useCreateBooking(options: Options) {
  return useMutation(
    "createBooking",
    async (data: BookingData) => {
      const response = await createBooking(data);
      return response;
    },
    {
      onSuccess: () => {
        options.onSuccess && options.onSuccess();
      },
      onError: (error) => {
        options.onError && options.onError(error);
      },
    }
  );
}
